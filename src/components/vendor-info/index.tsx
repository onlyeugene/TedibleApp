import Image from 'next/image';
import React from 'react';
import vendorImage from '@/assets/home/featuresImages/vendor.png';
import Button from '../buttons';

const InfoPage: React.FC = () => {
  return (
    <section className='flex sm:flex-row flex-col gap-10 py-5 justify-center items-center w-11/12 container'>
      <div className='flex flex-col gap-[.5rem]'>
        <h1 className='md:text-[80px] text-[45px] font-light md:leading-[5.5rem] leading-[3rem]'>
          BECOME <br /> A VENDOR
        </h1>
        {[
          "Increased Visibility: Reach thousands of hungry customers daily.",
          "Marketing Support: Benefit from our extensive marketing campaigns.",
          "Reliable Delivery: Fast and reliable delivery services.",
          "Analytics and Insights: Access to performance data and insights.",
          "Customer Support: 24/7 dedicated partner support.",
        ].map((text, index) => (
          <div className='flex items-baseline gap-[.5rem] font-light' key={index}>
            <div>
              <div className='border rounded-full md:px-[.2rem] px-[.15rem] md:py-[.2rem] py-[.15rem] bg-[#FF7834] border-[#FF7834]'></div>
            </div>
            <p className='md:text-[16px] md:w-[32rem] text-[12px]'>{text}</p>
          </div>
        ))}

        <div className='pt-[1.5rem]'>
          <Button className='border bg-[#FF7834] text-white rounded-xl py-[1rem] px-[2rem]'>
            Become a Vendor
          </Button>
        </div>
      </div>

      <div className='w-full'>
        <Image src={vendorImage} alt="Vendor" width={600} height={600} />
      </div>
    </section>
  );
};

export default InfoPage;
