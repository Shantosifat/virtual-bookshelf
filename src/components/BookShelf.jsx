import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import UpdateBook from "./BookDetails";
import { Link, useNavigate } from "react-router";

const BookShelf = ({ book, books, setBooks }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    _id,
    photo,
    title,
    category,
    upvoted,
    author,
    total_page,
    status,
    email,
  } = book;

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [formData, setFormData] = useState({
  //   title,
  //   author,
  //   photo,
  //   category,
  // });

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
              const remaining = books.filter((b) => b._id !== id);
              setBooks(remaining);
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  //     const { name, value } = e.target;
  //     setFormData(prev => ({ ...prev, [name]: value }));
  //   };

  //   const handleUpdate = (e) => {
  //     e.preventDefault();
  //     console.log("object");
  //     const form = e.target;
  //     const formData = new FormData(form);
  //     const updatedData = Object.fromEntries(formData.entries());
  //     console.log(updatedData);

  //     // send updated data to the db
  //     fetch(`${import.meta.env.VITE_API_URL}/update/${_id}`, {
  //       method: "PUT",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(updatedData),
  //     })  .then((res) => res.json())
  //       .then((data) => {
  //         console.log("after update", data);
  //         if (data.modifiedCount) {
  //           Swal.fire({
  //             position: "middle",
  //             icon: "success",
  //             title: "Updated Successfully",
  //             showConfirmButton: false,
  //             timer: 1000,
  //           });
  //           setIsModalOpen(false);
  //         }
  //         navigate('/')
  //       });

  //   };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_API_URL}/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after update", data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "middle",
            icon: "success",
            title: "Updated Successfully",
            showConfirmButton: false,
            timer: 1000,
          });

          //  Update the local state if available
          if (setBooks) {
            setBooks((prevBooks) =>
              prevBooks.map((book) =>
                book._id === _id ? { ...book, ...updatedData } : book
              )
            );
          }

          // Close modal
          if (setIsModalOpen) setIsModalOpen(false);

          //  redirect only if you're not on the same page
          // navigate('/');
        }
      });
  };

  return (
    <>
      <div className="bg-slate-100 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-transform hover:scale-[1.01] duration-300">
        {/* left */}
        <div className="md:w-2/5 w-full m-2">
          <img
            src={photo}
            alt={title}
            className="w-full h-[350px] rounded-xl object-cover"
          />
        </div>

        {/* Right */}
        <div className="md:w-3/5 w-full p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-lg text-gray-600 mb-1">
              <span className="font-semibold text-gray-700">Author:</span>{" "}
              {author}
            </p>
            <p className="text-lg text-gray-600 mb-1">
              <span className="font-semibold text-gray-700">Category:</span>{" "}
              {category}
            </p>
            <p className="text-lg text-indigo-600 font-semibold mt-3">
              Upvotes: {upvoted.length}
            </p>
          </div>

          <div className="mt-6 flex gap-3 flex-wrap">
            <Link to={`/book/${_id}`}>
              <button className="btn btn-outline btn-primary">View</button>
            </Link>

            {user?.email === email && (
              <>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn-outline btn-warning"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-outline btn-error"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0  z-100 flex justify-center items-center">
          <div className=" rounded-lg bg-slate-800 p-6 w-full max-w-5xl max-h-fit relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-xl font-bold text-gray-500"
            >
              ✕
            </button>
            <h2 className="text-2xl text-white font-bold mb-5 text-center">
              Update Book
            </h2>
            <form onSubmit={handleUpdate} className="">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Book Title */}
                  <div>
                    <label className="block text-gray-100 mb-1">
                      Book Title
                    </label>
                    <input
                      name="title"
                      required
                      className="w-full text-white px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
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
                      className="w-full text-white px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
                      type="text"
                      defaultValue={photo}
                      placeholder="https://..."
                    />
                  </div>

                  {/* Total Page */}
                  <div>
                    <label className="block text-gray-100 mb-1">
                      Total Page
                    </label>
                    <input
                      name="total_page"
                      required
                      className="w-full text-white px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
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
                      className="w-full text-white px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none"
                      type="text"
                      defaultValue={author}
                      placeholder="Author name"
                    />
                  </div>

                  {/* User Email (read-only) */}
                  <div>
                    <label className="block text-gray-100 mb-1">
                      Your Email
                    </label>
                    <input
                      name="email"
                      value={user.email}
                      readOnly
                      className="w-full text-white px-4 py-2  border border-gray-300 rounded-lg "
                      type="email"
                      defaultValue={email}
                    />
                  </div>

                  {/* User Name (read-only) */}
                  <div>
                    <label className="block text-gray-100 mb-1">
                      Your Name
                    </label>
                    <input
                      name="name"
                      // value={user.name}

                      className="w-full text-white px-4 py-2  border border-gray-300 rounded-lg "
                      type="text"
                      defaultValue={name}
                    />
                  </div>

                  {/* Category Dropdown */}
                  <div>
                    <label className="block text-gray-100 mb-1">
                      Book Category
                    </label>
                    <select
                      name="category"
                      defaultValue={category}
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
                    <label className="block text-gray-100 mb-1">
                      Reading Status
                    </label>
                    <select
                      name="status"
                      defaultValue={status}
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
                      className="w-full text-white px-4 py-2  border border-gray-300 rounded-lg "
                      type="number"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
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

export default BookShelf;
