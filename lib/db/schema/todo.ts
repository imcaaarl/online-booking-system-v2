import { pgTable, varchar, timestamp, smallserial } from 'drizzle-orm/pg-core';

export const todos = pgTable('todos', {
  id: smallserial().primaryKey(),
  text: varchar('text', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
