"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getContactSubmissions, updateContactSubmissionStatus } from "@/lib/admin-actions";

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

export default function ContactsManagement() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 20,
    total: 0,
    pages: 0,
    hasMore: false,
  });
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const loadSubmissions = useCallback(
    async (page = 1) => {
      try {
        setLoading(true);
        
        const result = await getContactSubmissions({
          page,
          limit: 20,
          status: statusFilter || undefined,
          search: searchQuery || undefined,
        });

                 if (result.success) {
           setSubmissions(result.submissions as ContactSubmission[]);
           setPagination(result.pagination);
         } else {
          console.error("Error loading submissions:", result.error);
          setSubmissions([]);
          setPagination({
            page: 1,
            limit: 20,
            total: 0,
            pages: 0,
            hasMore: false,
          });
        }
      } catch (error) {
        console.error("Error loading submissions:", error);
        setSubmissions([]);
        setPagination({
          page: 1,
          limit: 20,
          total: 0,
          pages: 0,
          hasMore: false,
        });
      } finally {
        setLoading(false);
      }
    },
    [searchQuery, statusFilter]
  );

  useEffect(() => {
    if (!session?.user) return;

    const timer = setTimeout(() => {
      loadSubmissions();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, statusFilter, session?.user, loadSubmissions]);

  useEffect(() => {
    if (isPending) return;
    if (!session?.user) {
      router.push("/auth/signin");
      return;
    }
    if (session?.user) {
      loadSubmissions();
    }
  }, [session, isPending, router, loadSubmissions]);

  const updateSubmissionStatus = async (id: string, newStatus: string) => {
    try {
      setUpdating(id);

      const result = await updateContactSubmissionStatus(id, newStatus);

      if (!result.success) {
        throw new Error(result.error || "Failed to update status");
      }

      // Update local state
      setSubmissions((prev) =>
        prev.map((sub) =>
          sub.id === id
            ? {
                ...sub,
                status: newStatus as "new" | "viewed" | "responded" | "closed",
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
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back to Dashboard</span>
                <span className="sm:hidden">Back</span>
              </Button>
              <div>
                <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Contact Submissions
                </h1>
                <p className="text-sm text-gray-600 sm:hidden">
                  Manage customer inquiries
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-gray-400" />
              <div className="text-sm text-gray-600 hidden sm:block">
                Manage customer inquiries
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name, email, phone, or zip code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Status Filter */}
            <div className="w-full sm:w-48">
              <Select
                value={statusFilter}
                onValueChange={setStatusFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="viewed">Viewed</SelectItem>
                  <SelectItem value="responded">Responded</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && submissions.length === 0 ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
              <p className="text-gray-600">Loading contact submissions...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Results */}
            <div className="space-y-4">
              {submissions.map((submission) => (
                <Card
                  key={submission.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-3 min-w-0 flex-1">
                        <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-gray-900 text-lg">
                            {submission.firstName} {submission.lastName}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mt-1">
                            {submission.email && (
                              <div className="flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                <a
                                  href={`mailto:${submission.email}`}
                                  className="hover:text-primary truncate"
                                >
                                  {submission.email}
                                </a>
                              </div>
                            )}
                            {submission.phone && (
                              <div className="flex items-center gap-1">
                                <Phone className="h-3 w-3" />
                                <a
                                  href={`tel:${submission.phone}`}
                                  className="hover:text-primary"
                                >
                                  {submission.phone}
                                </a>
                              </div>
                            )}
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{submission.zipCode}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{formatDate(submission.createdAt)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(submission.status)}>
                          {submission.status}
                        </Badge>
                        <Select
                          value={submission.status}
                          onValueChange={(value) =>
                            updateSubmissionStatus(submission.id, value)
                          }
                          disabled={updating === submission.id}
                        >
                          <SelectTrigger className="w-32">
                            {updating === submission.id ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <SelectValue />
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-900 mb-1">
                          Service Type:
                        </p>
                        <p className="text-gray-600">{submission.serviceType}</p>
                      </div>
                      {submission.message && (
                        <div className="sm:col-span-2">
                          <p className="font-medium text-gray-900 mb-1">
                            Message:
                          </p>
                          <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">
                            {submission.message}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {!loading && submissions.length === 0 && (
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No submissions found
                </h3>
                <p className="text-gray-600">
                  {searchQuery || statusFilter
                    ? "Try adjusting your filters"
                    : "Contact submissions will appear here when customers submit the form"}
                </p>
              </div>
            )}

            {/* Pagination */}
            {pagination.pages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <Button
                  onClick={() => loadSubmissions(pagination.page - 1)}
                  disabled={pagination.page === 1 || loading}
                  size="sm"
                >
                  Previous
                </Button>
                <span className="text-sm text-gray-600">
                  Page {pagination.page} of {pagination.pages}
                </span>
                <Button
                  onClick={() => loadSubmissions(pagination.page + 1)}
                  disabled={!pagination.hasMore || loading}
                  size="sm"
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}

        {/* Loading overlay for updates */}
        {loading && submissions.length > 0 && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2 text-primary" />
              <p className="text-gray-600">Updating...</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
