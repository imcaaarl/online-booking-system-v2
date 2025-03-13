import { NextResponse } from "next/server";
import { db } from "../../../../lib/db/drizzle";

import { eq } from "drizzle-orm";
import { schedule } from "../../../../lib/db/schema/schedule";



export async function POST(req: Request) {
  try {
    const {name, date, time} = await req.json();
    const [newschedule] = await db.insert(schedule).values({name, date, time}).returning();

    return NextResponse.json(newschedule, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create schedule" }, { status: 500 });
  }
}

/**
 * 
 * READ
 */


export async function GET() {
  try {
    const allschedules = await db.select().from(schedule);

    console.log('allSchedules: ', allschedules);
    return NextResponse.json(allschedules, { status: 200 });
  } catch (error) {
    console.log('error:',error)
    return NextResponse.json({ error: "Failed to fetch schedule" }, { status: 500 });
  }
}


/**
 * UPDATE
 */
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { name } = await req.json();
    await db.update(schedule).set({ name }).where(eq(schedule.id, Number(params.id)));

    return NextResponse.json({ message: "schedule updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update schedule" }, { status: 500 });
  }
}

/**
 * DELETE
 */
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json()
    await db.delete(schedule).where(eq(schedule.id, Number(body.id)));

    return NextResponse.json({ message: "schedule deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete schedule" }, { status: 500 });
  }
}