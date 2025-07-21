'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Service } from '@/lib/types';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Users, Wrench, Settings, Palette, CreditCard } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'featured' | 'compact';
  showAllFeatures?: boolean;
}

const iconMap = {
  Users,
  Wrench,
  Settings,
  Palette,
  CreditCard
};

export default function ServiceCard({ 
  service, 
  variant = 'default', 
  showAllFeatures = false 
}: ServiceCardProps) {
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';
  
  // Get the icon component
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Users;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`group ${isFeatured ? 'scale-105' : ''}`}
    >
      <Card className={`h-full transition-all duration-300 hover:shadow-lg p-0 ${
        isFeatured ? 'border-brand-primary ring-2 ring-brand-primary/20' : ''
      }`}>
        <CardHeader className={`${isCompact ? 'p-4' : 'p-6'} text-center`}>
          {/* Service Icon */}
          <div className="mx-auto mb-4 p-4 bg-gray-50 rounded-full w-fit">
            <IconComponent className="h-8 w-8 text-primary" />
          </div>
          
          <CardTitle className={`${isCompact ? 'text-lg' : 'text-xl'} font-semibold text-gray-900 group-hover:text-primary transition-colors`}>
            {service.title}
          </CardTitle>
          
          <p className={`text-gray-600 ${isCompact ? 'text-sm' : 'text-base'} leading-relaxed`}>
            {service.description}
          </p>
        </CardHeader>

        <CardContent className={`${isCompact ? 'p-4 pt-0' : 'p-6 pt-0'} space-y-4`}>
          {/* Features List */}
          {service.features && service.features.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900 text-sm">What's Included:</h4>
              <ul className="space-y-2">
                {(showAllFeatures ? service.features : service.features.slice(0, 4)).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {!showAllFeatures && service.features.length > 4 && (
                <p className="text-sm text-primary font-medium">
                  +{service.features.length - 4} more benefits
                </p>
              )}
            </div>
          )}

          {/* CTA Button */}
          <div className="pt-2">
            <Button 
              asChild 
              size={isCompact ? "sm" : "default"}
              className="w-full"
            >
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 