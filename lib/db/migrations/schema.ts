import { pgTable, foreignKey, smallserial, varchar, timestamp } from 'drizzle-orm/pg-core';

export const sample = pgTable(
  'sample',
  {
    id: smallserial().primaryKey().notNull(),
    userId: smallserial('user_id').notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: 'sample_user_fk',
    }),
  ],
);

export const todos = pgTable('todos', {
  id: smallserial().primaryKey().notNull(),
  text: varchar({ length: 255 }).notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).defaultNow().notNull(),
});

export const user = pgTable('user', {
  id: smallserial().primaryKey().notNull(),
  name: varchar({ length: 255 }).notNull(),
  username: varchar({ length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).defaultNow().notNull(),
});
