import React from "react";
import { redirect } from "next/navigation";

import { getAdminSession, getAdminReviews } from "@/lib/admin-actions";
import ReviewsClientComponent from "@/components/ReviewsClientComponent";
import BackButton from "@/components/BackButton";

// Force dynamic rendering for admin pages that require authentication  
export const dynamic = 'force-dynamic';

export default async function ReviewsManagement() {
  // Check authentication server-side
  const user = await getAdminSession();

  if (!user) {
    redirect("/auth/signin");
  }

  // Fetch reviews data server-side
  const { reviews } = await getAdminReviews();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <BackButton />
              <div>
                <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Customer Reviews
                </h1>
                <p className="text-sm text-gray-600 sm:hidden">
                  Manage customer reviews
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-600 hidden sm:block">
                Manage customer reviews
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <ReviewsClientComponent initialReviews={reviews} />
      </main>
    </div>
  );
}
