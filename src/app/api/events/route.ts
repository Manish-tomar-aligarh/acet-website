// src/app/api/events/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongoose';
import Event from '../../../models/Event';

export async function GET() {
  await connectToDatabase();
  const events = await Event.find().sort({ date: 1 }).lean();
  return NextResponse.json(events);
}

export async function POST(req: Request) {
  const secret = req.headers.get('x-admin-secret') || '';
  if (secret !== process.env.ADMIN_SECRET) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const data = await req.json();
  await connectToDatabase();
  const created = await Event.create(data);
  return NextResponse.json(created);
}
