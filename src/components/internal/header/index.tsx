import Button from "@/components/buttons";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import notification from "@/assets/internal/header/notification.svg";
import cart from "@/assets/internal/header/cart.svg";
import prompt from "@/assets/internal/dashboard/prompt.svg";
import Input from "@/components/input";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";

// Custom hooks
import { useModal } from "@/hooks/useModal";
import { useDropdownInternal } from "@/hooks/useDropdown";

const Header = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const { modal, handleOpenModal } = useModal();
  const { dropdown, handleDropdown, dropdownRef } = useDropdownInternal();

  if (session) {
    return (
      <div className="py-2 flex justify-between items-center px-3 w-full">
        <div className="w-full relative">
          <FiSearch
            style={{ color: "gray" }}
            className="absolute top-1.5 left-2"
          />
          <Input
            placeholder="Search"
            className="py-1 w-full rounded-md px-7 text-sm"
          />
        </div>
        <div className="flex items-center gap-2 w-1/2 justify-end">
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
          <Link href='/internal/profile' className="flex items-center gap-2">
            {user?.image ? (
              <Image
                src={user?.image as string}
                alt="user image"
                width={25}
                height={25}
                className="rounded-full"
                priority
              />
            ) : (
              <RxAvatar size={25} style={{ color: 'gray' }} />
            )}
            <h2 className="text-sm">
              {user?.name &&
                user.name.split(" ")[0].charAt(0).toUpperCase() +
                user.name.split(" ")[0].slice(1).toLowerCase()}
            </h2>
          </Link>
          <MdOutlineKeyboardArrowDown
            size={22}
            style={{ color: "gray" }}
            onClick={handleDropdown}
          />
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
            className="absolute top-0 left-0 w-full h-screen bg-[#00000048] bg-opacity-50 flex justify-center items-center"
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
      </div>
    );
  }

  return null;
};

export default Header;
