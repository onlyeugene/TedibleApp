'use client';

import React from 'react';
import Sidebar from '@/components/internal/sidebar';
import Header from '@/components/internal/header';
import CartPreview from '@/components/internal/cart';
import LoadingSpinner from '@/components/ui/spinner';
import useSessionWithDelay from '@/hooks/useSessionWithDelay';

const InternalLayout = ({ children }: { children: React.ReactNode }) => {
  const { session, status, loading } = useSessionWithDelay(5000); // Call custom hook with 5-second delay

  // While session is loading or spinner delay is active, show the spinner
  if (loading || status === 'loading') {
    return (
      <div className='flex items-center justify-center h-screen bg-gray-100'>
        <LoadingSpinner /> {/* Spinner shown for 5 seconds after login */}
      </div>
    );
  }

  // Render the full internal layout once the spinner delay is over and session exists
  if (session) {
    return (
      <div className='flex w-full'>
        <Sidebar />
        <div className='w-full h-full'>
          <Header />
          <div className='w-full sm:bg-[#EDF5FA] bg-white sm:py-7 py-3 h-[calc(100vh-53px)] flex justify-between'>
            {children}
            <CartPreview />
          </div>
        </div>
      </div>
    );
  }

  return null; // Safety fallback return
};

export default InternalLayout;
