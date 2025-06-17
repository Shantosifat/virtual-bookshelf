import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/books`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.error("Error loading books:", err));
  }, []);

  // Search by reading status
  const filteredBooks = books.filter((book) =>
    book.status?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-stone-300 py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-indigo-800">
        📚 Explore the Bookshelf
      </h2>

      {/* Search by Reading Status */}
      <div className="max-w-md mx-auto mb-10 flex gap-2">
  <select
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full text-stone-950 bg-white px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
  >
    <option value="">All</option>
    
    <option value="Reading">Reading</option>
    <option value="Want-to-Read">Want-to-Read</option>
    <option value="Read">Read</option>
  </select>

</div>


      {/* Books */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <motion.div
              key={book._id}
              className="bg-white rounded-xl shadow-md p-5 cursor-pointer hover:shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate(`/book/${book._id}`)}
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
                Reading Status: <span className="font-medium">{book.status || "N/A"}</span>
              </p>
              <p className="text-gray-600 text-sm">
                Upvotes: {book.upvoted?.length || 0}
              </p>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No books found for this reading status.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
