import "./globals.css";
import Navbar from "@/components/external/navbar";
import Footer from "@/components/external/footer";
// import { usePathname } from "next/navigation"; // Use usePathname instead of useRouter for server components


import { getServerSession } from "next-auth";
import AuthProvider from "@/utils/AuthProvider";



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname(); // This helps check the current route
  // const showFooter = !["/login", "/register"].includes(pathname); // Exclude footer on certain pages

  const session = await getServerSession()

  return (
    <html lang="en">
      <body>
        <AuthProvider session={session}>
        <Navbar />
        {children}
        {/* {showFooter && */}
        <Footer />
        {/* // } Conditionally render the footer */}
        </AuthProvider>
      </body>
    </html>
  );
}
