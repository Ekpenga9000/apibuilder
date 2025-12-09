import { GoPlusCircle } from "react-icons/go";
import ServerInfo from "./ServerInfo";

interface ServerListProps {
  handleServerClick: (serverName: string) => void;
}

const ServerList = ({ handleServerClick }: ServerListProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-4">Server Management</h2>
        <button className="flex items-center gap-2 text-sm bg-orange-600 py-1 px-3 text-white rounded-md hover:bg-orange-500 cursor-pointer">
          <GoPlusCircle className="inline-block mr-2" />
          Add Server
        </button>
      </div>
      <p className="text-gray-600 mb-6">
        Manage your servers and view their API statistics below.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </div>
  );
};

export default ServerList;
