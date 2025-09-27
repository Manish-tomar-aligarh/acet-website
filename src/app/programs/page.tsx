"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type Program = {
  _id: string;
  name: string;
  dept: string;
  level: string;
  duration: string;
  eligibility: string;
  fees?: string;
  createdAt: string;
};

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/programs")
      .then((res) => res.json())
      .then((data) => {
        setPrograms(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-center mb-10 mt-8 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Programs
      </h1>

      {loading ? (
        <p className="text-center">Loading programs...</p>
      ) : programs.length === 0 ? (
        <p className="text-center">No programs found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p) => (
            <Link
              key={p._id}
              href={`/programs/${p._id}`}
              className="relative block rounded-xl overflow-hidden shadow-lg group transform transition duration-500 hover:scale-[1.03]"
            >
              {/* Background gradient with sliding effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>

              {/* Content */}
              <div className="relative p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-pink-500 transition-colors">
                    {p.name}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {p.level} • Dept: {p.dept}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Duration: {p.duration}
                  </p>
                  <p className="mt-3 text-sm text-gray-800 dark:text-gray-200 line-clamp-2">
                    {p.eligibility}
                  </p>
                </div>
                {p.fees && (
                  <p className="mt-4 text-sm font-medium text-gray-900 dark:text-white">
                    Fees: <span className="text-green-600">{p.fees}</span>
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
