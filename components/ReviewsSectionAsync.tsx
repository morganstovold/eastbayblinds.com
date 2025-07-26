import React from "react";
import { getReviewsData } from "@/lib/review-actions";
import ReviewsSection from "./ReviewsSection";

// Server component that fetches reviews data
export default async function ReviewsSectionAsync() {
  const reviewsData = await getReviewsData();
  
  return (
    <ReviewsSection 
      reviews={reviewsData.featuredReviews}
      averageRating={4.9}
    />
  );
} 