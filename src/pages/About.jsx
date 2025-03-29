import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://via.placeholder.com/400x500"
                alt="Profile"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-6">
                I'm a passionate web developer with over [X] years of experience in creating
                digital solutions. My journey in web development started with a curiosity
                about how websites work, and it has evolved into a professional career
                where I help businesses and individuals bring their ideas to life.
              </p>

              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-gray-600 mb-6">
                Throughout my career, I've worked on various projects ranging from small
                business websites to large-scale web applications. I'm constantly learning
                and staying up-to-date with the latest technologies and best practices in
                web development.
              </p>

              <div className="border-l-4 border-blue-600 pl-4 mb-6">
                <p className="text-lg italic text-gray-700">
                  "The only way to do great work is to love what you do."
                </p>
                <p className="text-gray-600">- Steve Jobs</p>
              </div>

              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Bachelor's Degree in Computer Science</li>
                <li>Various certifications in web development</li>
                <li>Continuous learning through online courses</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Interests</h3>
              <p className="text-gray-600">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge through
                blog posts and mentoring.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;