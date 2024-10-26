import { useSession } from "next-auth/react";

export const useUserSession = () => {
  const { data: session, status } = useSession();
  const user = session?.user;

  return { session, user, status};
};
