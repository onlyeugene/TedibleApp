import Image from "next/image";
import React from "react";
import error from "@/assets/notfounds/404.png";
import Button from "@/components/buttons";
import Navbar from "@/components/external/navbar";
import Footer from "@/components/external/footer";

// TypeScript definition for ButtonProps if you need it

const NotFound: React.FC = () => {
  return (
   <>
   <Navbar />
   <div className=" notFound flex flex-col justify-center items-center w-full py-20 h-screen bg-cover bg-center">
      <div className="flex items-center justify-center">
        <Image src={error} alt="Error 404" />
      </div>
      <div className="flex flex-col justify-center items-center text-white pt-5">
        <h1 className="text-[24px] font-medium">
          Oops! The page you are looking for is not found
        </h1>
        <Button className="text-white rounded-sm bg-[#FF7834] py-3 px-10 border-[#FF7834] mt-5 font-semibold text-[17px]">
          Back to previous page
        </Button>
      </div>
    </div>
    <Footer />
   </>
  );
};

export default NotFound;
