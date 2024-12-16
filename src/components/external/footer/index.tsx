import Image from "next/image";

import logo from "@/assets/navbar/logo.svg";
import mail from "@/assets/footer/mail.svg";
import phone from "@/assets/footer/phone.svg";
import location from "@/assets/footer/location.svg";
import instagram from "@/assets/footer/instagram.svg";
import x from "@/assets/footer/x.svg";
import facebook from "@/assets/footer/facebook.svg";

import Link from "next/link";
import MobileFooter from "./mobile-footer";
// import Button from "@/components/buttons";
// import Input from "@/components/input";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#073126] py-5 lg:block hidden">
        <div className="w-11/12 container">
          <Image src={logo} alt="tedible logo" height={180} width={180} />

          <div className="py-8 text-[#FEFEFF] flex justify-between">
            {/* Contact Section */}
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-medium">Contact</h1>
              <div className="flex items-center gap-2">
                <Image src={mail} alt="mail icon" />
                <Link
                  href="mailto:hello@tedble.com"
                  className="hover:underline"
                >
                  hello@tedble.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Image src={phone} alt="phone icon" />
                <Link href="tel:+2348133838283" className="hover:underline">
                  +234 813 383 8283
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Image src={location} alt="location icon" />
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=1+Ogunlesi+St,+off+Awoyokun+Street,+Onipanu,+Lagos+102215,+Lagos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  1 Ogunlesi St, off Awoyokun Street, <br /> Onipanu, Lagos
                  102215, Lagos
                </Link>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-medium">Quick Links</h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/about" className="hover:underline">
                    About us
                  </Link>
                </li>
                <li className="hover:underline">
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>Tedible Prime</li>
                <li>Blog</li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-medium">Follow us</h1>
              <ul className="gap-2 flex flex-col">
                <li className="flex gap-2 items-center">
                  <Image src={facebook} alt="Fcaebook Icon" />
                  Facebook
                </li>
                <li className="flex gap-2 items-center">
                  <Image src={x} alt="x icon" />
                  Twitter
                </li>
                <li className="flex gap-2 items-center">
                  <Image src={instagram} alt="instagram icon" />
                  Instagram
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-medium">Resources</h1>
              <ul className="flex flex-col gap-2">
                <li>Blog</li>
                <li>News Update</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:underline"
                  >
                    Terms and conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>Cookies Policy</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
          <div className="text-white flex justify-between items-end">
            <form className="w-[21.19rem]">
              <p>Subscribe to our Newsletter</p>
              <div className="border rounded-md py-1 px-2 bg-white text-xs mt-2">
                <input
                  className="bg-[#D7D7D7] py-2 px-4 outline-none caret-black rounded-l-sm w-60"
                  type="text"
                  placeholder="Email Address"
                />
                <button className="py-2 px-4 rounded-r-sm bg-[#FF7834] border-[#FF7834]">
                  Subcribe
                </button>
              </div>
            </form>
            <div>&copy; 2024 Copyright Techstudio Tedible</div>
          </div>
          <hr className="mt-6" />
        </div>
      </div>
      <MobileFooter title answer />
    </div>
  );
};

export default Footer;
