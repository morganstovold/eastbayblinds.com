import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { contactSubmission } from "@/lib/db-schema";
import { sql, gte } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get current date boundaries
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekStart = new Date(todayStart);
    weekStart.setDate(weekStart.getDate() - 7);

    // Get statistics
    const [totalCount, todayCount, weekCount, newCount] = await Promise.all([
      // Total submissions
      db.select({ count: sql`count(*)` }).from(contactSubmission),
      
      // Today's submissions
      db.select({ count: sql`count(*)` })
        .from(contactSubmission)
        .where(gte(contactSubmission.createdAt, todayStart)),
      
      // This week's submissions
      db.select({ count: sql`count(*)` })
        .from(contactSubmission)
        .where(gte(contactSubmission.createdAt, weekStart)),
      
      // New/unread submissions
      db.select({ count: sql`count(*)` })
        .from(contactSubmission)
        .where(sql`${contactSubmission.status} = 'new'`)
    ]);

    return NextResponse.json({
      total: Number(totalCount[0]?.count || 0),
      today: Number(todayCount[0]?.count || 0),
      thisWeek: Number(weekCount[0]?.count || 0),
      unread: Number(newCount[0]?.count || 0),
    });

  } catch (error) {
    console.error("Error fetching contact stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch contact statistics" },
      { status: 500 }
    );
  }
} 