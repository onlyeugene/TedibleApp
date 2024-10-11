'use client';

import { useSession } from 'next-auth/react';
import React from 'react';
import Login from '../(external)/login/page';
import Sidebar from '@/components/internal/sidebar';
import Header from '@/components/internal/header';


const InternalLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();

  // Wait until the session is fetched
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // If there is no session, redirect to login
  if (!session?.user) {
    return <Login />;
  }

  return (
    <div className='flex'>
      {/* Internal Page */}
      <Sidebar />
      <div className='w-full h-full'>
        <Header />
        <div className="bg-gray-200 p-4 h-[calc(100vh-64px)] flex justify-between">
        {children}
        <h2>Cart</h2>
        </div>
      </div>
      <h2></h2>
    </div>
  );
};

export default InternalLayout;
