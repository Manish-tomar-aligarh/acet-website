// src/components/NoticesPreview.tsx
"use client";
import { useEffect, useState } from "react";
export default function NoticesPreview(){
  const [notices, setNotices] = useState<any[]>([]);
  useEffect(()=> {
    fetch("/api/notices?limit=3")
      .then(r=> r.json()).then(setNotices).catch(console.error);
  },[]);
  return (
    <section className="container mx-auto py-8 px-4">
      <div className="grid md:grid-cols-3 gap-6">
        {notices.map(n=>(
          <div key={n._id} className="bg-white p-6 rounded shadow">
            <h3 className="font-bold">{n.title}</h3>
            <p className="text-sm mt-2 line-clamp-3">{n.content}</p>
            <a href={`/notices/${n._id}`} className="text-blue-600 mt-3 inline-block">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}
