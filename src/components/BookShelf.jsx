import { Link } from "react-router";

const BookShelf = ({ book }) => {
  const { _id, photo, title, category, upvote, author } = book;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-transform hover:scale-[1.01] duration-300">
      
      {/* Left: Cover Photo */}
      <div className="md:w-2/5 w-full">
        <img
          src={photo}
          alt={title}
          className="w-full h-[350px] object-cover"
        />
      </div>

      {/* Right: Book Info & Actions */}
      <div className="md:w-3/5 w-full p-6 flex flex-col justify-between">
        
        {/* Book Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-lg text-gray-600 mb-1">
            <span className="font-semibold text-gray-700">Author:</span> {author}
          </p>
          <p className="text-lg text-gray-600 mb-1">
            <span className="font-semibold text-gray-700">Category:</span> {category}
          </p>
          <p className="text-lg text-indigo-600 font-semibold mt-3">
            Upvotes: {upvote}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3 flex-wrap">
          <Link to={`/books/${_id}`}>
            <button className="btn btn-outline btn-primary">View</button>
          </Link>
          <Link to={`/updatedBook/${_id}`}>
            <button className="btn btn-outline btn-warning">Edit</button>
          </Link>
          <button className="btn btn-outline btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
