"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    const s = localStorage.getItem("admin_secret");
    if (!s && !process.env.NEXT_PUBLIC_ADMIN_SECRET) {
      router.replace("/admin/login");
    }
  }, [router]);

  return <>{children}</>;
}
