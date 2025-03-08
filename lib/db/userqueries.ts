import { db } from './drizzle';
import { user } from './schema/user';
import { InferSelectModel } from 'drizzle-orm';

export type User = InferSelectModel<typeof user>;

export async function getUsers() {
  return db
    .select({
      id: user.id,
      name: user.name,
      username: user.username,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    })
    .from(user);
}
