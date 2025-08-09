import loginAnimation from "../assets/login/Animation - 1749911072868.json"; // replace with your Lottie animation file
import { Link, useLocation, useNavigate } from "react-router";
import Lottie from "lottie-react";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { logIn, googleSignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // login
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    // Password validation
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!hasLowercase) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }
    if (!isLongEnough) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    // signin
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  // google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-sky-50 to-rose-50 p-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left: Animation or illustration */}
        <div className="bg-indigo-50 flex flex-col items-center justify-center p-8">
          <Lottie
            autoplay
            loop={true}
            animationData={loginAnimation}
            style={{ height: "350px", width: "350px" }}
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
          <form onSubmit={handleSignIn} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block mb-1 text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full text-black border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full text-black border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-300 outline-none"
              />
            </div>
            <div className="text-red-700">
              <p>
              
                Password must have:\n- At least one uppercase letter\n- At least
                one lowercase letter\n- Minimum length of 6 characters
              </p>
            </div>
            <div>
              <a className="link link-hover text-black">Forgot password?</a>
            </div>

            {/* Submit */}

            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition duration-200"
            >
              Log In
            </button>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-secondary btn-outline rounded-xl w-full my-1"
            >
              <FaGoogle size={18}></FaGoogle> SignIn with Google
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/auth/signUp"
              className="text-indigo-600 hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Login;
