"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { YelpReview } from "@/lib/types";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import Image from "next/image";

interface YelpReviewCardProps {
  review: YelpReview;
  variant?: "default" | "featured";
}

function formatYelpDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "Recent";
  }
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function truncateText(
  text: string,
  maxLength: number
): { truncated: string; isTruncated: boolean } {
  if (text.length <= maxLength) {
    return { truncated: text, isTruncated: false };
  }

  // Find the last space before the max length to avoid cutting words
  const lastSpace = text.lastIndexOf(" ", maxLength);
  const cutIndex = lastSpace > 0 ? lastSpace : maxLength;

  return {
    truncated: text.substring(0, cutIndex),
    isTruncated: true,
  };
}

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-3 w-3 sm:h-4 sm:w-4 ${
        i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
      }`}
    />
  ));
};

export function YelpReviewCard({
  review,
  variant = "default",
}: YelpReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isFeatured = variant === "featured";

  // Set max length based on variant and screen size
  const maxLength = 150;
  const { truncated, isTruncated } = truncateText(review.text, maxLength);
  const displayText = isExpanded ? review.text : truncated;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
      className={`group h-full ${isFeatured ? "scale-105" : ""}`}
    >
      <Card
        className={`h-full transition-all duration-300 hover:shadow-lg relative ${
          isFeatured ? "border-primary ring-2 ring-primary/20" : ""
        }`}
      >
        <CardHeader className={`px-4 sm:px-6 pb-2 sm:pb-3`}>
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <div className="flex items-center gap-0.5 sm:gap-1">
              {renderStars(review.rating)}
            </div>
            <span className="text-xs sm:text-sm text-gray-600 font-medium">
              {review.rating}.0
            </span>

            <div className="ml-auto flex items-center gap-1 sm:gap-2">
              <span className="text-xs font-bold text-red-600">yelp</span>
              <ExternalLink className="h-2 w-2 sm:h-3 sm:w-3 text-gray-400" />
            </div>
          </div>

          {/* Review Text */}
          <div
            className={`${"text-sm sm:text-base"} text-gray-700 leading-relaxed`}
          >
            <blockquote className="relative">
              "{displayText}
              {isTruncated && !isExpanded && "..."}
              {isTruncated && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-primary hover:underline ml-1 font-medium text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
                >
                  {isExpanded ? "Show less" : "Show more"}
                </button>
              )}
              "
            </blockquote>
          </div>
        </CardHeader>

        <CardContent className={` pt-0`}>
          {/* Customer Info */}
          <div className="flex items-start gap-2 sm:gap-3">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              {review.user.image_url &&
              review.user.image_url.includes("placeholder") ? (
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-xs sm:text-sm">
                    {getInitials(review.user.name)}
                  </span>
                </div>
              ) : (
                <Image
                  src={review.user.image_url}
                  alt={`${review.user.name} avatar`}
                  width={48}
                  height={48}
                  className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover"
                />
              )}
            </div>

            {/* Customer Details */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm truncate">
                  {review.user.name}
                </h4>
                <a
                  href={review.user.profile_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline flex-shrink-0 hidden sm:inline"
                >
                  View Profile
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-0.5 sm:mt-1">
                {formatYelpDate(review.time_created)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Export as default for backward compatibility
export default YelpReviewCard;
