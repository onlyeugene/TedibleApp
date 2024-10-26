import React from "react";
import { Image } from "react-bootstrap";

const Teams = () => {
  return (
    <div>
      <h1 className="my-5">MEET OUR TEAM</h1>
      <div className="d-flex team-img-res gap-4 mb-5">
        <div className="image-container">
          <Image className="top-image  " src="../../src/images/Gritty1.png" />
          <Image src="../../src/images/Gritty2.png" />
          <div className="image-container  team-text-res ">
            <div className="bg-secondary-subtle  my- rounded-3 py-1 top-image w-100 ">
              <h4>Gritty Grammer</h4>
              <p className="title-color">Investor </p>
            </div>
            <div className="dark-bgcolor my-3 rounded-3 py-1">
              <h4 className="text-white">Gritty Grammer</h4>
              <p className="title-color2">Investor </p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <Image className="top-image " src="../../src/images/peter1.png" />
          <Image src="../../src/images/peter2.png" />
          <div className="image-container team-text-res">
            <div className="bg-secondary-subtle my- rounded-3 py-1 top-image w-100 ">
              <h4>Peter Griffin</h4>
              <p className="title-color">Photographer </p>
            </div>
            <div className="dark-bgcolor my-3 rounded-3 py-1">
              <h4 className="text-white">Peter Griffin</h4>
              <p className="title-color2">Photographer </p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <Image className="top-image " src="../../src/images/Sarah1.png" />
          <Image src="../../src/images/Sarah2.png" />
          <div className="image-container team-text-res">
            <div className="bg-secondary-subtle my- rounded-3 py-1 top-image w-100 ">
              <h4>Sarah Shobowale</h4>
              <p className="title-color">Product Manager </p>
            </div>
            <div className="dark-bgcolor my-3 rounded-3 py-1">
              <h4 className="text-white">Sarah Shobowale</h4>
              <p className="title-color2">Product Manager </p>
            </div>
          </div>
        </div>
        <div className="image-container">
          <Image className="top-image" src="../../src/images/Stephen1.png" />
          <Image src="../../src/images/Stephen2.png" />
          <div className="image-container team-text-res">
            <div className="bg-secondary-subtle my- rounded-3 py-1 top-image w-100 ">
              <h4>Stephen Essein</h4>
              <p className="title-color">Developer </p>
            </div>
            <div className="dark-bgcolor my-3 rounded-3 py-1">
              <h4 className="text-white">Stephen Essein</h4>
              <p className="title-color2">Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
