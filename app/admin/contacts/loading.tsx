import { Card, CardContent } from "@/components/ui/card";
import BackButton from "@/components/BackButton";

export default function ContactsLoading() {
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
                  Contact Management
                </h1>
                <p className="text-sm text-gray-600 sm:hidden">
                  Manage contact submissions
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-600 hidden sm:block">
                Manage contact submissions
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        {/* Loading skeleton */}
        <div className="space-y-6">
          {/* Filters skeleton */}
          <Card className="animate-pulse">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="h-10 bg-gray-200 rounded flex-1" />
                <div className="h-10 bg-gray-200 rounded w-48" />
              </div>
            </CardContent>
          </Card>

          {/* Table skeleton */}
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
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
        </div>
      </main>
    </div>
  );
} 