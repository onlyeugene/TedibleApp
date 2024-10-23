'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import defaultImage from '@/assets/home/heroImages/default.png';
import egusiImage from '@/assets/home/heroImages/hoveredegusi.png';
import egusiHover from '@/assets/home/heroImages/hoveredegusi.png';
import riceHover from '@/assets/home/heroImages/hoveredrice.png';
import chopsHover from '@/assets/home/heroImages/hoveredchops.png';
import friedImage from '@/assets/home/heroImages/fried_rice.png';
import chopsImage from '@/assets/home/heroImages/small_chops.png';
import Button from '@/components/buttons';

const Hero: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to handle mouse enter, sets the hovered item (URL of the image)
  const handleMouseEnter = (item: string): void => {
    if (hoveredItem !== item) {
      setIsHovered(false); // Reset the animation state
      setHoveredItem(item);
    }
  };

  // Function to handle mouse leave, resets the hovered item to null
  const handleMouseLeave = (): void => {
    if (hoveredItem !== null) {
      setHoveredItem(null);
      setIsHovered(false);
    }
  };

  // Trigger fade-in animation after hovered item is set
  useEffect(() => {
    if (hoveredItem) {
      setIsHovered(true);
    }
  }, [hoveredItem]);

  return (
    <div className="w-full bg-[#073126] text-white sm:flex sm:flex-row flex flex-col-reverse justify-center items-center sm:px-10 px-[3rem] py-[2rem] gap-[1rem]">
      {/* Left Section - Heading and Button */}
      <div className="flex flex-col gap-[1.5rem] sm:justify-start justify-center sm:items-start items-center sm:leading-[2rem] leading-[1.5rem] w-full">
        <h1 className="sm:text-[60px] text-[40px] font-bold">MEAL TIME</h1>
        <h2 className="sm:text-[35px] text-[20px] font-semibold sm:font-light sm:text-start text-center">
          FUEL YOUR <br className='sm:hidden block'/> STUDY
        </h2>
        <p className="text-[#FEFEFF] text-sm sm:text-base font-normal leading-tight sm:text-start text-center">
          Order delicious and nutritious meals, so <br className='block sm:hidden'/> <br className='sm:block hidden'/> you can relax, stay
          focused and <br className='sm:block hidden'/> energized.
        </p>
        <div>
          <Button className="border rounded-sm sm:px-[2.5rem] items-start py-2 px-5 text-[18.7px] bg-[#FF7834] border-[#FF7834]">
            View Menu
          </Button>
        </div>
      </div>

      {/* Middle Section - Display Image */}
      <div className="2xl:w-[73rem] xl:w-[81rem] sm:w-[83rem] border bg-white rounded-full px-[1rem] sm:h-[26rem] h-auto py-[1rem] my-[3rem] grid justify-center">
        <Image
          src={hoveredItem || defaultImage.src}
          alt="Default"
          className={`w-full h-full object-cover ${
            isHovered ? 'fade-in' : ''
          }`}
          width={500}
          height={500}
        />
      </div>

      {/* Right Section - Food Items */}
      <div className="w-full sm:grid gap-[1rem] justify-end items-center hidden">
        <div className="text-black relative">
          <div
            className="flex justify-center items-center border hover:border-[#FF7834] rounded-full bg-white px-[.2rem] pr-[5rem] py-[.2rem] transition duration-500 ease-in-out transform hover:scale-105"
            onMouseEnter={() => handleMouseEnter(egusiHover.src)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-[5rem] h-[5rem]">
              <Image
                src={egusiImage}
                alt="Egusi"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="ml-4">
              <h1>Eba & Egusi</h1>
              <p className="text-[13px]">Sweet Sensation</p>
              <span className="text-[#FF7834]">N1500</span>
            </div>
          </div>
        </div>
        <div className="text-black relative">
          <div
            className="flex justify-center items-center border hover:border-[#FF7834] rounded-full bg-white px-[.2rem] pl-[4rem] py-[.2rem] transition duration-500 ease-in-out transform hover:scale-105"
            onMouseEnter={() => handleMouseEnter(riceHover.src)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="ml-4">
              <h1>Fried Rice & Egg</h1>
              <p className="text-[13px]">Chicken Republic</p>
              <span className="text-[#FF7834]">N3000</span>
            </div>
            <div className="w-[5rem] h-[5rem]">
              <Image
                src={friedImage}
                alt="Fried Rice"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="text-black relative">
          <div
            className="flex justify-center items-center border hover:border-[#FF7834] rounded-full bg-white px-[.2rem] pr-[5.5rem] py-[.2rem] transition duration-500 ease-in-out transform hover:scale-105"
            onMouseEnter={() => handleMouseEnter(chopsHover.src)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-[5rem] h-[5rem]">
              <Image
                src={chopsImage}
                alt="Small Chops"
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="ml-4">
              <h1>Small Chops</h1>
              <p className="text-[13px]">The Place</p>
              <span className="text-[#FF7834]">N4000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
