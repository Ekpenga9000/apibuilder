import { GoCheck, GoAlert, GoSquareFill } from "react-icons/go";

type StatusPillProps = {
  status: "running" | "stopped" | "error";
};

const StatusPill = ({ status }: StatusPillProps) => {
  return (
    <>
      {status === "running" && (
        <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
          <span className="">
            <GoCheck />
          </span>
          Running
        </span>
      )}
      {status === "stopped" && (
        <span className="inline-flex items-center bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-semibold">
          <span className="text-lg">
            <GoSquareFill />
          </span>
          Stopped
        </span>
      )}
      {status === "error" && (
        <span className="inline-flex items-center gap-1.5 bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
          <span className="">
            {" "}
            <GoAlert />
          </span>
          Error
        </span>
      )}
    </>
  );
};

const MethodsPill = ({ method }: { method: string }) => {
  return (
    <>
      {method === "GET" && (
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
          GET
        </span>
      )}
      {method === "POST" && (
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
          POST
        </span>
      )}
      {method === "PUT" && (
        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
          PUT
        </span>
      )}
      {method === "DELETE" && (
        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
          DELETE
        </span>
      )}
    </>
  );
};

export { MethodsPill, StatusPill };
