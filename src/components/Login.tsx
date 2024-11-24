import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Icons for password toggle

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Password visibility toggle

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setIsLoggedIn(true);
      }
    };
    checkSession();
  }, []);

  const validateForm = () => {
    if (!username) {
      setError("Email is required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(username)) {
      setError("Invalid email format.");
      return false;
    }
    if (!password) {
      setError("Password is required.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password,
      });

      if (error) throw error;

      toast.success("Login successful!");
      const token = data.session.access_token;
      localStorage.setItem("jwt", token);
      setIsLoggedIn(true);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message === "Invalid login credentials"
            ? "Invalid credentials"
            : err.message
          : "Something went wrong. Please try again later.";

      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Welcome Back!
        </h2>
        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label htmlFor="username" className="block text-sm text-gray-700">
              Username (Email)
            </label>
            <input
              id="username"
              type="text"
              className={`w-full mt-2 p-3 border ${
                error.includes("Email") ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="relative mt-4">
            <label htmlFor="password" className="block text-sm text-gray-700">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className={`w-full mt-2 p-3 border ${
                error.includes("Password")
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute top-2 right-2 p-2 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-red-500 transition ease-in-out duration-200"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiFillEyeInvisible size={24} className="text-gray-600" />
              ) : (
                <AiFillEye size={24} className="text-gray-600" />
              )}
            </button>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className={`w-full px-4 py-2 text-white bg-yellow-500 rounded-lg shadow-md 
    ${
      isLoading
        ? "bg-yellow-300 cursor-not-allowed"
        : "hover:bg-yellow-400 hover:scale-105"
    }
    transition duration-300 ease-in-out transform 
    focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 
    active:bg-yellow-600 active:scale-95`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex justify-center items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                  <span>Loading...</span>
                </div>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
