import { pgTable, varchar, timestamp, smallserial } from 'drizzle-orm/pg-core';

export const service = pgTable('service', {
  id: smallserial().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
