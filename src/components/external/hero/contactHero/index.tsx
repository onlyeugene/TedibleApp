import React from 'react';
import Image from 'next/image';
import backgroundhero from '@/assets/backgroundImages/contactHero.png';

const ContactHero: React.FC = () => {
  return (
    <section className="relative w-full h-[290px] md:h-[211px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundhero}
        alt="Contact hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      {/* Overlay Content */}
      <div className="relative z-10 px-4 sm:px-8 lg:px-16 max-w-3xl p-4 md:p-8 w-full md:w-[746px]">
        {/* Mobile Write-up */}
        <div className="block md:hidden">
          <h1 className="font-[Open Sans] text-[24px] leading-[32px] text-[#FFFFFF]">
            Contact Us
          </h1>
          <h3 className='text-[#ffffff] text-[14px] font-[open Sans]'>Get in touch with us</h3>
        </div>

        {/* Desktop Write-up */}
        <div className="hidden md:block">
          <h1 className="font-[Open Sans] text-[50px] leading-[68.09px] text-[#FFFFFF]">
            Contact Us
          </h1>
          <p className="font-[Open Sans] text-[24px] font-normal leading-[32.68px] text-center text-[#FFFFFF]">
            Explore a menu brimming with premium cuts and tantalizing flavors, expertly crafted to delight even the most discerning palates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
