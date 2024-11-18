"use client";
import Image from "next/image";
interface PageProps {
  image: string;
  name: string;

}
const CategoryCard: React.FC<PageProps> = ({image, name}) => {
  return (
    <div>
      <Image
      src={image}
      alt="Category image"/>
      <p className="text-center pt-2.5 text-lg font-poppins">{name}</p>
    </div>
  )
}

export default CategoryCard;