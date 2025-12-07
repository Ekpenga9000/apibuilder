import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoProject, GoDatabase, GoGear, GoServer } from "react-icons/go";

const SideNavigation = () => {
  const [isClicked, setIsClicked] = useState("Dashboard");
  const navigate = useNavigate();

  const handleClick = (item: string) => {
    setIsClicked(item);
    navigate(`/userid/${item.toLowerCase()}`);
  };
  return (
    <aside className="w-64 h-full p-4 border-r border-gray-200 min-h-screen">
      <ul className="space-y-4">
        <li
          className={
            isClicked === "Dashboard"
              ? "side-nav-item side-nav-item--clicked"
              : "side-nav-item"
          }
          onClick={() => handleClick("Dashboard")}>
          <GoProject />
          Dashboard
        </li>
        <li
          className={
            isClicked === "Projects"
              ? "side-nav-item side-nav-item--clicked"
              : "side-nav-item"
          }
          onClick={() => handleClick("Projects")}>
          <GoServer />
          Projects
        </li>
        <li
          className={
            isClicked === "Data Viewer"
              ? "side-nav-item side-nav-item--clicked"
              : "side-nav-item"
          }
          onClick={() => handleClick("Data_Viewer")}>
          <GoDatabase />
          Data Viewer
        </li>
        <li
          className={
            isClicked === "Account"
              ? "side-nav-item side-nav-item--clicked"
              : "side-nav-item"
          }
          onClick={() => handleClick("Account")}>
          <GoGear />
          Account
        </li>
      </ul>
    </aside>
  );
};

export default SideNavigation;
