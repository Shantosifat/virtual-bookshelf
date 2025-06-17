import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLoaderData } from "react-router";
import axios from "axios";

const MyBook = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const [myBooks, setMyBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_API_URL}/books?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyBooks(data))
        .catch((err) => console.error("Fetch error:", err));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/delete/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire("Deleted!", "Task has been deleted.", "success");
              const remaining = myBooks.filter((b) => b._id !== id);
              setMyBooks(remaining);
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_API_URL}/update/${selectedBook._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "middle",
            icon: "success",
            title: "Updated Successfully",
            showConfirmButton: false,
            timer: 1000,
          });

          setMyBooks((prevBooks) =>
            prevBooks.map((book) =>
              book._id === selectedBook._id ? { ...book, ...updatedData } : book
            )
          );

          setIsModalOpen(false);
        }
      });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-rose-100 via-white to-indigo-100 p-6">
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
                className="bg-slate-50 rounded-xl shadow-lg p-6 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={book.photo}
                    alt={book.title}
                    className="w-full h-60 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-indigo-700">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">
                    Author: {book.author}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">
                    Category: {book.category}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">
                    Pages: {book.total_page}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">
                    Status: {book.status}
                  </p>
                  <p className="text-sm text-gray-500">
                    Upvotes: {book.upvote || 0}
                  </p>
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => {
                      setSelectedBook(book);
                      setIsModalOpen(true);
                    }}
                    className="btn btn-outline btn-warning"
                  >
                    Update
                  </button>
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

      {isModalOpen && selectedBook && (
        <div className="fixed inset-0 z-100 flex justify-center items-center">
          <div className="rounded-lg bg-slate-800 p-6 w-full max-w-5xl max-h-fit relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-xl font-bold text-gray-500"
            >
              ✕
            </button>
            <h2 className="text-2xl text-white font-bold mb-5 text-center">
              Update Book
            </h2>
            <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="title"
                  defaultValue={selectedBook.title}
                  required
                  className="w-full text-white px-4 py-2 border border-gray-300 rounded-lg"
                  type="text"
                />
                <input
                  name="photo"
                  defaultValue={selectedBook.photo}
                  required
                  className="w-full text-white px-4 py-2 border border-gray-300 rounded-lg"
                  type="text"
                />
                <input
                  name="total_page"
                  defaultValue={selectedBook.total_page}
                  required
                  className="w-full text-white px-4 py-2 border border-gray-300 rounded-lg"
                  type="number"
                />
                <input
                  name="author"
                  defaultValue={selectedBook.author}
                  required
                  className="w-full text-white px-4 py-2 border border-gray-300 rounded-lg"
                  type="text"
                />
                <input
                  name="email"
                  value={user.email}
                  readOnly
                  className="w-full text-white px-4 py-2 border border-gray-300 rounded-lg"
                  type="email"
                />
                <input
                  name="name"
                  defaultValue={user.displayName}
                  readOnly
                  className="w-full text-white px-4 py-2 border border-gray-300 rounded-lg"
                  type="text"
                />
                <select
                  name="category"
                  defaultValue={selectedBook.category}
                  className="w-full text-slate-700 bg-blue-200 px-4 py-2 border border-gray-300 rounded-lg"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                  <option value="Fantasy">Fantasy</option>
                </select>
                <select
                  name="status"
                  defaultValue={selectedBook.status}
                  className="w-full text-slate-700 bg-blue-200 px-4 py-2 border border-gray-300 rounded-lg"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Read">Read</option>
                  <option value="Reading">Reading</option>
                  <option value="Want-to-Read">Want-to-Read</option>
                </select>
                <input
                  name="upvote"
                  defaultValue={selectedBook.upvote || 0}
                  readOnly
                  className="w-full text-white px-4 py-2 border border-gray-300 rounded-lg"
                  type="number"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-active"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MyBook;
