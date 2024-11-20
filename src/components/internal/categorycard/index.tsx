"use client";
import Image from "next/image";
interface PageProps {
  image: string;
  name: string;

}
const CategoryCard: React.FC<PageProps> = ({image, name}) => {
  return (
    <div className="hover:bg-secondaryLight rounded-xl">
      <Image
      src={image}
      alt="Category image"/>
      <p className="text-center pt-2.5 text-lg font-poppins hover:text-white">{name}</p>
    </div>
  )
}

export default CategoryCard;