import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ReviewsLoading() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header Skeleton */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Title skeleton */}
          <div className="h-8 sm:h-10 md:h-12 w-80 mx-auto bg-gray-200 rounded-lg animate-pulse mb-4"></div>
          
          {/* Rating skeleton */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
            <div className="w-24 h-5 bg-gray-200 rounded animate-pulse ml-2"></div>
          </div>

          {/* Description skeleton */}
          <div className="h-5 sm:h-6 w-96 mx-auto bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Reviews Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Array.from({ length: 6 }, (_, index) => (
            <Card key={index} className="h-full bg-white shadow-md animate-pulse">
              <CardContent className="p-6">
                {/* Header skeleton */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3 flex-1">
                    {/* Avatar skeleton */}
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    
                    {/* Customer details skeleton */}
                    <div className="flex-1">
                      <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 w-24 bg-gray-200 rounded mb-2"></div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <div key={i} className="w-3.5 h-3.5 bg-gray-200 rounded"></div>
                          ))}
                        </div>
                        <div className="w-16 h-3 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* External link button skeleton */}
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                </div>

                {/* Review text skeleton */}
                <div className="space-y-2">
                  <div className="h-3 w-full bg-gray-200 rounded"></div>
                  <div className="h-3 w-full bg-gray-200 rounded"></div>
                  <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 