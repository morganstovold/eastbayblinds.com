import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import * as schema from "./db-schema";
import { sql } from "drizzle-orm";

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
  secret:
    process.env.BETTER_AUTH_SECRET ||
    "fallback-secret-key-change-in-production",
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
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
