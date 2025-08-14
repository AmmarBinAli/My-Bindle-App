import { motion } from "framer-motion";
import bodyImg from "../assests/Body.png";
import bodyImg1 from "../assests/Body1.png";
import install from "../assests/install.png";

export default function FooterSection() {
  return (
    <footer className="flex justify-center bg-gray-50 ">
      <div className="bg-[#ff4d4d] rounded-t-3xl font-avant w-11/12 mb-0">
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between px-6 md:px-20 pt-10 md:pt-14 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-lg md:pb-12 -mt-6"
          >
            <h1 className="text-white text-5xl md:text-[48px] font-bold leading-[1.2]">
              Join the Fun – Download MyBindle Now!
            </h1>
            <p className="text-white/90 mt-4 text-lg leading-relaxed">
              Your Social Network, Your Way. Download MyBindle Now and Be a Part
              of a Community That’s Always Evolving!
            </p>

            <div className="mt-6 flex justify-start">
              <img
                src={install}
                alt="Download on App Store and Google Play"
                className="h-14 md:h-16 object-contain "
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-end gap-10"
          >
            <img
              src={bodyImg}
              alt="Body"
              className="w-44 md:w-72 drop-shadow-xl"
            />
            <img
              src={bodyImg1}
              alt="Body 1"
              className="w-36 md:w-72 drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
