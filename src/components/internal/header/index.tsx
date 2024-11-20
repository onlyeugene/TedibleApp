import Button from "@/components/buttons";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import notification from "@/assets/internal/header/notification.svg";
import cart from "@/assets/internal/header/cart.svg";
import prompt from "@/assets/internal/dashboard/prompt.svg";
import logo from "@/assets/navbar/logo.svg";
import Input from "@/components/input";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";

// Custom hooks
import { useModal } from "@/hooks/useModal";
import { useDropdownInternal } from "@/hooks/useDropdown";

// Session Handlers
import { signOut } from "next-auth/react";
import { useUserSession } from "@/session/useUserSession";
// import { usePathname } from "next/navigation";
// import { SideBarLinks } from "@/lib/consts/sidebar-links";

const Header = () => {
  const { session, user } = useUserSession();

  const { modal, handleOpenModal } = useModal();
  const { dropdown, handleDropdown, dropdownRef, dropdownTriggerRef } =
    useDropdownInternal();
  const [sidebarMobile, setSidebarMobile] = useState(false);

  function handleSidebarToggleMobile() {
    setSidebarMobile(!sidebarMobile);
  }
  // const path = usePathname()

  if (session) {
    return (
      <div className="py-2 flex gap-2 sm:gap-0 flex-col-reverse lg:flex-row justify-between sm:items-center px-3 w-full">
        <div className="w-full relative ">
          <FiSearch
            style={{ color: "gray" }}
            className="absolute top-[.7rem] left-2 "
          />
          <Input
            placeholder="Search"
            className="py-2 w-full rounded-md px-7 text-sm"
          />
        </div>
        <div className="flex items-center gap-2 w-full lg:w-1/2 lg:justify-end justify-between">
          <div
            className="lg:hidden flex items-center gap-3"
            onClick={handleSidebarToggleMobile}
          >
            <ul className="flex flex-col gap-1 cursor-pointer lg:hidden">
              <li className="w-6 h-[3px] bg-tertiary border-tertiary rounded-full border"></li>
              <li className="w-6 h-[3px] bg-tertiary border-tertiary rounded-full border"></li>
              <li className="w-6 h-[3px] bg-tertiary border-tertiary rounded-full border"></li>
            </ul>
            <Link href="/internal/dashboard">
              <Image src={logo} alt="Logo" width={100} priority />
            </Link>
          </div>
          <div className="flex items-center gap-2 justify-end">
            <Image
              src={notification}
              alt="notification icon"
              priority
              className="rounded-full border w-9 py-2 px-2"
            />
            <Image
              src={cart}
              alt="cart icon"
              priority
              className="rounded-full border w-9 py-2 px-2"
            />
            <Link href="/internal/profile" className="flex items-center gap-2">
              {user?.image ? (
                <Image
                  src={user?.image as string}
                  alt="user image"
                  width={33}
                  height={33}
                  className="rounded-full"
                  priority
                />
              ) : (
                <RxAvatar size={25} style={{ color: "gray" }} />
              )}
              <h2 className="text-sm sm:block hidden">
                {user?.firstName &&
                  user?.firstName.charAt(0).toUpperCase() +
                    user?.firstName.slice(1).toLowerCase()}
              </h2>
            </Link>
            <span
              ref={dropdownTriggerRef}
              onClick={handleDropdown}
              className="lg:block hidden "
            >
              <MdOutlineKeyboardArrowDown size={22} style={{ color: "gray" }} />
            </span>
          </div>
        </div>

        {dropdown && (
          <ul
            ref={dropdownRef}
            className="absolute border bg-white w-[8rem] right-4 top-11 shadow-md py-2 rounded-md text-center text-xs"
          >
            <li className="pb-1" onClick={handleDropdown}>
              <Link href="/internal/settings">Settings</Link>
            </li>
            <hr />
            <li className="py-2" onClick={handleDropdown}>
              <Link href="/">Go to Website</Link>
            </li>
            <hr />
            <li className="pt-1" onClick={handleDropdown}>
              <Button
                className="border-none hover:border hover:rounded-sm hover:text-primary hover:bg-tertiary hover:py-[1pxpx] hover:px-6 py-[.5px] px-6 place-items-end text-xs"
                onClick={handleOpenModal}
              >
                Log Out
              </Button>
            </li>
          </ul>
        )}

        {modal && (
          <div
            className="absolute top-0 left-0 w-full h-screen bg-[#00000048] bg-opacity-50 flex justify-center items-center z-10"
            onClick={handleOpenModal}
          >
            <div
              className="bg-primary py-10 px-20 rounded-lg flex flex-col justify-center items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={prompt} alt="prompt icon" width={100} height={100} />
              <h1 className="text-[22px]">Are you leaving?</h1>
              <p className="text-sm font-light">
                Are you sure you want to log out?
              </p>

              <div className="flex gap-10">
                <Button
                  className="py-2 px-6 rounded-md border-tertiary"
                  onClick={handleOpenModal}
                >
                  Cancel
                </Button>
                <Button
                  className="py-2 px-9 rounded-md bg-tertiary text-primary border-tertiary"
                  onClick={() => signOut()}
                >
                  Yes
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* SIDEBAR MOBILE  */}
        {/* {sidebarMobile && (
  <div className='h-screen w-60 bg-secondary text-primary p-4 shadow-lg sm:hidden block absolute top-0' onClick={handleSidebarToggleMobile}>
  <div className='mb-8'>
    <Image src={logo} alt='' width={100} height={100} />
  </div>
  <hr />
  <nav className='flex flex-col space-y-2 pt-5'>
    {SideBarLinks.map((item) => (
      <Link
        href={item.path}
        key={item.slug}
        className={`flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200 ${
          path === item.path
            ? 'bg-tertiary text-primary shadow-md'
            : 'hover:bg-[#e9e9e967] hover:text-primary'
        }`}
      >
        <Image src={item.icon} alt={item.title} width={24} height={24} priority />
        <span className='text-sm'>{item.title}</span>
      </Link>
    ))}
  </nav>
</div>
)} */}
      </div>
    );
  }

  return null;
};

export default Header;
