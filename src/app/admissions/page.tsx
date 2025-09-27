"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AdmissionsPage() {
  const steps = [
    { title: "Step 1: Registration", desc: "Fill out the online registration form with your basic details." },
    { title: "Step 2: Document Submission", desc: "Upload required academic and identity documents securely." },
    { title: "Step 3: Entrance Exam", desc: "Appear for the entrance exam as per the scheduled date." },
    { title: "Step 4: Interview", desc: "Attend the personal interview round conducted by our panel." },
    { title: "Step 5: Admission Confirmation", desc: "Confirm your admission by paying the fee and completing formalities." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 py-12 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg"
      >
        Admission Process
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center text-gray-600 mt-4 max-w-2xl mx-auto"
      >
        Follow these simple steps to secure your admission with us. We ensure a
        smooth, transparent and fair process for every student.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="group relative bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-all hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-blue-600 hover:text-white"
          >
            <div className="relative">
              <h2 className="text-xl font-bold transition-colors duration-300 group-hover:text-white">
                {step.title}
              </h2>
              <p className="mt-3 text-gray-600 transition-colors duration-300 group-hover:text-gray-100">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-16"
      >
        <Link href="/admissions/form">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg hover:scale-105 transition">
            Apply Now
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
