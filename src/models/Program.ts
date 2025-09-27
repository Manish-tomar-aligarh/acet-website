import mongoose, { Schema, model, models } from "mongoose";

export interface ProgramType {
  _id: string;
  name: string;
  level: string;
  dept: string;
  duration: number;
  eligibility: string;
  fees?: number;
  createdAt: Date;
}

const ProgramSchema = new Schema<ProgramType>(
  {
    name: { type: String, required: true },
    level: { type: String, required: true },
    dept: { type: String, required: true },
    duration: { type: Number, required: true },
    eligibility: { type: String, required: true },
    fees: { type: Number },
  },
  { timestamps: true }
);

const Program = models.Program || model<ProgramType>("Program", ProgramSchema);

export default Program;
