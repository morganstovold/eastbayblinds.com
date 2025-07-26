"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import {
  contactSubmission,
  review,
  productConfig as productConfigTable,
  ProductConfig,
} from "@/lib/db-schema";
import {
  staticProducts,
  ConfigurableProduct,
  getStaticProductById,
} from "@/lib/static-products";
import { desc, eq, gte, sql, or, ilike, and } from "drizzle-orm";
import { headers } from "next/headers";
import { unstable_cache, revalidateTag } from "next/cache";

const PRODUCTS_CACHE_TAG = "products";

interface ProductConfigInput {
  name?: string;
  description?: string;
  features?: string[];
  isFeatured?: boolean;
}

interface ProductConfigUpdateInput {
  name?: string;
  description?: string;
  features?: string[];
  isFeatured?: boolean;
}

async function verifyAdmin() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      throw new Error("Unauthorized");
    }

    return session.user;
  } catch (error) {
    console.error("Authentication error:", error);
    throw new Error("Unauthorized");
  }
}

export const getContactStats = unstable_cache(
  async () => {
    try {
      const now = new Date();
      const startOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );
      const startOfWeek = new Date(startOfDay);
      startOfWeek.setDate(startOfDay.getDate() - startOfDay.getDay());

      const [totalResult, todayResult, weekResult, unreadResult] =
        await Promise.all([
          db.select({ count: sql<number>`count(*)` }).from(contactSubmission),

          db
            .select({ count: sql<number>`count(*)` })
            .from(contactSubmission)
            .where(gte(contactSubmission.createdAt, startOfDay)),

          db
            .select({ count: sql<number>`count(*)` })
            .from(contactSubmission)
            .where(gte(contactSubmission.createdAt, startOfWeek)),

          db
            .select({ count: sql<number>`count(*)` })
            .from(contactSubmission)
            .where(eq(contactSubmission.status, "new")),
        ]);

      return {
        totalContacts: totalResult[0]?.count || 0,
        todayContacts: todayResult[0]?.count || 0,
        weekContacts: weekResult[0]?.count || 0,
        unreadContacts: unreadResult[0]?.count || 0,
      };
    } catch (error) {
      console.error("Error fetching contact stats:", error);
      return {
        totalContacts: 0,
        todayContacts: 0,
        weekContacts: 0,
        unreadContacts: 0,
      };
    }
  },
  ["contact-stats"],
  {
    tags: ["contact-stats"],
    revalidate: 300, // 5 minutes
  }
);

export async function getContactSubmissions({
  page = 1,
  limit = 20,
  status,
  search,
}: {
  page?: number;
  limit?: number;
  status?: string;
  search?: string;
} = {}) {
  try {
    await verifyAdmin();

    const validatedPage = Math.max(1, page);
    const validatedLimit = Math.min(50, Math.max(10, limit));

    const conditions = [];

    if (status && ["new", "viewed", "responded", "closed"].includes(status)) {
      conditions.push(eq(contactSubmission.status, status));
    }

    if (search && search.trim()) {
      const searchTerm = `%${search.trim().toLowerCase()}%`;
      conditions.push(
        or(
          ilike(contactSubmission.firstName, searchTerm),
          ilike(contactSubmission.lastName, searchTerm),
          ilike(contactSubmission.email, searchTerm),
          ilike(contactSubmission.phone, searchTerm),
          ilike(contactSubmission.zipCode, searchTerm),
          ilike(
            sql`concat(${contactSubmission.firstName}, ' ', ${contactSubmission.lastName})`,
            searchTerm
          )
        )
      );
    }

    const whereCondition =
      conditions.length > 0
        ? conditions.length === 1
          ? conditions[0]
          : and(...conditions)
        : undefined;

    const totalResult = await db
      .select({ count: sql`count(*)` })
      .from(contactSubmission)
      .where(whereCondition);

    const total = Number(totalResult[0]?.count || 0);

    const offset = (validatedPage - 1) * validatedLimit;
    const submissions = await db
      .select()
      .from(contactSubmission)
      .where(whereCondition)
      .orderBy(desc(contactSubmission.createdAt))
      .limit(validatedLimit)
      .offset(offset);

    return {
      success: true,
      submissions,
      pagination: {
        page: validatedPage,
        limit: validatedLimit,
        total,
        pages: Math.ceil(total / validatedLimit),
        hasMore: validatedPage * validatedLimit < total,
      },
    };
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch contact submissions",
      submissions: [],
      pagination: {
        page: 1,
        limit: 20,
        total: 0,
        pages: 0,
        hasMore: false,
      },
    };
  }
}

export const getAdminContactSubmissions = unstable_cache(
  async () => {
    try {
      const submissions = await db
        .select()
        .from(contactSubmission)
        .orderBy(desc(contactSubmission.createdAt));

      return { submissions };
    } catch (error) {
      console.error("Error fetching admin contact submissions:", error);
      return { submissions: [] };
    }
  },
  ["admin-contact-submissions"],
  {
    tags: ["admin-contact-submissions", "contact-stats"],
    revalidate: 60, // 1 minute for admin data
  }
);

export async function updateContactSubmissionStatus(
  id: string,
  status: string
) {
  try {
    await verifyAdmin();

    if (!status || !["new", "viewed", "responded", "closed"].includes(status)) {
      return {
        success: false,
        error: "Invalid status",
      };
    }

    if (!id) {
      return {
        success: false,
        error: "Submission ID is required",
      };
    }

    const updated = await db
      .update(contactSubmission)
      .set({
        status,
        updatedAt: new Date(),
      })
      .where(eq(contactSubmission.id, id))
      .returning();

    if (updated.length === 0) {
      return {
        success: false,
        error: "Submission not found",
      };
    }

    revalidateTag("contact-stats");
    revalidateTag("contact-submissions");
    revalidateTag("admin-contact-submissions");

    return {
      success: true,
      submission: updated[0],
    };
  } catch (error) {
    console.error("Error updating submission status:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to update submission status",
    };
  }
}

