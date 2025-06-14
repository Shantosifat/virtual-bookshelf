import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
// import loginAnimation from "../assets/login/login-animation.json"; // replace with your Lottie animation file
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-sky-50 to-rose-50 p-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left: Animation or illustration */}
        <div className="bg-indigo-50 flex flex-col items-center justify-center p-8">
          <Player
            autoplay
            loop
            // src={loginAnimation}
            style={{ height: "300px", width: "300px" }}
          />
          <h2 className="text-xl font-semibold text-indigo-700 mt-4">
            Welcome Back!
          </h2>
          <p className="text-sm text-indigo-500 mt-2 text-center">
            Log in to continue to Libree and manage your virtual bookshelf.
          </p>
        </div>

        {/* Right: Login form */}
        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Log In</h2>
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block mb-1 text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition duration-200"
            >
              Log In
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signUp"
              className="text-indigo-600 hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
