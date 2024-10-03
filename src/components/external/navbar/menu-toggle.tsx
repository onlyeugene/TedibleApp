import React from "react";

const MenuToggle: React.FC = () => (
  <ul className="flex flex-col gap-1 cursor-pointer sm:hidden">
    <li className="w-6 h-[3px] bg-black border-black rounded-full border"></li>
    <li className="w-6 h-[3px] bg-black border-black rounded-full border"></li>
    <li className="w-6 h-[3px] bg-black border-black rounded-full border"></li>
  </ul>
);

export default MenuToggle;
