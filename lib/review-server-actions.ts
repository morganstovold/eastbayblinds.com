"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { review } from "@/lib/db-schema";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { headers } from "next/headers";

// Verify admin authentication for all actions
async function verifyAdmin() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      redirect("/auth/signin");
    }

    return session.user;
  } catch (error) {
    console.error("Authentication error:", error);
    redirect("/auth/signin");
  }
}

// Server action to create a new review
export async function createReview(formData: FormData) {
  await verifyAdmin();

  const customerName = formData.get("customerName") as string;
  const rating = parseInt(formData.get("rating") as string);
  const text = formData.get("text") as string;
  const location = (formData.get("location") as string) || null;
  const reviewDate = new Date(formData.get("reviewDate") as string);
  const isFeatured = formData.get("isFeatured") === "true";

  if (!customerName || !text || isNaN(rating) || rating < 1 || rating > 5) {
    throw new Error("Invalid form data");
  }

  try {
    const newReview = {
      id: nanoid(),
      customerName,
      rating,
      text,
      location,
      reviewDate,
      isFeatured,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await db.insert(review).values(newReview);

    // Revalidate caches
    revalidateTag("reviews");
    revalidateTag("admin-reviews");
    revalidateTag("review-stats");

    return { success: true, review: newReview };
  } catch (error) {
    console.error("Error creating review:", error);
    throw new Error("Failed to create review");
  }
}

// Server action to update an existing review
export async function updateReview(formData: FormData) {
  await verifyAdmin();

  const id = formData.get("id") as string;
  const customerName = formData.get("customerName") as string;
  const rating = parseInt(formData.get("rating") as string);
  const text = formData.get("text") as string;
  const location = (formData.get("location") as string) || null;
  const reviewDate = new Date(formData.get("reviewDate") as string);
  const isFeatured = formData.get("isFeatured") === "true";

  if (
    !id ||
    !customerName ||
    !text ||
    isNaN(rating) ||
    rating < 1 ||
    rating > 5
  ) {
    throw new Error("Invalid form data");
  }

  try {
    const updatedReview = await db
      .update(review)
      .set({
        customerName,
        rating,
        text,
        location,
        reviewDate,
        isFeatured,
        updatedAt: new Date(),
      })
      .where(eq(review.id, id))
      .returning();

    if (updatedReview.length === 0) {
      throw new Error("Review not found");
    }

    // Revalidate caches
    revalidateTag("reviews");
    revalidateTag("admin-reviews");
    revalidateTag("review-stats");

    return { success: true, review: updatedReview[0] };
  } catch (error) {
    console.error("Error updating review:", error);
    throw new Error("Failed to update review");
  }
}

// Server action to delete a review
export async function deleteReview(formData: FormData) {
  await verifyAdmin();

  const id = formData.get("id") as string;

  if (!id) {
    throw new Error("Review ID is required");
  }

  try {
    const deletedReview = await db
      .delete(review)
      .where(eq(review.id, id))
      .returning();

    if (deletedReview.length === 0) {
      throw new Error("Review not found");
    }

    // Revalidate caches
    revalidateTag("reviews");
    revalidateTag("admin-reviews");
    revalidateTag("review-stats");

    return { success: true };
  } catch (error) {
    console.error("Error deleting review:", error);
    throw new Error("Failed to delete review");
  }
}

// Server action to toggle review status (active/inactive or featured/unfeatured)
export async function toggleReviewStatus(formData: FormData) {
  await verifyAdmin();

  const id = formData.get("id") as string;
  const field = formData.get("field") as "isActive" | "isFeatured";
  const value = formData.get("value") === "true";

  if (!id || !field || (field !== "isActive" && field !== "isFeatured")) {
    throw new Error("Invalid parameters");
  }

  try {
    const updateData: any = {
      updatedAt: new Date(),
    };
    updateData[field] = value;

    const updatedReview = await db
      .update(review)
      .set(updateData)
      .where(eq(review.id, id))
      .returning();

    if (updatedReview.length === 0) {
      throw new Error("Review not found");
    }

    // Revalidate caches
    revalidateTag("reviews");
    revalidateTag("admin-reviews");
    revalidateTag("review-stats");

    return { success: true, review: updatedReview[0] };
  } catch (error) {
    console.error("Error toggling review status:", error);
    throw new Error("Failed to update review status");
  }
}
