import { GoPencil, GoServer, GoSquareFill, GoX } from "react-icons/go";
import { IoPlay } from "react-icons/io5";

interface ServerDetailsHeadProps {
  id: string | number;
  name: string;
  description?: string;
  totalApis?: number;
  activeApis?: number;
  inactiveApis?: number;
  status?: "running" | "stopped" | "error";
}

const ServerDetailsHead: React.FC<ServerDetailsHeadProps> = ({
  id,
  name,
  description,
  totalApis,
  activeApis,
  inactiveApis,
  status,
}) => {
  return (
    <>
      <h2 className="text-3xl font-semibold mb-8">{name}</h2>
      <section className="w-full border border-gray-300 shadow-sm rounded-lg p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
          <GoServer className="text-5xl text-orange-500 inline-block" />
          <p className="text-gray-600 text-sm w-[70%]">
            {/* Please provide a description for the User Service Management server here. */}
            {description || "No description provided for this server."}
          </p>
        </div>

        <ul className="flex items-center gap-4 mb-4 text-sm">
          <li className="text-gray-600">
            Status:{" "}
            {status === "running" && (
              <span className="shadow-sm py-1 px-2 rounded-md text-xs bg-green-500 text-white">
                Running
              </span>
            )}
            {status === "stopped" && (
              <span className="shadow-sm py-1 px-2 rounded-md text-xs bg-gray-400 text-white">
                Stopped
              </span>
            )}
            {status === "error" && (
              <span className="shadow-sm py-1 px-2 rounded-md text-xs bg-red-500 text-white">
                Error
              </span>
            )}
          </li>
          <li>
            {status === "running" && (
              <button className="cursor-pointer border border-gray-300 text-gray-600 hover:text-red-500 hover:border-red-500 transition-colors shadow-sm py-1 px-2 rounded-md text-sm flex items-center gap-1 text-xs">
                <GoSquareFill /> Stop
              </button>
            )}
            {status === "stopped" && (
              <button className="cursor-pointer border border-gray-300 text-gray-600 hover:text-green-500 hover:border-green-500 transition-colors shadow-sm py-1 px-2 rounded-md text-sm flex items-center gap-1 text-xs">
                <IoPlay /> Start
              </button>
            )}
          </li>
        </ul>

        <div className="flex items-center justify-between">
          <ul className="flex gap-4">
            <li className="text-sm text-gray-600">
              Total APIs:
              <strong className="text-black ml-1">{totalApis || 0}</strong>
            </li>
            <li className="text-sm text-gray-600">
              Active APIs:
              <strong className="text-black ml-1">{activeApis || 0}</strong>
            </li>
            <li className="text-sm text-gray-600">
              Inactive APIs:
              <strong className="text-black ml-1">{inactiveApis || 0}</strong>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <button className="text-sm cursor-pointer border border-gray-300 text-gray-600 hover:text-gray-700 shadow-sm py-1 px-2 rounded-md flex items-center gap-1">
              <GoPencil />
              Edit Server
            </button>
            <button className="cursor-pointer border border-gray-300 text-red-600 hover:text-white hover:bg-red-500 hover:border-red-500 transition-colors shadow-sm py-1 px-2 rounded-md text-sm flex items-center gap-2">
              <GoX /> Delete Server
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServerDetailsHead;
