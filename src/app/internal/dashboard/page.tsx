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
import Button from "@/components/buttons";
import favorite from "@/assets/internal/dashboard/favorite.svg";
import star from "@/assets/internal/dashboard/star.svg";

// ICONS
import { IoIosBicycle } from "react-icons/io";
import { CiClock1 } from "react-icons/ci";

const Dashboard = () => {
  const banners = [banner, banner1, banner2, banner3, banner4]; // Add more banners if needed
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [banners.length]);

  return (
    <div className="w-full sm:px-10 px-3 ">
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
        <div className="flex gap-3 text-secondary lg:w-full overflow-scroll sm:w-[37rem]">
          {Restaurant_Links.map((restaurant) => (
            <div key={restaurant.id} className="w-full sm:min-w-[190px] min-w-[160px] sm:border-none border rounded-2xl shadow-md">
              <div>
                <Image
                  src={restaurant.image}
                  alt="Restaurant image"
                  className="rounded-t-xl"
                />
              </div>
              <div className="px-3 py-3 sm:bg-white  rounded-b-xl sm:w-full w-[12rem]">
                <h2 className="text-[9.55px]">{restaurant.status}</h2>
                <div>
                  <h1 className="sm:text-[17.02px] font-semibold text-sm">
                    {restaurant.name}
                  </h1>
                </div>
                <div className="flex  gap-2 items-center pt-5">
                  <div className="bg-secondary text-primary flex flex-col rounded-md px-[3px] py-[2px]">
                    <h1 className="sm:text-[15.39px] text-xs text-center">
                      {restaurant.rating}
                    </h1>
                    <Image src={star} alt="rating" priority className="w-7" />
                    <h2 className="sm:text-[5.28px] text-[4.16px]">
                      {restaurant.reviews} reviews
                    </h2>
                  </div>
                  <div>
                    <div className="flex gap-1 items-center">
                      <IoIosBicycle />
                      <h3 className="sm:text-[8px] text-[6.7px]">
                        Delivery in {restaurant.deliveryTime}
                      </h3>
                    </div>
                    <div className="flex gap-1 items-center">
                      <CiClock1 />
                      <h4 className="sm:text-[8px] text-[6.7px]">
                        Preorder Until {restaurant.preorderUntil}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full text-secondary mt-10">
        <h1 className="text-2xl font-semibold">Top Order</h1>
        <div className="sm:grid sm:grid-cols-4  gap-5 mt-4 overflow-scroll flex">
          {Top_Order.map((item) => (
            <div
              key={item.id}
              className="border bg-primary sm:border-primary shadow-xl rounded-3xl relative"
            >
              <Image
                src={item.image}
                alt="item image"
                priority
                className="rounded-[2rem] rounded-b-[7rem]"
              />
              <Image
                src={favorite}
                alt="favorite icon"
                priority
                className="absolute top-4 right-3"
              />
              <div className="px-4 pt-4 sm:w-full  w-[10rem]">
                <Image src={star} alt="rating" priority />
                <div className="w-full">
                  <h2 className="sm:text-sm text-xs font-semibold">
                    {item.title}
                  </h2>
                </div>
                <div className="w-full">
                  <p className="text-[10.29px] font-light">{item.restaurant}</p>
                </div>
                <div className="flex justify-between items-center h-10">
                  <span className="text-tertiary sm:text-lg text-[13.42px] font-semibold">
                    &#8358;{item.price}
                  </span>
                  <Button className="text-white border bg-tertiary font-bold border-tertiary w-5 h-5 flex items-center justify-center rounded-full">
                    &#43;
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
