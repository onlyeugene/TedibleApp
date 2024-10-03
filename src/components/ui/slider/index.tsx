import space from "@/assets/home/sliderImages/space.svg";
import kfc from "@/assets/home/sliderImages/kfc.svg";
import chickenrep from "@/assets/home/sliderImages/chicken.svg";
import awoof from "@/assets/home/sliderImages/awoof.svg";
import sweetsensation from "@/assets/home/sliderImages/sweetsensation.svg";
import theplace from "@/assets/home/sliderImages/theplace.png";
import Image from "next/image";
import styles from "./slider.module.css";

const Slider = () => {
  return (
    <div className="w-full text-center bg-[#073126] text-white md:px-[9rem] px-[2rem] py-[2rem]">
      <h1 className="md:text-[50px] text-[20px] font-medium py-[2rem]">
        Our Top Restaurants
      </h1>

      <div className={`w-full flex gap-[5rem] justify-center items-center ${styles.logos}`}>
        {/* First logo slide */}
        <div className={`${styles.logosSlide} flex gap-[5rem] flex-row items-center`}>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={space}
              alt="Space Route"
              className="md:w-[5rem] w-[2rem]"
            />
            <p className="text-[14px]">Space Route</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={kfc} alt="KFC" className="md:w-[3.5rem] w-[2.5rem]" />
            <p className="text-[14px]">
              Kenturkey Fried <br /> Chicken
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={chickenrep}
              alt="Chicken Republic"
              className="md:w-[2.5rem] w-[2rem]"
            />
            <p className="text-[14px]">
              Chicken <br /> Republic
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={awoof}
              alt="Awoof Brekete"
              className="md:w-[6.5rem] w-[4.5rem]"
            />
            <p className="text-[14px]">Awoof Brekete</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={sweetsensation}
              alt="Sweet Sensation"
              className="md:w-[3rem] w-[2.5rem]"
            />
            <p className="text-[14px]">Sweet Sensation</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={theplace}
              alt="The Place"
              className="md:w-[6rem] w-[5rem]"
            />
            <p className="text-[14px] pt-[1rem]">The Place</p>
          </div>
        </div>

        {/* Second logo slide */}
        <div className={`${styles.logosSlide} flex gap-[5rem] items-center`}>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={space}
              alt="Space Route"
              className="md:w-[5rem] w-[2rem]"
            />
            <p className="text-[14px]">Space Route</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={kfc} alt="KFC" className="md:w-[3.5rem] w-[2.5rem]" />
            <p className="text-[14px]">
              Kenturkey Fried <br /> Chicken
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={chickenrep}
              alt="Chicken Republic"
              className="md:w-[2.5rem] w-[2rem]"
            />
            <p className="text-[14px]">
              Chicken <br /> Republic
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={awoof}
              alt="Awoof Brekete"
              className="md:w-[6.5rem] w-[4.5rem]"
            />
            <p className="text-[14px]">Awoof Brekete</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={sweetsensation}
              alt="Sweet Sensation"
              className="md:w-[3rem] w-[2.5rem]"
            />
            <p className="text-[14px]">Sweet Sensation</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={theplace}
              alt="The Place"
              className="md:w-[6rem] w-[5rem]"
            />
            <p className="text-[14px] pt-[1rem]">The Place</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
