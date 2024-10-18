import { useUserSession } from '@/session/useUserSession';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useSessionWithDelay = (delay: number = 5000) => {
    const { session, status } = useUserSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') return;

    if (!session?.user) {
      router.push('/login'); // Redirect to login if no session exists
    }

    const timer = setTimeout(() => {
      setLoading(false); // Stop showing spinner after delay
    }, delay);

    // Cleanup timer on unmount or if dependencies change
    return () => clearTimeout(timer);
  }, [session, status, router, delay]);

  return { session, status, loading };
};

export default useSessionWithDelay;



// // src/hooks/useSessionWithDelay.ts
// import { useUserSession } from '@/session/useUserSession';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// const useSessionWithDelay = (delay: number = 5000) => {
//   const { session, status } = useUserSession();
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const [hasShownSpinner, setHasShownSpinner] = useState(false); // Track spinner display state

//   useEffect(() => {
//     if (status === 'loading') return;

//     if (!session?.user) {
//       router.push('/login'); // Redirect to login if no session exists
//     } else if (session && !hasShownSpinner) {
//       setHasShownSpinner(true);
//       const timer = setTimeout(() => {
//         setLoading(false); // Stop showing spinner after delay
//       }, delay);
  
//       // Cleanup timer on unmount or if dependencies change
//       return () => clearTimeout(timer);
//     } else {
//       setLoading(false); // Stop loading if session exists and spinner has been shown
//     }
//   }, [session, status, router, delay, hasShownSpinner]);

//   return { session, status, loading };
// };

// export default useSessionWithDelay;
