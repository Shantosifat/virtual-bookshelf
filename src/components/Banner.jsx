import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const slides = [
  {
    title: "Discover Your Next Favorite Book",
    subtitle: "Explore top categories like Fiction, Fantasy, and more!",
    image:
      "https://i.postimg.cc/1tcR7Btp/pexels-buro-millennial-636760-1438081.jpg",
  },
  {
    title: "Read. Review. Recommend.",
    subtitle: "Share your thoughts and connect with book lovers.",
    image:
      "https://i.postimg.cc/2SGb186Y/dylan-gillis-Kdeq-A3a-Tn-BY-unsplash.jpg",
  },
  {
    title: "Build Your Virtual Bookshelf",
    subtitle: "Add, upvote, and manage books that inspire you.",
    image:
      "https://i.postimg.cc/3N5pmnqm/Digital-Book-Library-1.jpg",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const { title, subtitle, image } = slides[index];

  return (
    <div
      className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      {/* Typewriter Section - ADDED  */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 text-white text-xl md:text-3xl font-semibold bg-black/50 px-4 py-2 rounded-md shadow-lg">
        <Typewriter
          words={[
            "Read Smarter, Not Harder.",
            "Discover Your Next Favorite Book.",
            "Add. Review. Connect.",
            "Your Shelf, Your Story.",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </div>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover brightness-75 transition-opacity duration-700"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{title}</h1>
        <p className="text-md md:text-xl">{subtitle}</p>
        <span className="mt-4 text-xs text-gray-300"></span>
      </div>
    </div>
  );
};

export default Banner;
