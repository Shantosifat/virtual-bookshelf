import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const subscribedEmails = JSON.parse(localStorage.getItem("subscribedEmails") || "[]");

    if (subscribedEmails.includes(email)) {
      setError("This email is already subscribed.");
      return;
    }

    // Add email to subscribed list
    subscribedEmails.push(email);
    localStorage.setItem("subscribedEmails", JSON.stringify(subscribedEmails));

    setSubmitted(true);
  };

  return (
    <section className="bg-gray-100 py-12 px-6 rounded-lg max-w-8xl mx-auto my-10 shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Subscribe to Our Newsletter</h2>
      <p className="text-center mb-6 max-w-xl mx-auto text-gray-600">
        Stay updated with the latest book releases, promotions, and exclusive offers.
      </p>
      {submitted ? (
        <p className="text-green-600 text-center font-semibold">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-r-lg font-semibold hover:bg-indigo-700 transition"
          >
            Subscribe
          </button>
          {error && (
            <p className="text-red-600 mt-2 text-center sm:text-left w-full">{error}</p>
          )}
        </form>
      )}
    </section>
  );
};

export default Newsletter;
