import ServerList from "../components/ServerList";

const Servers = () => {
  // Update document title based on breadcrumb navigation

  return (
    <section className="py-4 px-6 flex-1">
      <span className="text-orange-500 text-sm inline-block mb-6 underline">
        My Servers
      </span>

      <ServerList />
    </section>
  );
};

export default Servers;
