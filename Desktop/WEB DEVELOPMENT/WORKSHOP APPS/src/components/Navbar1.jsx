import React from "react";
import { Dropdown, Image, Navbar } from "react-bootstrap";
import DropDown from "./DropDown";

const Navbar1 = () => {
  return (
    <Navbar className="shadow">
      <div className="d-flex flex-row gap-3 align-items-center m-auto my-1 image-container navbar-res ">
        <Image className="mb-4 top-image" src="../../src/images/logo1.png" />
        <Image className="mb-4  " src="../../src/images/logo3.png" />
        <DropDown />
      </div>
      <hr />
    </Navbar>
  );
};

export default Navbar1;
