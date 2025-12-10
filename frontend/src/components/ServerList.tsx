import {
  GoPlusCircle,
  GoRss,
  GoCheckCircleFill,
  GoXCircleFill,
  GoServer,
} from "react-icons/go";
import ServerInfo from "./ServerInfo";

interface ServerListProps {
  handleServerClick: (serverName: string) => void;
}

const ServerList = ({ handleServerClick }: ServerListProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-4">
          Backend Server Management
        </h2>
        <button className="flex items-center gap-2 text-sm bg-orange-600 py-1 px-3 text-white rounded-md hover:bg-orange-500 cursor-pointer">
          <GoPlusCircle className="inline-block mr-2" />
          Add Server
        </button>
      </div>
      <p className="text-gray-600 text-sm mb-6">
        Manage your backend servers. Click on a server to view and manage its
        APIs.
      </p>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
      <div className="space-y-4">
        {["Server abc", "Server 2", "Server 3"].map((server) => (
          <ServerInfo
            key={server}
            name={server}
            description={`Description for ${server}`}
            totalApis={5}
            activeApis={4}
            inactiveApis={1}
            handleServerClick={handleServerClick}
          />
        ))}
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-600 text-sm">
            <th className="py-3 px-4 font-semibold">
              <div className="flex items-center gap-2">
                <GoServer className="inline-block text-orange-600" />
                <span className="inline-block">Server name</span>
              </div>
            </th>
            <th className="py-3 px-4 font-semibold">
              <div className="flex items-center justify-center gap-2">
                <GoRss className="inline-block" />
                <span>APIs</span>
              </div>
            </th>
            <th className="py-3 px-4 font-semibold">
              <div className="flex items-center justify-center gap-2">
                <GoCheckCircleFill className="inline-block text-green-600" />
                <span className="inline-block">Active</span>
              </div>
            </th>
            <th className="py-3 px-4 font-semibold">
              <div className="flex items-center justify-center gap-2">
                <GoXCircleFill className="inline-block text-red-600" />
                <span className="inline-block">Inactive</span>
              </div>
            </th>
            <th className="py-3 px-4 font-semibold"> Last Modified</th>
            <th className="py-3 px-4 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="py-3 px-4 font-semibold">User service management</td>
            <td className="py-3 px-4">
              <p className="flex justify-center">5</p>
            </td>
            <td className="py-3 px-4">
              <p className="flex justify-center">4</p>
            </td>
            <td className="py-3 px-4">
              <p className="flex justify-center">1</p>
            </td>
            <td className="py-3 px-4 text-gray-600 text-sm">1 day ago</td>
            <td className="py-3 px-4">
              <span className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-green-700"></span>
                Running
              </span>
            </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-3 px-4 font-semibold">Order processing</td>
            <td className="py-3 px-4">
              <p className="flex justify-center">8</p>
            </td>
            <td className="py-3 px-4">
              <p className="flex justify-center">7</p>
            </td>
            <td className="py-3 px-4">
              <p className="flex justify-center">1</p>
            </td>
            <td className="py-3 px-4 text-gray-600 text-sm">2 days ago</td>
            <td className="py-3 px-4">
              <span className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Stopped
              </span>
            </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-3 px-4 font-semibold">Inventory management</td>
            <td className="py-3 px-4">
              <p className="flex justify-center">9</p>
            </td>
            <td className="py-3 px-4">
              <p className="flex justify-center">9</p>
            </td>
            <td className="py-3 px-4">
              <p className="flex justify-center">0</p>
            </td>
            <td className="py-3 px-4 text-gray-600 text-sm">3 days ago</td>
            <td className="py-3 px-4">
              <span className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-green-700"></span>
                Running
              </span>
            </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-3 px-4 font-semibold">
              Payment Gateway Integration
            </td>
            <td className="py-3 px-4">
              <p className="flex justify-center">9</p>
            </td>
            <td className="py-3 px-4">
              <p className="flex justify-center">9</p>
            </td>
            <td className="py-3 px-4">
              <p className="flex justify-center">0</p>
            </td>
            <td className="py-3 px-4 text-gray-600 text-sm">3 weeks ago</td>
            <td className="py-3 px-4">
              <span className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-green-700"></span>
                Running
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ServerList;
