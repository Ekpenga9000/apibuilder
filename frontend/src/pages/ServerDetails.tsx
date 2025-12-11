import { GoChevronRight, GoServer, GoSquareFill, GoX } from "react-icons/go";
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

      <h2 className="text-3xl font-semibold mb-8">User Service Management</h2>
      <section className="w-full border border-gray-300 shadow-sm rounded-lg p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
          <GoServer className="text-5xl text-orange-500 inline-block" />
          <p className="text-gray-600 text-sm w-3/4">
            {/* Please provide a description for the User Service Management server here. */}
            The User Service Management server handles all user-related
            operations, including user authentication, profile management, and
            user data storage.
          </p>
        </div>
        <ul className="flex items-center gap-4 mb-4 text-sm">
          <li className="text-gray-600">
            Status:{" "}
            <span className="shadow-sm py-1 px-2 rounded-md text-xs bg-green-500 text-white">
              Running
            </span>
          </li>
          <li>
            <button className="cursor-pointer border border-gray-300 text-gray-600 hover:text-red-500 hover:border-red-500 transition-colors shadow-sm py-1 px-2 rounded-md text-sm flex items-center gap-1 text-xs">
              <GoSquareFill /> Stop
            </button>
          </li>
        </ul>

        <div className="flex items-center justify-between">
          <ul className="flex gap-4">
            <li className="text-sm text-gray-600">
              Total APIs:
              <strong className="text-black ml-1">5</strong>
            </li>
            <li className="text-sm text-gray-600">
              Active APIs:
              <strong className="text-black ml-1">4</strong>
            </li>
            <li className="text-sm text-gray-600">
              Inactive APIs:
              <strong className="text-black ml-1">1</strong>
            </li>
          </ul>
          <button className="cursor-pointer border border-gray-300 text-red-600 hover:text-white hover:bg-red-500 hover:border-red-500 transition-colors shadow-sm py-1 px-2 rounded-md text-sm flex items-center gap-2">
            <GoX /> Delete Server
          </button>
        </div>
      </section>
      {/* Server details content goes here */}
    </section>
  );
};

export default ServerDetails;
