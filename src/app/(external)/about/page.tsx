import Image from "next/image";
import image1 from "@/assets/home/about/first.png";
import image2 from "@/assets/home/about/second.png";
import image3 from "@/assets/home/about/third.png";
import image4 from "@/assets/home/about/fourth.png";
import story from "@/assets/home/about/story.svg";
import mission from "@/assets/home/about/mission.svg";
import vision from "@/assets/home/about/vision.svg";
import cash from "@/assets/home/about/cash.svg";
import ride from "@/assets/home/about/ride.svg";
import food from "@/assets/home/about/food.svg";
import community from "@/assets/home/about/community.svg";

import { StaticImageData } from "next/image";
import AboutUs from "@/components/external/about";

export const metadata ={
  title: "About Us",
  description: "You can get to know more about Tedible on this page.",
}


// Type Definitions for Props
interface InfoSection {
  image: StaticImageData;
  title: string;
  description: string;
}

interface Benefit {
  image: StaticImageData;
  title: string;
  description: string;
}

const images: StaticImageData[] = [image1, image2, image3, image4];

const infoSections: InfoSection[] = [
  {
    image: story,
    title: "Our Story",
    description:
      "Tedible was founded by Tech Studio Academy, which noticed a common problem among their students: finding time to eat well while juggling tech courses. It is designed to meet the unique needs of these students.",
  },  
  {
    image: mission,
    title: "Our Mission",
    description:
      "Our mission is to revolutionize the way tech students access food. We aim to promote healthy eating, fostering community, and leveraging technology to meet the unique needs of our users.",
  },
  {
    image: vision,
    title: "Our Vision",
    description:
      "Our vision is to become the go-to food service for our students. Our main goal is to provide a hassle-free way to order food, so they can concentrate on what they do best—creating, learning, and innovating.",
  },
];

const benefits: Benefit[] = [
  {
    image: cash,
    title: "Affordable Pricing",
    description:
      "We offer competitive pricing and special discounts, making it easy to enjoy great food.",
  },
  {
    image: food,
    title: "Wide Variety of Options",
    description:
      "From quick snacks to full meals, we offer a range of choices to satisfy any craving.",
  },
  {
    image: ride,
    title: "Seamless Experience",
    description:
      "Our user-friendly interface and efficient delivery system ensure quick and convenient delivery.",
  },
  {
    image: community,
    title: "Community Oriented",
    description:
      "Our platform provides opportunities to connect with fellow students over meals.",
  },
];

const AboutHero = () => {
  return (
    <section className="w-full">
      <header className="aboutHero bg-center text-center text-[#ffffff] py-[4rem]">
        <h1 className="text-[50px]">About Us</h1>
        <p className="text-[24px]">
          Your gateway to Seamless Ordering and Delivery
        </p>
      </header>

      <div className="md:px-10 px-[2rem]">
        <div className="w-full md:flex grid py-[5rem] gap-[2rem] items-center justify-center">
          <div className="grid grid-cols-2 w-full">
            {images.map((image, index) => (
              <Image key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
          </div>

          <div className="w-full flex flex-col justify-center">
            <h1 className="md:text-[50px] text-[28.75px] font-medium">About Us</h1>
            <p className="md:text-[24px] text-[14px] font-normal">
              Welcome to Tedible, the ultimate food ordering app designed
              specifically for tech enthusiasts and students at Tech Studio
              Academy. We are a team of passionate food lovers and tech
              enthusiasts committed to providing seamless, convenient, and
              delicious dining options to fuel the minds of future innovators.
            </p>
            <br />
            <p className="md:text-[24px] text-[14px] font-normal">
              Whether youre deep in coding, designing the next big product, or
              analyzing data trends, Tedible is here to ensure you stay
              nourished and focused.
            </p>
          </div>
        </div>

        <div className="md:flex grid gap-[2rem]">
          {infoSections.map((section, index) => (
            <InfoCard key={index} {...section} />
          ))}
        </div>

        <div className="py-[3rem] w-full text-center">
          <h1 className="font-medium text-[50px]">Why Choose Us?</h1>
          <div className="md:flex grid w-full items-center justify-center md:gap-[6rem] gap-[2rem] py-[3rem]">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </div>
      <AboutUs />
    </section>
  );
};

// InfoCard component with TypeScript
const InfoCard = ({ image, title, description }: InfoSection) => (
  <div className="border bg-secondary flex flex-col justify-center items-center gap-[2rem] text-primary py-[4rem] px-[2rem] relative text-center">
    <div className="border w-[15rem] py-1 top-0 flex items-center absolute bg-[#9BB8B0] border-[#9BB8B0]"></div>
    <Image src={image} alt={title} />
    <h1>{title}</h1>
    <p>{description}</p>
    <div className="border absolute bottom-0 w-[15rem] py-1 bg-[#9BB8B0] border-[#9BB8B0]"></div>
  </div>
);

// BenefitCard component with TypeScript
const BenefitCard = ({ image, title, description }: Benefit) => (
  <div className="flex flex-col items-center gap-[1rem] text-center">
    <Image src={image} alt={title} className="w-[3rem] border border-[#FF7834] bg-[#FF7834] rounded-full px-2 py-2" />
    <h1 className="text-[23.59px] font-medium">{title}</h1>
    <p>{description}</p>
  </div>
);

export default AboutHero;
