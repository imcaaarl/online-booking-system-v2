import { pgTable, varchar, timestamp, smallserial } from 'drizzle-orm/pg-core';

export const feedback = pgTable('feedback', {
  id: smallserial().primaryKey(),
  rating: varchar('rating', { length: 1 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
