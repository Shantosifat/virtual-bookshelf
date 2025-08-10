import React, { useState, useEffect, use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const {user}= use(AuthContext)

  useEffect(() => {
    // no need to show message on load anymore
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // get the subscribed emails array from localStorage (or empty array)
    const subscribedEmails = JSON.parse(localStorage.getItem("subscribedEmails") || "[]");

    if (subscribedEmails.includes(email)) {
      setMessage("You have already subscribed with this email.");
      return;
    }

    // add new email to array
    subscribedEmails.push(email);

    // save back to localStorage
    localStorage.setItem("subscribedEmails", JSON.stringify(subscribedEmails));

    setMessage("Thank you for subscribing!");
    setEmail(""); // clear input
  };

  return (
    <section className="bg-gray-100 py-12 px-6 rounded-lg max-w-8xl mx-auto my-10 shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-center mb-6 max-w-xl mx-auto text-gray-600">
        Stay updated with the latest book releases, promotions, and exclusive offers.
      </p>

      <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          defaultValue={user?.email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow px-4 py-2 text-black rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-r-lg font-semibold hover:bg-indigo-700 transition"
        >
          Subscribe
        </button>
      </form>

      {message && (
        <p className="text-center mt-4 font-semibold text-red-600">
          {message}
        </p>
      )}
    </section>
  );
};

export default Newsletter;