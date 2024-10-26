import alex from "@/assets/home/about/alex.svg";
import rofiat from "@/assets/home/about/rofiat.svg";
import esther from "@/assets/home/about/esther.svg";
import jordan from "@/assets/home/about/jordan.svg";
import pic from "@/assets/home/about/pic.svg";
import quote from '@/assets/home/about/quotes.svg'
// import "../AboutUs/AboutUs.Module.css";
import Image from "next/image";

const AboutUs = () => {
  const Users = [
    {
      id: 1,
      Image: alex,
      name: "Alex",
      stack: "Web Development Student",
      text: `"Tedible's a user-friendly web app that makes ordering food so easy. I love being able to customize my meals to fit my dietary needs. Plus, the affordable pricing is perfect for a student budget!"`,
    },
    {
      id: 2,
      Image: rofiat,
      name: "Rofiat",
      stack: "Cybersecurity Student",
      text: `"I used to struggle with finding time to eat well between classes and projects. Tedible has solved that problem. The fast delivery and tasty meals keep me going throughout the day. It's a lifesaver!"`,
      
    },
    {
      id: 3,
      Image: jordan,
      name: "Jordan",
      stack: "Data Analysis Student",
      text: `"The variety of healthy options on Tedible is fantastic. I feel more energized and focused during my coding sessions. It's great to know I can get nutritious meals without any hassle."`,
    },
    {
      id: 4,
      Image: esther,
      name: "Esther",
      stack: "Front-end Development Student",
      text: `"Tedible is the perfect solution for tech students like me. The app is intuitive, and the food is always fresh and delicious.The customer support team is also incredibly responsive and helpful."`,
    },
  ];
  return (
    <section className="w-full">
      <div className="bg-[#F7FAFC] py-[3rem]">
        <div className="text-center py-[2rem]">
          <h1 className="md:text-[50px] py-[2rem] text-[29px] font-medium">
            What Our Clients Say About Us
          </h1>
        </div>

        <div className='flex gap-[2rem] sm:w-full w-full overflow-x-scroll no-scrollbar'>
          {Users.map((user) => (
            <div
              key={user.id}
              className="bg-white text-black"
            >
              <div className='w-full border flex bg-white border-[#ffffff] pl-[2rem] pt-[2rem] pb-[2rem] relative'>
                    <div className='w-[30rem] h-[17rem] border-l-[5px] border-b-[5px] border-t-[5px] border-orange-500 gap-3 flex p-[1rem]'>
                        <div className="absolute border-[3px] border-white w-[20rem] h-4 bg-white top-7 right-0 "/>
                        <div className='px-[rem] text-black'>
                            <h1 className='font-semibold text-[20px]'>{user.name}</h1>
                            <p className='text-sm font-bold'>{user.stack}</p>
                            <div className='border-b-[1px] border-black p-2 w-[3rem]' />
                            <Image src={quote} alt="" className="pt-3"/>
                            <p className='text-sm pt-2'>{user.text}</p>
                        </div>
                        <div>
                            <Image src={user.Image} alt="" className='w-[45rem]'/>
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </div>

        
      </div>

      <div className="md:py-[5rem] py-[2rem] md:px-[5rem] px-[2rem]">
        <h1 className="md:text-[50px] py-[2rem] text-[29px] font-medium text-center">
          Meet The Team
        </h1>

        <div className="md:flex grid grid-cols-2 md:gap-[3rem] gap-[1rem]">
          <div className="text-center border border-[#0C513F] w-full pb-[rem] rounded-t-2xl rounded-b-xl ">
            <div>
              <Image src={pic} alt="" className="w-full" />
            </div>
            <div className="md:py-[2rem] py-[1rem]">
              <h1 className="md:text-[24px] text-[14px] font-medium">
                Aisha Falola
              </h1>
              <p className="md:text-[14px] text-[8px]">
                Customer Service Representative
              </p>
            </div>
          </div>
          <div className="text-center border w-full border-[#0C513F] rounded-t-2xl rounded-b-xl ">
            <div>
              <Image src={pic} alt="" className="w-full" />
            </div>
            <div className="md:py-[2rem] py-[1rem]">
              <h1 className="md:text-[24px] text-[14px] font-medium">
                Olatunji Fijabi
              </h1>
              <p className="md:text-[14px] text-[8px]">Logistics Specialist</p>
            </div>
          </div>
          <div className="text-center border w-full border-[#0C513F] rounded-t-2xl rounded-b-xl ">
            <div>
              <Image src={pic} alt="" className="w-full" />
            </div>
            <div className="md:py-[2rem] py-[1rem]">
              <h1 className="md:text-[24px] text-[14px]font-medium">
                Ibidun Adesoji
              </h1>
              <p className="md:text-[14px] text-[8px]">
                Food Quality Specialist
              </p>
            </div>
          </div>
          <div className="text-center border w-full border-[#0C513F] rounded-t-2xl rounded-b-xl ">
            <div>
              <Image src={pic} alt="" className="w-full" />
            </div>
            <div className="md:py-[2rem] py-[1rem]">
              <h1 className="md:text-[24px] text-[14px] font-medium">
                Raymond Greg
              </h1>
              <p className="md:text-[14px] text-[8px]">Operations Assistant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;