import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Spinner */}
        <motion.div
          className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"
          aria-label="Loading"
          role="status"
        />

        {/* Loading text */}
        <motion.p
          className="text-lg text-gray-300"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Loading, please wait...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loading;
