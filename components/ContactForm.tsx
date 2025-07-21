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
import { cn } from "@/lib/utils";
import { submitContactForm } from "@/lib/contact-actions";

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

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
    setErrorMessage("");

    try {
      // Submit using server action
      const result = await submitContactForm(data);

      if (!result.success) {
        setErrorMessage(result.error || "Submission failed");
        setSubmitStatus("error");
        return;
      }

      // Call the onSubmit callback if provided
      if (onSubmit) {
        onSubmit(data);
      }

      setSubmitStatus("success");
      reset();
      console.log("Form submitted successfully:", result.submissionId);
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage("Failed to submit form. Please try again.");
      setSubmitStatus("error");
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
      {/* Error Message */}
      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 mb-6"
        >
          <AlertCircle className="h-5 w-5 text-red-600" />
          <div>
            <p className="font-medium text-red-800">Failed to send message</p>
            <p className="text-sm text-red-600">
              {errorMessage || "Please try again or call us directly."}
            </p>
          </div>
        </motion.div>
      )}

      {/* Success Message */}
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 mb-6"
        >
          <CheckCircle className="h-5 w-5 text-green-600" />
          <div>
            <p className="font-medium text-green-800">Message sent successfully!</p>
            <p className="text-sm text-green-600">
              Thank you for your submission! We'll get back to you within 24 hours.
            </p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              type="text"
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 characters",
                },
              })}
              className={cn(
                "mt-1",
                errors.firstName ? "border-red-500 focus:ring-red-500" : ""
              )}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="lastName">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              type="text"
              {...register("lastName", {
                required: "Last name is required",
                minLength: {
                  value: 2,
                  message: "Last name must be at least 2 characters",
                },
              })}
              className={cn(
                "mt-1",
                errors.lastName ? "border-red-500 focus:ring-red-500" : ""
              )}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">
              Email Address{!phone ? <span className="text-red-500">*</span> : ""}
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email", {
                required: !phone ? "Email is required when phone is not provided" : false,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={cn(
                "mt-1",
                errors.email ? "border-red-500 focus:ring-red-500" : ""
              )}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">
              Phone Number{!email ? <span className="text-red-500">*</span> : ""}
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone", {
                required: !email ? "Phone is required when email is not provided" : false,
                pattern: {
                  value: /^[\+]?[1-9][\d]{0,15}$/,
                  message: "Invalid phone number",
                },
              })}
              className={cn(
                "mt-1",
                errors.phone ? "border-red-500 focus:ring-red-500" : ""
              )}
              placeholder="(123) 456-7890"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Service Request Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="zipCode">
              ZIP Code <span className="text-red-500">*</span>
            </Label>
            <Input
              id="zipCode"
              type="text"
              {...register("zipCode", {
                required: "ZIP code is required",
                pattern: {
                  value: /^\d{5}(-\d{4})?$/,
                  message: "Invalid ZIP code format",
                },
              })}
              className={cn(
                "mt-1",
                errors.zipCode ? "border-red-500 focus:ring-red-500" : ""
              )}
              placeholder="12345"
            />
            {errors.zipCode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.zipCode.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="serviceType">
              Service Type <span className="text-red-500">*</span>
            </Label>
            <Select
              onValueChange={(value) => setValue("serviceType", value)}
              {...register("serviceType", {
                required: "Please select a service type",
              })}
            >
              <SelectTrigger
                className={cn(
                  "mt-1",
                  errors.serviceType ? "border-red-500 focus:ring-red-500" : ""
                )}
              >
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.serviceType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.serviceType.message}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message">Additional Message</Label>
          <Textarea
            id="message"
            {...register("message")}
            className="mt-1"
            placeholder="Tell us more about your project or any specific requirements..."
            rows={4}
          />
          <p className="text-sm text-gray-500 mt-1">
            Optional: Provide additional details about your window treatment needs
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
              />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
