import "./globals.css";
import Navbar from "@/components/external/navbar";
import Footer from "@/components/external/footer";
import { getServerSession } from "next-auth";
import { NextAuthProvider } from "@/utils/NextAuthProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <NextAuthProvider session={session}>
          <Navbar />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
