import { motion } from "framer-motion";

export default function install() {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20 font-avant">
      <div className=" text-center mb-12 px-6">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 ">
            How to Install Our App
          </h2>
          <p className="text-gray-600 mb-8 font-semibold">
            Getting started is quick and easy! Follow these simple steps to
            install and start using MyBindle today.
          </p>
        </motion.div>
      </div>
      <div className="flex items-center justify-center gap-5 mt-12">
        
        <div className="flex items-center">
          <div className=" flex items-center justify-center text-[#ff4d4d] font-bold text-3xl mr-4">
            01
          </div>
          <div className="w-24 md:w-64 lg:w-96 h-0.5  bg-gray-300"></div>
        </div>

        
        <div className="flex items-center">
          <div className="flex items-center justify-center text-gray-800 font-bold text-3xl mr-6">
            02
          </div>
          <div className="w-24 md:w-64 lg:w-96 h-0.5 bg-gray-300"></div>
        </div>

        
        <div className="flex items-center">
          <div className="flex items-center justify-center text-gray-800 font-bold text-3xl">
            03
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-9 relative z-10">
        <motion.div
          className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center sm:items-center text-center sm:text-center w-full sm:w-72"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">Download</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Open Play Store or App Store
            </p>
          </div>
        </motion.div>
        <motion.div
          className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center sm:items-center text-center sm:text-center w-full sm:w-72"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">Install App</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              The App will install automatically
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center sm:items-center text-center sm:text-center w-full sm:w-72"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <h3 className="font-bold text-lg sm:text-xl -mb-">Ready to Use</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Sign up or log in to start exploring!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
