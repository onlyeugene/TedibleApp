import React from 'react'
import Image from 'next/image'
import Location from '@/assets/internal/help/Vector (1).svg'
import Phone from '@/assets/internal/help/Vector (3).png'
import Email from '@/assets/internal/help/clarity_email-solid@2x.svg'
import Border from '@/assets/internal/help/Line 4@2x.png'
import Arrow from '@/assets/internal/help/export.svg'
const Contact = () => {
  return (
    <div className='w-full lg:w-[430px] space-y-9'>
      <div className="flex gap-5">
      <div className="bg-tertiary w-9 h-9 rounded-full flex items-center justify-center">
          <Image src={Location} alt="Phone" width={20} height={20}/>
        </div>
        <div className="">
          <h2 className='font-semibold text-lg'>Our Head Quarters</h2>
          <h3 className='text-[16.29px] text-tertiary flex gap-5'>Find us on Goggle Map <Image src={Arrow} alt='direction'/></h3>
          <p className='text-sm'>1 Ogunlesi Street, Off Awoyokun, Onipanu, Lagos.</p>
        </div>
        
      </div>
      <Image src={Border} alt="border line"/>
      <div className="flex gap-5">
        <div className="bg-tertiary w-9 h-9 rounded-full flex items-center justify-center">
          <Image src={Phone} alt="Phone" width={20} height={20}/>
        </div>
        <div className="">
          <h2 className='font-semibold text-lg'>Our Phone</h2>
          <p className='text-sm'>+ 234 7034857699</p>
          <p className='text-sm'>+ 234 7034855669</p>
        </div>
      </div>
      <Image src={Border} alt="border line"/>
      <div className="flex gap-5">
        <div className="bg-tertiary w-9 h-9 rounded-full flex items-center justify-center">
        <Image src={Email} alt="Phone" width={20} height={20}/>
        </div>
        <div className="">
          <h2 className='font-semibold text-lg'>Our Email</h2>
          <p className='text-sm'>contact@tedible.com</p>
          <p className='text-sm'>info@tedible.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact