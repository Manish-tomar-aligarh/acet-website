import mongoose from "mongoose";

let isConnected = false; // track connection

export default async function dbConnect() {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI as string);

    isConnected = !!db.connections[0].readyState;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
}
