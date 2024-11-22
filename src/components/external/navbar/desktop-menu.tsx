import React from "react";
import Link from "next/link";
import Button from "@/components/buttons";
import { signOut } from "next-auth/react";
import { RxAvatar } from "react-icons/rx";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { useUserSession } from "@/session/useUserSession";
import { useDropdownExternal } from "@/hooks/useDropdown";
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DesktopMenuProps {
  path: string;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ path }) => {
  const { session, user } = useUserSession();
  const { dropdown, handleDropdown, dropdownRef, dropdownTriggerRef } =
    useDropdownExternal();

  const links = [
    { href: "/", label: "Home" },
    { href: "/restaurants", label: "Restaurants" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <ul className="md:flex items-center md:gap-10 gap-1 hidden">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={path === href ? "text-[#FF7834]" : ""}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="relative">
        {session ? (
          <div className="sm:flex gap-4 items-center hidden">
            {user?.image ? (
              <Image
                src={user.image as string}
                alt="user image"
                width={25}
                height={25}
                className="rounded-full"
                priority
              />
            ) : (
              <RxAvatar size={25} style={{ color: "gray" }} />
            )}
            <p className="text-sm">{user?.firstName}</p>
            <DropdownMenu>
              <DropdownMenuTrigger className="md:block hidden">
                <MdOutlineKeyboardArrowDown
                  size={22}
                  style={{ color: "gray" }}
                />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="flex flex-col items-center w-[12rem]">
                <DropdownMenuItem
                  asChild
                  className="py-1 px-7 focus:bg-tertiary focus:rounded-md focus:text-primary cursor-pointer"
                >
                  <Link href="/internal/dashboard">Go to Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="w-full" />
                <DropdownMenuItem
                  asChild
                  className="py-1 px-7 hover:bg-tertiary hover:rounded-md hover:text-primary cursor-pointer"
                >
                  <Button className="border-none" onClick={() => signOut()}>Log Out</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="md:flex items-center gap-5 hidden">
            <Link href="/auth/login">
              <Button className="border-[#FF7834] py-2 px-6 rounded-md text-[#FF7834]">
                Login
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="bg-[#FF7834] py-2 px-6 rounded-md border-[#FF7834] text-white">
                Register
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default DesktopMenu;
