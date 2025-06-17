import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BookShelf from "./BookShelf";

const Map = () => {
  const data = useLoaderData();
  // console.log(data);
  const [books, setBooks] = useState(data.data || []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-12 px-6 gap-6">
        {books.length === 0 ? (
  <p className="text-center text-gray-500">No books available.</p>
) : (
  books.map((book) =>
    book ? (
      <BookShelf
        key={book._id}
        book={book}
        books={books}
        setBooks={setBooks}
      />
    ) : null
  )
)}

      </div>
    </div>
  );
};

export default Map;
