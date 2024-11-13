import React from "react";
import menu1 from "@/assets/home/specialmenu/menu 1.svg";
import menu2 from "@/assets/home/specialmenu/menu 2.svg";
import menu3 from "@/assets/home/specialmenu/menu 3.svg";
import menu4 from "@/assets/home/specialmenu/menu 4.svg";
import menu5 from "@/assets/home/specialmenu/menu 5.svg";
import menu6 from "@/assets/home/specialmenu/menu 6.svg";
import menu7 from "@/assets/home/specialmenu/menu 7.svg";
import menu8 from "@/assets/home/specialmenu/menu 8.svg";
import arrowright from "@/assets/home/specialmenu/arrowright.svg";
import Page from "@/components/cards/menucard/index";
import Image from "next/image";
import Link from "next/link";

const menu = [
  {
    id: 1,
    image: menu1,
    price: "2500",
    name: "Spicy food",
    restaurant: "Spice Route",
  },
  {
    id: 2,
    image: menu2,
    price: "3000",
    name: "Chicken & chips",
    restaurant: "Kenturkey Fried Chicken",
  },
  {
    id: 3,
    image: menu3,
    price: "2000",
    name: "Beef",
    restaurant: "Chicken Republic",
  },
  {
    id: 4,
    image: menu4,
    price: "1500",
    name: "Vegetable",
    restaurant: "Awoof Brekete",
  },
  {
    id: 5,
    image: menu5,
    price: "1500",
    name: "Vegetable",
    restaurant: "Awoof Brekete",
  },
  {
    id: 6,
    image: menu6,
    price: "1500",
    name: "Vegetable",
    restaurant: "Awoof Brekete",
  },
  {
    id: 7,
    image: menu7,
    price: "1500",
    name: "Vegetable",
    restaurant: "Awoof Brekete",
  },
  {
    id: 8,
    image: menu8,
    price: "2500",
    name: "Vegetable",
    restaurant: "Awoof Brekete",
  },
];

// Page Rendering
const SpecialMenu: React.FC = () => {
  return (
    <section className="relative mt-[.5rem] mb-[3.25rem] lg:my-[3.25rem] container w-11/12">
      <div className="grid place-content-center pb-[60px]">
        <h1 className="sm:text-[50px] text-[29px] text font-medium text-center">
          Special Menu
        </h1>
        <h5 className="text-sm md:text-base lg:text-lg 2xl:text-xl text-center lg:max-w-[65ch]">
          Discover our specially curated menu, designed to delight your taste
          buds with unique and seasonal dishes
        </h5>
      </div>

      <div className="scrollbar-hide overflow-x-auto lg:overflow-x-visible scrollbar-y-[red-200]">
        {/* Menu Card */}
        <div className="flex items-center lg:grid lg:grid-cols-4 gap-[1.188rem] lg:gap-[3.198rem] lg:gap-y-[100px]">
          {menu.map((item) => (
            <div
              key={item.id}
              className="flex-none w-[50%] md:w-[calc(30%-0.594rem)] lg:w-auto"
            >
              <Page {...item} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Link href="/restaurants">
          <p className="mt-[10px] lg:mt-[31px] flex items-center underline text-tertiary font-light text-[.938rem] lg:text-[1.5rem] 2xl:text-[2.5rem]">
            See more
            <span>
              <Image src={arrowright} alt="arrow right" />
            </span>
          </p>
        </Link>
      </div>
    </section>
  );
};

export default SpecialMenu;
