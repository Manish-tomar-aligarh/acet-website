// src/components/ProgramDetailClient.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

type ProgramProps = {
  _id: string;
  name: string;
  dept: string;
  level: string;
  duration: string;
  eligibility: string;
  fees?: string;
  createdAt?: string | null; // ISO string (serialized on server)
};

export default function ProgramDetailClient({ program }: { program: ProgramProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-tr from-blue-50 via-white to-green-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 p-8 rounded-2xl shadow-xl"
    >
      <h1 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
        {program.name}
      </h1>

      <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        {program.level} • Dept: {program.dept} • {program.duration}
      </div>

      <p className="text-gray-800 dark:text-gray-200 mb-4 leading-relaxed">
        {program.eligibility}
      </p>

      {program.fees && (
        <div className="mb-4 text-lg">
          Fees:{" "}
          <strong className="text-green-700 dark:text-green-400">
            {program.fees}
          </strong>
        </div>
      )}

      <div className="text-xs text-gray-500 dark:text-gray-400">
        Created:{" "}
        {program.createdAt ? new Date(program.createdAt).toLocaleString() : "—"}
      </div>
    </motion.div>
  );
}
