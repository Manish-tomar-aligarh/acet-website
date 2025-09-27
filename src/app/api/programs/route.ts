// src/app/api/programs/route.ts
import { NextResponse } from "next/server";
import { connectToDatabase } from "../../../lib/mongoose";
import Program from "../../../models/Program";

export async function GET(req: Request) {
  try {
    await connectToDatabase();

    const url = new URL(req.url);
    const level = url.searchParams.get("level") || undefined;

    const query: any = {};
    if (level) query.level = level;

    const programs = await Program.find(query).sort({ createdAt: -1 }).lean();

    return NextResponse.json(programs, { status: 200 });
  } catch (error: any) {
    console.error("GET /api/programs error:", error);
    return NextResponse.json(
      { error: "Failed to fetch programs" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const secret = req.headers.get("x-admin-secret") || "";
    if (secret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();

    // ✅ validate against schema fields
    if (
      !data ||
      !data.name ||
      !data.dept ||
      !data.level ||
      !data.duration ||
      !data.eligibility
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const created = await Program.create(data);

    return NextResponse.json(created, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/programs error:", error);
    return NextResponse.json(
      { error: "Failed to create program" },
      { status: 500 }
    );
  }
}
