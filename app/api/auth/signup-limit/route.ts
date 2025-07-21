import { auth, checkUserLimit } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name } = body;

    // Check user limit before allowing signup
    const limitReached = await checkUserLimit();
    if (limitReached) {
      return NextResponse.json(
        { error: { message: "Maximum number of users (2) reached. No more signups allowed." } },
        { status: 403 }
      );
    }

    // Proceed with signup using Better Auth
    const result = await auth.api.signUpEmail({
      body: { email, password, name },
      asResponse: true,
    });

    return result;
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: { message: "Signup failed" } },
      { status: 500 }
    );
  }
} 