"use client";

import React, { useState, useEffect } from "react";
import banner from "@/assets/internal/dashboard/banner.svg";
import banner1 from "@/assets/internal/dashboard/banner1.svg";
import banner2 from "@/assets/internal/dashboard/banner2.svg";
import banner3 from "@/assets/internal/dashboard/banner3.svg";
import banner4 from "@/assets/internal/dashboard/banner4.svg";
// import MenuCard from '../menu/MenuCard';
import Image from "next/image";
import { Restaurant_Links, Top_Order } from "@/lib/consts/top-order";
// import star from "@/assets/internal/dashboard/star.svg";
import MenuCard from "@/components/cards/menucard";

// ICONS
// import { IoIosBicycle } from "react-icons/io";
// import { CiClock1 } from "react-icons/ci";
// import { useRouter } from "next/navigation";
import RestaurantCard from "@/components/cards/restuarantcard";
import CartPreview from "@/components/internal/cart";
// import {  useRouter } from "next/navigation";

const Dashboard = () => {
  const banners = [banner, banner1, banner2, banner3, banner4]; // Add more banners if needed
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // const pathname = usePathname()

  // const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [banners.length]);

  // If you want to sort and slice Top_Order items by rating
  const sortedTopOrders = [...Top_Order]
    .sort((a, b) => Number(b.price) - Number(a.price))
    .slice(0, 4);
  const sortedRestaurants = [...Restaurant_Links]
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, 4);

  const sortedBestOffers = [...Top_Order]
    .sort((a, b) => Number(b.price) - Number(a.price))
    .slice(0, 4);


  return (
    <div className="flex w-full bg-[#EDF5FA]">
      <div className="w-full  sm:px-10 px-3">
      <div className="sm:relative">
        <Image
          src={banners[currentBannerIndex]}
          alt="Banner"
          priority
          className="w-full rounded-2xl sm:h-auto transition-opacity duration-1000"
        />
        {/* {currentBannerIndex !== 0 && ( // Only display the button if the current banner is not banner2
            <button className="absolute bottom-10 border sm:w-40 sm:block hidden sm:h-14 left-0 mx-9 text-white border-[#FF7834] bg-[#FF7834] rounded-xl">
              Buy Now
            </button>
          )} */}
        {/* {currentBannerIndex === 2 && (
            <button className='uppercase'>Add to cart</button>
          )} */}
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between py-5 text-secondary">
          <h1 className="sm:text-2xl text-xl font-semibold">Restaurant</h1>
          <div className="flex gap-2 items-center">
            <h2 className="text-[#FF7834] sm:text-[17.77px] text-[13px] font-normal">
              view all
            </h2>
            {/* <Image src={arrowside} alt="Arrow side" className="sm:w-2 w-1.5" /> */}
          </div>
        </div>
        <div className="flex gap-3 text-secondary w-full overflow-x-auto">
          {sortedRestaurants.map((items) => (
            <RestaurantCard key={items.id} {...items} />
          ))}
        </div>
      </div>
      <div className="w-full text-secondary mt-10 scrollbar-hide overflow-x-auto lg:overflow-x-clip">
        <h1 className="text-2xl font-semibold">Top Order</h1>
        <div className="flex gap-3 text-secondary w-full overflow-x-auto">
          {sortedTopOrders.map((item) => (
            <div
              key={item.id}
              className="flex-none w-[50%] md:w-[calc(30%-0.594rem)] lg:w-auto"
            >
              <MenuCard {...item} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full text-secondary mt-10 scrollbar-hide overflow-x-auto lg:overflow-x-clip">
        <h1 className="text-2xl font-semibold">Best Offers</h1>
        <div className="flex gap-3 text-secondary w-full overflow-x-auto">
          {sortedBestOffers.map((item) => (
            <div
              key={item.id}
              className="flex-none w-[50%] md:w-[calc(30%-0.594rem)] lg:w-auto"
            >
              <MenuCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="w-1/2">
      <CartPreview />
    </div>
    </div>
  );
};

export default Dashboard;
