"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AdmissionFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    course: "",
    qualification: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const res = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("✅ Form submitted successfully!");
        setFormData({
          name: "", email: "", phone: "", dob: "", address: "", course: "", qualification: "",
        });
      } else {
        setMessage("❌ Error submitting form");
      }
    } catch (err) {
      setMessage("❌ Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl p-8 max-w-lg w-full"
      >
        <h1 className="text-3xl font-extrabold text-center text-purple-600 mb-6">
          Admission Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Full Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Phone Number", name: "phone", type: "text" },
            { label: "Date of Birth", name: "dob", type: "date" },
            { label: "Address", name: "address", type: "text" },
            { label: "Course Interested", name: "course", type: "text" },
            { label: "Last Qualification", name: "qualification", type: "text" },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                value={formData[field.name as keyof typeof formData]}
                onChange={(e) =>
                  setFormData({ ...formData, [field.name]: e.target.value })
                }
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow hover:scale-105 transition"
          >
            Submit
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm font-medium text-gray-700">{message}</p>
        )}
      </motion.div>
    </div>
  );
}
