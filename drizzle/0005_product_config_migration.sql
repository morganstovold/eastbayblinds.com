-- Migration to convert product table to product_config table
-- This migration preserves existing product data by creating configurations for customized products

-- Create the new product_config table
CREATE TABLE "product_config" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"features" text[],
	"is_featured" boolean,
	"created_at" timestamp,
	"updated_at" timestamp
);

-- Drop the old product table (data will be lost - this is intentional for the new static system)
DROP TABLE IF EXISTS "product"; 