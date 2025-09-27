// src/components/TopBar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  return (

    
    <div className="bg-gray-100 text-sm text-gray-700">
      <div className="container mx-auto flex justify-between items-center px-4 py-1">
        <div>📞 +91 9568200010 | ✉️ mail@acetup.org</div>
        <div className="relative">
          <button onClick={() => setOpen(!open)} className="px-2 py-1 border rounded">
            Quick Links ▾
          </button>
          {open && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow p-2 w-48">
              <Link href="/admissions" className="block py-1">Admissions</Link>
              <Link href="/notices" className="block py-1">Notices</Link>
              <Link href="/programs" className="block py-1">Programs</Link>
              <Link href="/contact" className="block py-1">Contact</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
