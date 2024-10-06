"use client";

import React from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import Button from "@/components/buttons";
import { useSession, signOut } from "next-auth/react"; // Import useSession and signOut

interface MobileMenuProps {
  toggleDropdown: () => void;
  path: string;
  closing: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ toggleDropdown, path, closing }) => {
  const { data: session } = useSession(); // Correct placement of useSession

  return (
    <>
      {/* Background overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-50 z-10 sm:hidden block`}
        onClick={toggleDropdown}
      />

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed left-0 top-0 h-full w-80 px-10 py-20 flex flex-col gap-7 bg-white z-20 sm:hidden ${
          closing ? "animate-fadeOutRight" : "animate-fadeInLeft"
        }`}
      >
        <FiX
          style={{ color: "white" }}
          className="border rounded-md bg-[#FF7834] border-[#FF7834] w-6 h-6 absolute top-10 right-10 cursor-pointer"
          onClick={toggleDropdown}
        />
        
        {/* Conditional rendering based on session */}
        {session ? (
          <>
            <li>
              <Link href={"/"} className={path === "/" ? "text-[#FF7834]" : ""} onClick={toggleDropdown}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/restaurants"} className={path === "/restaurants" ? "text-[#FF7834]" : ""} onClick={toggleDropdown}>
                Restaurants
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className={path === "/contact" ? "text-[#FF7834]" : ""} onClick={toggleDropdown}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href={"/about"} className={path === "/about" ? "text-[#FF7834]" : ""} onClick={toggleDropdown}>
                About Us
              </Link>
            </li>

            <div className="flex flex-col gap-4 items-center">
              <p>{session.user?.name} </p>
              <Button className="py-2 px-4 w-full rounded-md" onClick={() => signOut()}>Sign Out</Button>
            </div>
          </>
        ) : (
          <>
            <li>
              <Link href={"/"} className={path === "/" ? "text-[#FF7834]" : ""} onClick={toggleDropdown}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/restaurants"} className={path === "/restaurants" ? "text-[#FF7834]" : ""} onClick={toggleDropdown}>
                Restaurants
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className={path === "/contact" ? "text-[#FF7834]" : ""} onClick={toggleDropdown}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href={"/about"} className={path === "/about" ? "text-[#FF7834]" : ""} onClick={toggleDropdown}>
                About Us
              </Link>
            </li>

            <div className="flex flex-col items-center gap-5">
              <Link href={"/login"} onClick={toggleDropdown}>
                <Button className="border-[#FF7834] py-1 px-[6.5rem] rounded-sm text-[#FF7834]">
                  Login
                </Button>
              </Link>
              <Link href={"/register"} onClick={toggleDropdown}>
                <Button className="bg-[#FF7834] py-1 px-[6rem] rounded-sm border-[#FF7834] text-white">
                  Register
                </Button>
              </Link>
            </div>
          </>
        )}
      </ul>
    </>
  );
};

export default MobileMenu;
