"use client";
import Google from "@/assets/home/register/google.svg";
import TechStudio from "@/assets/home/register/techstudio.svg";

import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";

export const Social = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center w-full flex-col">
      <h1>{pathname === "/auth/register" ? "Or Sign up with" : "Or Log in with"}</h1>
      <div>
      <Button variant="link" onClick={() => signIn("google")}>
        <Image src={Google} alt="Google Icon" className="h-6 w-6" />
      </Button>
      <Button variant="link">
        <Image src={TechStudio} alt="Google Icon" className="h-6 w-6" />
      </Button>
      </div>
    </div>
  );
};
