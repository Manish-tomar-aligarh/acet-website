// src/models/Event.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  date: Date;
  venue?: string;
  desc?: string;
  bannerUrl?: string;
}

const EventSchema = new Schema<IEvent>({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  venue: String,
  desc: String,
  bannerUrl: String,
}, { timestamps: true });

export default mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);
