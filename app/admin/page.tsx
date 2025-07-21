import React, { Suspense } from "react";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MessageSquare,
  BarChart3,
  Calendar,
  AlertCircle,
  Star,
} from "lucide-react";
import { businessInfo } from "@/lib/data";
import Link from "next/link";
import { getAdminSession, getContactStats, getReviewStats } from "@/lib/admin-actions";
import AdminSignOutButton from "@/components/AdminSignOutButton";

// Loading components for Suspense boundaries
function StatsCardSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
      </CardHeader>
      <CardContent>
        <div className="h-8 w-16 bg-gray-200 rounded animate-pulse mb-1" />
        <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
      </CardContent>
    </Card>
  );
}

function ManagementCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
        <div className="h-10 w-full bg-gray-200 rounded animate-pulse mt-4" />
      </CardContent>
    </Card>
  );
}

// Stats components that fetch data
async function ContactStatsCards() {
  const stats = await getContactStats();
  
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalContacts}</div>
          <p className="text-xs text-muted-foreground">All submissions</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">This Week</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.weekContacts}</div>
          <p className="text-xs text-muted-foreground">New submissions</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Today</CardTitle>
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.todayContacts}</div>
          <p className="text-xs text-muted-foreground">Today's inquiries</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Unread</CardTitle>
          <AlertCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-orange-600">{stats.unreadContacts}</div>
          <p className="text-xs text-muted-foreground">Need attention</p>
        </CardContent>
      </Card>
    </>
  );
}

async function ManagementCards() {
  const [contactStats, reviewStats] = await Promise.all([
    getContactStats(),
    getReviewStats()
  ]);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Contact Management
          </CardTitle>
          <CardDescription>
            View and manage customer inquiries from the website contact form.
            {contactStats.unreadContacts > 0 && (
              <span className="inline-flex items-center gap-1 ml-2 text-orange-600 font-medium">
                <AlertCircle className="h-3 w-3" />
                {contactStats.unreadContacts} unread
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total submissions:</span>
            <span className="font-medium">{contactStats.totalContacts}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">This week:</span>
            <span className="font-medium">{contactStats.weekContacts}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Today:</span>
            <span className="font-medium">{contactStats.todayContacts}</span>
          </div>
          <Link
            href="/admin/contacts"
            className={buttonVariants({ className: "w-full mt-4" })}
          >
            Manage Contact Forms
            {contactStats.unreadContacts > 0 && (
              <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                {contactStats.unreadContacts}
              </span>
            )}
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Reviews Management
          </CardTitle>
          <CardDescription>
            Add, edit, and manage customer reviews displayed on the homepage.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total reviews:</span>
            <span className="font-medium">{reviewStats.totalReviews}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Active reviews:</span>
            <span className="font-medium">{reviewStats.activeReviews}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Featured:</span>
            <span className="font-medium">{reviewStats.featuredReviews}</span>
          </div>
          <Link
            href="/admin/reviews"
            className={buttonVariants({ className: "w-full mt-4" })}
          >
            Manage Reviews
          </Link>
        </CardContent>
      </Card>
    </>
  );
}

export default async function AdminDashboard() {
  // Check authentication server-side
  const user = await getAdminSession();
  
  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                {businessInfo.name}
              </h1>
              <p className="text-sm text-gray-600 mt-1">Admin Dashboard</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-600 hidden sm:block">
                Welcome, <span className="font-medium">{user.name}</span>
              </div>
              <AdminSignOutButton />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 px-4 sm:py-8">
        <div className="mb-6 lg:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Dashboard Overview
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Manage customer inquiries and business operations.
          </p>
        </div>

        {/* Stats Cards with Suspense */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          <Suspense fallback={<StatsCardSkeleton />}>
            <ContactStatsCards />
          </Suspense>
        </div>

        {/* Management Cards with Suspense */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Suspense fallback={<ManagementCardSkeleton />}>
            <ManagementCards />
          </Suspense>
        </div>

        {/* Account Info - No suspense needed as user data is already available */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Account Information
            </CardTitle>
            <CardDescription>
              Your admin account details and system access.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Signed in as:</span>
                <span className="font-medium">{user.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium text-xs sm:text-sm break-all">{user.email}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Role:</span>
                <span className="font-medium">Administrator</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions for Mobile */}
        <div className="lg:hidden space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Contact stats for mobile quick access */}
              <Suspense fallback={
                <div className="space-y-3">
                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                </div>
              }>
                <MobileQuickActions />
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

// Mobile quick actions component
async function MobileQuickActions() {
  const contactStats = await getContactStats();
  
  return (
    <>
      <Link
        href="/admin/contacts"
        className={buttonVariants({ className: "w-full" })}
      >
        <MessageSquare className="h-4 w-4 mr-2" />
        Manage Contacts
        {contactStats.unreadContacts > 0 && (
          <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            {contactStats.unreadContacts}
          </span>
        )}
      </Link>
      <Link
        href="/admin/reviews"
        className={buttonVariants({ className: "w-full" })}
      >
        <Star className="h-4 w-4 mr-2" />
        Manage Reviews
      </Link>
    </>
  );
}
