import React, { useState, useEffect } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check if already subscribed
    const subscribedEmail = localStorage.getItem("subscribedEmail");
    if (subscribedEmail) {
      setMessage("You are already subscribed.");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const subscribedEmail = localStorage.getItem("subscribedEmail");

    if (subscribedEmail) {
      setMessage("You have already subscribed with this email.");
      return;
    }

    localStorage.setItem("subscribedEmail", email);
    setMessage("Thank you for subscribing!");
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
          value={email}
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
