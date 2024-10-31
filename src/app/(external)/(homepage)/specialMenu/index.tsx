import React from "react";
import menu1 from "@/assets/home/specialmenu/menu 1.svg";
import menu2 from "@/assets/home/specialmenu/menu 2.svg";
import menu3 from "@/assets/home/specialmenu/menu 3.svg";
import menu4 from "@/assets/home/specialmenu/menu 4.svg";
import menu5 from "@/assets/home/specialmenu/menu 5.svg";
import menu6 from "@/assets/home/specialmenu/menu 6.svg";
import menu7 from "@/assets/home/specialmenu/menu 7.svg";
import menu8 from "@/assets/home/specialmenu/menu 8.svg";
import Page from "@/components/cards/menucard/index";

const SpecialMenu: React.FC = () => {
  return (
    <section className="relative py-4 container w-11/12">
        <h1 className="sm:text-[50px] text-[29px] text font-medium text-center">
          Special Menu
        </h1>
        <h5 className="text-sm md:text-base lg:text-lg 2xl:text-xl text-center">
          Discover our specially curated menu, designed to delight your taste
          buds with unique and seasonal dishes
        </h5>

        {/* Card */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3.198rem]">
          <Page
            image={menu1}
            name="Chicken & Chips"
            restaurant="Macdonalds"
            price="2500"
          />
          <Page
            image={menu2}
            name="Chicken & Chips"
            restaurant="Macdonalds"
            price="2500"
          />
          <Page
            image={menu3}
            name="Chicken & Chips"
            restaurant="Macdonalds"
            price="2500"
          />
          <Page
            image={menu4}
            name="Chicken & Chips"
            restaurant="Macdonalds"
            price="2500"
          />
          <Page
            image={menu5}
            name="Chicken & Chips"
            restaurant="Macdonalds"
            price="2500"
          />
          <Page
            image={menu6}
            name="Chicken & Chips"
            restaurant="Macdonalds"
            price="2500"
          />
          <Page
            image={menu7}
            name="Chicken & Chips"
            restaurant="Macdonalds"
            price="2500"
          />
          <Page
            image={menu8}
            name="Chicken & Chips"
            restaurant="Macdonalds"
            price="2500"
          />
        </div>
    </section>
  );
};

export default SpecialMenu;
