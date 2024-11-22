"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Header from "@/components/internal/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/internal/sidebar/app-sidebar";
import LoadingSpinner from "@/components/ui/spinner";

const InternalLayout = ({ children }: { children: React.ReactNode }) => {
  const { status, data: session } = useSession();
  const router = useRouter();

  console.log(status, session);

  // Use useEffect to handle navigation
  React.useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  // Show loading spinner while checking authentication
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <LoadingSpinner />
      </div>
    );
  }

  // Return null if unauthenticated (will redirect in effect)
  if (status === "unauthenticated") {
    return null;
  }

  // Render the layout if authenticated
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <main className="min-h-screen flex flex-col w-full">
        <div className="w-full fixed top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <Header />
        </div>
        <div className="bg-[#EDF5FA] w-full py-20">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};

export default InternalLayout;

// <div className='flex w-full'>
//   <Sidebar />
//   <div className='w-full h-full'>
//     <div className='w-full sm:bg-[#EDF5FA] bg-white sm:py-7 py-3 h-full flex justify-between'>
//       {children}
//     </div>
//   </div>
// </div>
