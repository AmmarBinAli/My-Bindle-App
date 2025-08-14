import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import mobileImg from "../assets/Group 1.png";

export default function Hero() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#ff4d4d]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <img src={logo} alt="Mybindle Logo" className="w-16 h-16" />
          <h1 className="text-4xl font-bold text-white">Mybindle</h1>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="bg-white min-h-screen flex flex-col items-center relative overflow-hidden font-avant">

      <div className="absolute top-0 left-0 w-full h-full z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <path
            fill="#ff4d4d"
            d="M0,0 L1440,0 L1440,750 Q720,750 0,750 Z"
          />
        </svg>
      </div>

      
      <motion.div
        className="flex items-center gap-2 mt-6 z-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src={logo} alt="Mybindle Logo" className="w-14 h-14" />
        <h1 className="text-4xl font-bold text-white ml-3">Mybindle</h1>
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12 md:gap-60 flex-1 mt-10 sm:mt-20 z-10 ">
        
        <motion.div
          className="flex-1 text-white text-center md:text-left "
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Stay Connected <br />
            Stay Social <br />
            Stay You!
          </h2>

          <p className="text-lg mb-5 max-w-lg mx-auto md:mx-0 m-2">
            A place where friendships grow, communities thrive, and moments turn
            into unforgettable experiences. Whether you're looking to reconnect with
            old friends, build new relationships, or share what matters most to you
            – MyBindle is your home on the internet.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white text-[#ff4d4d] px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            Get Started
          </motion.button>
        </motion.div>

        
        <motion.div
          className="flex-1 flex justify-center relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            delay: 0.2,
            type: "spring",
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={mobileImg}
            alt="Mobile App"
            className="w-[250px] md:w-[300px] lg:w-[350px] drop-shadow-2xl"
          />

          
          <motion.div
            className="absolute top-12 -left-7 bg-white px-4 py-4 rounded-xl shadow-lg flex items-center gap-2 font-bold"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            🔥 Seamless Connections
          </motion.div>

          
          <motion.div
            className="absolute bottom-28 right-9 bg-white px-4 py-4 rounded-xl shadow-lg flex items-center gap-2 font-bold"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            🌍 Discover & Explore
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