export const getReviewStats = unstable_cache(
  async () => {
    try {
      const [totalResult, activeResult, featuredResult] = await Promise.all([
        db.select({ count: sql<number>`count(*)` }).from(review),

        db
          .select({ count: sql<number>`count(*)` })
          .from(review)
          .where(eq(review.isActive, true)),

        db
          .select({ count: sql<number>`count(*)` })
          .from(review)
          .where(eq(review.isFeatured, true)),
      ]);

      return {
        totalReviews: totalResult[0]?.count || 0,
        activeReviews: activeResult[0]?.count || 0,
        featuredReviews: featuredResult[0]?.count || 0,
      };
    } catch (error) {
      console.error("Error fetching review stats:", error);
      return {
        totalReviews: 0,
        activeReviews: 0,
        featuredReviews: 0,
      };
    }
  },
  ["review-stats"],
  {
    tags: ["review-stats"],
    revalidate: 300,
  }
);

export const getAdminSession = async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    return session?.user || null;
  } catch (error) {
    console.error("Error getting admin session:", error);
    return null;
  }
};

export const getAdminReviews = unstable_cache(
  async () => {
    try {
      const reviews = await db
        .select()
        .from(review)
        .orderBy(desc(review.createdAt));

      return { reviews };
    } catch (error) {
      console.error("Error fetching admin reviews:", error);
      return { reviews: [] };
    }
  },
  ["admin-reviews"],
  {
    tags: ["admin-reviews"],
    revalidate: 60,
  }
);

function mergeProductWithConfig(
  staticProduct: any,
  config: ProductConfig | null
): ConfigurableProduct {
  return {
    ...staticProduct,
    name: config?.name ?? staticProduct.defaultName,
    description: config?.description ?? staticProduct.defaultDescription,
    features: config?.features ?? staticProduct.defaultFeatures,
    isFeatured: config?.isFeatured ?? staticProduct.defaultIsFeatured,
  };
}

export const getProductsData = unstable_cache(
  async () => {
    try {
      const configs = await db.select().from(productConfigTable);

      const configMap = new Map(configs.map((config) => [config.id, config]));

      const products: ConfigurableProduct[] = staticProducts.map(
        (staticProduct) => {
          const config = configMap.get(staticProduct.id) || null;
          return mergeProductWithConfig(staticProduct, config);
        }
      );


      const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 3);

      return { products, featuredProducts };
    } catch (error) {
      console.error("Error fetching products:", error);
      return { products: [], featuredProducts: [] };
    }
  },
  [PRODUCTS_CACHE_TAG],
  {
    tags: [PRODUCTS_CACHE_TAG],
    revalidate: 3600,
  }
);

export async function updateProductConfig(
  productId: string,
  data: ProductConfigInput
) {
  await verifyAdmin();

  const staticProduct = getStaticProductById(productId);
  if (!staticProduct) {
    return { success: false, error: "Product not found." };
  }

  if (data.isFeatured) {
    const { products } = await getProductsData();
    const currentlyFeatured = products.filter(
      (p) => p.isFeatured && p.id !== productId
    );
    if (currentlyFeatured.length >= 3) {
      return { success: false, error: "Only 3 products can be featured." };
    }
  }

  try {
    const existingConfig = await db
      .select()
      .from(productConfigTable)
      .where(eq(productConfigTable.id, productId));

    const configData = {
      ...data,
      features: Array.isArray(data.features) ? data.features : undefined,
      updatedAt: new Date(),
    };

    if (existingConfig.length > 0) {
      await db
        .update(productConfigTable)
        .set(configData)
        .where(eq(productConfigTable.id, productId));
    } else {
      await db.insert(productConfigTable).values({
        id: productId,
        ...configData,
        createdAt: new Date(),
      });
    }

    revalidateTag(PRODUCTS_CACHE_TAG);

    const updatedConfig = await db
      .select()
      .from(productConfigTable)
      .where(eq(productConfigTable.id, productId));

    const mergedProduct = mergeProductWithConfig(
      staticProduct,
      updatedConfig[0] || null
    );
    return { success: true, product: mergedProduct };
  } catch (error) {
    console.error("Error updating product configuration:", error);
    return { success: false, error: "Failed to update product configuration." };
  }
}

export async function updateProduct(
  id: string,
  data: ProductConfigUpdateInput
) {
  return updateProductConfig(id, data);
}

export async function addProduct(data: ProductConfigInput & { id?: string }) {
  if (!data.id) {
    return { success: false, error: "Product ID is required." };
  }
  return updateProductConfig(data.id, data);
}

export async function resetProductConfig(id: string) {
  try {
    await verifyAdmin();

    const staticProduct = getStaticProductById(id);
    if (!staticProduct) {
      return { success: false, error: "Product not found." };
    }

    await db.delete(productConfigTable).where(eq(productConfigTable.id, id));
    revalidateTag(PRODUCTS_CACHE_TAG);
    return { success: true };
  } catch (error) {
    console.error("Error resetting product configuration:", error);
    return { success: false, error: "Failed to reset product configuration" };
  }
}

export async function deleteProduct(id: string) {
  return resetProductConfig(id);
}
