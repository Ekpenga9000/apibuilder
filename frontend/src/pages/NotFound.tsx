import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="text-white bg-orange-500 px-4 py-2 rounded hover:bg-orange-600">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
