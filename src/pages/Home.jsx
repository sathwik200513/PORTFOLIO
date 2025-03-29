import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen pt-16 bg-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-full overflow-hidden w-96 h-96 mx-auto">
              <img
                src="https://via.placeholder.com/400x400"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Lachannagari Sathwik
              <span className="block text-emerald-400 mt-2">Reddy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Game Developer & UX Designer crafting immersive digital experiences
            </p>
            <div className="flex gap-4">
              <Link
                to="/projects"
                className="bg-emerald-400 text-emerald-900 px-8 py-3 rounded-lg hover:bg-emerald-300 transition duration-300 font-medium"
              >
                View my work
              </Link>
              <Link
                to="/about"
                className="border-2 border-emerald-400 text-emerald-400 px-8 py-3 rounded-lg hover:bg-emerald-400 hover:text-emerald-900 transition duration-300 font-medium"
              >
                View my Resume
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;