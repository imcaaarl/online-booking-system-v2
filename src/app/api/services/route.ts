import { NextResponse } from "next/server";
import { db } from "../../../../lib/db/drizzle";

import { eq } from "drizzle-orm";
import { service } from "../../../../lib/db/schema/service";

/**
 * CRUD
 * 
 * Create a user
 * 
 * 
 */

export async function POST(req: Request) {
  try {
    const {name} = await req.json();
    const [newservice] = await db.insert(service).values({name}).returning();

    return NextResponse.json(newservice, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create service" }, { status: 500 });
  }
}

/**
 * 
 * READ
 */


export async function GET() {
  try {
    const allservices = await db.select().from(service);

    console.log('allUservices: ', allservices);
    return NextResponse.json(allservices, { status: 200 });
  } catch (error) {
    console.log('error:',error)
    return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 });
  }
}


/**
 * UPDATE
 */
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { name } = await req.json();
    await db.update(service).set({ name }).where(eq(service.id, Number(params.id)));

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
    await db.delete(service).where(eq(service.id, Number(params.id)));

    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}