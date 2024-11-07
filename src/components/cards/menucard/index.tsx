import React from "react";
import stars from "@/assets/home/specialmenu/five stars.svg";
import plus from "@/assets/home/specialmenu/plus icon.svg";
import Image from "next/image";

// Define the props interface for the component
interface PageProps {
  image: string;
  name: string;
  restaurant: string;
  price: string;
}

// Use the PageProps interface as the type for the component props
const Page: React.FC<PageProps> = ({ image, name, restaurant, price }) => {
  return (
    <div className="flex flex-col gap-[15px] lg:gap-[21px] max-w-[27.727rem] bg-white shadow-[0px_4px_38px_0px_rgba(0,0,0,0.25)] rounded-[2.188rem]">
      {/* Image Section */}
      <div>
        <Image
          src={image}
          alt="Food item"
          className="w-[27.727rem] lg:-mt-8 transition-transform duration-300 ease-in-out transform cursor-pointer"
          height={200}
        />
      </div>

      {/* Content Section */}
      <div className="px-[.8rem] lg:px-[1.3rem] pb-[1rem] lg:pb-[1.5rem]">
        <Image src={stars} alt="Five-star rating" className=""/>
        <div className="text-[.5rem] lg:text-[1.5rem] mt-2">
          <p className="z-20 text-black text-[0.8rem] md:text-sm lg:text-[16px] 2xl:text-lg font-semibold">
            {name}
          </p>
          <p className="text-black text-xs lg:text-sm 2xl:text-base font-light">
            {restaurant}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[0.839rem] lg:text-[1.3rem] font-semibold text-tertiary pt-2">
            N{price}
          </p>
          <button className="bg-tertiary p-[.3rem] lg:p-[.625rem] rounded-full hover:bg-orange-400"><Image src={plus} alt="Add to Cart icon" className="w-4 lg:w-7"/></button>
        </div>
      </div>
    </div>
  );
};

export default Page;
