"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/hero1.png", "/hero2.png", "/hero3.png", "/hero4.png"];

export default function HeroCinematic() {
  const [index, setIndex] = useState(0);

  // Auto change every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[420px] md:h-[500px] overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="absolute inset-0"
    >
      <Image
        src={images[index]}
        alt="Campus"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
    </motion.div>
  </AnimatePresence>

  {/* Content */}
  <div className="relative z-10 container mx-auto h-full flex items-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl text-white"
    >
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        Aligarh College — Modern Infrastructure & Industry-ready Programs
      </h1>
      <p className="mt-4 text-sm md:text-base   text-bold  text-amber-700/90">
        Hands-on labs, dedicated placement team, and experienced faculty
        helping students succeed.
      </p>
      <div className="mt-6 flex gap-3">
        <a
          href="/admissions"
          className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-md shadow-lg transition active:scale-95"
        >
          Apply Now
        </a>
        <a
          href="/programs"
          className="border border-white/40 px-5 py-3 rounded-md text-white hover:bg-white/10 transition active:scale-95"
        >
          View Programs
        </a>
      </div>
    </motion.div>
  </div>
</section>

  );
}
