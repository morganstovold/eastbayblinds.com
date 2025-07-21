"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MessageSquare,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  Loader2,
  User,
  Search,
  X,
} from "lucide-react";
import { businessInfo } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactSubmission {
  id: string;
  firstName: string;
  lastName: string;
  email: string | null;
  phone: string | null;
  zipCode: string;
  serviceType: string;
  message: string | null;
  status: "new" | "viewed" | "responded" | "closed";
  createdAt: string;
  updatedAt: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
  hasMore: boolean;
}

export default function ContactSubmissionsPage() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    total: 0,
    pages: 0,
    hasMore: false,
  });
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data: session, isPending } = authClient.useSession();

  // Debounced search effect
  useEffect(() => {
    if (!session?.user) return;

    const timer = setTimeout(() => {
      loadSubmissions();
    }, 300); // 300ms debounce

    return () => clearTimeout(timer);
  }, [searchQuery, statusFilter, session?.user]);

  useEffect(() => {
    if (isPending) return;
    if (!session?.user) {
      router.push("/auth/signin");
      return;
    }
    if (session?.user) {
      loadSubmissions();
    }
  }, [session, isPending, router]);

  const loadSubmissions = async (page = 1) => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "20",
      });

      if (statusFilter) {
        params.append("status", statusFilter);
      }

      if (searchQuery) {
        params.append("search", searchQuery);
      }

      const response = await fetch(`/api/admin/contact-submissions?${params}`, {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to load submissions");
      }

      const data = await response.json();
      setSubmissions(data.submissions);
      setPagination(data.pagination);
    } catch (error) {
      console.error("Error loading submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateSubmissionStatus = async (id: string, newStatus: string) => {
    try {
      setUpdating(id);

      const response = await fetch("/api/admin/contact-submissions", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      // Update local state
      setSubmissions((prev) =>
        prev.map((sub) =>
          sub.id === id
            ? {
                ...sub,
                status: newStatus as any,
                updatedAt: new Date().toISOString(),
              }
            : sub
        )
      );
    } catch (error) {
      console.error("Error updating submission status:", error);
    } finally {
      setUpdating(null);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-orange-100 text-orange-800";
      case "viewed":
        return "bg-blue-100 text-blue-800";
      case "responded":
        return "bg-green-100 text-green-800";
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Remove the full page loading state - we'll handle it inline

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <Button
                size="sm"
                onClick={() => router.push("/admin")}
                className="flex items-center gap-2 shrink-0"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back</span>
              </Button>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Contact Submissions
                </h1>
                <p className="text-sm text-gray-600 sm:hidden">
                  {pagination.total} total submissions
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-600 hidden sm:block">
              Total: {pagination.total} submissions
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        {/* Search and Filters */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
            {/* Search Bar */}
            <div className="relative flex-1 min-w-0 w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, phone, or zip code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 text-sm sm:text-base"
                disabled={loading}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 touch-manipulation"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Status Filters */}
            <div className="flex gap-2 flex-wrap w-full sm:w-auto">
              <Button
                variant={statusFilter === "" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("")}
                disabled={loading}
                className="text-xs sm:text-sm"
              >
                All ({pagination.total})
              </Button>
              <Button
                variant={statusFilter === "new" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("new")}
                disabled={loading}
                className="text-xs sm:text-sm"
              >
                New
              </Button>
              <Button
                variant={statusFilter === "viewed" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("viewed")}
                disabled={loading}
                className="text-xs sm:text-sm"
              >
                Viewed
              </Button>
              <Button
                variant={statusFilter === "responded" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("responded")}
                disabled={loading}
                className="text-xs sm:text-sm"
              >
                Responded
              </Button>
              <Button
                variant={statusFilter === "closed" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("closed")}
                disabled={loading}
                className="text-xs sm:text-sm"
              >
                Closed
              </Button>
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchQuery || statusFilter) && (
            <div className="flex items-center gap-2 mt-3 pt-3 border-t">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchQuery && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Search: "{searchQuery}"
                  <X className="h-3 w-3 cursor-pointer" onClick={clearSearch} />
                </Badge>
              )}
              {statusFilter && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Status: {statusFilter}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => setStatusFilter("")}
                  />
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Submissions List */}
        <div className="space-y-3 sm:space-y-4">
          {loading && submissions.length === 0 ? (
            // Loading state for first load
            <Card>
              <CardContent className="p-12 text-center">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Loading Contact Submissions
                </h3>
                <p className="text-gray-600">
                  Please wait while we fetch your customer inquiries...
                </p>
              </CardContent>
            </Card>
          ) : (
            <>
              {submissions.map((submission) => (
                <Card
                  key={submission.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 bg-blue-100 rounded-full shrink-0">
                          <User className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                            {submission.firstName} {submission.lastName}
                          </h3>
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                            <Clock className="h-3 w-3 shrink-0" />
                            <span className="truncate">
                              {formatDate(submission.createdAt)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <Badge
                          className={`${getStatusColor(
                            submission.status
                          )} text-xs`}
                        >
                          {submission.status}
                        </Badge>
                        <Select
                          value={submission.status}
                          onValueChange={(newStatus) =>
                            updateSubmissionStatus(submission.id, newStatus)
                          }
                          disabled={updating === submission.id}
                        >
                          <SelectTrigger className="w-28 sm:w-32 text-xs sm:text-sm">
                            <SelectValue />
                            {updating === submission.id && (
                              <Loader2 className="h-3 w-3 animate-spin ml-1" />
                            )}
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="viewed">Viewed</SelectItem>
                            <SelectItem value="responded">Responded</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4">
                      <div className="flex items-center gap-2 text-xs sm:text-sm min-w-0">
                        <Mail className="h-3 w-3 text-gray-500 shrink-0" />
                        {submission.email ? (
                          <a
                            href={`mailto:${submission.email}`}
                            className="text-blue-600 hover:underline truncate"
                          >
                            {submission.email}
                          </a>
                        ) : (
                          <span className="text-gray-500">No email</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm min-w-0">
                        <Phone className="h-3 w-3 text-gray-500 shrink-0" />
                        {submission.phone ? (
                          <a
                            href={`tel:${submission.phone}`}
                            className="text-blue-600 hover:underline truncate"
                          >
                            {submission.phone}
                          </a>
                        ) : (
                          <span className="text-gray-500">No phone</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm min-w-0">
                        <MapPin className="h-3 w-3 text-gray-500 shrink-0" />
                        <span className="truncate">{submission.zipCode}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <Badge
                        variant="secondary"
                        className="text-xs break-words"
                      >
                        {submission.serviceType}
                      </Badge>
                    </div>

                    {submission.message && (
                      <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                        <h4 className="text-xs sm:text-sm font-medium text-gray-900 mb-2">
                          Message:
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed break-words">
                          {submission.message}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}

              {submissions.length === 0 && !loading && (
                <Card>
                  <CardContent className="p-8 text-center">
                    <MessageSquare className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      No submissions found
                    </h3>
                    <p className="text-gray-600">
                      {statusFilter
                        ? `No submissions with status "${statusFilter}" found.`
                        : "No contact form submissions yet. Check back once customers start reaching out!"}
                    </p>
                  </CardContent>
                </Card>
              )}

              {loading && submissions.length > 0 && (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2 text-primary" />
                    <p className="text-sm text-gray-600">Updating results...</p>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </div>

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="flex justify-center mt-6 sm:mt-8">
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                variant="outline"
                size="sm"
                disabled={pagination.page === 1 || loading}
                onClick={() => loadSubmissions(pagination.page - 1)}
                className="text-xs sm:text-sm"
              >
                {loading ? (
                  <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin mr-1 sm:mr-2" />
                ) : null}
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Prev</span>
              </Button>
              <span className="flex items-center px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                {pagination.page} of {pagination.pages}
              </span>
              <Button
                variant="outline"
                size="sm"
                disabled={!pagination.hasMore || loading}
                onClick={() => loadSubmissions(pagination.page + 1)}
                className="text-xs sm:text-sm"
              >
                {loading ? (
                  <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin mr-1 sm:mr-2" />
                ) : null}
                Next
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
