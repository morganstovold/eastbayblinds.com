import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import * as schema from "./db-schema";
import { sql } from "drizzle-orm";

// Ensure baseURL has proper protocol
function getBaseURL() {
  const url = process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL;
  
  if (!url) {
    return "http://localhost:3000";
  }
  
  // If URL doesn't start with http:// or https://, add https://
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  
  return url;
}

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema,
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: false,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
  // Minimal fix for Microsoft Edge cookie compatibility
  cookies: {
    sessionToken: {
      sameSite: "lax", // Helps with Edge compatibility
    },
  },
  // Add trusted origins for both www and non-www versions
  trustedOrigins: [
    "https://eastbayblinds.com",
    "https://www.eastbayblinds.com",
    "http://localhost:3000",
  ],
  secret:
    process.env.BETTER_AUTH_SECRET ||
    "fallback-secret-key-change-in-production",
  baseURL: getBaseURL(),
});

export async function checkUserLimit() {
  try {
    const userCount = await db.select({ count: sql`count(*)` }).from(schema.user);
    return Number(userCount[0]?.count || 0) >= 2;
  } catch (error) {
    console.error("Error checking user count:", error);
    return false;
  }
}
