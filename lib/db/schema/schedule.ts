import { pgTable, varchar, timestamp, smallserial } from 'drizzle-orm/pg-core';

export const schedule = pgTable('schedule', {
  id: smallserial().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
