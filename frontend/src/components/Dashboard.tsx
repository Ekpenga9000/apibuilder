import {
  GoRss,
  GoCheckCircleFill,
  GoXCircleFill,
  GoServer,
  GoPlusCircle,
} from "react-icons/go";

const Dashboard = () => {
  return (
    <section className="py-4 px-6 flex-1">
      <h1 className="font-bold text-4xl mb-4">Welcome, Alice!</h1>
      <ul className="mb-4 flex items-center gap-4">
        <li className="flex items-center">
          <span className="font-semibold">5</span>
          <span className="ml-2 flex items-center gap-1 text-gray-600">
            <GoServer className="text-orange-600" />
            servers
          </span>
        </li>
        <li className="flex items-center">
          <span className="font-semibold">22</span>
          <span className="ml-2 flex items-center gap-1 text-gray-600">
            <GoRss className="text-orange-600" />
            APIs
          </span>
        </li>
        <li className="flex items-center">
          <span className="font-semibold">20</span>
          <span className="ml-2 flex items-center gap-1 text-gray-600">
            <GoCheckCircleFill className="text-green-600" />
            active
          </span>
        </li>
        <li className="flex items-center">
          <span className="font-semibold">2</span>
          <span className="ml-2 flex items-center gap-1 text-gray-600">
            <GoXCircleFill className="text-red-600" />
            inactive
          </span>
        </li>
      </ul>
      <div className="border border-gray-300 rounded-md p-4">
        <ul className="flex items-center justify-between mb-4">
          <li className="font-semibold text-lg">My Servers</li>
          <li className="flex items-center gap-3 text-sm font-semibold cursor-pointer">
            <GoPlusCircle /> Add Server
          </li>
        </ul>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-600 text-sm">
                <th className="py-3 px-4 font-semibold">Server name</th>
                <th className="py-3 px-4 font-semibold">APIs</th>
                <th className="py-3 px-4 font-semibold">Active</th>
                <th className="py-3 px-4 font-semibold">Inactive</th>
                <th className="py-3 px-4 font-semibold">Last Modified</th>
                <th className="py-3 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold">
                  User service management
                </td>
                <td className="py-3 px-4">5</td>
                <td className="py-3 px-4">4</td>
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4 text-gray-600 text-sm">1 day ago</td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold">Order processing</td>
                <td className="py-3 px-4">8</td>
                <td className="py-3 px-4">7</td>
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4 text-gray-600 text-sm">2 days ago</td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold">
                  Inventory management
                </td>
                <td className="py-3 px-4">9</td>
                <td className="py-3 px-4">9</td>
                <td className="py-3 px-4">0</td>
                <td className="py-3 px-4 text-gray-600 text-sm">3 days ago</td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold">
                  Payment Gateway Integration
                </td>
                <td className="py-3 px-4">9</td>
                <td className="py-3 px-4">9</td>
                <td className="py-3 px-4">0</td>
                <td className="py-3 px-4 text-gray-600 text-sm">3 weeks ago</td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:underline">
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
