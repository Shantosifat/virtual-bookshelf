import React from "react";
import { FaSearch, FaInfoCircle, FaThumbsUp } from "react-icons/fa";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch size={30} className="text-indigo-600" />,
      title: "Browse Books",
      description: "Search or explore categories to discover your next read.",
    },
    {
      icon: <FaInfoCircle size={30} className="text-indigo-600" />,
      title: "Read Details",
      description: "Click on any book to view its description, author, and more.",
    },
    {
      icon: <FaThumbsUp size={30} className="text-indigo-600" />,
      title: "Upvote & Review",
      description: "Show appreciation by upvoting or leaving feedback.",
    },
  ];

  return (
    <div className="bg-white rounded-xl py-12 px-6 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-indigo-800 mb-10">
        📘 How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="bg-indigo-50 rounded-xl p-6 shadow-md text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
