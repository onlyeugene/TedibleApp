import React from "react";
import Button from "@/components/buttons";
import Input from "@/components/input";
import text from "@/assets/home/contact/text.svg";
import call from "@/assets/home/contact/call.svg";
import locate from "@/assets/home/contact/locate.svg";
import map from "@/assets/home/contact/map.svg";
import Image from "next/image";
import Link from "next/link";
import ContactHero from "@/components/external/hero/contactHero";
// import MapComponent from "@/components/map";

export const metadata = {
  title: "Contact Us",
  description:
    "Have any complaints or suggestions or something else? You can contact us to let us know about them",
};

const Contact: React.FC = () => {
  return (
    <>
      {" "}
      <ContactHero />
      <div className="flex flex-col justify-center px-10 container w-11/12 ">
        <div className="mb-8 flex flex-col sm:items-start sm:justify-start items-center justify-center pt-10">
          <h1 className="sm:text-[32px] text-[29px] font-medium">
            Write us directly
          </h1>
          <p className="sm:text-base text-sm text-center sm:text-start">
            Whether you need information, want to book a reservation, or just share your
            feedback, <br className="md:block hidden"/> we&apos;re here for you.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col-reverse w-full gap-8">
          {/* Contact Form */}
          <form className="border rounded-md my-10 w-full flex flex-col gap-4 px-3 border-t-[#FF7834] border-t-[4px] py-5 bg-[#F3F8FB] sm:text-base text-sm">
            <div>
              <label htmlFor="full-name">Full Name</label>
              <Input
                className="w-full py-1 rounded-md px-2"
                type="text"
                placeholder="Full Name"
                // id="full-name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Input
                className="w-full py-1 rounded-md px-2"
                type="email"
                placeholder="example@example.com"
                // id="email"
              />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <Input
                className="w-full py-1 rounded-md px-2"
                type="text"
                placeholder="Subject Title"
                // id="subject"
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                className="w-full py-2 px-2 border rounded-md outline-none h-40"
                id="message"
                placeholder="Type your message, inquiries, or questions here"
              />
            </div>
            <Button className="w-full bg-[#FF7834] font-bold text-[17px] py-3 text-white rounded-md">
              Send Message
            </Button>
          </form>

          {/* Contact Details */}
          <div className="w-full flex flex-col gap-10 justify-center">
            <ContactDetail
              imageSrc={locate}
              icon={map}
              heading="Our Head Quarters"
              description="Find us on Google Map"
              address={["1 Ogunlesi Street, Off Awoyokun", "Onipanu, Lagos."]}
            />
            <hr className="border-dashed border-[1px] border-gray-700" />
            <ContactDetail
              imageSrc={call}
              heading="Our Phone"
              description="+234 7034857699"
              phone="+234 7034855669"
            />
            <hr className="border-dashed border-[1px] border-gray-700" />
            <ContactDetail
              imageSrc={text}
              heading="Our Email"
              description="contact@tedible.com"
              mail="contact@tedible.com"
            />
          </div>
        </div>
        {/* <div className="pb-20">
        <MapComponent />
      </div> */}
      </div>
    </>
  );
};

// ContactDetail component for repeated elements
interface ContactDetailProps {
  imageSrc: string;
  icon?: string; // Make icon optional
  heading: string;
  description: string;
  address?: string[]; // Change to an array of strings
  phone?: string;
  mail?: string;
}

const ContactDetail: React.FC<ContactDetailProps> = ({
  imageSrc,
  icon,
  heading,
  description,
  address,
  phone,
  mail,
}) => (
  <div className="flex items-start gap-3">
    <Image src={imageSrc} alt={heading} width={50} height={50} />
    <div>
      <h1 className="sm:text-2xl text-base font-bold">{heading}</h1>
      <div className="flex gap-3 items-center">
        <h2 className="sm:text-lg text-xs">{description}</h2>
        {icon && <Image src={icon} alt="map" width={18} height={18} />}{" "}
        {/* Conditionally render the icon */}
      </div>
      {address && (
        <h3 className="text-lg">
          {address.map((line, index) => (
            <Link
              key={index}
              href="https://www.google.com/maps/search/?api=1&query=1+Ogunlesi+St,+off+Awoyokun+Street,+Onipanu,+Lagos+102215,+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline sm:text-lg text-xs"
            >
              <span>
                {line}
                {index < address.length - 1 && <br />}{" "}
                {/* Add <br /> except after the last line */}
              </span>
            </Link>
          ))}
        </h3>
      )}{" "}
      {/* conditionally render the address */}
      {phone && <p className="sm:text-lg text-xs">{phone}</p>}
      {mail && <p className="sm:text-lg text-xs">{mail}</p>}
    </div>
  </div>
);

export default Contact;
