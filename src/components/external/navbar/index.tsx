import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-auto py-3 w-full container">
      <div>Logo</div>

      <ul className="flex items-center gap-5">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/categories"}>Categories</Link>
        </li>
        <li>
          <Link href={"/restaurants"}>Restaurants</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact Us</Link>
        </li>
        <li>
          <Link href={"/about"}>About Us</Link>
        </li>
      </ul>

      <div className="flex items-center gap-5">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Navbar;
