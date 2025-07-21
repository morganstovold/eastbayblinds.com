"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  MessageSquare,
  LogOut,
  Loader2,
  Shield,
  BarChart3,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { businessInfo } from "@/lib/data";
import Link from "next/link";

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date | string;
  emailVerified?: boolean;
  updatedAt?: Date;
  image?: string | null;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    totalContacts: 0,
    todayContacts: 0,
    weekContacts: 0,
    unreadContacts: 0,
  });

  const {
    data: session,
    isPending,
    error: sessionError,
  } = authClient.useSession();

  useEffect(() => {
    let isMounted = true;

    const handleAuth = async () => {
      if (isPending) return;

      if (sessionError) {
        console.error("Session error:", sessionError);
        if (isMounted) {
          setAuthError("Authentication error occurred");
          setLoading(false);
          setTimeout(() => router.push("/auth/signin"), 2000);
        }
        return;
      }

      if (!session?.user) {
        if (isMounted) {
          router.push("/auth/signin");
        }
        return;
      }

      if (isMounted) {
        setUser(session.user);
        setLoading(false);
        loadDashboardStats();
      }
    };

    handleAuth();

    return () => {
      isMounted = false;
    };
  }, [session, isPending, sessionError, router]);

  const loadDashboardStats = async () => {
    try {
      // Get user count and contact stats in parallel
      const contactStatsResponse = await fetch("/api/admin/contact-stats", {
        credentials: "include",
      }).catch(() => null);

      const contactStats = contactStatsResponse?.ok
        ? await contactStatsResponse.json()
        : { total: 0, today: 0, thisWeek: 0, unread: 0 };

      setStats({
        totalContacts: contactStats.total,
        todayContacts: contactStats.today,
        weekContacts: contactStats.thisWeek,
        unreadContacts: contactStats.unread,
      });
    } catch (error) {
      console.error("Failed to load dashboard stats:", error);
      // Use fallback stats
      setStats({
        totalContacts: 0,
        todayContacts: 0,
        weekContacts: 0,
        unreadContacts: 0,
      });
    }
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await authClient.signOut();
      router.push("/auth/signin");
    } catch (error) {
      console.error("Sign out error:", error);
      setLoading(false);
    }
  };

  if (loading || isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">
            {isPending ? "Loading session..." : "Validating authentication..."}
          </p>
        </div>
      </div>
    );
  }

  if (authError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <AlertCircle className="h-12 w-12 mx-auto mb-4 text-red-500" />
            <CardTitle className="text-red-600">Authentication Error</CardTitle>
            <CardDescription>{authError}</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              Redirecting to sign in page...
            </p>
            <Button
              onClick={() => router.push("/auth/signin")}
              className="w-full"
            >
              Go to Sign In Now
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md mx-auto">
          <CardHeader className="text-center">
            <Shield className="h-12 w-12 mx-auto mb-4 text-red-500" />
            <CardTitle className="text-red-600">Access Denied</CardTitle>
            <CardDescription>
              Please sign in to access the admin dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              onClick={() => router.push("/auth/signin")}
              className="w-full"
            >
              Go to Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2 sm:gap-0">
              <h1 className="text-xl font-semibold text-gray-900">
                {businessInfo.name}
              </h1>
              <p className="text-sm text-gray-600 mt-1">Admin Dashboard</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-600 hidden sm:block">
                Welcome, <span className="font-medium">{user.name}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="flex items-center gap-2"
                disabled={loading}
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </Button>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Contacts
              </CardTitle>
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
              <div className="text-2xl font-bold text-orange-600">
                {stats.unreadContacts}
              </div>
              <p className="text-xs text-muted-foreground">Need attention</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Contact Management
              </CardTitle>
              <CardDescription>
                View and manage customer inquiries from the website contact
                form.
                {stats.unreadContacts > 0 && (
                  <span className="inline-flex items-center gap-1 ml-2 text-orange-600 font-medium">
                    <AlertCircle className="h-3 w-3" />
                    {stats.unreadContacts} unread
                  </span>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total submissions:</span>
                <span className="font-medium">{stats.totalContacts}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">This week:</span>
                <span className="font-medium">{stats.weekContacts}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Today:</span>
                <span className="font-medium">{stats.todayContacts}</span>
              </div>
              <Link
                href="/admin/contacts"
                className={buttonVariants({ className: "w-full mt-4" })}
              >
                Manage Contact Forms
                {stats.unreadContacts > 0 && (
                  <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    {stats.unreadContacts}
                  </span>
                )}
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Account Information
              </CardTitle>
              <CardDescription>
                Your admin account details and system access.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Signed in as:</span>
                <span className="font-medium">{user.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium text-xs sm:text-sm break-all">
                  {user.email}
                </span>
              </div>
              <Button
                variant="outline"
                onClick={handleSignOut}
                className="w-full mt-4 flex items-center gap-2"
                disabled={loading}
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions for Mobile */}
        <div className="lg:hidden">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href="/admin/contacts"
                className={buttonVariants({ className: "w-full" })}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                View Contact Forms
                {stats.unreadContacts > 0 && (
                  <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    {stats.unreadContacts}
                  </span>
                )}
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
