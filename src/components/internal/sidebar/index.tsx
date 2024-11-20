import { SideBarLinks } from '@/lib/consts/sidebar-links'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import logo from '@/assets/navbar/logo.svg'

const Sidebar = () => {
  const path = usePathname()
  return (
    <div className='max-h-full z-50 sticky w-60 bg-secondary text-primary p-4 shadow-lg sm:block hidden'>
      <div className='mb-8'>
        <Image src={logo} alt='' width={100} height={100} />
      </div>
      <hr />
      <nav className='flex flex-col space-y-2 pt-5'>
        {SideBarLinks.map((item) => (
          <Link
            href={item.path}
            key={item.slug}
            className={`flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200 ${
              path === item.path
                ? 'bg-tertiary text-primary shadow-md'
                : 'hover:bg-[#e9e9e967] hover:text-primary'
            }`}
          >
            <Image src={item.icon} alt={item.title} width={24} height={24} priority />
            <span className='text-sm'>{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
