import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BookShelf from "./BookShelf";
import Banner from "./Banner";
import Featured from "./Featured";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";

const Home = () => {
  const data = useLoaderData();
  const [books, setBooks] = useState(data.data || []);
  console.log(books);

  return (
    <div>
      <Banner />

      <div className="grid grid-cols-1 md:grid-cols-2 py-12 px-6 gap-6">
        {books.map((book) => (
          <BookShelf
            key={book._id}
            book={book}
            books={books}
            setBooks={setBooks}
          />
        ))}
      </div>
      <Featured></Featured>

      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
