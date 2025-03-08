import { relations } from 'drizzle-orm/relations';
import { user, sample } from './schema';

export const sampleRelations = relations(sample, ({ one }) => ({
  user: one(user, {
    fields: [sample.userId],
    references: [user.id],
  }),
}));

export const userRelations = relations(user, ({ many }) => ({
  samples: many(sample),
}));
