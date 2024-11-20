"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { IoIosBicycle } from "react-icons/io";
import { CiClock1 } from "react-icons/ci";
import star from "@/assets/internal/dashboard/star.svg";
import { useUserSession } from "@/session/useUserSession";

interface Favorite {
  id: number;
  image: string;
  name: string;
  status: string;
  reviews: number;
  deliveryTime: string;
  preorderUntil: string;
  rating: string;
}

const RestaurantCard: React.FC<Favorite> = ({
  id,
  image,
  name,
  status,
  rating,
  deliveryTime,
  preorderUntil,
  reviews,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { session } = useUserSession();
  const [isFilled, setIsFilled] = useState<boolean>(false);

  // Initialize filled state based on localStorage
  useEffect(() => {
    const favorites: Favorite[] = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isFavorite = favorites.some((fav: Favorite) => fav.id === id);
    setIsFilled(isFavorite);
  }, [id]);

  // Toggle fill state on click
  const handleClick = (): void => {
    if (!session) {
      router.push("/login");
      return;
    }

    setIsFilled(!isFilled);
    const favorites:Favorite[] = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (!isFilled) {
      // Add to favorites
      favorites.push({ id, image, name, status, rating, deliveryTime, preorderUntil, reviews });
    } else {
      // Remove from favorites
      const updatedFavorites = favorites.filter((fav: Favorite) => fav.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return;
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div className="w-full sm:min-w-[190px] min-w-[160px] sm:border-none border rounded-2xl shadow-md relative">
      <div>
        <Image
          src={image}
          alt="Restaurant image"
          className={`rounded-t-xl w-full object-cover`}
        />
        {pathname === "/internal/restaurants" && (
          <svg
            onClick={handleClick}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`cursor-pointer transition-colors duration-300 absolute top-4 right-3 ${
              isFilled ? "fill-orange-500" : "fill-none stroke-white"
            }`}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        )}
      </div>

      <div className="px-3 py-3 sm:bg-white rounded-b-xl sm:w-full w-[12rem]">
        <h2 className="text-[9.55px]">{status}</h2>
        <div>
          <h1 className="sm:text-[17.02px] font-semibold text-sm">{name}</h1>
        </div>
        <div className="flex gap-2 items-center pt-5">
          <div className="bg-secondary text-primary flex flex-col rounded-md px-[3px] py-[2px]">
            <h1 className="sm:text-[15.39px] text-xs text-center">{rating}</h1>
            <Image src={star} alt="rating" priority className="w-7" />
            <h2 className="sm:text-[5.28px] text-[4.16px]">{reviews} reviews</h2>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <IoIosBicycle />
              <h3 className="sm:text-[8px] text-[6.7px]">Delivery in {deliveryTime}</h3>
            </div>
            <div className="flex gap-1 items-center">
              <CiClock1 />
              <h4 className="sm:text-[8px] text-[6.7px]">Preorder Until {preorderUntil}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
