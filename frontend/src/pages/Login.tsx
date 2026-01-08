import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthFormLayout from "../layouts/AuthFormLayout";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        return "";

      case "password":
        if (!value) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters";
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change if field has been touched
    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      email: true,
      password: true,
    });

    // Validate all fields
    const newErrors = {
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      toast.error("Please fix all errors before submitting");
      return;
    }

    // Form is valid, proceed with API call
    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      // Handle successful login
      toast.success("Login successful!");

      // Store token if your API returns one
      if (response.data.token) {
        localStorage.setItem("accessToken", response.data.token);
      }

      // Store user data if needed
      if (response.data.user) {
        localStorage.setItem(
          "userID",
          JSON.stringify(response.data.user.userId)
        );
        localStorage.setItem(
          "accessToken",
          JSON.stringify(response.data.accessToken)
        );
      }

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error: any) {
      // Handle API errors
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Login failed. Please try again.";
      toast.error(errorMessage);
      console.error("Login error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthFormLayout title="Sign in">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 mb-2 font-medium">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 border rounded ${
              errors.email && touched.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Enter your email"
            disabled={isSubmitting}
          />
          {errors.email && touched.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
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
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 border rounded ${
              errors.password && touched.password
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Enter your password"
            disabled={isSubmitting}
          />
          {errors.password && touched.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>
        <Link
          to="/reset-password"
          className="text-orange-700 underline mb-4 block mb-10 text-sm font-medium">
          Forgot your password?
        </Link>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-700 transition-colors font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
          {isSubmitting ? "Signing in..." : "Sign in"}
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
