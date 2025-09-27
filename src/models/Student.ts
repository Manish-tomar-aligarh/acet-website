// src/models/Student.ts
import mongoose, { Schema, model, models } from "mongoose";

const StudentSchema = new Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  course: { type: String, required: true },
}, { timestamps: true });

// Prevent model overwrite during hot reloads
const Student = models.Student || model("Student", StudentSchema);
export default Student;
