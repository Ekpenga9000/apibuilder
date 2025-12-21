import { Link } from "react-router-dom";
import AuthFormLayout from "../layouts/AuthFormLayout";

const Login = () => {
  return (
    <AuthFormLayout title="Sign in">
      <form>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 mb-2 font-medium">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your password"
          />
        </div>
        <Link
          to="/reset-password"
          className="text-orange-700 underline mb-4 block mb-10 text-sm font-medium">
          Forgot your password?
        </Link>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-700 transition-colors font-semibold cursor-pointer">
          Sign in
        </button>
      </form>
      <div>
        <p className="text-center mt-6 text-gray-700">
          Are you new here?{" "}
          <Link
            to="/register"
            className="text-orange-600 underline font-medium">
            Create an account
          </Link>
        </p>
      </div>
    </AuthFormLayout>
  );
};

export default Login;
