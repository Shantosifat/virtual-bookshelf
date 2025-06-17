import React, { useEffect, useState, useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "./Loading";

const BookDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const data = useLoaderData();

  const {
    _id,
    author,
    title,
    photo,
    category,
    total_page,
    upvoted,
    name,
    email,
    overview,
    status,
  } = data.data || {};

  const [upvote, setUpvote] = useState(upvoted.includes(false));
  const [upvoteCount, setUpvoteCount] = useState(upvoted.length);
  const [reviewText, setReviewText] = useState("");
  const [editing, setEditing] = useState(false);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUpvote(upvoted.includes(user?.email));
  }, [upvoted, user]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/book/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch book details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;
  if (!book) return <p className="text-center mt-10 text-red-500">Book not found.</p>;

  const handleUpvote = () => {
    if (user?.email === email) {
      return alert("You can't upvote your own book.");
    }
    axios
      .patch(`${import.meta.env.VITE_API_URL}/upvote/${_id}`, {
        email: user?.email,
      })
      .then((data) => {
        const isVoted = data?.data?.liked;
        setUpvote(isVoted);
        setUpvoteCount((prev) => (isVoted ? prev + 1 : prev - 1));
      })
      .catch((error) => console.log(error));
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!reviewText.trim()) return;

    try {
      const res = await axios.patch(`${import.meta.env.VITE_API_URL}/review/${_id}`, {
        email: user.email,
        name: user.displayName,
        text: reviewText,
      });

      setBook(res.data);
      setReviewText("");
      setEditing(false);
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
  };

  const handleDeleteReview = async () => {
    const confirm = window.confirm("Are you sure you want to delete your review?");
    if (!confirm) return;

    try {
      const res = await axios.delete(`${import.meta.env.VITE_API_URL}/review/${_id}`, {
        data: { email: user.email },
      });

      setBook(res.data);
      setReviewText("");
      setEditing(false);
    } catch (error) {
      console.error("Failed to delete review:", error);
    }
  };

  const handleStatusChange = async () => {
    let nextStatus;
    if (book.status === "Want-to-Read") nextStatus = "Reading";
    else if (book.status === "Reading") nextStatus = "Read";
    else return;

    try {
      const res = await axios.patch(`${import.meta.env.VITE_API_URL}/book-status/${_id}`, {
        status: nextStatus,
      });

      setBook((prev) => ({
        ...prev,
        status: nextStatus,
      }));
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  return (
    <>
      <div className="max-w-5xl mx-auto py-12 px-4 lg:px-6">
        {/* Book Details */}
        <div className="flex flex-col gap-5 md:flex-row bg-slate-100 shadow-lg rounded-2xl p-6 md:p-8 transition hover:shadow-2xl">
          <div className="md:w-1/2">
            <img
              src={photo}
              alt={title}
              className="w-full h-[480px] object-cover rounded-xl shadow-sm"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-4xl font-bold text-indigo-600">{title}</h2>

            <div className="space-y-1 text-gray-700">
              <p><span className="font-semibold text-gray-900">Author:</span> {author}</p>
              <p><span className="font-semibold text-gray-900">Category:</span> {category}</p>
              <p><span className="font-semibold text-gray-900">Total Pages:</span> {total_page}</p>
              <p>
                <span className="font-semibold text-gray-900">Status:</span>{" "}
                <span className="font-medium text-indigo-600">{book.status}</span>
              </p>
            </div>

            <div className="text-gray-700">
              <p className="font-semibold text-gray-900">Overview:</p>
              <p className="text-sm leading-relaxed">
                {overview || "No overview provided."}
              </p>
            </div>

            <div className="pt-4 border-t mt-4 text-sm text-gray-600">
              <p><span className="font-medium">Uploaded By:</span> {name} (<span className="text-indigo-500">{email}</span>)</p>
              <p className="mt-1">👍 <span className="font-semibold text-indigo-600">{upvoteCount}</span> Likes</p>
            </div>

            <button
              onClick={handleUpvote}
              className="mt-4 mr-2 inline-flex items-center px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
            >
              {upvote ? "Voted" : "Vote"}
            </button>

            {user?.email === book.email && (
              <button
                onClick={handleStatusChange}
                disabled={book.status === "Read"}
                className={`mt-2 inline-flex items-center px-6 py-2 rounded-xl transition ${
                  book.status === "Read"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {book.status === "Want-to-Read" && "Start Reading"}
                {book.status === "Reading" && "Mark as Read"}
                {book.status === "Read" && "Completed"}
              </button>
            )}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-10 bg-slate-100 rounded-2xl p-4 text-stone-950">
          <h3 className="text-2xl font-bold mb-4">💬 Reviews</h3>

          {book.reviews && book.reviews.length > 0 ? (
            <div className="space-y-4">
              {book.reviews.map((review, idx) => (
                <div key={idx} className="border p-4 rounded shadow-md bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-600">{review.email}</p>
                    </div>
                    {review.email === user?.email && (
                      <div className="flex gap-3">
                        <button
                          onClick={() => {
                            setReviewText(review.text);
                            setEditing(true);
                          }}
                          className="btn btn-info"
                        >
                          Edit
                        </button>
                        <button
                          onClick={handleDeleteReview}
                          className="btn btn-accent"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="mt-2 text-gray-800">{review.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No reviews yet. Be the first to write one!</p>
          )}

          {user ? (
            <form onSubmit={handleReviewSubmit} className="mt-6">
              <textarea
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2"
                rows="3"
                placeholder="Write your review..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                required
              ></textarea>
              <button type="submit" className="btn btn-primary mt-2">
                {editing ? "Update Review" : "Submit Review"}
              </button>
            </form>
          ) : (
            <p className="mt-4 text-gray-500">You must be logged in to leave a review.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BookDetails;
