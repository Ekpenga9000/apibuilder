import {
  GoRss,
  GoCheckCircleFill,
  GoXCircleFill,
  GoServer,
  GoPlusCircle,
  GoArrowSwitch,
  GoHistory,
  GoMail,
  GoAlert,
} from "react-icons/go";
import { FiCheckCircle, FiInfo } from "react-icons/fi";

const Dashboard = () => {
  return (
    <section className="py-4 px-6 flex-1">
      <h1 className="font-bold text-4xl mb-4">Welcome, Alice!</h1>
      <ul className="mb-8 flex items-center gap-4">
        <li className="flex items-center">
          <span className="font-semibold">5</span>
          <span className="ml-2 flex items-center gap-1 text-gray-600">
            <GoServer className="text-orange-600" />
            servers
          </span>
        </li>
        <li className="flex items-center">
          <span className="font-semibold">22</span>
          <span className="ml-2 flex items-center gap-1 text-gray-600">
            <GoRss className="text-orange-600" />
            APIs
          </span>
        </li>
        <li className="flex items-center">
          <span className="font-semibold">20</span>
          <span className="ml-2 flex items-center gap-1 text-gray-600">
            <GoCheckCircleFill className="text-green-600" />
            active
          </span>
        </li>
        <li className="flex items-center">
          <span className="font-semibold">2</span>
          <span className="ml-2 flex items-center gap-1 text-gray-600">
            <GoXCircleFill className="text-red-600" />
            inactive
          </span>
        </li>
      </ul>
      <div className="border border-gray-300 rounded-md p-4 mb-6">
        <ul className="flex items-center justify-between mb-4">
          <li className="font-semibold text-lg">My Servers</li>
          <li className="flex items-center gap-3 text-sm font-semibold cursor-pointer">
            <GoPlusCircle /> Add Server
          </li>
        </ul>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-600 text-sm">
                <th className="py-3 px-4 font-semibold">Server name</th>
                <th className="py-3 px-4 font-semibold">APIs</th>
                <th className="py-3 px-4 font-semibold">Active</th>
                <th className="py-3 px-4 font-semibold">Inactive</th>
                <th className="py-3 px-4 font-semibold">Last Modified</th>
                <th className="py-3 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold">
                  User service management
                </td>
                <td className="py-3 px-4">5</td>
                <td className="py-3 px-4">4</td>
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4 text-gray-600 text-sm">1 day ago</td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:underline text-sm">
                    Edit
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold">Order processing</td>
                <td className="py-3 px-4">8</td>
                <td className="py-3 px-4">7</td>
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4 text-gray-600 text-sm">2 days ago</td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:underline text-sm">
                    Edit
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold">
                  Inventory management
                </td>
                <td className="py-3 px-4">9</td>
                <td className="py-3 px-4">9</td>
                <td className="py-3 px-4">0</td>
                <td className="py-3 px-4 text-gray-600 text-sm">3 days ago</td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:underline text-sm">
                    Edit
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold">
                  Payment Gateway Integration
                </td>
                <td className="py-3 px-4">9</td>
                <td className="py-3 px-4">9</td>
                <td className="py-3 px-4">0</td>
                <td className="py-3 px-4 text-gray-600 text-sm">3 weeks ago</td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:underline text-sm">
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <section>
        <ul className="grid grid-cols-3 gap-6">
          <li className="border border-gray-300 rounded-md p-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                {" "}
                <GoHistory />
                Recent Activity
              </h4>

              <button className="text-blue-600 hover:underline text-sm cursor-pointer inline-block mb-4">
                view all
              </button>
            </div>
            <ul>
              <li className="mb-4 flex items-start gap-3">
                <div>
                  <FiCheckCircle className="text-green-600 inline-block mr-2" />
                </div>
                <div>
                  <p className="text-sm">
                    API 'User Login' created in Product Catalog API project.{" "}
                  </p>
                  <span className="text-gray-500 text-xs">2 hours ago</span>
                </div>
              </li>
              <li className="mb-4 flex items-start gap-3">
                <div>
                  <FiInfo className="text-blue-600 inline-block mr-2" />
                </div>
                <div>
                  <p className="text-sm">
                    Server 'Order Processing' status changed to inactive.
                  </p>
                  <span className="text-gray-500 text-xs">5 hours ago</span>
                </div>
              </li>
              <li className="mb-4 flex items-start gap-3">
                <div>
                  <GoAlert className="text-red-600 inline-block mr-2" />
                </div>
                <div>
                  <p className="text-sm">
                    Failed to connect to Database server for Inventory
                    Management.
                  </p>
                  <span className="text-gray-500 text-xs">1 day ago</span>
                </div>
              </li>
              <li className="mb-4 flex items-start gap-3">
                <div>
                  <GoAlert className="text-red-600 inline-block mr-2" />
                </div>
                <div>
                  <p className="text-sm">
                    High latency detected on Payment Gateway Integration API.
                  </p>
                  <span className="text-gray-500 text-xs">1 day ago</span>
                </div>
              </li>
            </ul>
            {/* <div className="h-40  flex items-center justify-center text-gray-600">
              No recent activity to display.
            </div> */}
            {/* <div>
              <button className="mt-4 text-blue-600 hover:underline">
                View All Activity
              </button>
            </div> */}
          </li>
          <li className="border border-gray-300 rounded-md p-4">
            <div>
              <h4 className="font-semibold text-gray-600 mb-4 flex items-center justify-between">
                Recent Requests (24 hrs)
                <GoArrowSwitch />
              </h4>
              <ul>
                <li className="mb-4 flex items-start justify-between">
                  <div>
                    <p className="text-sm">User Service Management</p>
                    <span className="text-gray-500 text-xs">
                      1,250 requests
                    </span>
                  </div>
                  <span className="font-semibold">1,250</span>
                </li>
                <li className="mb-4 flex items-start justify-between">
                  <div>
                    <p className="text-sm">Order Processing</p>
                    <span className="text-gray-500 text-xs">980 requests</span>
                  </div>
                  <span className="font-semibold">980</span>
                </li>
                <li className="mb-4 flex items-start justify-between">
                  <div>
                    <p className="text-sm">Inventory Management</p>
                    <span className="text-gray-500 text-xs">860 requests</span>
                  </div>
                  <span className="font-semibold">860</span>
                </li>
              </ul>
            </div>
          </li>
          <li className="border border-gray-300 rounded-md p-4">
            <div>
              <h4 className="font-semibold text-gray-600 mb-4 flex items-center justify-between">
                Notifications
                <GoMail />
              </h4>
              <ul>
                <li className="mb-4 flex items-start gap-3">
                  <div>
                    <GoAlert className="text-red-600 inline-block mr-2" />
                  </div>
                  <div>
                    <p className="text-sm">
                      Alert: API 'Payment Gateway' is experiencing high error
                      rates.
                    </p>
                    <span className="text-gray-500 text-xs">3 hours ago</span>
                  </div>
                </li>
                <li className="mb-4 flex items-start gap-3">
                  <div>
                    <FiInfo className="text-blue-600 inline-block mr-2" />
                  </div>
                  <div>
                    <p className="text-sm">
                      Info: New version of API 'User Service' deployed
                      successfully.
                    </p>
                    <span className="text-gray-500 text-xs">6 hours ago</span>
                  </div>
                </li>
                <li className="mb-4 flex items-start gap-3">
                  <div>
                    <FiCheckCircle className="text-green-600 inline-block mr-2" />
                  </div>
                  <div>
                    <p className="text-sm">
                      Success: Backup completed for 'Order Processing' server.
                    </p>
                    <span className="text-gray-500 text-xs">1 day ago</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Dashboard;
