"use client";
import React, { useState, useEffect } from "react";
import RestuarantCard from "@/components/cards/restuarantcard";
import MenuCard from "@/components/cards/menucard";
import CategoryCard from "@/components/internal/categorycard";
import { Restaurant_Links, Top_Order, Category } from "@/lib/consts/top-order";
import MenuIcon from '@/assets/internal/restaurant/Vector.svg'
import Image from "next/image";
import MobileCategoryCard from "@/components/internal/mobilecategory";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const Restaurants = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [view, setView] = useState<"restaurant" | "food">("restaurant");
  const [isOpen, setIsOpen] = useState(false);

  // Reset selectedCategoryId whenever the view changes
  useEffect(() => {
    setSelectedCategoryId(null); // Reset category selection on view change
  }, [view]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: "restaurant" | "food") => {
    setView(value);
    setIsOpen(false);
  };
  // Show all items initially or filter based on the selected category
  const filteredRestaurants =
    selectedCategoryId !== null
      ? Restaurant_Links.filter((restaurant) => restaurant.categoryId === selectedCategoryId)
      : Restaurant_Links;

  const filteredTopOrders =
    selectedCategoryId !== null
      ? Top_Order.filter((item) => item.categoryId === selectedCategoryId)
      : Top_Order;

  return (
    <div className="px-3 lg:px-6 w-full">
      {/* Dropdown */}
      <div className="hidden lg:flex items-center justify-start mb-4">
        <Image
        src={MenuIcon}
        alt="menu icon"
        />
        <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="ml-4 px-4 py-2 border border-black rounded text-gray-700 bg-transparent outline-none flex items-center w-52 justify-between"
      >
        {view === "restaurant" ? "Restaurant" : "Food Item"}
        <span className="ml-2">{isOpen ? <SlArrowUp /> : <SlArrowDown />}</span>
      </button>
      
      {isOpen && (
        <ul className="absolute ml-4 left-0  w-full bg-white border  rounded shadow-lg">
          <li
            onClick={() => handleSelect("restaurant")}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b"
          >
            Restaurants
          </li>
          <li
            onClick={() => handleSelect("food")}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Food
          </li>
        </ul>
      )}
    </div>
        <p className="ml-4 text-secondaryLight font-semibold text-xl">
          {view === "restaurant" ? "All Restaurants" : "All Food items"}
        </p>
      </div>

      {/* Categories */}
      <div className="hidden lg:flex gap-7">
        {Category.map((category) => (
          <div
            key={category.id}
            className={`cursor-pointer`}
            onClick={() => setSelectedCategoryId(category.id)}
          >
            <CategoryCard {...category} />
          </div>
        ))}
      </div>
      {/* Categories */}
<div className=" lg:hidden ">
<p className="text-secondaryLight font-semibold mb-3">Restaurant</p>
  <div className="flex  gap-2 lg:hidden scrollbar-hide   overflow-x-auto md:max-w-[420px]">
  
    {Category.map((category) => (
      <div
        key={category.id}
        className="cursor-pointer "
        onClick={() => setSelectedCategoryId(category.id)}
      >
        <MobileCategoryCard {...category} />
      </div>
    ))}
  </div>
</div>
      

      {/* Dynamic Content Based on Dropdown Selection */}
      {view === "restaurant" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 py-6 gap-5 text-secondary lg:w-full overflow-scroll ">
          {filteredRestaurants.map((restaurant) => (
            <div className="" key={restaurant.id}>
              <RestuarantCard {...restaurant} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 py-6 gap-4 lg:gap-5">
          {filteredTopOrders.map((item) => (
            <div key={item.id} className="w-full md:w-[calc(30%-0.594rem)] lg:w-auto">
              <MenuCard {...item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Restaurants;
