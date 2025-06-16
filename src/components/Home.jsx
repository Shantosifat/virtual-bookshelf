import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BookShelf from "./BookShelf";

const Home = () => {
  const data = useLoaderData();
  const [books, setBooks] = useState(data.data || []); // Already fixed in loader
  console.log(books);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-12 px-6 gap-6">
        {books.map((book) => (
          <BookShelf key={book._id} book={book} books={books} setBooks={setBooks} />
        ))}
      </div>
    </div>
  );
};

export default Home;
