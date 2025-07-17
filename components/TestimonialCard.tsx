'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Testimonial, YelpReview } from '@/lib/types';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface YelpReviewCardProps {
  review: YelpReview;
  variant?: 'default' | 'featured' | 'compact';
  showYelpBranding?: boolean;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'featured' | 'compact';
}

function formatYelpDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return 'Recent';
  }
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function truncateText(text: string, maxLength: number): { truncated: string; isTruncated: boolean } {
  if (text.length <= maxLength) {
    return { truncated: text, isTruncated: false };
  }
  
  // Find the last space before the max length to avoid cutting words
  const lastSpace = text.lastIndexOf(' ', maxLength);
  const cutIndex = lastSpace > 0 ? lastSpace : maxLength;
  
  return { 
    truncated: text.substring(0, cutIndex), 
    isTruncated: true 
  };
}

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${
        i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
      }`}
    />
  ));
};

export function YelpReviewCard({ 
  review, 
  variant = 'default',
  showYelpBranding = true 
}: YelpReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';
  
  // Set max length based on variant
  const maxLength = isCompact ? 120 : 200;
  const { truncated, isTruncated } = truncateText(review.text, maxLength);
  const displayText = isExpanded ? review.text : truncated;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`group ${isFeatured ? 'scale-105' : ''}`}
    >
      <Card className={`h-full transition-all duration-300 hover:shadow-lg relative ${
        isFeatured ? 'border-primary ring-2 ring-primary/20' : ''
      }`}>
        {/* Yelp Branding */}
        {showYelpBranding && (
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="text-xs font-bold text-red-600">yelp</span>
            <ExternalLink className="h-3 w-3 text-gray-400" />
          </div>
        )}

        <CardHeader className={`${isCompact ? 'p-4' : 'p-6'} pb-3`}>
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              {renderStars(review.rating)}
            </div>
            <span className="text-sm text-gray-600 font-medium">
              {review.rating}.0
            </span>
          </div>

          {/* Review Text */}
          <div className={`${isCompact ? 'text-sm' : 'text-base'} text-gray-700 leading-relaxed`}>
            <blockquote>
              "{displayText}
              {isTruncated && !isExpanded && '...'}
              {isTruncated && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-primary hover:underline ml-1 font-medium text-sm"
                >
                  {isExpanded ? 'Show less' : 'Show more'}
                </button>
              )}
              "
            </blockquote>
          </div>
        </CardHeader>

        <CardContent className={`${isCompact ? 'p-4 pt-0' : 'p-6 pt-0'}`}>
          {/* Customer Info */}
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="relative">
              {review.user.image_url && review.user.image_url.includes('placeholder') ? (
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold text-sm">
                    {getInitials(review.user.name)}
                  </span>
                </div>
              ) : (
                <Image
                  src={review.user.image_url}
                  alt={`${review.user.name} avatar`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
              )}
            </div>

            {/* Customer Details */}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-gray-900 text-sm">
                  {review.user.name}
                </h4>
                {showYelpBranding && (
                  <a
                    href={review.user.profile_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    View Profile
                  </a>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {formatYelpDate(review.time_created)}
              </p>
              {showYelpBranding && (
                <a
                  href={review.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline inline-flex items-center gap-1 mt-1"
                >
                  Read on Yelp
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Legacy testimonial card for backward compatibility
export default function TestimonialCard({ 
  testimonial, 
  variant = 'default' 
}: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';
  
  // Set max length based on variant
  const maxLength = isCompact ? 120 : 200;
  const { truncated, isTruncated } = truncateText(testimonial.comment, maxLength);
  const displayText = isExpanded ? testimonial.comment : truncated;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`group ${isFeatured ? 'scale-105' : ''}`}
    >
      <Card className={`h-full transition-all duration-300 hover:shadow-lg relative ${
        isFeatured ? 'border-primary ring-2 ring-primary/20' : ''
      }`}>
        {/* Quote Icon */}
        <div className="absolute top-4 right-4 opacity-10">
          <Quote className="h-8 w-8 text-primary" />
        </div>

        <CardHeader className={`${isCompact ? 'p-4' : 'p-6'}`}>
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              {renderStars(testimonial.rating)}
            </div>
            <span className="text-sm text-gray-600 font-medium">
              {testimonial.rating}.0
            </span>
          </div>

          {/* Testimonial Text */}
          <div className={`${isCompact ? 'text-sm' : 'text-base'} text-gray-700 leading-relaxed italic`}>
            <blockquote>
              "{displayText}
              {isTruncated && !isExpanded && '...'}
              {isTruncated && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-primary hover:underline ml-1 font-medium text-sm not-italic"
                >
                  {isExpanded ? 'Show less' : 'Show more'}
                </button>
              )}
              "
            </blockquote>
          </div>
        </CardHeader>

        <CardContent className={`${isCompact ? 'p-4 pt-0' : 'p-6 pt-0'}`}>
          {/* Customer Info */}
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-semibold text-sm">
                {getInitials(testimonial.name)}
              </span>
            </div>

            {/* Customer Details */}
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm">
                {testimonial.name}
              </h4>
              <p className="text-xs text-gray-600">
                {testimonial.location}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(testimonial.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 