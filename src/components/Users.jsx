import { motion } from "framer-motion";

import avatar0 from "../assets/Avatar.png";
import avatar1 from "../assets/Avatar1.png";
import avatar2 from "../assets/Avatar2.png";
import avatar3 from "../assets/Avatar3.png";
import avatar4 from "../assets/Avatar4.png";
import avatar5 from "../assets/Avatar5.png";

const testimonials = [
  { stars: 5, text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!", name: "Emily R", country: "USA", avatar: avatar0 },
  { stars: 5, text: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online.", name: "Amit K", country: "India", avatar: avatar1 },
  { stars: 5, text: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!", name: "Sophie M", country: "UK", avatar: avatar2 },
  { stars: 5, text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand.", name: "Javier L", country: "Spain", avatar: avatar3 },
  { stars: 5, text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!", name: "Lucas T", country: "Brazil", avatar: avatar4 },
  { stars: 5, text: "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense.", name: "Nora S", country: "Canada", avatar: avatar5 }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const starVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 }
  })
};

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 font-avant">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          What Our Users Say
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              className="bg-gray-50 rounded-2xl p-6 shadow-md flex flex-col justify-between transition-all duration-300"
            >
              <div className="flex">
                {Array.from({ length: t.stars }).map((_, starIndex) => (
                  <motion.span
                    key={starIndex}
                    variants={starVariants}
                    custom={starIndex}
                    className="text-yellow-400 text-lg"
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              <p className="mt-3 text-gray-700 flex-grow">{t.text}</p>

              
              <div className="flex items-center mt-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <button className="text-[#ff4d4d] font-semibold hover:underline w-44 h-12 bg-slate-50 rounded-lg shadow-[0px_-4px_10px_rgba(200,200,200,0.9)]">
            See More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
