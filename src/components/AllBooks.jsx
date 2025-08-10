import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const { user } = useContext(AuthContext);
  const [searchText, setSearchText] = useState("");
  const [readingStatus, setReadingStatus] = useState("");
  const [sortOption, setSortOption] = useState("");
  const navigate = useNavigate();
  

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/books`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.error("Error loading books:", err));
  }, []);

  // Combined filter: filter by searchText (title or author) AND by readingStatus (if selected)
  const filteredBooks = books.filter((book) => {
    // Search by title or author (case-insensitive)
    const matchesSearch =
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.author.toLowerCase().includes(searchText.toLowerCase());

    // Filter by reading status if a status is selected
    const matchesStatus = readingStatus
      ? book.status?.toLowerCase() === readingStatus.toLowerCase()
      : true; // no filter if readingStatus is empty

    return matchesSearch && matchesStatus;
  });
  const handleView = (_id) => {
    if (!user) {
      navigate("/auth/signIn");
    } else {
      navigate(`/book/${_id}`);
    }
  };

  return (
    <div className="min-h-screen bg-stone-300 py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-indigo-800">
        📚 Explore the Bookshelf
      </h2>

      {/* Filters */}
      <div className="max-w-xl mx-auto mb-10 flex flex-col sm:flex-row gap-4">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="flex-grow px-4 bg-stone-500 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Reading status dropdown */}
        <select
          value={readingStatus}
          onChange={(e) => setReadingStatus(e.target.value)}
          className="w-full sm:w-40 text-stone-950 bg-white px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">Sort By Reading Status </option>
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
              // onClick={() => navigate(`/book/${book._id}`)}
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
                Reading Status:{" "}
                <span className="font-medium">{book.status || "N/A"}</span>
              </p>
              <p className="text-gray-600 text-sm mb-3">
                Upvotes: {book.upvoted?.length || 0}
              </p>
              <button
               onClick={() => handleView(book._id)}
                className="btn btn-outline btn-primary"
              >
                View Details
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No books found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
