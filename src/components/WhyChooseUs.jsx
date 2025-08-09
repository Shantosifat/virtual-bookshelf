import { motion } from "framer-motion";
import { ShieldCheck, BookOpenText, Users } from "lucide-react";

const cards = [
  {
    icon: <ShieldCheck className="text-indigo-600" size={36} />,
    title: "Secure & Reliable",
    desc: "Your book data is safe and accessible anytime from any device.",
  },
  {
    icon: <BookOpenText className="text-indigo-600" size={36} />,
    title: "Personalized Library",
    desc: "Track your reading journey, organize books by category and status.",
  },
  {
    icon: <Users className="text-indigo-600" size={36} />,
    title: "Community Driven",
    desc: "Upvote, review, and explore books loved by other readers.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-16 rounded-xl px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
        💡 Why Choose Us?
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-indigo-50 rounded-xl shadow-md"
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="mb-3">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
