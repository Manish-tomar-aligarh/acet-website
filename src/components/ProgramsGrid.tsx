// src/components/ProgramsGrid.tsx
"use client";
import { useEffect, useState } from "react";
export default function ProgramsGrid(){
  const [list, setList] = useState<any[]>([]);
  useEffect(()=> {
    fetch("/api/programs?limit=8")
      .then(r=> r.json())
      .then(setList)
      .catch(console.error);
  },[]);
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6">Academic Programs</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {list.map(p => (
          <a key={p._id} href={`/programs/${p._id}`} className="bg-white/5 p-6 rounded-lg">
            <div className="w-14 h-14 bg-[#1849d3] rounded mb-3" />
            <div className="font-semibold">{p.name}</div>
            <div className="text-sm text-gray-400">{p.level} • {p.dept}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
