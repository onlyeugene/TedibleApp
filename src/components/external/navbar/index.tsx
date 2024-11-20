"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/navbar/logo.svg";
import MenuToggle from "./menu-toggle";
import MobileMenu from "./mobile-menu";
import DesktopMenu from "./desktop-menu";

const Navbar: React.FC = () => {
  const [dropdown, setDropdown] = useState(false);
  const [closing, setClosing] = useState(false);
  const path = usePathname();

  function toggleDropdown() {
    if (dropdown) {
      // Start closing animation
      setClosing(true);
      // Wait for animation to complete before setting dropdown to false
      setTimeout(() => {
        setDropdown(false);
        setClosing(false);
        document.body.classList.remove("overflow-hidden"); // Remove body scroll lock
      }, 500); // Match the duration of the fadeOutRight animation
    } else {
      setDropdown(true);
      document.body.classList.add("overflow-hidden"); // Lock body scroll
    }
  }

  useEffect(() => {
    // Clean up the body class on component unmount or when dropdown closes unexpectedly
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div
      id="top"
      className="w-full bg-white fixed py-3 z-20 shadow-sm border-b"
    >
      <div className="flex container justify-between items-center w-11/12">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            width={120}
            height={100}
            className={path === "/" ? "border-red" : ""}
            priority
          />
        </Link>

        <DesktopMenu path={path} />
        <div onClick={toggleDropdown} className="md:hidden block">
          <MenuToggle />
        </div>

        {dropdown && (
          <MobileMenu
            toggleDropdown={toggleDropdown}
            path={path}
            closing={closing}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
