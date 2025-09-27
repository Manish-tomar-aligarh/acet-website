import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

let cachedClient: MongoClient | null = null;

async function connectToMongo() {
  if (cachedClient) return cachedClient;
  const client = new MongoClient(process.env.MONGODB_URI!);
  await client.connect();
  cachedClient = client;
  return client;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ message: "No data received" }, { status: 400 });
    }

    const client = await connectToMongo();
    const db = client.db("collegeDB");
    const collection = db.collection("admissions");

    await collection.insertOne(body);

    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("POST /api/admission error:", error);
    return NextResponse.json({ message: "Error submitting form" }, { status: 500 });
  }
}
