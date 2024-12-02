"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Header from "@/components/internal/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/internal/sidebar/app-sidebar";
import LoadingSpinner from "@/components/ui/spinner";
import CartPreview from "@/components/internal/cart";

const InternalLayout = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  const router = useRouter();

  // console.log(status, session);

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
      <main className="flex flex-col w-full bg-[#EDF5FA]">
        <div className="w-full fixed top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <Header />
        </div>
        <div className="md:flex block xl:w-[75%] md:py-20 py-36">
          {children}   
        </div>
        <div className="">
            <CartPreview />
          </div>
      </main>
    </SidebarProvider>
  );
};

export default InternalLayout;