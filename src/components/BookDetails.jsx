import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Bookshelfs = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/books`)
      .then(res => setBooks(res.data))
      .catch(err => console.error("Error loading books:", err));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-800">📚 Explore the Bookshelf</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map(book => (
          <motion.div
            key={book._id}
            className="bg-white rounded-xl shadow-md p-5"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img src={book.photo} alt={book.title} className="w-full h-60 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold text-indigo-700 mb-1">{book.title}</h3>
            <p className="text-gray-600 text-sm">Author: {book.author}</p>
            <p className="text-gray-600 text-sm">Category: {book.category}</p>
            <p className="text-gray-600 text-sm">Upvotes: {book.upvote || 0}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelfs;
