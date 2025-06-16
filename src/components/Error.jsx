import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <motion.h1
        className="text-8xl font-extrabold text-indigo-500 mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-center mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Oops! Page not found.
      </motion.h2>

      <motion.p
        className="text-gray-300 text-center max-w-md mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        The page you are looking for doesn’t exist or has been moved. Let’s get you back to a safe place.
      </motion.p>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay:0.5  }}
      >
        <Link
          to="/"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          Go to Homepage
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
