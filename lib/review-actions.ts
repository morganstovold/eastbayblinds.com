"use server";

import { db } from "@/lib/db";
import { review } from "@/lib/db-schema";
import { desc, eq } from "drizzle-orm";
import { unstable_cache, revalidateTag } from "next/cache";

const REVIEWS_CACHE_TAG = "reviews";

export const getReviewsData = unstable_cache(
  async () => {
    try {
      // Get all active reviews
      const reviews = await db
        .select()
        .from(review)
        .where(eq(review.isActive, true))
        .orderBy(desc(review.createdAt));

      // Get featured reviews (limit to 6 for homepage)
      const featuredReviews = reviews
        .filter(r => r.isFeatured)
        .slice(0, 6);

      // Calculate average rating
      const averageRating = reviews.length > 0
        ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        : 0;

              return {
          featuredReviews,
          allReviews: reviews,
          averageRating: Math.round(averageRating * 10) / 10,
        };
    } catch (error) {
      console.error("Error fetching reviews:", error);
      return {
        featuredReviews: [],
        allReviews: [],
        averageRating: 0,
      };
    }
  },
  [REVIEWS_CACHE_TAG],
  {
    tags: [REVIEWS_CACHE_TAG],
    revalidate: 3600 // Cache for 1 hour
  }
);

export async function revalidateReviews() {
  revalidateTag(REVIEWS_CACHE_TAG);
} 