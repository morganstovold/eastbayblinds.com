import React from "react";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';
import { getAdminSession, getProductsData } from "@/lib/admin-actions";
import BackButton from "@/components/BackButton";
import ProductsClientComponent from "@/components/ProductsClientComponent";

export default async function ProductsManagement() {
  // Check authentication server-side
  const user = await getAdminSession();

  if (!user) {
    redirect("/auth/signin");
  }

  // Fetch products data server-side
  const { products } = await getProductsData();

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
        <ProductsClientComponent initialProducts={products} />
      </main>
    </div>
  );
} 