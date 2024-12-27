"use client";
interface PageProps {
  name: string;

}
const MobileCategoryCard: React.FC<PageProps> = ({ name}) => {
  return (
    <div className="hover:bg-tertiary border border-black hover:text-white hover:border-tertiary rounded-full w-32 px-5 py-2">
    
      <p className="text-center  text-xl font-poppins ">{name}</p>
    </div>
  )
}

export default MobileCategoryCard;