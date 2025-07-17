'use client';

import React from 'react';
import { YelpReviewCard } from '@/components/TestimonialCard';
import { YelpPageData } from '@/lib/yelp-service';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

interface YelpReviewsSectionProps {
  initialData: YelpPageData;
}

export default function YelpReviewsSection({ initialData }: YelpReviewsSectionProps) {
  const { featuredReviews, businessStats, success, error } = initialData;

  if (!success && error) {
    console.warn('Yelp data fetch failed:', error);
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            {businessStats && (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(businessStats.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  {businessStats.rating}
                </span>
                <span className="text-gray-600">
                  ({businessStats.reviewCount} reviews)
                </span>
              </div>
            )}
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Don't just take our word for it - hear from satisfied customers
            across the East Bay
          </p>
          {businessStats && (
            <div className="flex justify-center">
              <a
                href={businessStats.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                View all reviews on Yelp
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <YelpReviewCard 
                review={review} 
                variant={index === 1 ? "featured" : "default"}
              />
            </motion.div>
          ))}
        </div>

        {/* Show cache status for development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Last Fetched: {new Date(initialData.timestamp).toLocaleString()}
              {!success && ' (using fallback data)'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
} 