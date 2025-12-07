import Dashboard from "../components/Dashboard";
import SideNavigation from "../components/SideNavigation";

const Home = () => {
  return (
    <section className="flex">
      <SideNavigation />
      <Dashboard />
    </section>
  );
};

export default Home;
