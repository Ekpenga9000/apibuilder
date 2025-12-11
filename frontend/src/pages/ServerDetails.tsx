import { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import ServerDetailsHead from "../components/ServerDetailsHead";
import servers from "../data/servers.json";

interface ServerDetailsHeadProps {
  id: string | number;
  name: string;
  description?: string;
  totalApis?: number;
  activeApis?: number;
  inactiveApis?: number;
  status?: "running" | "stopped" | "error";
}

const ServerDetails = () => {
  const { serverId } = useParams<{ serverId: string }>();
  const server = servers.servers.find((srv) => srv.id.toString() === serverId);

  return (
    <section className="py-4 px-6 flex-1 w-[70vw]">
      <span className="text-sm inline-block mb-6">
        <Link to="/servers" className="text-gray-500 hover:text-orange-500">
          My Servers
        </Link>
        <GoChevronRight className="inline-block mx-1 text-gray-500" />
        <span className="text-orange-500 underline">
          {server?.name || "Server Details"}
        </span>
      </span>

      <ServerDetailsHead
        id={server?.id || ""}
        name={server?.name || "Unknown Server"}
        description={
          server?.description || "No description provided for this server."
        }
        totalApis={server?.totalApis || 0}
        activeApis={server?.activeApis || 0}
        inactiveApis={server?.inactiveApis || 0}
        status={server?.status as "running" | "stopped" | "error" | undefined}
      />
      {/* Server details content goes here */}
    </section>
  );
};

export default ServerDetails;
