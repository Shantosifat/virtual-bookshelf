import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BookShelf from "./BookShelf";
import Banner from "./Banner";
import Featured from "./Featured";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import PopularSection from "./PopularSection";
import HowItWorks from "./HowItWorks";

const Home = () => {
  const data = useLoaderData();
  const [books, setBooks] = useState(data.data || []);
  // console.log(books);

  return (
    <div>
      <Banner />

      {/* popular start */}

      {/* Popular start */}
<div className="py-12 px-6">
  <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
    🔥 Most Popular Books
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {books
      .sort((a, b) => (b.upvoted?.length || 0) - (a.upvoted?.length || 0)) // Sort by upvote count descending
      .slice(0, 6) // Take only top 6
      .map((book) => (
        <BookShelf
          key={book._id}
          book={book}
          books={books}
          setBooks={setBooks}
        />
      ))}
  </div>
</div>

      {/* popular end */}
      <Featured></Featured>

      <WhyChooseUs></WhyChooseUs>
     <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
