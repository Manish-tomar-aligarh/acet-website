// src/app/api/test-db/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongoose"; 
import Student from "../../../models/Student"; 

export async function GET() {
  try {
    await connectToDatabase();

    // fetch all students as quick test
    const students = await Student.find().lean();
    return NextResponse.json({ ok: true, students });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message || String(err) }, { status: 500 });
  }
}
