import {
  GoPlusCircle,
  GoRss,
  GoCheckCircleFill,
  GoXCircleFill,
  GoServer,
} from "react-icons/go";
import ServerInfo from "./ServerItem";
import servers from "../data/servers.json";

const ServerList = () => {
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

      <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-gray-100">
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
          {servers.servers.map((server) => (
            <ServerInfo
              key={server.id}
              id={server.id}
              name={server.name}
              totalApis={server.totalApis}
              activeApis={server.activeApis}
              inactiveApis={server.inactiveApis}
              lastModified={server.lastModified}
              status={server.status as "running" | "stopped" | "error"}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServerList;
