"use client";
import React, { useState, useEffect, useMemo } from "react";
import RestuarantCard from "@/components/cards/restuarantcard";
import MenuCard from "@/components/cards/menucard";
import CategoryCard from "@/components/internal/category-card";
import { Restaurant_Links, Top_Order, Category } from "@/lib/consts/top-order";
import MenuIcon from "@/assets/internal/restaurant/Vector.svg";
import Image from "next/image";
import MobileCategoryCard from "@/components/internal/mobilecategory";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const Restaurants = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [view, setView] = useState<"restaurant" | "food">("restaurant");
  const [isOpen, setIsOpen] = useState(false);

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

  const filteredRestaurants = useMemo(() => {
    return selectedCategoryId !== null
      ? Restaurant_Links.filter((restaurant) => restaurant.categoryId === selectedCategoryId)
      : Restaurant_Links;
  }, [selectedCategoryId]);

  const filteredTopOrders = useMemo(() => {
    return selectedCategoryId !== null
      ? Top_Order.filter((item) => item.categoryId === selectedCategoryId)
      : Top_Order;
  }, [selectedCategoryId]);

  return (
    <div className="px-3 lg:px-6 w-full">
      {/* Dropdown */}
      <div className="hidden lg:flex items-center justify-start mb-4">
        <Image src={MenuIcon} alt="menu icon" />
        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleDropdown();
            }}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            className="ml-4 px-4 py-2 border border-black rounded text-gray-700 bg-transparent outline-none flex items-center w-52 justify-between"
          >
            {view === "restaurant" ? "Restaurant" : "Food Item"}
            <span className="ml-2">{isOpen ? <SlArrowUp /> : <SlArrowDown />}</span>
          </button>

          {isOpen && (
            <ul
              className="absolute ml-4 left-0 w-full bg-white border rounded shadow-lg"
              role="listbox"
            >
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
            className={`cursor-pointer ${
              selectedCategoryId === category.id ? "bg-gray-200 border border-primary" : ""
            }`}
            onClick={() => setSelectedCategoryId(category.id)}
          >
            <CategoryCard {...category} />
          </div>
        ))}
      </div>

      {/* Mobile Categories */}
      <div className="lg:hidden">
        <p className="text-secondaryLight font-semibold mb-3">Restaurant</p>
        <div className="flex gap-2 scrollbar-hide overflow-x-auto md:max-w-[420px]">
          {Category.map((category) => (
            <div
              key={category.id}
              className={`cursor-pointer ${
                selectedCategoryId === category.id ? "border border-primary" : ""
              }`}
              onClick={() => setSelectedCategoryId(category.id)}
            >
              <MobileCategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Content Based on Dropdown Selection */}
      {view === "restaurant" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 py-6 gap-5 text-secondary lg:w-full">
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id}>
              <RestuarantCard {...restaurant} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 py-6 gap-4 lg:gap-5">
          {filteredTopOrders.map((item) => (
            <div key={item.id} className="w-full">
              <MenuCard {...item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Restaurants;
