// import React from "react";
// import { experiences } from "../../constants"; // Import your data

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="mb-16 text-center">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-32 h-1 mx-auto mt-4 bg-purple-500"></div>
//         <p className="mt-4 text-lg font-semibold text-gray-400">
//           A collection of my work experience and the roles I have taken in
//           various organizations
//         </p>
//       </div>

//       {/* Experience Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute left-0 w-1 h-full transform -translate-x-1/2 bg-white sm:left-1/2 sm:-translate-x-0"></div>

//         {/* Experience Entries */}
//         {experiences.map((experience, index) => (
//           <div
//             key={experience.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={experience.img}
//                 alt={experience.company}
//                 className="object-cover w-full h-full rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* Company Logo/Image */}
//                 <div className="w-16 h-16 overflow-hidden bg-white rounded-md">
//                   <img
//                     src={experience.img}
//                     alt={experience.company}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>

//                 {/* Role, Company Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl font-semibold text-white sm:text-2xl">
//                       {experience.role}
//                     </h3>
//                     <h4 className="text-gray-300 text-md sm:text-sm">
//                       {experience.company}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="mt-2 text-sm text-gray-500">{experience.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400">{experience.desc}</p>
//               <div className="mt-4">
//                 <h5 className="font-medium text-white">Skills:</h5>
//                 <ul className="flex flex-wrap mt-2">
//                   {experience.skills.map((skill, index) => (
//                     <li
//                       key={index}
//                       className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
//                     >
//                       {skill}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;



