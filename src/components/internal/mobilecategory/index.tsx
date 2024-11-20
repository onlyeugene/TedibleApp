"use client";
import Image from "next/image";
interface PageProps {
  name: string;

}
const MobileCategoryCard: React.FC<PageProps> = ({ name}) => {
  return (
    <div className="hover:bg-tertiary border border-black hover:text-white hover:border-tertiary rounded-full px-7 py-2">
    
      <p className="text-center  text-xl font-poppins ">{name}</p>
    </div>
  )
}

export default MobileCategoryCard;