'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/ui/spinner';
import Sidebar from '@/components/internal/sidebar';
import Header from '@/components/internal/header';
import CartPreview from '@/components/internal/cart';

const InternalLayout = ({ children }: { children: React.ReactNode }) => {
  const { status, data: session } = useSession();
  const router = useRouter();

  console.log(status, session);
  

  // Use useEffect to handle navigation
  React.useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  // Show loading spinner while checking authentication
  if (status === 'loading') {
    return (
      <div className='flex items-center justify-center h-screen bg-gray-100'>
        <LoadingSpinner />
      </div>
    );
  }

  // Return null if unauthenticated (will redirect in effect)
  if (status === 'unauthenticated') {
    return null;
  }

  // Render the layout if authenticated
  return (
    <div className='flex w-full'>
      <Sidebar />
      <div className='w-full h-full'>
        <Header />
        <div className='w-full sm:bg-[#EDF5FA] bg-white sm:py-7 py-3 h-full flex justify-between'>
          {children}
          <CartPreview />
        </div>
      </div>
    </div>
  );
};

export default InternalLayout;
