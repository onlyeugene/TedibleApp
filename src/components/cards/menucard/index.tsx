import React from 'react'
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3.198rem]">
      <div className=" -mt-1 relative bg-white shadow-[0px_0px_12px_8px_rgba(0,0,0,0.03)] rounded-xl">
        {/* Image Section */}
        <div>
          <Image
            src={image}
            alt="Food item"
            className="w-full h-full rounded-t-xl"
            width={200}
            height={200}
            objectFit="cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-[1.5rem]">
          <Image src={stars} alt="Five-star rating" width={100} height={20} />
          <div className="text-[.5rem] lg:text-[1.5rem] mt-2">
            <p className="z-20 text-red-900 font-bold">{name}</p>
            <p className="text-gray-600">{restaurant}</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-[0.839rem] lg:text-1.3rem font-semibold text-orange-500">{price}</p>
            <Image src={plus} alt="Add to cart icon" className="w-4 md:w-6" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;