"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Star,
  StarOff,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Loader2,
  Save,
  X,
  User,
} from "lucide-react";
import {
  createReview,
  updateReview,
  deleteReview,
  toggleReviewStatus,
} from "@/lib/review-server-actions";

interface Review {
  id: string;
  customerName: string;
  rating: number;
  text: string;
  location: string | null;
  reviewDate: Date | null;
  isActive: boolean;
  isFeatured: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
}

interface NewReview {
  customerName: string;
  rating: number;
  text: string;
  location: string;
  reviewDate: string;
  isFeatured: boolean;
}

interface ReviewsClientComponentProps {
  initialReviews: Review[];
}

export default function ReviewsClientComponent({
  initialReviews,
}: ReviewsClientComponentProps) {
  const [updating, setUpdating] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<NewReview>({
    customerName: "",
    rating: 5,
    text: "",
    location: "",
    reviewDate: new Date().toISOString().split("T")[0], // Default to today
    isFeatured: false,
  });

  // Reload page to get fresh server-side data
  const reloadPage = () => {
    window.location.reload();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName || !formData.text || !formData.reviewDate)
      return;

    try {
      setUpdating(editingId || "new");

      const formDataObj = new FormData();
      formDataObj.append("customerName", formData.customerName);
      formDataObj.append("rating", formData.rating.toString());
      formDataObj.append("text", formData.text);
      formDataObj.append("location", formData.location);
      formDataObj.append("reviewDate", formData.reviewDate);
      formDataObj.append("isFeatured", formData.isFeatured.toString());

      if (editingId) {
        formDataObj.append("id", editingId);
        await updateReview(formDataObj);
      } else {
        await createReview(formDataObj);
      }

      resetForm();
      reloadPage();
    } catch (error) {
      console.error("Error saving review:", error);
      alert("Failed to save review. Please try again.");
    } finally {
      setUpdating(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this review?")) return;

    try {
      setUpdating(id);

      const formData = new FormData();
      formData.append("id", id);

      await deleteReview(formData);
      reloadPage();
    } catch (error) {
      console.error("Error deleting review:", error);
      alert("Failed to delete review. Please try again.");
    } finally {
      setUpdating(null);
    }
  };

  const handleToggleStatus = async (
    id: string,
    field: "isActive" | "isFeatured",
    value: boolean
  ) => {
    try {
      setUpdating(id);

      const formData = new FormData();
      formData.append("id", id);
      formData.append("field", field);
      formData.append("value", value.toString());

      await toggleReviewStatus(formData);
      reloadPage();
    } catch (error) {
      console.error("Error updating review:", error);
    } finally {
      setUpdating(null);
    }
  };

  const startEdit = (review: Review) => {
    setEditingId(review.id);
    setFormData({
      customerName: review.customerName,
      rating: review.rating,
      text: review.text,
      location: review.location || "",
      reviewDate: review.reviewDate
        ? new Date(review.reviewDate).toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
      isFeatured: review.isFeatured,
    });
    setShowAddForm(true);
  };

  const resetForm = () => {
    setShowAddForm(false);
    setEditingId(null);
    setFormData({
      customerName: "",
      rating: 5,
      text: "",
      location: "",
      reviewDate: new Date().toISOString().split("T")[0],
      isFeatured: false,
    });
  };

  return (
    <>
      {/* Header with Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {initialReviews.length} reviews •{" "}
            {initialReviews.filter((r) => r.isActive).length} active
          </h2>
        </div>
        <Button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2"
          size="sm"
        >
          <Plus className="h-4 w-4" />
          Add Review
        </Button>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {editingId ? "Edit Review" : "Add New Review"}
              <Button
                variant="ghost"
                size="sm"
                onClick={resetForm}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Customer Info Section - In gray box like cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Customer Name *
                  </label>
                  <Input
                    value={formData.customerName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        customerName: e.target.value,
                      }))
                    }
                    placeholder="Enter customer name"
                    required
                    className="bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <Input
                    value={formData.location}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }))
                    }
                    placeholder="e.g., Oakland, CA"
                    className="bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Review Date *
                  </label>
                  <Input
                    type="date"
                    value={formData.reviewDate}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        reviewDate: e.target.value,
                      }))
                    }
                    required
                    className="bg-white"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Original review date
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating *
                  </label>
                  <Select
                    value={formData.rating.toString()}
                    onValueChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        rating: parseInt(value),
                      }))
                    }
                  >
                    <SelectTrigger className="bg-white w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < num
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                            <span className="ml-2">
                              {num} star{num !== 1 ? "s" : ""}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Review Text Section */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Review Text *
                  </label>
                  <Textarea
                    value={formData.text}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, text: e.target.value }))
                    }
                    placeholder="Enter the customer's review..."
                    rows={4}
                    required
                    className="resize-none"
                  />
                </div>

                {/* Featured Toggle - Clean design */}
                <div className="flex items-center gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.isFeatured}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        isFeatured: e.target.checked,
                      }))
                    }
                    className="rounded h-4 w-4 text-amber-600 focus:ring-amber-500"
                  />
                  <label
                    htmlFor="featured"
                    className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
                  >
                    <Star className="h-4 w-4 text-amber-600" />
                    Feature on homepage
                  </label>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="submit"
                  disabled={updating === (editingId || "new")}
                  className="flex items-center gap-2"
                >
                  {updating === (editingId || "new") ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save className="h-4 w-4" />
                  )}
                  {editingId ? "Update Review" : "Add Review"}
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {initialReviews.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Star className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No reviews yet
              </h3>
              <p className="text-gray-600 mb-4">
                Add your first customer review to get started.
              </p>
              <Button onClick={() => setShowAddForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add First Review
              </Button>
            </CardContent>
          </Card>
        ) : (
          initialReviews.map((review) => (
            <Card
              key={review.id}
              className={`${!review.isActive ? "opacity-60" : ""}`}
            >
              <CardContent>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3 min-w-0 flex-1">
                    <div className="shrink-0">
                      <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                          {review.customerName}
                        </h3>
                        {review.location && (
                          <span className="text-xs sm:text-sm text-gray-600">
                            •{" "}
                            {review.location.charAt(0).toUpperCase() +
                              review.location.slice(1)}
                          </span>
                        )}
                        <Badge
                          variant={review.isActive ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {review.isActive ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="ml-1 text-sm text-gray-600">
                            {review.rating} star{review.rating !== 1 ? "s" : ""}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">
                          {review.reviewDate
                            ? new Date(review.reviewDate).toLocaleDateString()
                            : "No date"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        handleToggleStatus(
                          review.id,
                          "isActive",
                          !review.isActive
                        )
                      }
                      disabled={updating === review.id}
                      className="h-8 px-2"
                    >
                      {review.isActive ? (
                        <EyeOff className="h-3 w-3" />
                      ) : (
                        <Eye className="h-3 w-3" />
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        handleToggleStatus(
                          review.id,
                          "isFeatured",
                          !review.isFeatured
                        )
                      }
                      disabled={updating === review.id}
                      className="h-8 px-2"
                    >
                      {review.isFeatured ? (
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ) : (
                        <StarOff className="h-3 w-3" />
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => startEdit(review)}
                      disabled={updating === review.id}
                      className="h-8 px-2"
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(review.id)}
                      disabled={updating === review.id}
                      className="h-8 px-2 text-red-600 hover:text-red-700"
                    >
                      {updating === review.id ? (
                        <Loader2 className="h-3 w-3 animate-spin" />
                      ) : (
                        <Trash2 className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed break-words mb-2">
                    {review.text}
                  </p>
                  {review.isFeatured && (
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-yellow-600 font-medium">
                        Featured on homepage
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-3 text-xs text-gray-500">
                  Added to system:{" "}
                  {review.createdAt
                    ? new Date(review.createdAt).toLocaleDateString()
                    : "Unknown"}
                  {review.updatedAt &&
                    new Date(review.updatedAt).getTime() !==
                      new Date(review.createdAt || "").getTime() && (
                      <span>
                        {" "}
                        • Last updated:{" "}
                        {new Date(review.updatedAt).toLocaleDateString()}
                      </span>
                    )}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </>
  );
}
