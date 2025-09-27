// src/app/departments/page.tsx
"use client";
import { useEffect, useState } from "react";

export default function DepartmentsPage() {
  const [depts, setDepts] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/departments")
      .then(r => r.json())
      .then(setDepts)
      .catch(console.error);
  }, []);
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Departments</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {depts.map(d => (
          <div key={d._id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{d.name}</h2>
            <div className="text-sm text-gray-600">HOD: {d.hod}</div>
            <p className="mt-2 text-gray-700">{d.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
