import React, { Suspense } from "react";
import { redirect } from "next/navigation";
import { getAdminSession, getAdminReviews } from "@/lib/admin-actions";
import { Card, CardContent } from "@/components/ui/card";
import ReviewsClientComponent from "@/components/ReviewsClientComponent";
import BackButton from "@/components/BackButton";

function ReviewsListSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <Card key={i} className="animate-pulse">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div className="flex items-start gap-3 min-w-0 flex-1">
                <div className="h-6 w-20 bg-gray-200 rounded" />
                <div className="min-w-0 flex-1">
                  <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                  <div className="h-3 w-24 bg-gray-200 rounded" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-16 bg-gray-200 rounded" />
                <div className="h-8 w-32 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="h-20 w-full bg-gray-200 rounded" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Reviews list component that fetches data server-side
async function ReviewsList() {
  const { reviews } = await getAdminReviews();
  return <ReviewsClientComponent initialReviews={reviews} />;
}

export default async function ReviewsManagement() {
  // Check authentication server-side
  const user = await getAdminSession();

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Always visible */}
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
        {/* Reviews List with Suspense - Only the reviews area shows loading */}
        <Suspense fallback={<ReviewsListSkeleton />}>
          <ReviewsList />
        </Suspense>
      </main>
    </div>
  );
}
