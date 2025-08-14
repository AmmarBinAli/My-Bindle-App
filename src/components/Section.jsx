import { motion } from "framer-motion";
import iphone14 from "../assets/iPhone14Pro.png";
import iphone14pro from "../assets/iPhone14.png";

export default function DonationSection() {
  return (
    <section className="flex justify-center bg-gray-50">
      <div className="bg-[#ff4d4d] rounded-2xl font-avant overflow-hidden relative h-1/2 w-11/12 mb-9"> 

        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between px-6 md:px-24 pt-10 md:pt-14 relative z-10">
          
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg md:pb-16 -mt-6"
          >
            <h1 className="text-white text-5xl md:text-[52px] font-bold leading-[1.2]">
              Be the Reason Someone Smiles Today!
            </h1>
            <p className="text-white/90 mt-4 text-lg leading-relaxed">
              Your generosity can change lives — every donation brings hope, support, 
              and a brighter future. Give today and make a difference!
            </p>
            <button className="mt-6 bg-white text-[#ff4d4d] font-semibold py-3 px-6 rounded-lg shadow-sm hover:scale-105 transition">
              Donate Now
            </button>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-end gap-4"
          >
            <img
              src={iphone14}
              alt="iPhone 14"
              className="w-40 md:w-56 drop-shadow-xl"
            />
            <img
              src={iphone14pro}
              alt="iPhone 14 Pro"
              className="w-40 md:w-56 drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
