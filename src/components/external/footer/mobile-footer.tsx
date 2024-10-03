import Image from "next/image";
import React from "react";


import instagram from "@/assets/footer/instagram.svg";
import x from "@/assets/footer/x.svg";
import facebook from "@/assets/footer/facebook.svg";
import logo from "@/assets/navbar/logo.svg";
import Link from "next/link";
import AccordionWithDash from "@/components/ui/accordion/accordion-dash";
import Input from "@/components/input";
import Button from "@/components/buttons";

interface MobileFooterProps {
  title: React.ReactNode;
  answer: React.ReactNode;
}

const MobileFooter: React.FC<MobileFooterProps> = ({ title, answer }) => {
  return (
    <section className="bg-secondary py-5 px-10 text-primary sm:hidden block">
      <Image src={logo} alt="Logo" width={100} height={100} />
      <div>
        <AccordionWithDash
          title={<h1 className="text-primary text-sm">CONTACT</h1>}
          answer={
            <ul className="list-none space-y-2 text-gray-400 text-xs">
              <li>
                <Link
                  href="mailto:hello@tedble.com"
                  className="hover:underline"
                >
                  hello@tedble.com
                </Link>
              </li>
              <li>
                <Link href="tel:+2348133838283" className="hover:underline">
                  +234 813 383 8283
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=1+Ogunlesi+St,+off+Awoyokun+Street,+Onipanu,+Lagos+102215,+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  1 Ogunlesi St, off Awoyokun Street, Onipanu, <br /> Lagos
                  102215, Lagos
                </Link>
              </li>
            </ul>
          }
        />
        <AccordionWithDash
          title={<h1 className="text-primary text-sm">QUICK LINKS</h1>}
          answer={
            <ul className="list-none space-y-2 text-gray-400 text-xs">
              <li>Blog</li>
              <li>News Update</li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          }
        />
        <div className="mt-5 py-2 text-sm">
          <Link href="/privacy-policy">PRIVACY POLICY</Link>
          <hr className="border-[#494B4D] mt-3" />
        </div>

        <div className="mt-5 py-2 text-sm">
          <Link href="#top" className="mt-5">
            BACK TO TOP
          </Link>
          <hr className="border-[#494B4D] mt-3" />
        </div>

        <div className="text-primary mt-5 text-sm">
          <p className="text-start">Subscribe to our Newsletter</p>
          <form className=" flex flex-col">
            <div className="border rounded-md py-1 px-2 bg-white w-full text-xs mt-2 flex">
              <Input
                className="bg-[#D7D7D7] py-2 px-4 outline-none caret-black rounded-l-sm w-full"
                type="text"
                placeholder="Email Address"
              />
              <Button className=" rounded-r-sm bg-[#FF7834] border-[#FF7834] w-1/3">
                Subcribe
              </Button>
            </div>
            <hr className="mt-6" />
          </form>
          <div className="text-center mt-4">
            &copy; 2024 Copyright Techstudio Tedible
          </div>
          <ul className="gap-5 flex items-center justify-center pt-5">
              <li className="flex gap-2 items-center">
                <Image src={facebook} alt="Fcaebook Icon" />
              </li>
              <li className="flex gap-2 items-center">
                <Image src={x} alt="x icon" />
              </li>
              <li className="flex gap-2 items-center">
                <Image src={instagram} alt="instagram icon" />
              </li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default MobileFooter;
