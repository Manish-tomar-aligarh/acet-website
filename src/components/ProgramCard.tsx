"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProgramCard({ program }: { program: any }) {
  return (
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true }}
  className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 cursor-pointer"
>

      {/* Agar image hai to use karo */}
      {program.image && (
        <Image
          src={program.image}
          alt={program.name}
          width={400}
          height={200}
          className="w-full h-40 object-cover rounded-md"
        />
      )}

      <h3 className="text-lg font-semibold mt-3">{program.name}</h3>
      <p className="text-sm text-gray-600">
        {program.dept} • {program.level}
      </p>
      <p className="mt-3 text-sm text-gray-700 line-clamp-3">
        {program.eligibility}
      </p>
    </motion.div>
  );
}
