import { pgTable, varchar, timestamp, smallserial } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: smallserial().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  username: varchar('username', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
