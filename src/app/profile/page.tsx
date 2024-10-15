'use client';

import { useSession, signOut } from 'next-auth/react';

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }
  console.log(session);
  

  return (
    <div>
      <p>Welcome {session?.user?.name}</p>
      <p>Username: {session?.user?.username}</p>
      <p>Email: {session?.user?.email}</p>
      <button onClick={()=> signOut()} className='border'>Sign out</button>
    </div>
  );
}
