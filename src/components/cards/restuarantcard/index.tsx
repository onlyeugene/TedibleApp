"use client";
import Image from "next/image";
import { IoIosBicycle } from "react-icons/io";
import { CiClock1 } from "react-icons/ci";
import star from "@/assets/internal/dashboard/star.svg";

// Define the props interface for the component
interface PageProps {
    image: string;
    name: string;
    status: string;
    reviews: number;
    deliveryTime: string;
    preorderUntil: string;
    rating: string;

  }

  const RestuarantCard: React.FC<PageProps> = ({ image, name,status,rating, deliveryTime, preorderUntil, reviews  }) => {
    return(
        <div 
        className="w-full min-w-[340px] md:min-w-[150px] lg:min-w-[160px] sm:border-none border rounded-2xl shadow-md"
      >
        <div>
          <Image
            src={image}
            alt="Restaurant image"
            className={`rounded-t-xl w-full object-cover`}
            // onClick={() =>router.push(`/internal/restaurants/${restaurant.id}`)}

          />
        </div>
        <div className="px-3 py-3 sm:bg-white  rounded-b-xl sm:w-full w-[12rem]">
          <h2 className="text-[9.55px]">{status}</h2>
          <div>
            <h1 className="sm:text-[17.02px] font-semibold text-sm">
              {name}
            </h1>
          </div>
          <div className="flex  gap-2 items-center pt-5">
            <div className="bg-secondary text-primary flex flex-col rounded-md px-[3px] py-[2px]">
              <h1 className="sm:text-[15.39px] text-xs text-center">
                {rating}
              </h1>
              <Image src={star} alt="rating" priority className="w-7" />
              <h2 className="sm:text-[5.28px] text-[4.16px]">
                {reviews} reviews
              </h2>
            </div>
            <div>
              <div className="flex gap-1 items-center">
                <IoIosBicycle />
                <h3 className="sm:text-[8px] text-[6.7px]">
                  Delivery in {deliveryTime}
                </h3>
              </div>
              <div className="flex gap-1 items-center">
                <CiClock1 />
                <h4 className="sm:text-[8px] text-[6.7px]">
                  Preorder Until {preorderUntil}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
   
  }
  export default RestuarantCard
