import React, { useState } from "react";
import menu1 from '@/assets/home/specialmenu/menu 1.svg'
import Page from '@/components/cards/menucard/index'
import Image from "next/image";
import stars from "@/assets/home/specialmenu/five stars.svg";
import plus from "@/assets/home/specialmenu/plus icon.svg";

const SpecialMenu: React.FC = () => {
  return (
    <section className="relative py-4 container mx-auto px-5">
      <div className="">
        <h1 className="sm:text-[50px] text-[29px] text font-medium text-center">
          Special Menu
        </h1>
        <h5 className="text-sm md:text-base lg:text-lg 2xl:text-xl text-center">
          Discover our specially curated menu, designed to delight your taste
          buds with unique and seasonal dishes
        </h5>

        {/* Card */}
        <Page 
        image={menu1}
        name="Chicken & Chips"
        restaurant="Macdonalds"
        price="N2500"/>
      </div>
    </section>
  );
};

export default SpecialMenu;
