// import Dropdown from "react-bootstrap/Dropdown";
// import CloseButton from "react-bootstrap/CloseButton";
// function DropDown() {

//   return (
//     <Dropdown>
//       <Dropdown.Toggle
//         variant=""
//         className="border-2 border-black  rounded-3 alert-dark mt-3"
//         id="dropdown-basic "
//       ></Dropdown.Toggle>

//       <Dropdown.Menu className="d-flex flex-column gap-3  rounded-2  mt-3 p-5 ">
//         <CloseButton className="w-100" />
//         <Dropdown.Item className="mx-5 " href="/">
//           Home
//         </Dropdown.Item>
//         <Dropdown.Item className="mx-5  " href="/about">
//           About
//         </Dropdown.Item>
//         <Dropdown.Item className="mx-5  " href="/methodology">
//           Our Method
//         </Dropdown.Item>
//         <Dropdown.Item className="mx-5  " href="/contact">
//           Contact
//         </Dropdown.Item>
//         <Dropdown.Item className="mx-5  " href="/teams">
//           Team
//         </Dropdown.Item>
//         <Dropdown.Item className="mx-5  " href="/portfolio">
//           Stories
//         </Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default DropDown;

import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const DropDown = () => {
  const [dropdown, setDropDown] = useState(false);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center gap-2">
        <button
          onClick={() => {
            setDropDown(!dropdown);
          }}
          className="rounded-2 border-1 mt-5 "
        >
          <IoIosArrowDown />
        </button>
      </div>
      <div className=" d-md-flex justify-content-end py-3 position-relative">
        {dropdown && (
          <ul className="d-flex flex-column gap-2 align-items-center rounded-2 position-absolute bg-elements ">
            <div className="position-absolute btn2 p-2">
              <button
                className=" m-0 rounded-1 border-1"
                onClick={() => {
                  setDropDown(false);
                }}
              >
                X
              </button>
            </div>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <Link className="text-black text-decoration-none" to="/">
                Home
              </Link>
            </li>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <Link className="text-black text-decoration-none" to="/about">
                About
              </Link>
            </li>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <Link
                className="text-black text-decoration-none"
                to="/methodology"
              >
                Our Method
              </Link>
            </li>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <Link className="text-black text-decoration-none" to="/contact">
                Contact
              </Link>
            </li>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <Link className="text-black text-decoration-none" to="/teams">
                Team
              </Link>
            </li>
            <li className="w-100 px-2 py-1 rounded-2 text-center">
              <Link className="text-black text-decoration-none" to="/portfolio">
                Stories
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
