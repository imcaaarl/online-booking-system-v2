ALTER TABLE "feedback" ALTER COLUMN "rating" SET DATA TYPE varchar(10);--> statement-breakpoint
ALTER TABLE "feedback" ADD COLUMN "remarks" varchar(255) NOT NULL;