import React from "react";
import AuthFormLayout from "../layouts/AuthFormLayout";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <AuthFormLayout title="Register with Email">
      <form className="mb-5 inline-block">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-700 mb-2 font-medium">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-gray-700 mb-2 font-medium">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your last name"
            />
          </div>
        </section>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 mb-2 font-medium">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="">
          <label
            htmlFor="password"
            className="block text-gray-700 mb-2 font-medium">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Create a password"
          />
        </div>
        <div>
          <span className="h-[0.5rem] w-full inline-block bg-gray-300 rounded-md"></span>
          <p className="text-gray-600 text-sm mb-8">
            Use a strong password with at least 8 characters, including
            uppercase and lowercase letters, numbers, and special symbols.
          </p>
        </div>
        <div className="mb-8">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 mb-2 font-medium">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Confirm your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-700 transition-colors font-semibold cursor-pointer">
          Register
        </button>
      </form>
      <div>
        <p className="text-center mt-6 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-600 underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </AuthFormLayout>
  );
};

export default Register;
