import Image from "next/image";

import space from "@/assets/home/sliderImages/space.svg";
import kfc from "@/assets/home/sliderImages/kfc.svg";
import chicken from "@/assets/home/sliderImages/chicken.svg";
import awoof from "@/assets/home/sliderImages/awoof.svg";
import sweetsensation from "@/assets/home/sliderImages/sweetsensation.svg";
import RestaurantHero from "@/components/external/hero/categoryHero";

export const metadata ={
  title: "Restaurants",
  description: "View all restaurants here and select to a restuatrant to make your order",
}



const Vendors = [
  {
    id: 1,
    image: space,
    title: 'Spice Route',
    bgClass: 'px-6', 
  },
  {
    id: 2,
    image: kfc,
    title: 'Kenturkey Fried Chicken',
    bgClass: 'px-10',
  },
  {
    id: 3,
    image: chicken, 
    title: 'Chicken Republic',
    bgClass: 'px-[3.2rem]',
  },
  {
    id: 4,
    image: awoof,
    title: 'Awoof Brekete',
    bgClass: 'px-4',
  },
  {
    id: 5,
    image: sweetsensation,
    title: 'Sweet Sensation',
    bgClass: 'px-10',
  },
];

const Restaurant = () => {
  return (
    <div className="w-full overflow-hidden">
      <RestaurantHero />
      <div className="px-10 py-7 w-full">
        <h1 className="text-[#073126] text-[28.3px] font-semibold">Category</h1>
       <div className="w-full">
       <div className="flex gap-5 justify-between items-center text-center pt-4 sm:w-full w-[28rem] overflow-scroll">
          {Vendors.map((item) => (
            <div 
              key={item.id} 
              className={`flex flex-col items-center rounded-lg  hover:bg-[#FF7834] hover:text-primary pb-2`}
            >
              {/* Image Container */}
              <div className={`w-[10rem] h-[120px] flex items-center justify-center bg-[#073126] rounded-lg`}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  className={`w-full object-contain ${item.bgClass}`}
                />
              </div>
              {/* Title */}
              <p className={`pt-3 pb-4 text-sm break-words whitespace-pre-wrap `}>
                {item.title}
              </p>
            </div>
          ))}
        </div>
       </div>

        {/* RESTAURANTS AND THEIR FOODS  */}


      <div className="w-full border mt-10 px-3 rounded-md sm:py-4 py-1 bg-[#073126]">
        <h1 className="text-primary sm:text-[32px] text-base font-light">Spice Route</h1>
      </div>
      <div className="w-full border mt-10 px-3 rounded-md sm:py-4 py-1 bg-[#073126]">
        <h1 className="text-primary sm:text-[32px] text-base font-light">Kenturkey fried chicken</h1>
      </div>
      <div className="w-full border mt-10 px-3 rounded-md sm:py-4 py-1 bg-[#073126]">
        <h1 className="text-primary sm:text-[32px] text-base font-light">Chicken Republic</h1>
      </div>
      <div className="w-full border mt-10 px-3 rounded-md sm:py-4 py-1 bg-[#073126]">
        <h1 className="text-primary sm:text-[32px] text-base font-light">Awoof Brekete</h1>
      </div>
      </div>
    </div>
  );
};

export default Restaurant;
