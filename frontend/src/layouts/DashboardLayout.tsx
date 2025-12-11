// This is the layout component for the dashboard pages

import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import SideNavigation from "../components/SideNavigation";

const DashboardLayout = () => {
  return (
    <div className="h-screen">
      <Nav />
      <div className="flex">
        <SideNavigation />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
