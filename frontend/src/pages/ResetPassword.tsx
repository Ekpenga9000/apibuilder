import { Link } from "react-router-dom";
import AuthFormLayout from "../layouts/AuthFormLayout";

const ResetPassword = () => {
  return (
    <AuthFormLayout>
      <div className="mb-6">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Reset Your Password
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          Enter the email address used to register below and we'll send you a
          link to reset your password. Or go back to{" "}
          <Link to="/login" className="text-orange-600 underline">
            Sign in page
          </Link>
          .
        </p>
      </div>

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

        <button
          type="submit"
          className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-700 transition-colors font-semibold cursor-pointer">
          Send Reset Link
        </button>
      </form>
    </AuthFormLayout>
  );
};

export default ResetPassword;
