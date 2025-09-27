import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Program from "@/models/Program";

// ✅ DELETE Program
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> } // params is Promise
) {
  try {
    await dbConnect();

    const adminSecret = req.headers.get("x-admin-secret");
    if (adminSecret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params; // ✅ await params
    const deleted = await Program.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Program not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Program deleted successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error deleting program:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// ✅ PUT Program (Update)
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> } // params is Promise
) {
  try {
    await dbConnect();

    const adminSecret = req.headers.get("x-admin-secret");
    if (adminSecret !== process.env.ADMIN_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params; // ✅ await params
    const body = await req.json();

    const updated = await Program.findByIdAndUpdate(id, body, {
      new: true, // return updated document
      runValidators: true,
    });

    if (!updated) {
      return NextResponse.json({ error: "Program not found" }, { status: 404 });
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (err) {
    console.error("Error updating program:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
