import React from "react";
import { Link } from "react-router";

const SalesPromotion = () => {
  return (
    <section className="bg-indigo-600 text-white py-12 px-6 rounded-lg max-w-4xl mx-auto my-10 shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Limited Time Sales Promotion!
      </h2>
      <p className="text-center mb-6 max-w-xl mx-auto">
        Grab your favorite books at up to{" "}
        <span className="font-extrabold">50% OFF</span> for a limited time.
        Don’t miss out on exclusive deals on bestsellers and new arrivals.
      </p>
      <div className="text-center">
        <Link to='/bookShelfs' className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-50 transition">
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default SalesPromotion;
