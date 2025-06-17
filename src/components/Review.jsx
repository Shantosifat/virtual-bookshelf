import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";

const Review = ({ bookId, reviews, setBook }) => {
  const { user } = useContext(AuthContext);
  const [reviewText, setReviewText] = useState("");
  const [editing, setEditing] = useState(false);

  const myReview = reviews?.find((r) => r.email === user?.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reviewText.trim()) return;

    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/review/${bookId}`,
        {
          email: user.email,
          name: user.displayName,
          text: reviewText,
        }
      );
      setBook(res.data);
      setReviewText("");
      setEditing(false);
    } catch (err) {
      console.error("Review submit error:", err);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete your review?")) return;
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/review/${bookId}`,
        { data: { email: user.email } }
      );
      setBook(res.data);
      setReviewText("");
      setEditing(false);
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="">
      <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3 flex items-center gap-2">
        💬 Reviews
      </h3>

      {/* Existing Reviews */}
      <div className="space-y-4">
        {reviews?.length > 0 ? (
          reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-md font-semibold text-gray-900">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-500">{review.email}</p>
                </div>
                {review.email === user?.email && (
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setReviewText(review.text);
                        setEditing(true);
                      }}
                      className="text-indigo-600 text-sm hover:underline"
                    >
                      ✎ Edit
                    </button>
                    <button
                      onClick={handleDelete}
                      className="text-red-500 text-sm hover:underline"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                )}
              </div>
              <p className="text-gray-700 text-sm">{review.text}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No reviews yet. Be the first to write one!</p>
        )}
      </div>

      {/* Review Form */}
      {user && (
        <form onSubmit={handleSubmit} className="mt-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            {myReview ? "Edit Your Review" : "Write a Review"}
          </h4>
          <textarea
            className="w-full border text-stone-900 border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows="4"
            placeholder="Share your thoughts about this book..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <button
            type="submit"
            className="mt-3 inline-block bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 transition"
          >
            {editing ? "Update Review" : "Submit Review"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Review;
