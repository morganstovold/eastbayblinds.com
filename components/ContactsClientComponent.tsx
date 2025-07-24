"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  User,
  Search,
  X,
  Loader2,
} from "lucide-react";
import { updateContactSubmissionStatus } from "@/lib/admin-actions";
import { serviceTypes } from "@/lib/data";

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
  createdAt: Date | null;
  updatedAt: Date | null;
}

interface ContactsClientComponentProps {
  initialSubmissions: ContactSubmission[];
}

export default function ContactsClientComponent({
  initialSubmissions,
}: ContactsClientComponentProps) {
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [updating, setUpdating] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [error, setError] = useState<string | null>(null);

  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch = searchQuery
      ? `${submission.firstName} ${submission.lastName} ${submission.email} ${submission.phone} ${submission.zipCode}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      : true;

    const matchesStatus =
      statusFilter === "all" || submission.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const clearSearch = () => setSearchQuery("");

  async function updateStatus(id: string, newStatus: string) {
    setUpdating(id);
    setError(null);
    try {
      const result = await updateContactSubmissionStatus(id, newStatus);
      if (!result.success) {
        setError(result.error || "Failed to update status");
        return;
      }
      setSubmissions((prev) =>
        prev.map((sub) =>
          sub.id === id ? { ...sub, status: newStatus as any } : sub
        )
      );
    } catch (error) {
      console.error(error);
      setError("Failed to update status");
    } finally {
      setUpdating(null);
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "viewed":
        return "bg-yellow-100 text-yellow-800";
      case "responded":
        return "bg-green-100 text-green-800";
      case "closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative w-full">
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

            <div className="flex-1">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="viewed">Viewed</SelectItem>
                  <SelectItem value="responded">Responded</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="text-sm text-gray-600 mb-4">
        Showing {filteredSubmissions.length} of {submissions.length} submissions
      </div>

      <div className="space-y-4">
        {filteredSubmissions.map((submission) => (
          <Card key={submission.id}>
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-gray-900 break-words">
                      {submission.firstName} {submission.lastName}
                    </h3>
                    <p className="text-sm text-gray-500 break-all">
                      {submission.createdAt
                        ? new Date(submission.createdAt).toLocaleDateString()
                        : "Unknown date"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Badge className={getStatusColor(submission.status)}>
                    {submission.status}
                  </Badge>
                  <Select
                    value={submission.status}
                    onValueChange={(value) => updateStatus(submission.id, value)}
                    disabled={updating === submission.id}
                  >
                    <SelectTrigger className="w-32 h-8">
                      {updating === submission.id ? (
                        <Loader2 className="h-3 w-3 animate-spin" />
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
                {submission.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-600 break-all">
                      {submission.email}
                    </span>
                  </div>
                )}
                {submission.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-600">{submission.phone}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600">{submission.zipCode}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <p className="text-gray-600 font-medium text-xs">
                    Service Type:
                  </p>
                  <p className="text-gray-600">
                    {
                      serviceTypes.find(
                        (type) => type.value === submission.serviceType
                      )?.label
                    }
                  </p>
                </div>
              </div>

              {submission.message && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Message:
                  </p>
                  <p className="text-sm text-gray-600 break-words">
                    {submission.message}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}

        {filteredSubmissions.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No submissions found
              </h3>
              <p className="text-gray-500">
                {searchQuery || statusFilter !== "all"
                  ? "Try adjusting your search or filter criteria."
                  : "Contact submissions will appear here when customers submit the contact form."}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
} 