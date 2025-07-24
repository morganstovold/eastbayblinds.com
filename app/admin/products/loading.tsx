import { Card } from "@/components/ui/card";
import BackButton from "@/components/BackButton";

export default function ProductsLoading() {
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
                  Product Configuration
                </h1>
                <p className="text-sm text-gray-600 sm:hidden">
                  Configure product marketing copy
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-600 hidden sm:block">
                Configure product marketing copy
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        {/* Header with Add button skeleton */}
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Table skeleton */}
        <Card className="animate-pulse">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3">
                    <div className="h-4 w-16 bg-gray-200 rounded" />
                  </th>
                  <th className="px-4 py-3">
                    <div className="h-4 w-20 bg-gray-200 rounded" />
                  </th>
                  <th className="px-4 py-3">
                    <div className="h-4 w-20 bg-gray-200 rounded" />
                  </th>
                  <th className="px-4 py-3">
                    <div className="h-4 w-16 bg-gray-200 rounded" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(8)].map((_, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-4 py-3">
                      <div className="h-4 w-32 bg-gray-200 rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <div className="h-4 w-20 bg-gray-200 rounded" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="h-4 w-8 bg-gray-200 rounded mx-auto" />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex gap-2 justify-center">
                        <div className="h-8 w-16 bg-gray-200 rounded" />
                        <div className="h-8 w-16 bg-gray-200 rounded" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
    </div>
  );
} 