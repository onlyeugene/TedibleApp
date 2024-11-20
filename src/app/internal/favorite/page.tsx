"use client";
import React, { useEffect, useState } from "react";
import { IoIosBicycle } from "react-icons/io";
import { CiClock1 } from "react-icons/ci";
import Image from "next/image";
import Button from "@/components/buttons";
import stars from "@/assets/home/specialmenu/five stars.svg";
import starIcon from "@/assets/internal/dashboard/star.svg";

interface FavoriteFood {
  id: number;
  name: string;
  restaurant: string;
  price: number;
  image: string;
}

interface FavoriteRestaurant {
  id: number;
  name: string;
  status: string;
  rating: string;
  reviews: number;
  image: string;
  deliveryTime: string;
  preorderUntil: string;
}

const FavoritesPage: React.FC = () => {
  const [favoriteFood, setFavoriteFood] = useState<FavoriteFood[]>([]);
  const [favoriteRestaurant, setFavoriteRestaurant] = useState<FavoriteRestaurant[]>([]);

  useEffect(() => {
    const savedFood: FavoriteFood[] = JSON.parse(localStorage.getItem("favoriteFood") || "[]");
    setFavoriteFood(savedFood);

    const savedRestaurants: FavoriteRestaurant[] = JSON.parse(
      localStorage.getItem("favoriteRestaurants") || "[]"
    );
    setFavoriteRestaurant(savedRestaurants);
  }, []);

  const handleRemoveFavorite = (id: number, type: "food" | "restaurant") => {
    if (type === "food") {
      const updatedFavorites = favoriteFood.filter((fav) => fav.id !== id);
      setFavoriteFood(updatedFavorites);
      localStorage.setItem("favoriteFood", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = favoriteRestaurant.filter((fav) => fav.id !== id);
      setFavoriteRestaurant(updatedFavorites);
      localStorage.setItem("favoriteRestaurants", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Favorites</h1>

      {/* FAVORITE FOOD ITEMS */}
      <section className="mb-16">
        <h2 className="text-primary text-lg mb-4">Favorite Food Items</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favoriteFood.map((food) => (
            <div
              key={food.id}
              className="flex flex-col bg-white shadow-md rounded-lg relative p-4"
            >
              <Image
                src={food.image}
                alt={`${food.name} image`}
                className="rounded-lg"
                width={150}
                height={150}
              />
              <svg
                onClick={() => handleRemoveFavorite(food.id, "food")}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="absolute top-2 right-2 text-orange-500 cursor-pointer"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <Image src={stars} alt="Rating" className="my-2" />
              <h3 className="font-semibold">{food.name}</h3>
              <p className="text-sm">{food.restaurant}</p>
              <p className="font-bold text-tertiary">₦{food.price}</p>
              <Button className="mt-2 bg-tertiary text-white font-bold px-4 py-2 rounded-lg">
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* FAVORITE RESTAURANTS */}
      <section>
        <h2 className="text-primary text-lg mb-4">Favorite Restaurants</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {favoriteRestaurant.map((restaurant) => (
            <div key={restaurant.id} className="bg-white shadow-md rounded-lg p-4">
              <Image
                src={restaurant.image}
                alt={`${restaurant.name} image`}
                className="rounded-lg"
                width={150}
                height={150}
              />
              <svg
                onClick={() => handleRemoveFavorite(restaurant.id, "restaurant")}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="absolute top-2 right-2 text-orange-500 cursor-pointer"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <h3 className="font-semibold">{restaurant.name}</h3>
              <p className="text-sm">{restaurant.status}</p>
              <div className="flex gap-2 items-center text-xs">
                <IoIosBicycle />
                <p>Delivery in {restaurant.deliveryTime}</p>
              </div>
              <div className="flex gap-2 items-center text-xs">
                <CiClock1 />
                <p>Preorder Until {restaurant.preorderUntil}</p>
              </div>
              <Image src={starIcon} alt="Rating" width={20} height={20} />
              <p>{restaurant.reviews} reviews</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FavoritesPage;
