// src/models/Notice.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface INotice extends Document {
  title: string;
  body: string;
  tags: string[];
  pdfUrl?: string;
  pinned?: boolean;
  createdAt?: Date;
}

const NoticeSchema = new Schema<INotice>({
  title: { type: String, required: true },
  body: { type: String, required: true },
  tags: [{ type: String }],
  pdfUrl: { type: String },
  pinned: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.Notice || mongoose.model<INotice>('Notice', NoticeSchema);
