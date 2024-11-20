import React from "react";
import Link from "next/link";
import Button from "@/components/buttons";
import { signOut } from "next-auth/react";
import { RxAvatar } from "react-icons/rx";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { useUserSession } from "@/session/useUserSession";
import { useDropdownExternal } from "@/hooks/useDropdown";

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
      <ul className="sm:flex items-center md:gap-10 gap-1 hidden">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={path === href ? "text-[#FF7834]" : ""}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

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
          <p className="text-sm">{user?.firstname}</p>
          <span ref={dropdownTriggerRef} onClick={handleDropdown}>
            <MdOutlineKeyboardArrowDown size={22} style={{ color: "gray" }} />
          </span>
        </div>
      ) : (
        <div className="sm:flex items-center gap-5 hidden">
          <Link href="/login">
            <Button className="border-[#FF7834] py-2 px-6 rounded-md text-[#FF7834]">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-[#FF7834] py-2 px-6 rounded-md border-[#FF7834] text-white">
              Register
            </Button>
          </Link>
        </div>
      )}

      {session && dropdown && (
        <ul
          ref={dropdownRef}
          className="absolute border bg-white w-[8rem] right-4 top-11 shadow-md py-2 rounded-md text-center text-xs"
        >
          <li className="py-2" onClick={handleDropdown}>
            <Link href="/internal/dashboard">Go to Dashboard</Link>
          </li>
          <hr />
          <li className="pt-1" onClick={handleDropdown}>
            <Button
              className="border-none hover:border hover:rounded-sm hover:text-primary hover:bg-tertiary hover:py-[1pxpx] hover:px-6 py-[.5px] px-6 place-items-end text-xs"
              onClick={() => signOut()}
            >
              Log Out
            </Button>
          </li>
        </ul>
      )}
    </>
  );
};

export default DesktopMenu;
