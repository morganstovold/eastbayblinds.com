'use client';

import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Testimonial } from '@/lib/types';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'featured' | 'compact';
}

export default function TestimonialCard({ 
  testimonial, 
  variant = 'default' 
}: TestimonialCardProps) {
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';
  
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`group ${isFeatured ? 'scale-105' : ''}`}
    >
      <Card className={`h-full transition-all duration-300 hover:shadow-lg relative ${
        isFeatured ? 'border-brand-primary ring-2 ring-brand-primary/20' : ''
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
          <blockquote className={`${isCompact ? 'text-sm' : 'text-base'} text-gray-700 leading-relaxed italic`}>
            "{testimonial.comment}"
          </blockquote>
        </CardHeader>

        <CardContent className={`${isCompact ? 'p-4 pt-0' : 'p-6 pt-0'}`}>
          {/* Customer Info */}
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
              <div className="text-center text-gray-600">
                <div className="text-lg">👤</div>
                <div className="text-xs text-gray-500 mt-1">Avatar</div>
              </div>
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