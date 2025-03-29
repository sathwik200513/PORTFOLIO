import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skills = {
    frontend: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Vue.js', level: 75 },
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'PHP', level: 70 },
      { name: 'SQL', level: 85 },
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Figma', level: 75 },
    ],
  };

  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">My Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>
              {skills.frontend.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>

            {/* Backend Skills */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Backend Development</h3>
              {skills.backend.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>

            {/* Tools & Technologies */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
              {skills.tools.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>

          {/* Additional Skills Section */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Other Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Problem Solving',
                'Team Leadership',
                'Project Management',
                'UI/UX Design',
                'Agile Development',
                'Code Review',
                'Testing',
                'Documentation',
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg text-center hover:bg-gray-200 transition duration-300"
                >
                  <span className="text-gray-800 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;