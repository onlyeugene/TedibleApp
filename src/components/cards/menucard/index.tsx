// MAKE SURE A LOGGED OUT USER CANNOT FAVOURITE A CARD
// THE FAVORITE ICON BECOMES FILLED WITH THE TERTIARY COLOR WHEN CLICKED
// THE FAVOURITES PAGE IS POPULATED WITH THE REATAURANTS THAT HAVE BEEN FAVOURITED
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import stars from "@/assets/home/specialmenu/five stars.svg";
import Button from "@/components/buttons";
import Image from "next/image";
import { useUserSession } from "@/session/useUserSession";

// Define the props interface for the component
interface Favorite {
  id: number;
  image: string;
  name: string;
  restaurant: string;
  price: string;
}

// Use the PageProps interface as the type for the component props
const MenuCard: React.FC<Favorite> = ({ id,image, name, restaurant, price }) => {
  const router = useRouter(); // Define router
  const { session } = useUserSession();
  const [isFilled, setIsFilled] = useState<boolean>(false);

  useEffect(() => {
    const favoriteMenu = JSON.parse(localStorage.getItem("favoriteFood") || "[]");
    const isFavorite = favoriteMenu.some((fav: Favorite) => fav.id === id);
    setIsFilled(isFavorite);
  }, [id]);

  // Toggle fill state on click
  const handleClick = (): void => {
    if (!session) {
      router.push("/auth/login");
      return;
    }

    setIsFilled(!isFilled);
    const favoriteMenu = JSON.parse(localStorage.getItem("favoriteFood") || "[]");

    if (!isFilled) {
      // Add to favorites
      favoriteMenu.push({ id, image, name, restaurant, price});
    } else {
      // Remove from favorites
      const updatedFavoriteMenu = favoriteMenu.filter((fav: Favorite) => fav.id !== id);
      localStorage.setItem("favoriteFood", JSON.stringify(updatedFavoriteMenu));
      return;
    }

    localStorage.setItem("favoriteFood", JSON.stringify(favoriteMenu));
  };
  return (
    <div className="flex flex-col gap-[15px] lg:gap-[21px] bg-white border-primary shadow-xl rounded-[2.188rem] relative">
      {/* Image Section */}
      <div>
        <Image
          src={image}
          alt="item image"
          priority
          className="rounded-[2.188rem] rounded-b-[7rem] w-full"
        />
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
          className={`cursor-pointer transition-colors duration-300 absolute top-4 right-3
            ${isFilled ? "fill-red-500" : "fill-none stroke-gray-500"}`}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>

      {/* Content Section */}
      <div className="px-[.8rem] lg:px-[1rem] pb-[1rem]  ">
        <Image src={stars} alt="Five-star rating" className="" priority />
        <div className="text-[.5rem] lg:text-[1.5rem] w-full">
          <p className="text-black text-[0.8rem] md:text-sm lg:text-base 2xl:text-lg font-semibold ">
            {name}
          </p>
          <p className="text-black text-xs lg:text-sm 2xl:text-base font-light ">
            {restaurant}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[0.839rem] lg:text-[1.3rem] font-semibold text-tertiary pt-2">
            &#8358;{price}
          </p>
          <Button className="text-white text-xl border bg-tertiary font-bold border-tertiary w-8 h-8 flex items-center justify-center rounded-full">
            &#43;
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
