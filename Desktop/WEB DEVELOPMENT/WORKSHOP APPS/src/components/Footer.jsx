import React from "react";
import { Image } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { LiaFacebook } from "react-icons/lia";
import { TfiTwitter } from "react-icons/tfi";
import { RiYoutubeLine } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div>
      <Outlet  />
      <div className="dark-bgcolor d-flex flex-column align-items-center gap-5 py-5">
        <Image className="w-25" src="../../src/images/logo2.png" />
        <div className="d-flex gap-5  justify-content-center ">
          <LiaFacebook className="     text-white " />
          <TfiTwitter className="text-white " />
          <RiYoutubeLine className="text-white " />
          <IoLogoLinkedin className="text-white " />
          <GrInstagram className="text-white " />
        </div>
        <div className="d-flex gap-5 foot-res justify-content-center">
          <Link className="text-white text-decoration-none" to="./">
            Home
          </Link>
          <Link className="text-white text-decoration-none" to="./about">
            About
          </Link>
          <Link className="text-white text-decoration-none" to="./methodology">
            Our Method
          </Link>
          <Link className="text-white text-decoration-none" to="./contact">
            Contact
          </Link>
          <Link className="text-white text-decoration-none" to="./teams">
            Team
          </Link>
          <Link
            className="text-white text-decoration-none"
            to="      ./portfolio"
          >
            Stories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
