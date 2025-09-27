// src/app/api/departments/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongoose";
import Department from "../../../models/Department";

export async function GET() {
  await connectToDatabase();
  const depts = await Department.find().sort({ name: 1 }).lean();
  return NextResponse.json(depts);
}

export async function POST(req: Request) {
  const secret = req.headers.get("x-admin-secret") || "";
  if (secret !== process.env.ADMIN_SECRET) return new NextResponse("Unauthorized", { status: 401 });

  const data = await req.json();
  await connectToDatabase();
  const created = await Department.create(data);
  return NextResponse.json(created);
}