import React, { useState } from "react";
import { experiences } from "../../constants";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
  FaUsers,
  FaServer,
  FaCode,
  FaChartLine
} from "react-icons/fa";

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const getRoleIcon = (role) => {
    if (role.toLowerCase().includes('manager')) return <FaUsers className="w-6 h-6" />;
    if (role.toLowerCase().includes('developer')) return <FaCode className="w-6 h-6" />;
    return <FaBriefcase className="w-6 h-6" />;
  };

  const getRoleColor = (role) => {
    if (role.toLowerCase().includes('manager')) return 'from-blue-500 to-cyan-500';
    if (role.toLowerCase().includes('developer')) return 'from-purple-500 to-pink-500';
    return 'from-gray-600 to-gray-700';
  };

  return (
    <section
      id="experience"
      className="relative px-4 py-20 overflow-hidden font-sans md:py-28 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full top-1/4 -left-20 w-96 h-96 bg-blue-500/10 blur-3xl"></div>
        <div className="absolute rounded-full bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center md:mb-20">
          <div className="inline-flex items-center justify-center p-4 mb-6 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
            <FaBriefcase className="w-10 h-10 text-white" />
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
              Professional Journey
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-300 md:text-xl">
            From software development to technical leadership, shaping enterprise solutions
          </p>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 md:w-1.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>

          {/* Animated Dots */}
          <div className="absolute w-4 h-4 transform bg-blue-400 rounded-full opacity-75 left-4 md:left-1/2 md:-translate-x-1/2 animate-ping"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2 md:pl-0' : 'md:pl-1/2 md:pr-0'
                }`}
            >
              {/* Timeline Node */}
              <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-gray-800 z-20 flex items-center justify-center bg-gradient-to-r ${getRoleColor(exp.role)}`}>
                {getRoleIcon(exp.role)}
              </div>

              {/* Date Marker */}
              <div className={`absolute top-0 hidden md:block ${index % 2 === 0
                ? 'left-1/2 transform translate-x-16'
                : 'right-1/2 transform -translate-x-16'
                }`}>
                <div className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-full bg-gray-800/80 backdrop-blur-sm">
                  <FaCalendarAlt className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-gray-300">{exp.date}</span>
                </div>
              </div>

              {/* Experience Card */}
              <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                <div
                  className={`group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 ${expandedCard === exp.id ? 'shadow-2xl shadow-blue-500/20 border-blue-500/50' : ''
                    }`}
                >
                  {/* Card Header */}
                  <div
                    className="p-6 cursor-pointer md:p-8"
                    onClick={() => toggleExpand(exp.id)}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${getRoleColor(exp.role)}`}>
                            {getRoleIcon(exp.role)}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white transition-colors md:text-2xl group-hover:text-blue-300">
                              {exp.role}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-lg font-semibold text-blue-300">{exp.company}</span>
                              {exp.location && (
                                <>
                                  <span className="text-gray-500">•</span>
                                  <div className="flex items-center gap-1 text-gray-400">
                                    <FaMapMarkerAlt className="w-4 h-4" />
                                    <span className="text-sm">{exp.location}</span>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Mobile Date */}
                        <div className="flex items-center gap-2 mb-4 md:hidden">
                          <FaCalendarAlt className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-400">{exp.date}</span>
                        </div>

                        <p className="text-gray-300 line-clamp-2 md:line-clamp-3">
                          {exp.desc}
                        </p>
                      </div>

                      <button className="flex-shrink-0 p-2 transition-colors rounded-full hover:bg-gray-700/50">
                        {expandedCard === exp.id ? (
                          <FaChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <FaChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                    </div>

                    {/* Skills Preview */}
                    <div className="mt-6">
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.slice(0, 4).map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-gray-700/50 hover:bg-gray-600/50 rounded-full text-sm font-medium text-gray-300 border border-gray-600/50 transition-all duration-300 hover:scale-105 hover:border-blue-500/50"
                          >
                            {skill}
                          </span>
                        ))}
                        {exp.skills.length > 4 && (
                          <span className="px-3 py-1.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-sm font-medium text-blue-300">
                            +{exp.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {expandedCard === exp.id && (
                    <div className="px-6 pb-6 border-t md:px-8 md:pb-8 border-gray-700/50">
                      {/* Achievements/Responsibilities */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mt-6">
                          <h4 className="flex items-center gap-2 mb-4 text-lg font-semibold text-white">
                            <FaChartLine className="text-green-400" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1.5">•</span>
                                <span className="text-gray-300">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* All Skills */}
                      <div className="mt-8">
                        <h4 className="mb-4 text-lg font-semibold text-white">Technologies & Tools</h4>
                        <div className="flex flex-wrap gap-3">
                          {exp.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 border border-gray-600 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl hover:border-blue-500/50 hover:scale-105"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Projects Reference */}
                      {exp.projects && exp.projects.length > 0 && (
                        <div className="mt-8">
                          <h4 className="mb-4 text-lg font-semibold text-white">Notable Projects</h4>
                          <div className="grid gap-3 md:grid-cols-2">
                            {exp.projects.map((project, idx) => (
                              <div
                                key={idx}
                                className="p-3 transition-colors border rounded-lg bg-gray-800/30 border-gray-700/50 hover:border-blue-500/30"
                              >
                                <div className="font-medium text-white">{project.name}</div>
                                {project.impact && (
                                  <div className="mt-1 text-sm text-green-400">{project.impact}</div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Progress Stats */}
        <div className="pt-12 mt-20 border-t border-gray-700/50">
          <h3 className="mb-8 text-2xl font-bold text-center text-white">
            Career <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Milestones</span>
          </h3>
          <div className="grid max-w-3xl grid-cols-2 gap-6 mx-auto md:grid-cols-4">
            <div className="p-6 text-center transition-all duration-300 border bg-gray-800/30 backdrop-blur-sm rounded-2xl border-gray-700/50 hover:border-blue-500/30">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {experiences.length}
              </div>
              <div className="mt-2 text-gray-300">Roles</div>
            </div>
            <div className="p-6 text-center transition-all duration-300 border bg-gray-800/30 backdrop-blur-sm rounded-2xl border-gray-700/50 hover:border-blue-500/30">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                8+
              </div>
              <div className="mt-2 text-gray-300">Years Experience</div>
            </div>
            <div className="p-6 text-center transition-all duration-300 border bg-gray-800/30 backdrop-blur-sm rounded-2xl border-gray-700/50 hover:border-blue-500/30">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                15+
              </div>
              <div className="mt-2 text-gray-300">Projects</div>
            </div>
            <div className="p-6 text-center transition-all duration-300 border bg-gray-800/30 backdrop-blur-sm rounded-2xl border-gray-700/50 hover:border-blue-500/30">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                2
              </div>
              <div className="mt-2 text-gray-300">ERP Systems</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;