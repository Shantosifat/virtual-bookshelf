import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PopularSection = () => {
  const [popularBooks, setPopularBooks] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/books`)
      .then((res) => {
        const sorted = res.data.sort((a, b) => b.upvote - a.upvote);
        setPopularBooks(sorted);
      })
      .catch((err) => console.error("Error fetching popular books:", err));
  }, []);

  const visibleBooks = showAll ? popularBooks : popularBooks.slice(0, 6);

  return (
    <div className="py-12 px-6 bg-slate-50">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        🔥 Popular Books
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleBooks.map((book) => (
          <motion.div
            key={book._id}
            className="bg-white rounded-xl shadow-md p-5"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={book.photo}
              alt={book.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-indigo-700 mb-1">
              {book.title}
            </h3>
            <p className="text-gray-600 text-sm">Author: {book.author}</p>
            <p className="text-gray-600 text-sm">Category: {book.category}</p>
            <p className="text-gray-600 text-sm">
              Upvotes: {book.upvote || 0}
            </p>
            <Link to={`/book-details/${book._id}`}>
              <button className="mt-3 btn btn-sm btn-outline btn-secondary">
                View Details
              </button>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All button */}
      {!showAll && popularBooks.length > 6 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-secondary btn-outline"
          >
            View All Books
          </button>
        </div>
      )}
    </div>
  );
};

export default PopularSection;
