'use client';

import React from 'react';
import { YelpReviewCard } from '@/components/YelpReviewCard';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
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
          {/* Mobile-first responsive header */}
          <div className="space-y-4 mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            
            {businessStats && (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${
                          i < Math.floor(businessStats.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-base sm:text-lg font-semibold text-gray-900">
                    {businessStats.rating}
                  </span>
                </div>
                <span className="text-sm sm:text-base text-gray-600">
                  ({businessStats.reviewCount} reviews)
                </span>
              </div>
            )}
          </div>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Don't just take our word for it - hear from satisfied customers
            across the East Bay
          </p>
          
          {businessStats && (
            <div className="flex justify-center">
              <a
                href={businessStats.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm sm:text-base"
              >
                View all reviews on Yelp
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
              Data fetched: {new Date(initialData.timestamp).toLocaleString()}
              {!success && ' (using fallback data)'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
} 