import { GoPlusCircle, GoSearch } from "react-icons/go";
import APIItem from "./APIItem";
import APIListData from "../data/apis.json";

type APIListProps = {
  serverId: string | number;
};

const APIList = ({ serverId }: APIListProps) => {
  if (!serverId) {
    return (
      <section className="mt-8 border border-gray-300 rounded-lg p-4 shadow-sm text-center text-sm">
        <p className="text-gray-600">
          No server selected. Please select a server.
        </p>
      </section>
    ); // or some fallback UI
  }

  const filteredAPIs = APIListData.apis.filter(
    (api) => api.serverId.toString() === serverId.toString()
  );

  return (
    <section className="mt-8 border border-gray-300 rounded-lg p-4 shadow-sm">
      <ul className="flex items-center justify-between mb-4">
        <li className="font-semibold text-lg">Server APIs</li>
        <li>
          {" "}
          <button className="bg-orange-500 cursor-pointer text-xs text-white px-4 py-2 rounded hover:bg-orange-600 transition flex items-center gap-2">
            <GoPlusCircle /> Create API
          </button>
        </li>
      </ul>
      <ul className="flex items-center gap-4 mb-6">
        <li>
          {/* Search bar to filter APIs by name */}
          <div className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <GoSearch className="inline-block mr-2 text-gray-400" />
            <input
              type="text"
              placeholder="Search APIs..."
              className="outline-none"
            />
          </div>
        </li>
        <li>
          {/* Dropdown to filter by status */}

          <select className="outline-none border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option value="all-statuses">All Statuses</option>
            <option value="running">Running</option>
            <option value="stopped">Stopped</option>
            <option value="error">Error</option>
          </select>
        </li>
        <li>
          {/* List of APIs with their methods */}
          <select className="outline-none border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option value="all-methods">All Methods</option>
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="put">PUT</option>
            <option value="delete">DELETE</option>
          </select>
        </li>
      </ul>

      <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-gray-200">
          <tr className="text-left text-gray-600 text-sm border-b border-gray-300">
            <th className="py-3 px-4 font-semibold">API Name</th>
            <th className="py-3 px-4 font-semibold">Method</th>
            <th className="py-3 px-4 font-semibold">Endpoint</th>
            <th className="py-3 px-4 font-semibold">Status</th>
            <th className="py-3 px-4 font-semibold">Last Modified</th>
            <th className="py-3 px-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {/* Example API row */}
          {filteredAPIs.map((api) => (
            <APIItem
              key={api.id}
              id={api.id}
              name={api.name}
              method={api.method}
              endpoint={api.endpoint}
              status={api.status as "running" | "stopped" | "error"}
              lastModified={api.lastModified}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default APIList;
