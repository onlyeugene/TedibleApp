"use client";
import React, { useState, useEffect } from "react";
import RestuarantCard from "@/components/cards/restuarantcard";
import MenuCard from "@/components/cards/menucard";
import CategoryCard from "@/components/internal/categorycard";
import { Restaurant_Links, Top_Order, Category } from "@/lib/consts/top-order";

const Restaurants = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [view, setView] = useState<"restaurant" | "food">("restaurant");

  // Reset selectedCategoryId whenever the view changes
  useEffect(() => {
    setSelectedCategoryId(null); // Reset category selection on view change
  }, [view]);

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
    <div className="px-3 lg:px-6">
      {/* Dropdown */}
      <div className="flex items-center justify-start mb-4">
        <select
          value={view}
          onChange={(e) => setView(e.target.value as "restaurant" | "food")}
          className="px-4 py-2 border border-black rounded text-gray-700 bg-transparent outline-none"
        >
          <option value="restaurant">Restaurants</option>
          <option value="food">Food</option>
        </select>
        <p className="ml-4 text-secondaryLight font-semibold text-xl">
          {view === "restaurant" ? "All Restaurants" : "All Foods"}
        </p>
      </div>

      {/* Categories */}
      <div className="flex gap-7">
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

      {/* Dynamic Content Based on Dropdown Selection */}
      {view === "restaurant" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 py-6 gap-5 text-secondary lg:w-full overflow-scroll sm:w-[37rem]">
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
