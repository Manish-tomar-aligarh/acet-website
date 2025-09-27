// src/models/Faculty.ts
import mongoose, { Schema, model, models } from "mongoose";

const FacultySchema = new Schema({
  name: { type: String, required: true },
  dept: { type: String, required: true },
  designation: { type: String },
  email: { type: String },
  photoUrl: { type: String },
  researchAreas: [String],
}, { timestamps: true });

const Faculty = models.Faculty || model("Faculty", FacultySchema);
export default Faculty;
