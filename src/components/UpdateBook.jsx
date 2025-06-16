import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData, useParams } from "react-router";

const UpdateBook = () => {
    const {user} = use(AuthContext)
    const data = useLoaderData();
    const {index} = useParams()
    console.log(data.data);
    const update = data.data[parseInt(index)];
//   const navigate = useNavigate();
  const { _id, title, category, name, photo, author, email, total_page } =
    update;

    console.log(update.name);
  return (
    <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Book Title */}
            <div>
              <label className="block text-gray-100 mb-1">Book Title</label>
              <input
                name="title"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
                type="text"
                defaultValue={title}
                placeholder="Enter book title"
              />
            </div>

            {/* Cover Photo */}
            <div>
              <label className="block text-gray-100 mb-1">
                Cover Photo URL
              </label>
              <input
                name="photo"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
                type="text"
                 defaultValue={photo}
                placeholder="https://..."
              />
            </div>

            {/* Total Page */}
            <div>
              <label className="block text-gray-100 mb-1">Total Page</label>
              <input
                name="total_page"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
                type="number"
                 defaultValue={total_page}
                placeholder="e.g. 300"
              />
            </div>

            {/* Book Author */}
            <div>
              <label className="block text-gray-100 mb-1">Author</label>
              <input
                name="author"
                required
                className="w-full  px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
                type="text"
                defaultValue={author}
                placeholder="Author name"
              />
            </div>

            {/* User Email (read-only) */}
            <div>
              <label className="block text-gray-100 mb-1">Your Email</label>
              <input
                name="email"
                value={user.email}
                readOnly
                className="w-full px-4 py-2  border border-gray-300 rounded-lg "
                type="email"
                defaultValue={email}

              />
            </div>

            {/* User Name (read-only) */}
            <div>
              <label className="block text-gray-100 mb-1">Your Name</label>
              <input
                name="name"
                // value={user.name}

                className="w-full px-4 py-2  border border-gray-300 rounded-lg "
                type="text"
                defaultValue={name}
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="block text-gray-100 mb-1">Book Category</label>
              <select
                name="category"
                className="w-full text-slate-700 bg-blue-200  px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
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
              <label className="block text-gray-100 mb-1">Reading Status</label>
              <select
                name="status"
                className="w-full text-slate-700 bg-blue-200 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
                required
              >
                <option value="">Select Status</option>
                <option value="Read">Read</option>
                <option value="Reading">Reading</option>
                <option value="Want-to-Read">Want-to-Read</option>
              </select>
            </div>

            {/* Upvote (read-only) */}
            <div>
              <label className="block text-gray-100 mb-1">Upvotes</label>
              <input
                name="upvote"
                defaultValue="0"
                readOnly
                className="w-full px-4 py-2  border border-gray-300 rounded-lg "
                type="number"
              />
            </div>
          </div>

          {/* Book Overview
          <div>
            <label className="block text-gray-600 mb-1">Book Overview</label>
            <textarea
              name="overview"
              required
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
              rows="4"
              placeholder="Write a brief overview of the book..."
            ></textarea>
          </div> */}

          {/* Submit Button */}
          {/* <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
            >
              Add Book
            </button>
          </div> */}
    </div>
  );
};

export default UpdateBook;
