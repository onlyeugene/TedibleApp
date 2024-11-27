import Input from "@/components/input";
import React from "react";

import { FiSearch } from "react-icons/fi";

const RestaurantHero = () => {
  return (
    <div className="categoryHero bg-center w-full">
      <div className="py-20 flex flex-col items-center justify-center ">
        <h1 className="md:text-[50px] text-2xl pb-3 text-white">
          {/* You can search for restaurants and varieties of food */}
          Restaurants
        </h1>
        <form className="w-full  flex flex-col justify-center items-center">
          <div className="relative w-[40rem] md:block hidden">
            <Input
              type="search"
              placeholder="Search"
              className="outline-none py-1 w-full px-5 text-[20.26px] pr-[3rem] rounded-md mt-3"
            />
            <FiSearch
              style={{ color: "white" }}
              className="bg-[#FF7834] border-[#FF7834] w-8 h-8 py-[3px] rounded-md absolute top-0 my-[16px] right-0 mr-[3px]"
            />
          </div>

          <div className="md:hidden block w-11/12 relative">
            <Input
              type="search"
              placeholder="Search food"
              className="w-full border  rounded-md py-2 pl-10"
            />
            <FiSearch style={{color:'grey'}} size={24} className="absolute top-2 left-2"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestaurantHero;
