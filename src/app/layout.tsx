// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-poppins" });

export const metadata = {
  title: "ACET - Demo",
  description: "College website demo project",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
