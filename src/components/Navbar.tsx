// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";   // ✅ Image import

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ✅ scroll effect
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ client mount hone ke baad localStorage se theme load karo
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    } catch {}
    setMounted(true);
  }, []);

  // ✅ darkMode state change hone par theme apply karo
  useEffect(() => {
    if (!mounted) return; // server mismatch avoid
    if (darkMode) {
      document.documentElement.classList.add("dark");
      try { localStorage.setItem("theme", "dark"); } catch {}
    } else {
      document.documentElement.classList.remove("dark");
      try { localStorage.setItem("theme", "light"); } catch {}
    }
  }, [darkMode, mounted]);

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg backdrop-blur-md bg-blue-800/95" : "navbar-gradient"
      }`}
    >
      <div
        className="container mx-auto flex items-center justify-between px-4"
        style={{ height: 72 }}
      >
        {/* ✅ Logo + College Name */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-white">
            <Image
              src="/logo.jpeg"     // 👈 apni logo.jpeg ko /public folder me rakho
              alt="College Logo"
              width={56}
              height={56}
              className="object-cover"
            />
          </div>
          <span className="font-bold text-2xl text-black">ALIGARH COLLEGE</span>
        </div>

        {/* ✅ Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-white">
          <Link href="/" className={pathname === "/" ? "font-bold underline" : ""}>
            Home
          </Link>
          <Link href="/about">About</Link> 
          <Link href="/programs">Courses</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/admissions"
            className="ml-4 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
          >
            Apply Now
          </Link>

          {mounted && (
            <button
              onClick={() => setDarkMode((v) => !v)}
              className="ml-3 px-3 py-1 rounded bg-white/20 hover:bg-white/30 text-white"
              aria-label="Toggle theme"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          )}
        </nav>

        {/* ✅ Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/admissions"
            className="bg-green-500 px-3 py-1 rounded text-white"
          >
            Apply
          </Link>
          {mounted && (
            <button
              onClick={() => setDarkMode((v) => !v)}
              className="px-3 py-1 rounded bg-white/20 text-white"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
