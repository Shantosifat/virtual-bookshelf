import React from "react";
import { motion } from "framer-motion";
import { BookOpenIcon } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Fiction",
    description: "Explore imaginative storytelling and literary classics.",
    image:
      "https://i.postimg.cc/MT2hBMkn/83cb389fea6e3d5df2f85d9bee2949fc.jpg",
  },
  {
    id: 2,
    name: "Non-Fiction",
    description: "Discover real stories, biographies, and factual content.",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Fantasy",
    description: "Dive into magical worlds, legends, and mythical journeys.",
    image:
      "https://i.postimg.cc/0QYh0kxc/9781408855652.jpg",
  },
];

const Featured = () => {
  return (
    <div className="py-16 px-6 bg-gradient-to-r from-indigo-50 to-purple-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
        📚 Featured Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-indigo-600 mb-2">
                <BookOpenIcon className="w-5 h-5" />
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
