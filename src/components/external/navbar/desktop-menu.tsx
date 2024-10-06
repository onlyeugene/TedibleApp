import React from "react";
import Link from "next/link";
import Button from "@/components/buttons";
import { signOut, useSession } from "next-auth/react";

interface DesktopMenuProps {
  path: string;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ path }) => {
  const { data: session } = useSession();

  // Render nothing if the user is authenticated
  if (session) {
    return (
      <>
      <ul className="sm:flex items-center md:gap-10 gap-1 hidden">
        <li>
          <Link href={"/"} className={path === "/" ? "text-[#FF7834]" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/restaurants"} className={path === "/restaurants" ? "text-[#FF7834]" : ""}>
            Restaurants
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className={path === "/contact" ? "text-[#FF7834]" : ""}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link href={"/about"} className={path === "/about" ? "text-[#FF7834]" : ""}>
            About Us
          </Link>
        </li>
      </ul>
        <div className="sm:flex gap-4 items-center hidden">
        <p className="lowercase">{session?.user?.name}</p>
        {/* <Image src={session?.user?.image} alt=''  width={20} height={20}/> */}
        <Button className="py-2 px-4" onClick={() => signOut()}>SignOut</Button>
        </div>
      </>
    )
  }


  if(!session){
    return (
      <>
        <ul className="sm:flex items-center md:gap-10 gap-1 hidden">
          <li>
            <Link href={"/"} className={path === "/" ? "text-[#FF7834]" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/restaurants"} className={path === "/restaurants" ? "text-[#FF7834]" : ""}>
              Restaurants
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className={path === "/contact" ? "text-[#FF7834]" : ""}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link href={"/about"} className={path === "/about" ? "text-[#FF7834]" : ""}>
              About Us
            </Link>
          </li>
        </ul>
  
        <div className="sm:flex items-center gap-5 hidden">
          <Link href={"/login"}>
            <Button className="border-[#FF7834] py-2 px-6 rounded-md text-[#FF7834]">
              Login
            </Button>
          </Link>
          <Link href={"/register"}>
            <Button className="bg-[#FF7834] py-2 px-6 rounded-md border-[#FF7834] text-white">
              Register
            </Button>
          </Link>
        </div>
      </>
    );
  }
  
};

export default DesktopMenu;
