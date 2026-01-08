import { useState } from "react";
import Logo from "./Logo";
import profilePic from "../assets/images/image.png";

const Nav = () => {
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
  return (
    <nav className="p-4 border-b border-gray-300 shadow-sm relative">
      <ul className="flex items-center justify-between">
        <li>
          <Logo path="/dashboard" />
        </li>
        <li
          className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
          onClick={() => {
            setIsDropdownActive((prev) => !prev);
          }}>
          <img
            src={profilePic}
            alt="Profile"
            className="object-cover rounded-full"
          />
        </li>
        {isDropdownActive && (
          <li className="absolute bottom-[-2.2rem] right-4 cursor-pointer bg-white px-4 py-2 border border-gray-100 shadow-md rounded-sm hover:bg-gray-200">
            Logout
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
