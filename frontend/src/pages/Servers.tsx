import { useState, useEffect } from "react";
import { GoChevronRight } from "react-icons/go";
import ServerList from "../components/ServerList";

type BreadcrumbLevel = "servers" | "server-detail" | "api-crud";

interface Breadcrumb {
  label: string;
  level: BreadcrumbLevel;
}

const Servers = () => {
  const [currentLevel, setCurrentLevel] = useState<BreadcrumbLevel>("servers");
  const [selectedServer, setSelectedServer] = useState<string>("");
  const [selectedApi, setSelectedApi] = useState<string>("");

  // Update document title based on breadcrumb navigation
  useEffect(() => {
    let title = "Servers";

    if (currentLevel === "server-detail") {
      title = `${selectedServer} - Servers`;
    } else if (currentLevel === "api-crud") {
      title = `${selectedApi} - ${selectedServer} - Servers`;
    }

    document.title = title;
  }, [currentLevel, selectedServer, selectedApi]);

  const breadcrumbs: Breadcrumb[] = [{ label: "My Servers", level: "servers" }];

  if (currentLevel === "server-detail" || currentLevel === "api-crud") {
    breadcrumbs.push({
      label: selectedServer || "Server Detail",
      level: "server-detail",
    });
  }

  if (currentLevel === "api-crud") {
    breadcrumbs.push({
      label: selectedApi || "API [CRUD]",
      level: "api-crud",
    });
  }

  const handleBreadcrumbClick = (level: BreadcrumbLevel) => {
    setCurrentLevel(level);
    if (level === "servers") {
      setSelectedServer("");
      setSelectedApi("");
    } else if (level === "server-detail") {
      setSelectedApi("");
    }
  };

  const handleServerClick = (serverName: string) => {
    setSelectedServer(serverName);
    setCurrentLevel("server-detail");
  };

  const handleApiClick = (apiName: string) => {
    setSelectedApi(apiName);
    setCurrentLevel("api-crud");
  };

  return (
    <section className="py-4 px-6 flex-1">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 mb-6 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.level} className="flex items-center gap-2">
            <button
              onClick={() => handleBreadcrumbClick(crumb.level)}
              className={`${
                currentLevel === crumb.level
                  ? "text-orange-600 font-semibold"
                  : "text-gray-600 hover:text-orange-500"
              } transition-colors`}>
              {crumb.label}
            </button>
            {index < breadcrumbs.length - 1 && (
              <GoChevronRight className="text-gray-400" />
            )}
          </div>
        ))}
      </nav>

      {/* Content based on current level */}
      <div>
        {currentLevel === "servers" && (
          <ServerList handleServerClick={handleServerClick} />
        )}

        {currentLevel === "server-detail" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{selectedServer}</h2>
            <p className="text-gray-600 mb-4">Select an API to manage:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {["User API", "Product API", "Order API", "Payment API"].map(
                (api) => (
                  <div
                    key={api}
                    onClick={() => handleApiClick(api)}
                    className="border border-gray-300 rounded-lg p-4 hover:border-orange-500 hover:shadow-md cursor-pointer transition-all">
                    <h3 className="font-semibold text-lg mb-2">{api}</h3>
                    <p className="text-sm text-gray-600">
                      Click to manage CRUD operations
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {currentLevel === "api-crud" && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{selectedApi}</h2>
            <p className="text-gray-600 mb-6">
              Manage CRUD operations for this API
            </p>
            <div className="space-y-4">
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2 text-green-600">
                  CREATE
                </h3>
                <p className="text-sm text-gray-600">
                  Add new records to the database
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">
                  READ
                </h3>
                <p className="text-sm text-gray-600">
                  View and query existing records
                </p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2 text-yellow-600">
                  UPDATE
                </h3>
                <p className="text-sm text-gray-600">Modify existing records</p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2 text-red-600">
                  DELETE
                </h3>
                <p className="text-sm text-gray-600">
                  Remove records from the database
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Servers;
