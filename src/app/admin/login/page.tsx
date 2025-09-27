"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [secret, setSecret] = useState("");
  const router = useRouter();

  useEffect(() => {
    // if already logged in, go to admin programs
    const s = localStorage.getItem("admin_secret");
    if (s) router.replace("/admin/programs");
  }, [router]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // simple client-side check vs env var (for mini project)
    if (secret === process.env.NEXT_PUBLIC_ADMIN_SECRET) {
      localStorage.setItem("admin_secret", secret);
      alert("Logged in ✅");
      router.push("/admin/programs");
    } else {
      alert("Wrong secret — try again");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h1 className="text-xl font-semibold mb-4">Admin Login</h1>
        <input
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          placeholder="Paste ADMIN_SECRET"
          className="w-full p-2 border rounded mb-3"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
}
