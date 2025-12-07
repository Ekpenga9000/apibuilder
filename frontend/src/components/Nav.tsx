import { Link } from "react-router-dom";
import profilePic from "../assets/images/image.png";

const Nav = () => {
  return (
    <nav className="p-4 border-b border-gray-300 shadow-sm">
      <ul className="flex items-center justify-between">
        <li className="font-bold text-2xl">
          <Link to={"/dashboard"}>
            <span className="text-orange-600">API</span>
            <span className="text-gray-500">Buildr</span>
          </Link>
        </li>
        <li className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
          <img
            src={profilePic}
            alt="Profile"
            className="object-cover rounded-full"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
