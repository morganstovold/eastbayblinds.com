-- Contact Submissions Table Migration
-- Run this SQL in your Neon database to create the contact submissions table

CREATE TABLE IF NOT EXISTS "contact_submission" (
  "id" text PRIMARY KEY NOT NULL,
  "first_name" text NOT NULL,
  "last_name" text NOT NULL,
  "email" text,
  "phone" text,
  "zip_code" text NOT NULL,
  "service_type" text NOT NULL,
  "message" text,
  "status" text DEFAULT 'new' NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL,
  "updated_at" timestamp DEFAULT now() NOT NULL
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS "contact_submission_status_idx" ON "contact_submission"("status");
CREATE INDEX IF NOT EXISTS "contact_submission_created_at_idx" ON "contact_submission"("created_at");
CREATE INDEX IF NOT EXISTS "contact_submission_service_type_idx" ON "contact_submission"("service_type");

-- Add constraint to ensure either email or phone is provided
ALTER TABLE "contact_submission" ADD CONSTRAINT "contact_submission_email_or_phone_check" 
CHECK ("email" IS NOT NULL OR "phone" IS NOT NULL); 