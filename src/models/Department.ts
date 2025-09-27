// src/models/Department.ts
import mongoose, { Schema, model, models } from "mongoose";

const DepartmentSchema = new Schema({
  name: { type: String, required: true },
  hod: { type: String },
  about: { type: String },
  labs: [{ name: String, desc: String }],
  downloads: [{ title: String, url: String }],
}, { timestamps: true });

const Department = models.Department || model("Department", DepartmentSchema);
export default Department;
