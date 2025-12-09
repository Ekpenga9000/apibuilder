import { useState } from "react";
import {
  GoRss,
  GoCheckCircleFill,
  GoXCircleFill,
  GoServer,
} from "react-icons/go";

interface ServerInfoProps {
  name: string;
  description?: string;
  totalApis?: number;
  activeApis?: number;
  inactiveApis?: number;
  handleServerClick: (serverName: string) => void;
}

const ServerInfo = ({
  name,
  description,
  totalApis,
  activeApis,
  inactiveApis,
  handleServerClick,
}: ServerInfoProps) => {
  const [isActive, setIsActive] = useState(true);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsActive(!isActive);
  };

  return (
    <div
      key={name}
      onClick={() => handleServerClick(name)}
      className="border border-gray-300 rounded-lg p-4 hover:border-orange-500 hover:shadow-md cursor-pointer transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-2">
          <GoServer
            className={`text-4xl ${
              isActive ? "text-orange-600" : "text-gray-400"
            }`}
          />
          <h3
            className={`font-semibold text-2xl ${
              isActive ? "text-black" : "text-gray-400"
            }`}>
            {name}
          </h3>
        </div>
        <button
          onClick={handleToggle}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            isActive ? "bg-orange-600" : "bg-gray-300"
          }`}>
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isActive ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>
      <p
        className={`text-sm mb-4 ${
          isActive ? "text-gray-600" : "text-gray-400"
        }`}>
        {description}
      </p>
      <ul className="flex items-center gap-4 mb-4">
        <li className="text-sm flex items-center gap-2">
          <span className="flex items-center gap-2">
            <GoRss className={isActive ? "text-orange-600" : "text-gray-400"} />{" "}
            <span className={isActive ? "text-black" : "text-gray-400"}>
              Total APIs:
            </span>
          </span>
          <span className={`font-semibold ${isActive ? "" : "text-gray-400"}`}>
            {totalApis || 0}
          </span>
        </li>
        <li className="text-sm flex items-center gap-2">
          <span className="flex items-center gap-2">
            <GoCheckCircleFill
              className={isActive ? "text-green-600" : "text-gray-400"}
            />{" "}
            <span className={isActive ? "text-black" : "text-gray-400"}>
              Active APIs:
            </span>
          </span>
          <span className={`font-semibold ${isActive ? "" : "text-gray-400"}`}>
            {activeApis || 0}
          </span>
        </li>
        <li className="text-sm flex items-center gap-2">
          <span className="flex items-center gap-2">
            <GoXCircleFill
              className={isActive ? "text-red-600" : "text-gray-400"}
            />{" "}
            <span className={isActive ? "text-black" : "text-gray-400"}>
              Inactive APIs:
            </span>
          </span>
          <span className={`font-semibold ${isActive ? "" : "text-gray-400"}`}>
            {inactiveApis || 0}
          </span>
        </li>
      </ul>
      <p className="text-xs text-gray-600">Click to view details</p>
    </div>
  );
};

export default ServerInfo;
