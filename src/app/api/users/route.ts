import { NextResponse } from "next/server";
import { db } from "../../../../lib/db/drizzle";
import { user } from "../../../../lib/db/migrations/schema";
import { eq } from "drizzle-orm";

/**
 * CRUD
 * 
 * Create a user
 * 
 * 
 */

export async function POST(req: Request) {
  try {
    const { name, username, password } = await req.json();
    const [newUser] = await db.insert(user).values({ name, username, password }).returning();

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

/**
 * 
 * READ
 */


export async function GET() {
  try {
    const allUsers = await db.select().from(user);

    console.log('allUsers: ', allUsers);
    return NextResponse.json(allUsers, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}


/**
 * UPDATE
 */
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { name } = await req.json();
    await db.update(user).set({ name }).where(eq(user.id, Number(params.id)));

    return NextResponse.json({ message: "User updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}

/**
 * DELETE
 */
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await db.delete(user).where(eq(user.id, Number(params.id)));

    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}