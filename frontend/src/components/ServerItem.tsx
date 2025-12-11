import { useNavigate } from "react-router-dom";
import { StatusPill } from "./ServerPills";

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
        <StatusPill status={status || "error"} />
      </td>
    </tr>
  );
};

export default ServerItem;
