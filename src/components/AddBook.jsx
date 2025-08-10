import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddBook = () => {
  const navigate = useNavigate();
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const newBook = Object.fromEntries(formData.entries());
    console.log(newBook);

    newBook.upvoted = [];

    // save book data
    axios
      .post(`${import.meta.env.VITE_API_URL}/add-book`, newBook)
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Data Added Successfully!",
          icon: "success",
          draggable: true,
        });
        // navigate("/bookshelfs");
      })
      .catch((error) => {
        console.log(error);
      });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-rose-50 flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Add a New Book
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Book Title */}
            <div>
              <label className="block text-gray-600 mb-1">Book Title</label>
              <input
                name="title"
                required
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
                type="text"
                placeholder="Enter book title"
              />
            </div>

            {/* Cover Photo */}
            <div>
              <label className="block text-gray-600 mb-1">
                Cover Photo URL
              </label>
              <input
                name="photo"
                required
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
                type="text"
                placeholder="https://..."
              />
            </div>

            {/* Total Page */}
            <div>
              <label className="block text-gray-600 mb-1">Total Page</label>
              <input
                name="total_page"
                required
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
                type="number"
                placeholder="e.g. 300"
              />
            </div>

            {/* Book Author */}
            <div>
              <label className="block text-gray-600 mb-1">Author</label>
              <input
                name="author"
                required
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
                type="text"
                placeholder="Author name"
              />
            </div>

            {/* User Email (read-only) */}
            <div>
              <label className="block text-gray-600 mb-1">Your Email</label>
              <input
                name="email"
                value={user.email}
                readOnly
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg "
                type="email"
              />
            </div>

            {/* User Name (read-only) */}
            <div>
              <label className="block text-gray-600 mb-1">Your Name</label>
              <input
                name="name"
                value={user.displayName}

                className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg "
                type="text"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="block text-gray-600 mb-1">Book Category</label>
              <select
                name="category"
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
                required
              >
                <option value="">Select Category</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Fantasy">Fantasy</option>
              </select>
            </div>

            {/* Reading Status Dropdown */}
            <div>
              <label className="block text-gray-600 mb-1">Reading Status</label>
              <select
                name="status"
                className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
                required
              >
                <option value="">Select Status</option>
                <option value="Read">Read</option>
                <option value="Reading">Reading</option>
                <option value="Want-to-Read">Want-to-Read</option>
              </select>
            </div>

            {/* Upvote (read-only) */}
            {/* <div>
              <label className="block text-gray-600 mb-1">Upvotes</label>
              <input
                name="upvote"

              
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg "
                type="number"
              />
            </div> */}
          </div>

          {/* Book Overview */}
          <div>
            <label className="block text-gray-600 mb-1">Book Overview</label>
            <textarea
              name="overview"
              required
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
              rows="4"
              placeholder="Write a brief overview of the book..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
