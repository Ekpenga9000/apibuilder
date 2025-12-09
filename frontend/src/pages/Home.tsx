import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import SideNavigation from "../components/SideNavigation";
import Server from "../components/Server";

const Home = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(
    location.pathname || "/dashboard"
  );

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);
  return (
    <section className="flex">
      <SideNavigation />
      {currentPath === "/" || (currentPath === "/dashboard" && <Dashboard />)}
      {currentPath === "/servers" && <Server />}
    </section>
  );
};

export default Home;
