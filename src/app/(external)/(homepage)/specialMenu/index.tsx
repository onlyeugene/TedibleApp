import React from "react";
import arrowright from "@/assets/home/specialmenu/arrowright.svg";
import Image from "next/image";
import Link from "next/link";
import MenuCard from "@/components/cards/menucard/index";
import { Top_Order } from "@/lib/consts/top-order";

const SpecialMenu: React.FC = () => {
  return (
    <section className="mt-[.5rem] mb-[3.25rem] lg:my-[3.25rem] container w-11/12">
      <div className="grid place-content-center pb-[60px]">
        <h1 className="sm:text-[50px] text-[29px] text font-medium text-center">
          Special Menu
        </h1>
        <h5 className="text-sm md:text-base lg:text-lg 2xl:text-xl text-center lg:max-w-[65ch]">
          Discover our specially curated menu, designed to delight your taste
          buds with unique and seasonal dishes
        </h5>
      </div>
      <div className="w-full scrollbar-hide overflow-x-auto lg:overflow-x-clip">
  <div className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-8">
    {Top_Order.map((item) => (
      <div key={item.id} className="">
        {/* Menu Card */}
        <MenuCard {...item}/>
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
