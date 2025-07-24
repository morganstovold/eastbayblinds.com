CREATE TABLE "product_config" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"features" text[],
	"is_featured" boolean,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
DROP TABLE "product" CASCADE;