import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string; // 🔑 .env.local me add karo
const client = new MongoClient(uri);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await client.connect();
    const db = client.db("collegeDB");
    const collection = db.collection("admissions");
    await collection.insertOne(body);
    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error submitting form" }, { status: 500 });
  }
}
