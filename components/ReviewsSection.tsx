"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ReviewCard } from "./ReviewCard";
import { Review } from "@/lib/types";

interface ReviewsSectionProps {
  reviews: Review[];
  averageRating: number;
}

export default function ReviewsSection({
  reviews,
  averageRating,
}: ReviewsSectionProps) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>

          {/* Rating - Responsive positioning */}
          {averageRating > 0 && (
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < Math.round(averageRating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-lg font-semibold text-gray-900">
                  {averageRating.toFixed(1)} out of 5
                </span>
              </div>
            </div>
          )}

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from satisfied customers
            across the East Bay
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ReviewCard
                review={review}
                variant={index === 1 ? "featured" : "default"}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
