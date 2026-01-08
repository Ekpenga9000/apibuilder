import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "./Logo";
import profilePic from "../assets/images/image.png";

const Nav = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const dropdownRef = useRef<HTMLLIElement>(null);
  const imgSelectRef = useRef<HTMLLIElement>(null);
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
    console.log("logged out");
  };

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      imgSelectRef.current &&
      !imgSelectRef.current.contains(e.target as Node) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsDropdownActive(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <nav className="p-4 border-b border-gray-300 shadow-sm relative">
      <ul className="flex items-center justify-between">
        <li>
          <Logo path="/dashboard" />
        </li>
        <li
          className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
          ref={imgSelectRef}
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
          <li
            className="absolute bottom-[-2.2rem] right-4 bg-white border border-gray-100 shadow-md rounded-sm hover:bg-gray-200"
            ref={dropdownRef}>
            <button className="px-4 py-2 cursor-pointer" onClick={handleLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
