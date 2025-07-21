"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { contactSubmission, review } from "@/lib/db-schema";
import { desc, eq, gte, sql, or, ilike, and } from "drizzle-orm";
import { headers } from "next/headers";
import { unstable_cache, revalidateTag } from "next/cache";

// Verify admin authentication for all actions
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

// Server action to get contact form statistics
export const getContactStats = unstable_cache(
  async () => {
    try {
      // Get current date boundaries
      const now = new Date();
      const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const startOfWeek = new Date(startOfDay);
      startOfWeek.setDate(startOfDay.getDate() - startOfDay.getDay());

      // Get stats in parallel
      const [totalResult, todayResult, weekResult, unreadResult] = await Promise.all([
        // Total contacts
        db.select({ count: sql<number>`count(*)` }).from(contactSubmission),
        
        // Today's contacts  
        db.select({ count: sql<number>`count(*)` })
          .from(contactSubmission)
          .where(gte(contactSubmission.createdAt, startOfDay)),
          
        // This week's contacts
        db.select({ count: sql<number>`count(*)` })
          .from(contactSubmission)
          .where(gte(contactSubmission.createdAt, startOfWeek)),
          
        // Unread contacts (new status)
        db.select({ count: sql<number>`count(*)` })
          .from(contactSubmission)
          .where(eq(contactSubmission.status, "new"))
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

// Server action to get contact submissions with pagination and filtering
export async function getContactSubmissions({
  page = 1,
  limit = 20,
  status,
  search
}: {
  page?: number;
  limit?: number;
  status?: string;
  search?: string;
} = {}) {
  try {
    await verifyAdmin();

    // Validate and sanitize parameters
    const validatedPage = Math.max(1, page);
    const validatedLimit = Math.min(50, Math.max(10, limit));

    const conditions = [];

    // Status filter
    if (status && ["new", "viewed", "responded", "closed"].includes(status)) {
      conditions.push(eq(contactSubmission.status, status));
    }

    // Search filter
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

    const whereCondition = conditions.length > 0
      ? conditions.length === 1
        ? conditions[0]
        : and(...conditions)
      : undefined;

    // Get total count for pagination
    const totalResult = await db
      .select({ count: sql`count(*)` })
      .from(contactSubmission)
      .where(whereCondition);

    const total = Number(totalResult[0]?.count || 0);

    // Get submissions with pagination
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
      error: error instanceof Error ? error.message : "Failed to fetch contact submissions",
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

// Server action to update contact submission status
export async function updateContactSubmissionStatus(id: string, status: string) {
  try {
    await verifyAdmin();

    // Validate status
    if (!status || !["new", "viewed", "responded", "closed"].includes(status)) {
      return {
        success: false,
        error: "Invalid status"
      };
    }

    if (!id) {
      return {
        success: false,
        error: "Submission ID is required"
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
        error: "Submission not found"
      };
    }

    // Revalidate contact stats
    revalidateTag("contact-stats");
    revalidateTag("contact-submissions");

    return { 
      success: true, 
      submission: updated[0] 
    };
  } catch (error) {
    console.error("Error updating submission status:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update submission status"
    };
  }
}

// Server action to get review statistics  
export const getReviewStats = unstable_cache(
  async () => {
    try {
      const [totalResult, activeResult, featuredResult] = await Promise.all([
        // Total reviews
        db.select({ count: sql<number>`count(*)` }).from(review),
        
        // Active reviews
        db.select({ count: sql<number>`count(*)` })
          .from(review)
          .where(eq(review.isActive, true)),
          
        // Featured reviews
        db.select({ count: sql<number>`count(*)` })
          .from(review)
          .where(eq(review.isFeatured, true))
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
    revalidate: 300, // 5 minutes
  }
);

// Server action to verify admin session
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

// Server action to get all reviews for admin (with caching)
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
    revalidate: 60, // 1 minute for admin data
  }
); 