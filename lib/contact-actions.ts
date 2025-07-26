"use server";

import { db } from "@/lib/db";
import { contactSubmission } from "@/lib/db-schema";
import { ContactFormData } from "@/lib/types";
import { nanoid } from "nanoid";
import { revalidateTag } from "next/cache";
import { sendContactNotification } from "@/lib/email";

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

    // Send email notification
    const fullName = `${data.firstName} ${data.lastName}`;
    const submittedAt = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    // Send email notification (don't await to avoid blocking the response)
    sendContactNotification({
      name: fullName,
      email: data.email || 'No email provided',
      phone: data.phone || 'No phone provided',
      zipCode: data.zipCode,
      serviceType: data.serviceType,
      message: data.message || 'No message provided',
      submittedAt,
    }).catch(error => {
      console.error('Failed to send contact notification email:', error);
    });

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
