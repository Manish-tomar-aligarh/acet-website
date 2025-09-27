// src/app/api/faculty/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongoose";
import Faculty from "../../../models/Faculty";

export async function GET() {
  await connectToDatabase();
  const faculty = await Faculty.find().sort({ name: 1 }).lean();
  return NextResponse.json(faculty);
}

export async function POST(req: Request) {
  const secret = req.headers.get("x-admin-secret") || "";
  if (secret !== process.env.ADMIN_SECRET) return new NextResponse("Unauthorized", { status: 401 });

  const data = await req.json();
  await connectToDatabase();
  const created = await Faculty.create(data);
  return NextResponse.json(created);
}
