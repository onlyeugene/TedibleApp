import "./globals.css";
import { getServerSession } from "next-auth";
import AuthProvider from "@/utils/AuthProvider";
import ToastProvider from "@/providers/toast-provider";
import { authOptions } from "@/lib/authOptions";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <ToastProvider />
        <AuthProvider session={session}>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
