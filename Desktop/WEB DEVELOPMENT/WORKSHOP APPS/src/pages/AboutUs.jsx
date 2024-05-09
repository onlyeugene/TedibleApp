import React from "react";
import { Image, Button } from "react-bootstrap";
import { PiLineVerticalBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div className="d-flex flex-column gap-5 my-5">
        <div className="d-flex about-top-res dark-bgcolor container my-5 rounded-3 ">
          <div className="text-white mt-5  ms-5 text-start d-flex flex-column gap-3">
            <h1 className="h1-hero">Who We Are</h1>
            <p className="p-hero">
              We help you build and grow your startup. With our 300+ projects we
              have the experience you need to among the 10% successful start ups
            </p>
          </div>
          <Image
            className="m-5 about-hero-img"
            src="../../src/images/Video_Hero.png"
          />
        </div>

        <div className=" space-all">
          <h3 className="w-50 m-auto quote-text">
            90% of startups are failing, with our 300+ portfolio experience we
            will prevent mistakes of failed start ups and make it the top 10%
          </h3>
        </div>
      </div>

      <div className=" about-imgtex-res  container d-flex gap-5 my-5 ">
        <div className="d-flex flex-column about-res1  position-relative  gap-3  ">
          <Image className=" " src="../../src/images/About-Image1.png" />
          <Image className=" " src="../../src/images/About-Image2.png" />
          <Image
            className="   img3-pos "
            src="../../src/images/About-Image3.png"
          />
        </div>
        <div className="  my-5 ps-5 text-start  w-50 ms-auto my-auto">
          <div className=" about-tex-res   ps-5 ">
            <h1 className="h1-hero">Our teams Job</h1>
            <p className="p-hero ">
              We have the best team, from designers to markets we select the
              very best of candidates out of our participant pool of diverse
              background and knowledge.
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex container ms-5  space-all ">
        <div className="d-flex fact-ress">
          <div className=" fs-1 d-flex  ">
            <PiLineVerticalBold className="fact-icon  " />
            <div className="text-start mt-1 ">
              <p className="fw-bold">Facts 1</p>
              <p className="fact-content   me-5">
                We have worked with 12+ clients
              </p>
            </div>
          </div>
          <div className=" fs-1 d-flex ">
            <PiLineVerticalBold className="fact-icon " />
            <div className="text-start mt-1 ">
              <p className="fw-bold">Facts 1</p>
              <p className="fact-content  me-5 ">
                We have worked with 12+ clients
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex fact-ress">
          <div className=" fs-1 d-flex  ">
            <PiLineVerticalBold className="fact-icon " />
            <div className="text-start mt-1 ">
              <p className="fw-bold">Facts 1</p>
              <p className="fact-content  me-5 ">
                We have worked with 12+ clients
              </p>
            </div>
          </div>
          <div className=" fs-1 d-flex  ">
            <PiLineVerticalBold className="fact-icon " />
            <div className="text-start mt-1">
              <p className="fw-bold">Facts 1</p>
              <p className="fact-content  me-5 ">
                We have worked with 12+ clients
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex flex-column gap-5 mb-5 ">
        <div className="d-flex flex-column ">
          <p className="portfolio-text">Our 300+ portfolio projects</p>
          <p className="fact-content w-75 pe-5 m-auto ">
            We help you build and grow your startup. With our 300+ projects we
            have the experience you need to among the 10% successful start ups
          </p>
        </div>
        <div className="">
          <Link to="/portfolio" className=" text-decoration-none ">
            <Button className=" d-flex gap-3 align-items-center m-auto bg-black  rounded-0  px-4 border-secondary ">
              <p className="m-auto  "> See Our Portfolio</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
