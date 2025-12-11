import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";

const ServerDetails = () => {
  return (
    <section className="py-4 px-6 flex-1">
      <span className="text-sm inline-block mb-6">
        <Link to="/servers" className="text-gray-500 hover:text-orange-500">
          My Servers
        </Link>
        <GoChevronRight className="inline-block mx-1 text-gray-500" />
        <span className="text-orange-500 underline">Server Details</span>
      </span>

      <h2 className="text-3xl font-semibold mb-4">Server Details</h2>
      {/* Server details content goes here */}
    </section>
  );
};

export default ServerDetails;
