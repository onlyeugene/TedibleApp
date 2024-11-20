"use client";
import { IoIosBicycle } from "react-icons/io";
import { CiClock1 } from "react-icons/ci";
import star from "@/assets/internal/dashboard/star.svg";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import stars from "@/assets/home/specialmenu/five stars.svg";
import Button from "@/components/buttons";

interface Favorite {
  id: number;
  image: string;
  name: string;
  status: string;
  restaurant: string;
  price: number;
  preorderUntil: string;
  rating: string;
  reviews: string;
  deliveryTime: string;
}
const FavoritesPage = () => {
  const [favoriteFood, setFavoriteFood] = useState<Favorite[]>([]);
  const [favoriteRestaurant, setFavoriteRestaurant] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favoritess") || "[]"
    );
    setFavoriteFood(savedFavorites);
  }, []);
  
  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavoriteRestaurant(savedFavorites);
  }, []);

  // Function to remove a favorite food item
  const handleRemoveFavoriteFood = (id: number): void => {
    const updatedFavorites = favoriteFood.filter((fav: Favorite) => fav.id !== id);
    setFavoriteFood(updatedFavorites);
    localStorage.setItem("favoritess", JSON.stringify(updatedFavorites));
  };

  // Function to remove a favorite Restaurant
  const handleRemoveFavoriteRestaurant = (id: number): void => {
    const updatedFavorites = favoriteRestaurant.filter(
      (fav: Favorite) => fav.id !== id
    );
    setFavoriteRestaurant(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Favorites</h1>

      {/* FAVORITE FOOD ITEMS */}
      <div className="w-full border mt-3 mb-3 lg:mb-8 px-3 rounded-md sm:py-3 py-1 bg-[#073126]">
        <h1 className="text-primary text-base lg:text-xl font-light">
          Favorite Food Item
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {favoriteFood.map((favorite: Favorite) => (
          <div
            key={favorite.id}
            className="flex flex-col gap-[15px] lg:gap-[21px] bg-white border-primary shadow-xl rounded-[2.188rem] relative"
          >
            {/* Image Section */}
            <div>
              <Image
                src={favorite.image}
                alt="item image"
                priority
                className="rounded-[2.188rem] rounded-b-[7rem] w-full"
              />
              <svg
                onClick={() => handleRemoveFavoriteFood(favorite.id)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`cursor-pointer transition-colors duration-300 absolute top-4 right-3 fill-orange-500`}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <div className="px-[.8rem] lg:px-[1rem] pb-[1rem]  ">
              <Image src={stars} alt="Five-star rating" className="" priority />
              <div className="text-[.5rem] lg:text-[1.5rem] w-full">
                <p className="text-black text-[0.8rem] md:text-sm lg:text-base 2xl:text-lg font-semibold ">
                  {favorite.name}
                </p>
                <p className="text-black text-xs lg:text-sm 2xl:text-base font-light ">
                  {favorite.restaurant}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-[0.839rem] lg:text-[1.3rem] font-semibold text-tertiary pt-2">
                  &#8358;{favorite.price}
                </p>
                <Button className="text-white text-xl border bg-tertiary font-bold border-tertiary w-8 h-8 flex items-center justify-center rounded-full">
                  &#43;
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAVORITE RESTAURANTS */}
      <div className="w-full border mt-16 mb-3 lg:mb-8 px-3 rounded-md sm:py-3 py-1 bg-[#073126]">
        <h1 className="text-primary text-base lg:text-xl font-light">
          Favorite Restaurants
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {favoriteRestaurant.map((favorite: Favorite) => (
          <div
            key={favorite.id}
            className="w-full sm:min-w-[190px] min-w-[160px] sm:border-none border rounded-2xl shadow-md relative"
          >
            <div>
              <Image
                src={favorite.image}
                alt="Restaurant image"
                className={`rounded-t-xl w-full object-cover`}
              />

              <svg
                onClick={() => handleRemoveFavoriteRestaurant(favorite.id)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`cursor-pointer transition-colors duration-300 absolute top-4 right-3 fill-orange-500`}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>

            <div className="px-3 py-3 sm:bg-white rounded-b-xl sm:w-full w-[12rem]">
              <h2 className="text-[9.55px]">{favorite.status}</h2>
              <div>
                <h1 className="sm:text-[17.02px] font-semibold text-sm">
                  {favorite.name}
                </h1>
              </div>
              <div className="flex gap-2 items-center pt-5">
                <div className="bg-secondary text-primary flex flex-col rounded-md px-[3px] py-[2px]">
                  <h1 className="sm:text-[15.39px] text-xs text-center">
                    {favorite.rating}
                  </h1>
                  <Image src={star} alt="rating" priority className="w-7" />
                  <h2 className="sm:text-[5.28px] text-[4.16px]">
                    {favorite.reviews} reviews
                  </h2>
                </div>
                <div>
                  <div className="flex gap-1 items-center">
                    <IoIosBicycle />
                    <h3 className="sm:text-[8px] text-[6.7px]">
                      Delivery in {favorite.deliveryTime}
                    </h3>
                  </div>
                  <div className="flex gap-1 items-center">
                    <CiClock1 />
                    <h4 className="sm:text-[8px] text-[6.7px]">
                      Preorder Until {favorite.preorderUntil}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
