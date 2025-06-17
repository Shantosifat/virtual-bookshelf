import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ayesha K.",
    feedback: "This virtual shelf helped me keep track of my reads and inspired me to read more. Clean design and super easy to use!",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mahmud R.",
    feedback: "I can finally sort my books by genre and status. Love the upvote feature!",
    role: "Book Enthusiast",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Nusrat J.",
    feedback: "Great platform for readers. It feels like a digital library I always wanted!",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 px-6 bg-indigo-50">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">
        💬 What Our Readers Say
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-indigo-300"
            />
            <h4 className="text-xl font-semibold text-indigo-700">{t.name}</h4>
            <p className="text-sm text-gray-500 mb-2">{t.role}</p>
            <p className="text-gray-700 text-sm italic">“{t.feedback}”</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
