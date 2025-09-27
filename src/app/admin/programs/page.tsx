"use client";
import React, { useEffect, useState } from "react";
import AdminGuard from "../AdminGuard";

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // form states
  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [level, setLevel] = useState("UG");
  const [duration, setDuration] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [fees, setFees] = useState("");
  const [file, setFile] = useState<File | null>(null); // ✅ new state for file
  const [editingId, setEditingId] = useState<string | null>(null); // ✅ for Edit mode

  useEffect(() => {
    fetchPrograms();
  }, []);

  async function fetchPrograms() {
    setLoading(true);
    try {
      const res = await fetch("/api/programs");
      const data = await res.json().catch(() => []);
      setPrograms(data || []);
    } catch (err) {
      console.error("Error fetching programs:", err);
    } finally {
      setLoading(false);
    }
  }

  // ✅ Helper to get secret
  function getAdminSecret() {
    return (
      localStorage.getItem("admin-secret") ||
      process.env.NEXT_PUBLIC_ADMIN_SECRET ||
      (document.getElementById("admin-secret") as HTMLInputElement)?.value ||
      ""
    );
  }

  // ✅ Cloudinary upload helper
  async function uploadToCloudinary(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url;
  }

  // submit handler
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const adminSecret = getAdminSecret();

    let syllabusUrl = "";
    if (file) {
      syllabusUrl = await uploadToCloudinary(file); // ✅ upload file
    }

    if (editingId) {
      // ✅ UPDATE
      const res = await fetch(`/api/programs/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": adminSecret,
        },
        body: JSON.stringify({
          name,
          dept,
          level,
          duration,
          eligibility,
          fees,
          syllabusPdf: syllabusUrl, // ✅ added
        }),
      });

      if (res.ok) {
        const updated = await res.json();
        setPrograms(programs.map((p) => (p._id === editingId ? updated : p)));
        alert("✅ Program updated!");
        resetForm();
      } else {
        const err = await res.json();
        alert("❌ Failed to update: " + (err.error || ""));
      }
    } else {
      // ✅ CREATE
      const res = await fetch("/api/programs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-secret": adminSecret,
        },
        body: JSON.stringify({
          name,
          dept,
          level,
          duration,
          eligibility,
          fees,
          syllabusPdf: syllabusUrl, // ✅ added
        }),
      });

      if (res.ok) {
        const data = await res.json();
        alert("✅ Program added!");
        setPrograms([...programs, data]);
        resetForm();
      } else {
        const err = await res.json();
        alert("❌ Failed to add program: " + (err.error || ""));
      }
    }
  }

  function resetForm() {
    setName("");
    setDept("");
    setLevel("UG");
    setDuration("");
    setEligibility("");
    setFees("");
    setFile(null);
    setEditingId(null);
  }

  // delete handler
  async function deleteProgram(id: string) {
    const adminSecret = getAdminSecret();

    if (!confirm("Are you sure you want to delete this program?")) return;

    try {
      const res = await fetch(`/api/programs/${id}`, {
        method: "DELETE",
        headers: {
          "x-admin-secret": adminSecret,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        alert("❌ Failed to delete: " + (data.error || ""));
        return;
      }

      alert("✅ Program deleted!");
      setPrograms(programs.filter((p) => p._id !== id));
    } catch (error) {
      console.error("Delete error:", error);
      alert("❌ Something went wrong");
    }
  }

  return (
    <AdminGuard>
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Programs</h1>

        {/* ADD/EDIT FORM */}
        <form onSubmit={submit} className="space-y-3 mb-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Program name"
            className="border p-2 w-full"
            required
          />
          <input
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            placeholder="Department"
            className="border p-2 w-full"
            required
          />
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="border p-2 w-full"
          >
            <option value="UG">UG</option>
            <option value="PG">PG</option>
            <option value="Diploma">Diploma</option>
          </select>
          <input
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Duration e.g. 4 years"
            className="border p-2 w-full"
            required
          />
          <textarea
            value={eligibility}
            onChange={(e) => setEligibility(e.target.value)}
            placeholder="Eligibility"
            className="border p-2 w-full"
            required
          />
          <input
            value={fees}
            onChange={(e) => setFees(e.target.value)}
            placeholder="Fees e.g. 1,20,000 per year"
            className="border p-2 w-full"
            required
          />

          {/* ✅ File Upload */}
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="border p-2 w-full"
          />

          {/* ✅ Fallback input (optional) */}
          <input
            id="admin-secret"
            placeholder="ADMIN_SECRET (fallback)"
            className="border p-2 w-full"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            {editingId ? "Update" : "Create"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          )}
        </form>

        {/* SHOW PROGRAMS */}
        {loading ? (
          <p>Loading programs...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {programs.map((p) => (
              <div
                key={p._id}
                className="p-4 bg-gray-800 rounded text-white flex flex-col"
              >
                <h2 className="text-lg font-semibold">
                  {p.name} — <span className="text-sm">{p.level}</span>
                </h2>
                <p>
                  Dept: {p.dept} • {p.duration}
                </p>
                <p>Eligibility: {p.eligibility}</p>
                {p.fees && <p>Fees: {p.fees}</p>}
                {p.syllabusPdf && (
                  <a
                    href={p.syllabusPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    📄 View Syllabus
                  </a>
                )}
                <p>{new Date(p.createdAt).toLocaleString()}</p>

                <div className="mt-3 flex gap-2">
                  {/* EDIT BUTTON */}
                  <button
                    onClick={() => {
                      setEditingId(p._id);
                      setName(p.name);
                      setDept(p.dept);
                      setLevel(p.level);
                      setDuration(p.duration);
                      setEligibility(p.eligibility);
                      setFees(p.fees || "");
                    }}
                    className="bg-yellow-500 px-3 py-1 rounded text-white"
                  >
                    Edit
                  </button>

                  {/* DELETE BUTTON */}
                  <button
                    onClick={() => deleteProgram(p._id)}
                    className="bg-red-600 px-3 py-1 rounded text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminGuard>
  );
}
