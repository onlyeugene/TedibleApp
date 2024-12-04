"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { defaultRedirectPath } from "@/routes";
import Loader from "@/components/ui/loader";

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace(defaultRedirectPath);
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return <Loader />;
} 