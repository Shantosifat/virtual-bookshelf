import React, { useEffect, useState, useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import { FaThumbsUp } from "react-icons/fa";
import Loading from "./Loading";

const BookDetails = () => {
  const { user } = useContext(AuthContext);

  const { id } = useParams();
  const data = useLoaderData();
  console.log(data.data);
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
  console.log("object", upvote);
  const [upvoteCount, setUpvoteCount] = useState(upvoted.length);

  const [book, setBook] = useState(null);

  const [loading, setLoading] = useState(true);
  // const [upvoting, setUpvoting] = useState(upvote.includes(user?.email));
  // console.log('object', upvoting);

  // page reload marle upvote change hoye jachhe..er jnno eita use kra hoise jeno reload marleo change na hoy
  useEffect(()=>{
    setUpvote(upvoted.includes(user?.email))
  },[upvoted, user])

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

  if (loading) return <Loading></Loading>;
  if (!book)
    return <p className="text-center mt-10 text-red-500">Book not found.</p>;

  const handleUpvote = () => {
    if (user?.email === email) {
      return alert("You can't upvote your own book.");
      // handle upvote toggle
    }
    axios
      .patch(`${import.meta.env.VITE_API_URL}/upvote/${_id}`, {
        email: user?.email,
      })
      .then((data) => {
        console.log(data);
        const isVoted = data?.data?.liked;
        // handle upvote state
        setUpvote(isVoted);
        // handle upvote count
        setUpvoteCount((prev) => (isVoted ? prev + 1 : prev - 1));
      })
      .catch((error) => {
        console.log(error);
      });
    // alert('great')
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-8 bg-white shadow-xl rounded-lg p-6">
        <img
          src={photo}
          alt={title}
          className="w-full md:w-1/2 object-cover rounded-lg h-[480px]"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-indigo-700 mb-2">{title}</h2>
          <p className="text-gray-600 mb-1">
            <strong>Author:</strong> {author}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Category:</strong> {category}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Total Pages:</strong> {total_page}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Status:</strong> {status}
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Overview:</strong> {overview || "No overview provided."}
          </p>

          <div className="mb-4">
            <p className="text-gray-600">
              <strong>Uploaded By:</strong>
            </p>
            <p className="text-sm text-gray-600">
              {name} ({email})
            </p>
            <p className="text-gray-600">Likes : {upvoteCount}</p>
          </div>
          <button onClick={handleUpvote} className="btn btn-secondary">
            {upvote ? "Voted" : "Vote"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
