import { NextResponse } from "next/server";
import { db } from "../../../../lib/db/drizzle";

import { eq } from "drizzle-orm";
import { feedback } from "../../../../lib/db/schema/feedback";

/**
 * CRUD
 * 
 * Create a feedback
 * 
 * 
 */

export async function POST(req: Request) {
  try {
    const {name, rating, remarks} = await req.json();
    const [newschedule] = await db.insert(feedback).values({name, rating, remarks}).returning();

    return NextResponse.json(newschedule, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create feedback" }, { status: 500 });
  }
}

/**
 * 
 * READ
 */


export async function GET() {
  try {
    const allschedules = await db.select().from(feedback);

    console.log('allFeedback: ', allschedules);
    return NextResponse.json(allschedules, { status: 200 });
  } catch (error) {
    console.log('error:',error)
    return NextResponse.json({ error: "Failed to fetch feedback" }, { status: 500 });
  }
}


/**
 * UPDATE
 */
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { name } = await req.json();
    await db.update(feedback).set({ name }).where(eq(feedback.id, Number(params.id)));

    return NextResponse.json({ message: "feedback updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update feedback" }, { status: 500 });
  }
}

/**
 * DELETE
 */
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json()
    await db.delete(feedback).where(eq(feedback.id, Number(body.id)));

    return NextResponse.json({ message: "feedback deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete feedback" }, { status: 500 });
  }
}