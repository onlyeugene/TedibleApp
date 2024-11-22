import Button from "@/components/buttons";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import notification from "@/assets/internal/header/notification.svg";
import cart from "@/assets/internal/header/cart.svg";
import prompt from "@/assets/internal/dashboard/prompt.svg";
import logo from "@/assets/navbar/logo.svg";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";

import { useModal } from "@/hooks/useModal";
import { useDropdownInternal } from "@/hooks/useDropdown";
import { signOut } from "next-auth/react";
import { useUserSession } from "@/session/useUserSession";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

type FoodItem = {
  name: string;
  restaurant: string;
  type: "Food" | "Restaurant";
  image: string;
};

const foodItems: FoodItem[] = [
  {
    name: "Chicken Burger",
    restaurant: "Muna Bees Kitchen",
    type: "Restaurant",
    image: "/images/burger.png",
  },
  {
    name: "Chicken Burger",
    restaurant: "MacDonalds",
    type: "Food",
    image: "/images/burger.png",
  },
  {
    name: "Chicken Burger",
    restaurant: "Burgeat",
    type: "Restaurant",
    image: "/images/burger.png",
  },
  {
    name: "Chicken Burger",
    restaurant: "Meaty Treats",
    type: "Food",
    image: "/images/burger.png",
  },
];

const Header = () => {
  const { user } = useUserSession();
  const { modal, handleOpenModal } = useModal();
  const { dropdown, handleDropdown, dropdownRef, dropdownTriggerRef } =
    useDropdownInternal();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<FoodItem[]>([]);
  const [sidebarMobile, setSidebarMobile] = useState(false);

  const dropdownSearchRef = useRef<HTMLDivElement>(null);

  const handleSidebarToggleMobile = () => {
    setSidebarMobile(!sidebarMobile);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query) {
      const results = foodItems.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.restaurant.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownSearchRef.current &&
      !dropdownSearchRef.current.contains(event.target as Node)
    ) {
      setSearchQuery("");
      setFilteredResults([]);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [searchQuery]);

  return (
    <div className="py-2 flex flex-col-reverse md:flex-row md:items-center px-3 w-full gap-2">
      <div className="relative w-full md:w-1/3">
        <FiSearch className="absolute top-[.7rem] left-2 text-gray-500" />
        <input
          type="text"
          placeholder="Search by food or restaurant"
          value={searchQuery}
          onChange={handleSearchChange}
          className="py-2 w-full rounded-md px-10 text-sm border border-gray-200 focus:outline-none"
        />

        {searchQuery && (
          <div
            ref={dropdownSearchRef}
            className="absolute bg-white border w-full mt-1 rounded-lg shadow-lg z-50"
          >
            {filteredResults.length > 0 ? (
              filteredResults.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={30}
                    height={30}
                    className="rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold">{`${item.name} - ${item.restaurant}`}</h3>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      item.type === "Restaurant"
                        ? "bg-orange-200 text-orange-600"
                        : "bg-green-200 text-green-600"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
              ))
            ) : (
              <p className="p-2 text-gray-500">No results found</p>
            )}
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 md:w-1/2 md:justify-end justify-between">
        <div
          className="md:hidden flex items-center gap-3"
          onClick={handleSidebarToggleMobile}
        >
          <ul className="flex flex-col gap-1 cursor-pointer md:hidden">
            <li className="w-6 h-[3px] bg-tertiary border-tertiary rounded-full border"></li>
            <li className="w-6 h-[3px] bg-tertiary border-tertiary rounded-full border"></li>
            <li className="w-6 h-[3px] bg-tertiary border-tertiary rounded-full border"></li>
          </ul>
          <Link href="/internal/dashboard">
            <Image src={logo} alt="Logo" width={100} priority />
          </Link>
        </div>
        <div className="flex items-center gap-2 justify-end w-full">
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

          <DropdownMenu>
            <DropdownMenuTrigger className="md:block hidden">
              <MdOutlineKeyboardArrowDown size={22} style={{ color: "gray" }} />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="flex flex-col items-center w-[10rem]">
              
              <DropdownMenuItem asChild className="py-1 px-7 focus:bg-tertiary focus:rounded-md focus:text-primary cursor-pointer">
                <Link href="/internal/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="w-full"/>
              <DropdownMenuItem asChild className="py-1 px-7 focus:bg-tertiary focus:rounded-md focus:text-primary cursor-pointer">
                <Link href="/">Go to Website</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="w-full"/>
              <DropdownMenuItem onClick={handleOpenModal} className="py-1 px-7 focus:bg-tertiary focus:rounded-md focus:text-primary cursor-pointer">
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      
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
};

export default Header;
