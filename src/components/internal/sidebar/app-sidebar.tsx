import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SideBarLinks } from "@/lib/consts/sidebar-links"
import Image from "next/image"
import logo from '@/assets/navbar/logo.svg'
import { usePathname } from "next/navigation"

export function AppSidebar() {

    const path = usePathname()
  return (
    <Sidebar className="md:block hidden">
      <SidebarContent className='bg-secondary text-primary '>
        <SidebarGroup>
        <div className='mb-8 px-1 pt-5'>
            <Image src={logo} alt='' width={120} height={120} />
          </div>
          <hr />
          <SidebarGroupContent className="mt-6">
            <SidebarMenu className="flex flex-col gap-2">
              {SideBarLinks.map((item) => (
                <SidebarMenuItem key={item.title} className='flex items-center gap-4 px-4 py-3 rounded-md transition-all duration-200'>
                  <SidebarMenuButton asChild className="hover:text-primary hover:bg-[#e9e9e967] py-6 active:bg-[#e9e9e967] -webkit-tap-highlight-color-transparent">
                    <Link href={item.path} 
                     className={`flex items-center gap-4 px-4 py-10 rounded-md transition-all duration-200 -webkit-tap-highlight-color-transparent ${
                        path === item.path
                          ? 'bg-tertiary text-primary shadow-md'
                          : 'hover:bg-[#e9e9e967] hover:text-primary active:bg-[#e9e9e967]'
                      }`}
                      >
                      <Image src={item.icon} alt={item.title} width={24} height={24} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
