// src/app/faculty/page.tsx
"use client";
import { useEffect, useState } from "react";

export default function FacultyPage() {
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/faculty")
      .then(r => r.json())
      .then(setList)
      .catch(console.error);
  }, []);
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Faculty</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {list.map(f => (
          <div key={f._id} className="bg-white p-4 rounded shadow">
            <div className="flex items-center gap-3">
              <img src={f.photoUrl || '/placeholder.png'} alt={f.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-semibold">{f.name}</div>
                <div className="text-sm text-gray-600">{f.designation} — {f.dept}</div>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-700">{(f.researchAreas || []).join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
