import { motion } from "framer-motion";
import MobileLeft from "../assests/Group 3.png"
import MobileRight from "../assests/Group 2.png"

export default function About() {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20 font-avant">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="relative flex-1 flex justify-evenly items-center ">
          <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-[#ff4d4d] rounded-full "></div>

            <motion.img
            src={MobileLeft}
            alt="App Screen 1"
            className="w-48 md:w-64 lg:w-72 z-10 ml-1 lg:ml-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          />

          
          <motion.img
            src={MobileRight}
            alt="App Screen 2"
            className="w-64 md:w-80 lg:w-96 -ml-20 md:-ml-10 lg:-ml-24 z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          />
        </div>

        
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 ">
            Where Every Click Sparks a Connection!
          </h2>
          <p className="text-gray-600 mb-8">
            A small act of kindness today can create a lifetime of impact for
            someone in need. Give from the heart and change a life!
          </p>

          
          <div className="space-y-4">
            <motion.div
              className="bg-gray-50 rounded-xl shadow-md p-6 flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-2xl">🎬</span>
              <div>
                <h3 className="font-bold text-lg">Short Videos & Reels</h3>
                <p className="text-gray-700">
                  Share engaging, bite-sized content that keeps everyone entertained.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-xl shadow-md p-6 flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-2xl">🔔</span>
              <div>
                <h3 className="font-bold text-lg">Smart Notifications</h3>
                <p className="text-gray-700">
                  Stay updated on what matters without the noise.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-xl shadow-md p-6 flex items-start gap-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-2xl">👥</span>
              <div>
                <h3 className="font-bold text-lg">Interest-Based Communities</h3>
                <p className="text-gray-700 ">
                  Join groups and discussions that match your passion.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}