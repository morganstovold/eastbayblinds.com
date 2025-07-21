CREATE TABLE "review" (
	"id" text PRIMARY KEY NOT NULL,
	"customer_name" text NOT NULL,
	"rating" integer NOT NULL,
	"text" text NOT NULL,
	"location" text,
	"is_active" boolean DEFAULT true NOT NULL,
	"is_featured" boolean DEFAULT false NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);
