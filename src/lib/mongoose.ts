// src/lib/mongoose.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) throw new Error("Please add MONGODB_URI to .env.local");

let isConnected = false;

export const connectToDatabase = async () => {
  if (isConnected) return;
  await mongoose.connect(MONGODB_URI);
  isConnected = true;
  console.log("✅ Connected to MongoDB (mongoose)");
};
