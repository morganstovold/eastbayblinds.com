import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactSubmission } from "@/lib/db-schema";
import { ContactFormData } from "@/lib/types";
import { nanoid } from "nanoid";

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.zipCode || !body.serviceType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Ensure at least email or phone is provided
    if (!body.email && !body.phone) {
      return NextResponse.json(
        { error: "Email or phone number is required" },
        { status: 400 }
      );
    }

    // Insert into database
    const submission = await db.insert(contactSubmission).values({
      id: nanoid(),
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email || null,
      phone: body.phone || null,
      zipCode: body.zipCode,
      serviceType: body.serviceType,
      message: body.message || null,
      status: "new",
    }).returning();

    console.log("Contact form submission saved:", submission[0].id);

    return NextResponse.json({ 
      success: true, 
      message: "Thank you for your submission! We'll get back to you within 24 hours.",
      submissionId: submission[0].id 
    });

  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit form. Please try again." },
      { status: 500 }
    );
  }
} 