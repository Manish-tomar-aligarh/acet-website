// src/app/api/notices/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongoose';
import Notice from '../../../models/Notice';

export async function GET(req: Request) {
  await connectToDatabase();
  const url = new URL(req.url);
  const tag = url.searchParams.get('tag');
  const limit = Number(url.searchParams.get('limit') || 50);

  const query = tag ? { tags: tag } : {};
  const notices = await Notice.find(query).sort({ pinned: -1, createdAt: -1 }).limit(limit).lean();
  return NextResponse.json(notices);
}

export async function POST(req: Request) {
  const secret = req.headers.get('x-admin-secret') || '';
  if (secret !== process.env.ADMIN_SECRET) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const data = await req.json();
  await connectToDatabase();
  const created = await Notice.create(data);
  return NextResponse.json(created);
}

 

