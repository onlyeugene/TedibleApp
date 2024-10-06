"use client";

import Button from "@/components/buttons";
import { signOut, useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h1>Hello, {session?.user?.name}</h1>
      <Button onClick={() => signOut()}>SignOut</Button>
      </>
    );
  }

  return (
    <div>
    </div>
  );
}
