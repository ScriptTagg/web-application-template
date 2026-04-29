"use client";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import FullScreenLoader from "@/shared/components/layout/FullScreenLoader";
import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { isAuthenticated, isInitialized } = useAuth();
  useEffect(() => {
    if (!isInitialized) return;
    if (isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, isInitialized, router]);

  if (!isInitialized) return <FullScreenLoader />;
  if (isAuthenticated) return null;
  return <>{children}</>;
}
