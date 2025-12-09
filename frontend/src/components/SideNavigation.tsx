import { useNavigate, useLocation } from "react-router-dom";
import { GoProject, GoDatabase, GoGear, GoServer } from "react-icons/go";
import type { IconType } from "react-icons";

interface NavItem {
  path: string;
  label: string;
  icon: IconType;
}

const SideNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { path: "/dashboard", label: "Dashboard", icon: GoProject },
    { path: "/servers", label: "Servers", icon: GoServer },
    { path: "/data_viewer", label: "Data Viewer", icon: GoDatabase },
    { path: "/account", label: "Account", icon: GoGear },
  ];

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <aside className="w-64 h-full p-4 border-r border-gray-200 min-h-screen">
      <ul className="space-y-4">
        {navItems.map(({ path, label, icon: Icon }) => (
          <li
            key={path}
            className={`side-nav-item ${
              location.pathname === path ? "side-nav-item--clicked" : ""
            }`}
            onClick={() => handleClick(path)}>
            <Icon />
            {label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideNavigation;
