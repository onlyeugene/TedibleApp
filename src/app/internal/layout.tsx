'use client';

import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import Sidebar from '@/components/internal/sidebar';
import Header from '@/components/internal/header';
import { useRouter } from 'next/navigation';
import CartPreview from '@/components/internal/cart';

const InternalLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Use useEffect unconditionally
  useEffect(() => {
    // If the session is loading, return early
    if (status === 'loading') return;

    // If there is no session, redirect to login
    if (!session?.user) {
      router.push('/login');
    }
  }, [session, status, router]); // Dependency array includes session, status, and router

  // Show a loading message while the session is being fetched
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div className='flex'>
        {/* Internal Page  */}
        <Sidebar />
        <div className='w-full h-full'>
          <Header />
          <div className="sm:bg-[#EDF5FA] bg-white py-7 h-[calc(100vh-53px)] flex justify-between"> 
            {/* formerly 64px  */}
            {children}
            <CartPreview />
          </div>
        </div> 
      </div>
    );
  }
};

export default InternalLayout; // Export the component