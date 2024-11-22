"use client";

import Navbar from "@/components/external/navbar";
import Footer from "@/components/external/footer";
import { usePathname } from "next/navigation";

export default function ExternalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // This helps check the current route
  const showFooter = !["/login", "/register", "/forgot-password"].includes(pathname); // Exclude footer on certain pages

  return (
    <>
      <Navbar />
      <div className="md:pt-12 pt-10">
      {children}
      </div>
      {showFooter && <Footer />}
    </>
  );
}
