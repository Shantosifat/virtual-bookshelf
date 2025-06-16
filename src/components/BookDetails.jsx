import React from 'react';
import { useLoaderData } from 'react-router';

const BookDetails = () => {
  const { data: book } = useLoaderData();

  if (!book)
    return <div className="text-center py-10 text-xl">Loading book details...</div>;

  const {
    title,
    photo,
    author,
    total_page,
    category,
    status,
    overview,
    likedBy,
    user,
  } = book;

  return (
    <div className="max-w-5xl mx-auto  py-6 mt-10 rounded-2xl shadow-md bg-slate-50">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Book Cover */}
        <div className="flex justify-center">
          <img
            src={photo}
            alt={title}
            className="w-full max-w-sm h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Book Info */}
        <div className="flex flex-col space-y-4 text-gray-800">
          <div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-sm text-gray-600">
              by <span className="font-semibold">{author}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
              Category: {category}
            </span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
              Status: {status}
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full font-medium">
              Pages: {total_page}
            </span>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-2">Overview</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{overview}</p>
          </div>

          <div className="pt-4">
            <h4 className="text-sm font-semibold text-gray-700">Added by:</h4>
            <p className="text-sm text-gray-600">
              {user?.name} ({user?.email})
            </p>
          </div>
          <div className="pt-4 border-t border-gray-300">
            <h4 className="text-sm font-semibold text-gray-700">Likes: {likedBy.length}</h4>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
