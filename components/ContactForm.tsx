"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
  onSubmit?: (data: ContactFormData) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
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

  const email = watch("email");
  const phone = watch("phone");

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
            <p className="font-medium text-red-800">Failed to send message</p>
            <p className="text-sm text-red-600">
              Please try again or call us directly.
            </p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        {/* First Name and Last Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              type="text"
              placeholder="John"
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 characters",
                },
              })}
              className={errors.firstName ? "border-red-500" : ""}
            />
            {errors.firstName && (
              <p className="text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              type="text"
              placeholder="Doe"
              {...register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 2,
                  message: "Last name must be at least 2 characters",
                },
              })}
              className={errors.lastName ? "border-red-500" : ""}
            />
            {errors.lastName && (
              <p className="text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Email and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email", {
                validate: (value) => {
                  if (!value && !phone) {
                    return "Email or phone number is required";
                  }
                  if (
                    value &&
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                  ) {
                    return "Invalid email address";
                  }
                  return true;
                },
              })}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              {...register("phone", {
                validate: (value) => {
                  if (!value && !email) {
                    return "Phone or email is required";
                  }
                  if (value && !/^[\+]?[1-9]?[\d\s\-\(\)]+$/.test(value)) {
                    return "Invalid phone number";
                  }
                  return true;
                },
              })}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Zip Code and Service Type Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="zipCode">Zip Code *</Label>
            <Input
              id="zipCode"
              type="text"
              placeholder="94510"
              {...register("zipCode", {
                required: "Zip code is required",
                pattern: {
                  value: /^\d{5}(-\d{4})?$/,
                  message: "Invalid zip code format",
                },
              })}
              className={errors.zipCode ? "border-red-500" : ""}
            />
            {errors.zipCode && (
              <p className="text-sm text-red-600">{errors.zipCode.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceType">Service Type *</Label>
            <Select onValueChange={(value) => setValue("serviceType", value)}>
              <SelectTrigger
                className={errors.serviceType ? "border-red-500" : ""}
              >
                <SelectValue placeholder="Select a service type" />
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
          <Label htmlFor="message">About Your Request (Optional)</Label>
          <Textarea
            id="message"
            placeholder="Tell us about your project, preferred timeline, and any specific requirements..."
            rows={4}
            {...register("message")}
          />
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
    </motion.div>
  );
}
