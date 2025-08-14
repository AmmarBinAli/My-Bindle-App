import { motion } from "framer-motion";

const features = [
  {
    emoji: "🔥",
    title: "Seamless Connections",
    description:
      "Stay in touch with friends, family, and like-minded people with just a tap.",
  },
  {
    emoji: "📸",
    title: "Share Your Story",
    description:
      "Upload photos, videos, and updates to let the world know what’s happening in your life.",
  },
  {
    emoji: "💬",
    title: "Real-Time Chat",
    description:
      "Whether it's a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.",
  },
  {
    emoji: "🔒",
    title: "Privacy First",
    description:
      "Your data, your control. We prioritize your privacy with world-class security.",
  },
  {
    emoji: "🌍",
    title: "Discover & Explore",
    description:
      "Find trending content, join communities, and follow pages that match your interests.",
  },
  {
    emoji: "💼",
    title: "Grow Your Business",
    description:
      "Use our platform to market your brand, connect with customers, and build meaningful relationships.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden py-16 font-avant">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <path
            fill="#f9fafb" 
            d="M0,0 L1440,0 L1440,800 Q720,800 0,800 Z"
          />
        </svg>
      </div>
      <div className="text-center mb-12 px-6 ">
        <h2 className="text-5xl font-bold mb-2 text-gray-900">
          Features That Keep You Hooked!
        </h2>
        <p className="text-lg text-gray-600 font-semibold ">
          Meet, Chat, Share – Anytime, Anywhere!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.68, -0.55, 0.27, 1.55], 
            }}
          >
            <div className="text-3xl mb-4">{feature.emoji}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
