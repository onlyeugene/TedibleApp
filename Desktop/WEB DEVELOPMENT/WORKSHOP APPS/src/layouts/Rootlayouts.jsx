import React from "react";
import { Outlet } from "react-router-dom";
import Navbar1 from "../components/Navbar1";

const Rootlayouts = () => {
  return (
    <div>
      <Navbar1 />
      <Outlet />
    </div>
  );
};

export default Rootlayouts;
