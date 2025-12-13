import { Link, useParams } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import servers from "../data/servers.json"; // Import servers data to get server name
import apiList from "../data/apis.json"; // Import API data if needed
import { MethodsPill } from "./ServerPills";

const APIDetails = () => {
  const { apiId } = useParams<{ apiId: string }>();
  const { serverId } = useParams<{ serverId: string }>();
  const server = servers?.servers?.find(
    (srv) => srv.id.toString() === serverId
  );
  const api = apiList?.apis?.find((api) => api.id.toString() === apiId);
  return (
    <section className="py-4 px-6 flex-1 w-[80vw]">
      <span className="text-sm inline-block mb-6">
        <Link to="/servers" className="text-gray-500 hover:text-orange-500">
          My Servers
        </Link>
        <GoChevronRight className="inline-block mx-1 text-gray-500" />
        <Link
          to={`/servers/${serverId}`}
          className="text-gray-500 hover:text-orange-500">
          {server?.name || "Server Details"}
        </Link>
        <GoChevronRight className="inline-block mx-1 text-gray-500" />
        <span className="text-orange-500 underline">{api?.name || apiId}</span>
      </span>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">API Editor / Create</h2>
        <select className="outline-none border border-gray-300 rounded-lg px-3 py-2 text-sm">
          <option value="all-methods">More Actions</option>
          <option value="edit">Edit API</option>
          <option value="delete">Delete API</option>
        </select>{" "}
      </div>
      <section>
        <div>
          <h4>Basic API Details</h4>
          <div className="mt-4 border border-gray-300 rounded-lg p-4 shadow-sm">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                API Name
              </label>
              <input
                type="text"
                value={api?.name || ""}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
                disabled={!!api}
              />
            </div>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Method
                </label>
                <input
                  type="text"
                  value={api?.method || ""}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
                  disabled={!!api}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Endpoint URL
                </label>
                <input
                  type="text"
                  value={api?.endpoint || ""}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
                  disabled={!!api}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description (Optional)
              </label>
              <textarea
                value={""}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
                placeholder="A brief description of this API's purpose."
                rows={4}
                disabled={!!api}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Additional API details and functionality can be added here */}
    </section>
  );
};

export default APIDetails;
