ALTER TABLE "feedback" ADD COLUMN "rating" varchar(1) NOT NULL;--> statement-breakpoint
ALTER TABLE "schedule" ADD COLUMN "date" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "schedule" ADD COLUMN "time" varchar(255) NOT NULL;