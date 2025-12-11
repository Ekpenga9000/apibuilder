import { useNavigate } from "react-router-dom";

interface ServerInfoProps {
  id: string | number;
  name: string;
  totalApis?: number;
  activeApis?: number;
  inactiveApis?: number;
  lastModified?: string;
  status?: "running" | "stopped" | "error";
}

const ServerItem = ({
  id,
  name,
  totalApis,
  activeApis,
  inactiveApis,
  lastModified,
  status,
}: ServerInfoProps) => {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate(`/servers/${id}`);
  };
  return (
    <tr
      onClick={handleRowClick}
      className="hover:bg-gray-50 cursor-pointer text-sm border border-gray-300">
      <td className="py-3 px-4 font-semibold">{name}</td>
      <td className="py-3 px-4">
        <p className="flex justify-center">{totalApis}</p>
      </td>
      <td className="py-3 px-4">
        <p className="flex justify-center">{activeApis}</p>
      </td>
      <td className="py-3 px-4">
        <p className="flex justify-center">{inactiveApis}</p>
      </td>
      <td className="py-3 px-4 text-gray-600 text-sm">{lastModified}</td>
      <td className="py-3 px-4">
        <span className="flex items-center gap-2 text-xs">
          <span
            className={`w-2 h-2 rounded-full ${
              status === "running"
                ? "bg-green-500"
                : status === "stopped"
                ? "bg-gray-400"
                : "bg-red-500"
            }`}></span>
          {status === "running"
            ? "Running"
            : status === "stopped"
            ? "Stopped"
            : "Error"}
        </span>
      </td>
    </tr>
  );
};

export default ServerItem;
