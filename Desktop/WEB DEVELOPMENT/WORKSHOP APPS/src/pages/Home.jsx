import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <div>
      <div className=" d-flex flex-column gap-5 m-auto align-items-center mt-5">
        <div className="d-flex flex-column gap-4">
          <h1 className="w-75  fw-normal  m-auto">
            A Venture studio with a ‘unique’ twist
          </h1>
          <p>Explore the 24 apps with unique solutions and their metrics</p>
        </div>
        <Image className="my-5 w-50" src="../../src/images/light-bulb.png" />
      </div>
      <div className="d-flex flex-column gap-4 my-5">
        <div className="">
          <Link to="./Portfolio" className=" text-decoration-none ">
            <Button className=" d-flex gap-3 align-items-center m-auto bg-black  rounded-0  border-5 border-secondary ">
              <p className="m-auto  "> Our Portfolio</p>
              <p className=" my-2 text-secondary">|</p>
              <FiArrowRight />
            </Button>
          </Link>
        </div>
        <p className="w-50 m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab nisi
          soluta illo eveniet minima officiis commodi? Debitis, possimus velit!
        </p>
      </div>
    </div>
  );
};

export default Home;
