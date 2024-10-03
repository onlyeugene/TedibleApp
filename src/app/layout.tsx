'use client'
import "./globals.css";
import Navbar from "@/components/external/navbar";
import Footer from "@/components/external/footer";
import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter for server components



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // This helps check the current route
  const showFooter = !["/login", "/register"].includes(pathname); // Exclude footer on certain pages

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        {showFooter && <Footer />} {/* Conditionally render the footer */}
      </body>
    </html>
  );
}
