"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContactFormData } from "@/lib/types";
import { serviceTypes } from "@/lib/data";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showTitle?: boolean;
  onSubmit?: (data: ContactFormData) => void;
}

export default function ContactForm({
  title = "Get Your Free Consultation",
  subtitle = "Ready to transform your home? Contact us today for a personalized consultation.",
  showTitle = true,
  onSubmit,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>();

  const serviceType = watch("serviceType");

  const handleFormSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (onSubmit) {
        onSubmit(data);
      } else {
        console.log("Form submitted:", data);
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-2xl mx-auto">
        {showTitle && (
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
              {title}
            </CardTitle>
            <p className="text-gray-600">{subtitle}</p>
          </CardHeader>
        )}

        <CardContent className="space-y-6">
          {/* Success Message */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
            >
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-green-800">
                  Message sent successfully!
                </p>
                <p className="text-sm text-green-600">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            </motion.div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3"
            >
              <AlertCircle className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-medium text-red-800">
                  Failed to send message
                </p>
                <p className="text-sm text-red-600">
                  Please try again or call us directly.
                </p>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Phone and Service Type Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[\+]?[1-9]?[\d\s\-\(\)]+$/,
                      message: "Invalid phone number",
                    },
                  })}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType">Service Type *</Label>
                <Select
                  onValueChange={(value) => setValue("serviceType", value)}
                >
                  <SelectTrigger
                    className={errors.serviceType ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <input
                  type="hidden"
                  {...register("serviceType", {
                    required: "Service type is required",
                  })}
                />
                {errors.serviceType && (
                  <p className="text-sm text-red-600">
                    {errors.serviceType.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project, preferred timeline, and any specific requirements..."
                rows={5}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                className={errors.message ? "border-red-500" : ""}
              />
              {errors.message && (
                <p className="text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="text-center pt-4 border-t">
            <p className="text-sm text-gray-600">
              Prefer to call? Reach us at{" "}
              <a
                href="tel:(510) 555-0123"
                className="text-primary hover:underline font-medium"
              >
                (510) 555-0123
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
