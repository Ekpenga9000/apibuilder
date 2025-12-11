import { StatusPill, MethodsPill } from "./ServerPills";
import { GoPencil, GoTrash } from "react-icons/go";

interface APIItemProps {
  // Define props if needed in the future
  id: string | number;
  name: string;
  method: string;
  endpoint: string;
  status: "running" | "stopped" | "error";
  lastModified: string;
}

const APIItem = ({
  id,
  name,
  method,
  endpoint,
  status,
  lastModified,
}: APIItemProps) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <td className="py-3 px-4">{name}</td>
      <td className="py-3 px-4">
        <MethodsPill method={method} />
      </td>
      <td className="py-3 px-4 text-gray-600">{endpoint}</td>
      <td className="py-3 px-4">
        <StatusPill status={status} />
      </td>
      <td className="py-3 px-4">{lastModified}</td>
      <td className="py-3 px-4">
        <button className="text-blue-500 hover:underline mr-4">
          <GoPencil />
        </button>
        <button className="text-red-500 hover:underline">
          <GoTrash />
        </button>
      </td>
    </tr>
  );
};

export default APIItem;
