import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Review } from "@/lib/types";

interface ReviewCardProps {
  review: Review;
  variant?: "default" | "featured";
}

// Helper function to get initials from name
const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

// Helper function to truncate text
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return { truncated: text, isTruncated: false };
  const truncated = text.slice(0, maxLength).trim() + "...";
  return { truncated, isTruncated: true };
};

// Helper function to format date
function formatDate(date: Date | null): string {
  if (!date) return "Recent";
  
  try {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "Recent";
  }
}

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      size={14}
      className={`${
        i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
      }`}
    />
  ));
};

export function ReviewCard({
  review,
  variant = "default",
}: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isFeatured = variant === "featured";

  // Set max length based on variant
  const maxLength = 180;
  const { truncated, isTruncated } = truncateText(review.text, maxLength);
  const displayText = isExpanded ? review.text : truncated;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card
        className={`h-full transition-all duration-300 hover:shadow-lg border-0 shadow-md ${
          isFeatured
            ? "bg-gradient-to-br from-primary/5 to-primary/10 border-l-4 border-l-primary"
            : "bg-white hover:shadow-xl"
        }`}
      >
        <CardContent>
          {/* Header with customer info and external link */}
          <div className="flex items-start justify-between mb-4">
            {/* Customer Info */}
            <div className="flex items-start gap-3 flex-1 min-w-0">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {getInitials(review.customerName)}
                  </span>
                </div>
              </div>

              {/* Customer Details */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-base truncate">
                  {review.customerName}
                </h4>
                {review.location && (
                  <p className="text-sm text-gray-600 truncate mb-2">
                    {review.location}
                  </p>
                )}
                {/* Rating under customer info */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <StarRating rating={review.rating} />
                  </div>
                  <span className="text-xs text-gray-500">
                    {formatDate(review.reviewDate || review.createdAt)}
                  </span>
                </div>
              </div>
            </div>

            {/* External Link Button */}
            <button className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors group">
              <ExternalLink 
                size={16} 
                className="text-gray-400 group-hover:text-gray-600 transition-colors" 
              />
            </button>
          </div>

          {/* Review Text */}
          <blockquote className="text-gray-700 text-sm leading-relaxed">
            <span className="text-gray-400 text-lg leading-none">"</span>
            {displayText}
            <span className="text-gray-400 text-lg leading-none">"</span>
            
            {isTruncated && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="block mt-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
              >
                {isExpanded ? "Show less" : "Show more"}
              </button>
            )}
          </blockquote>
        </CardContent>
      </Card>
    </motion.div>
  );
} 