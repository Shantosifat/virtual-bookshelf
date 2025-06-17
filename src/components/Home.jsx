import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BookShelf from "./BookShelf";
import Banner from "./Banner";
import Featured from "./Featured";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import PopularSection from "./PopularSection";
import HowItWorks from "./HowItWorks";
import { motion } from "framer-motion";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  const data = useLoaderData();
  const [books, setBooks] = useState(data.data || []);

  return (
    <div>
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Banner />
      </motion.div>

      {/* Popular Section */}
      <motion.div
        className="py-12 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-center text-indigo-700"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Most Popular Books
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {books
            .sort((a, b) => (b.upvoted?.length || 0) - (a.upvoted?.length || 0))
            .slice(0, 6)
            .map((book) => (
              <motion.div
                key={book._id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <BookShelf
                  book={book}
                  books={books}
                  setBooks={setBooks}
                />
              </motion.div>
            ))}
        </motion.div>
      </motion.div>

      {/* Other Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Featured />
        <WhyChooseUs />
        <HowItWorks />
      </motion.div>
    </div>
  );
};

export default Home;
