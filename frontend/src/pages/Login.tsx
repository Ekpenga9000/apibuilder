import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Logo from "../components/Logo";

const Login = () => {
  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <nav>
        <Logo path="/" />
      </nav>
      <section className="max-w-md mx-auto mt-[8rem] p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
        <div className="mb-6">
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
            Continue with
          </h2>
          <ul className="flex justify-center items-center gap-6 mb-6">
            <li className="h-[3rem] w-[3rem] bg-orange-600 rounded-md text-2xl text-white flex items-center justify-center cursor-pointer hover:bg-orange-700 transition-colors">
              <FaGithub />
            </li>
            <li className="h-[3rem] w-[3rem] bg-orange-600 rounded-md text-2xl text-white flex items-center justify-center cursor-pointer hover:bg-orange-700 transition-colors">
              <FaGoogle />
            </li>
          </ul>
          <div className="flex items-center justify-center">
            <span className="inline-block border-t border-gray-300 w-[100%]"></span>
            <span className="font-semibold text-lg mx-4 text-gray-800">or</span>
            <span className="inline-block border-t border-gray-300 w-[100%]"></span>
          </div>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
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
            <label htmlFor="password" className="block text-gray-700 mb-2">
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
            className="text-orange-600 underline mb-4 block mb-10 text-sm font-medium">
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
      </section>
    </main>
  );
};

export default Login;
