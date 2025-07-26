"use server";

import { db } from "@/lib/db";
import { contactSubmission } from "@/lib/db-schema";
import { ContactFormData } from "@/lib/types";
import { nanoid } from "nanoid";
import { revalidateTag } from "next/cache";

export async function submitContactForm(data: ContactFormData) {
  try {
    if (
      !data.firstName ||
      !data.lastName ||
      !data.zipCode ||
      !data.serviceType
    ) {
      return {
        success: false,
        error: "Missing required fields",
      };
    }

    if (!data.email && !data.phone) {
      return {
        success: false,
        error: "Email or phone number is required",
      };
    }

    const submission = await db
      .insert(contactSubmission)
      .values({
        id: nanoid(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email || null,
        phone: data.phone || null,
        zipCode: data.zipCode,
        serviceType: data.serviceType,
        message: data.message || null,
        status: "new",
      })
      .returning();

    revalidateTag("contact-stats");
    revalidateTag("contact-submissions");

    return {
      success: true,
      message:
        "Thank you for your submission! We'll get back to you within 24 hours.",
      submissionId: submission[0].id,
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      error: "Failed to submit form. Please try again.",
    };
  }
}
