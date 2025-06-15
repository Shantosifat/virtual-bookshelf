import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider"; // Adjust path based on your project
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyBook = () => {
  const { user } = useContext(AuthContext);
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://your-backend-api.com/books?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyBooks(data))
        .catch((err) => console.error("Fetch error:", err));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the book.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://your-backend-api.com/books/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Book has been removed.", "success");
              setMyBooks(myBooks.filter((book) => book._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-indigo-50 p-6">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
        My Books
      </h2>

      {myBooks.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No books found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myBooks.map((book) => (
            <div
              key={book._id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <img
                  src={book.cover_photo}
                  alt={book.book_title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-indigo-700">
                  {book.book_title}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  Author: {book.book_author}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  Category: {book.book_category}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  Pages: {book.total_page}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  Status: {book.reading_status}
                </p>
                <p className="text-sm text-gray-500">
                  Upvotes: {book.upvote || 0}
                </p>
              </div>

              <div className="flex justify-between mt-6">
                <Link
                  to={`/updateBook/${book._id}`}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBook;
