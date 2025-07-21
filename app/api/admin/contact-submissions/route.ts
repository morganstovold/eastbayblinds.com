import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { contactSubmission } from "@/lib/db-schema";
import { desc, eq, sql, or, ilike, and } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
    const limit = Math.min(
      50,
      Math.max(10, parseInt(searchParams.get("limit") || "20"))
    );
    const status = searchParams.get("status");
    const search = searchParams.get("search");

    const conditions = [];

    if (status && ["new", "viewed", "responded", "closed"].includes(status)) {
      conditions.push(eq(contactSubmission.status, status));
    }

    if (search && search.trim()) {
      const searchTerm = `%${search.trim().toLowerCase()}%`;
      conditions.push(
        or(
          ilike(contactSubmission.firstName, searchTerm),
          ilike(contactSubmission.lastName, searchTerm),
          ilike(contactSubmission.email, searchTerm),
          ilike(contactSubmission.phone, searchTerm),
          ilike(contactSubmission.zipCode, searchTerm),
          ilike(
            sql`concat(${contactSubmission.firstName}, ' ', ${contactSubmission.lastName})`,
            searchTerm
          )
        )
      );
    }

    const whereCondition =
      conditions.length > 0
        ? conditions.length === 1
          ? conditions[0]
          : and(...conditions)
        : undefined;

    // Get total count for pagination
    const totalResult = await db
      .select({ count: sql`count(*)` })
      .from(contactSubmission)
      .where(whereCondition);

    const total = Number(totalResult[0]?.count || 0);

    // Get submissions with pagination
    const offset = (page - 1) * limit;
    const submissions = await db
      .select()
      .from(contactSubmission)
      .where(whereCondition)
      .orderBy(desc(contactSubmission.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json({
      submissions,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
        hasMore: page * limit < total,
      },
    });
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch contact submissions" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { id, status } = body;

    if (
      !id ||
      !status ||
      !["new", "viewed", "responded", "closed"].includes(status)
    ) {
      return NextResponse.json(
        { error: "Invalid submission ID or status" },
        { status: 400 }
      );
    }

    const updated = await db
      .update(contactSubmission)
      .set({
        status,
        updatedAt: new Date(),
      })
      .where(eq(contactSubmission.id, id))
      .returning();

    if (updated.length === 0) {
      return NextResponse.json(
        { error: "Submission not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, submission: updated[0] });
  } catch (error) {
    console.error("Error updating submission status:", error);
    return NextResponse.json(
      { error: "Failed to update submission status" },
      { status: 500 }
    );
  }
}
