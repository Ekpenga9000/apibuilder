import { useState } from "react";
import { Link } from "react-router-dom";
import AuthFormLayout from "../layouts/AuthFormLayout";
import toast from "react-hot-toast";
import axios from "axios";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  // Validation function
  const validateEmail = (value: string) => {
    if (!value.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Validate on change if field has been touched
    if (touched) {
      const errorMessage = validateEmail(value);
      setError(errorMessage);
    }
  };

  const handleBlur = () => {
    setTouched(true);
    const errorMessage = validateEmail(email);
    setError(errorMessage);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark field as touched
    setTouched(true);

    // Validate email
    const errorMessage = validateEmail(email);
    setError(errorMessage);

    if (errorMessage) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Form is valid, proceed with API call
    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const response = await axios.post("/api/auth/reset-password", {
        email: email,
      });

      // Handle successful request
      toast.success(
        response.data.message || "Password reset link sent to your email!"
      );
      setEmailSent(true);

      // Clear form
      setEmail("");
      setTouched(false);
    } catch (error: any) {
      // Handle API errors
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to send reset link. Please try again.";
      toast.error(errorMessage);
      console.error("Password reset error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthFormLayout>
      <div className="mb-6">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Reset Your Password
        </h2>
        <p className="text-gray-600 mb-4 text-sm">
          {emailSent ? (
            <span className="text-green-600 font-medium">
              We've sent a password reset link to your email. Please check your
              inbox and follow the instructions.
            </span>
          ) : (
            <>
              Enter the email address used to register below and we'll send you
              a link to reset your password. Or go back to{" "}
              <Link to="/login" className="text-orange-600 underline">
                Sign in page
              </Link>
              .
            </>
          )}
        </p>
      </div>

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
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 border rounded ${
              error && touched ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email"
            disabled={isSubmitting}
          />
          {error && touched && (
            <p className="text-red-500 text-sm mt-1">{error}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-700 transition-colors font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
          {isSubmitting ? "Sending..." : "Send Reset Link"}
        </button>

        {emailSent && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800 text-sm">
              <strong>Email sent!</strong> If you don't see the email, please
              check your spam folder.
            </p>
            <button
              type="button"
              onClick={() => setEmailSent(false)}
              className="text-orange-600 hover:text-orange-700 text-sm font-medium mt-2 underline">
              Send another reset link
            </button>
          </div>
        )}
      </form>
    </AuthFormLayout>
  );
};

export default ResetPassword;
