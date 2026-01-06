// import React from "react";
// import { education } from "../../constants"; // Import the education data

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
//     >
//       {/* Section Title */}
//       <div className="mb-16 text-center">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-32 h-1 mx-auto mt-4 bg-purple-500"></div>
//         <p className="mt-4 text-lg font-semibold text-gray-400">
//           My education has been a journey of learning and development. Here are the details of my academic background
//         </p>
//       </div>

//       {/* Education Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute left-0 w-1 h-full transform -translate-x-1/2 bg-white sm:left-1/2 sm:-translate-x-0"></div>

//         {/* Education Entries */}
//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={edu.img}
//                 alt={edu.school}
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
//                 {/* School Logo/Image */}
//                 <div className="w-24 h-16 overflow-hidden bg-white rounded-md">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>

//                 {/* Degree, School Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl font-semibold text-white sm:text-xl">
//                       {edu.degree}
//                     </h3>
//                     <h4 className="text-gray-300 text-md sm:text-sm">
//                       {edu.school}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="mt-2 text-sm text-gray-500">{edu.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 font-bold text-gray-400">Grade: {edu.grade}</p>
//               <p className="mt-4 text-gray-400">{edu.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;


import React from "react";
import { education } from "../../constants";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="relative px-4 py-20 overflow-hidden font-sans md:py-28 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bg-purple-500 rounded-full -top-40 -right-40 w-80 h-80 mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bg-blue-500 rounded-full -bottom-40 -left-40 w-80 h-80 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center md:mb-20">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-500">
            <FaGraduationCap className="w-8 h-8 text-white" />
          </div>
          <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Education Journey
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-300 md:text-xl">
            My academic path where theory meets practice, shaping my problem-solving approach
          </p>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-transparent hidden md:block"></div>

          {/* Animated dots on timeline */}
          <div className="absolute hidden w-2 h-2 transform -translate-x-1/2 bg-blue-400 rounded-full left-1/2 animate-ping md:block"></div>

          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative mb-12 md:mb-16 group ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}
            >
              {/* Timeline Node */}
              <div className="absolute z-20 items-center justify-center hidden w-6 h-6 transform -translate-x-1/2 border-4 border-gray-900 rounded-full left-1/2 bg-gradient-to-r from-purple-600 to-blue-500 md:flex">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Education Card */}
              <div
                className={`relative md:max-w-[45%] ml-0 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
              >
                {/* Year Badge */}
                <div className={`absolute top-0 ${index % 2 === 0 ? "md:right-0 md:left-auto left-0" : "md:left-0 md:right-auto right-0"
                  } transform md:translate-x-0 -translate-y-1/2 z-10`}>
                  <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-blue-600">
                    <FaCalendarAlt className="mr-2" />
                    {edu.date}
                  </span>
                </div>

                {/* Main Card */}
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 shadow-2xl overflow-hidden group-hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02]">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 group-hover:opacity-100"></div>

                  {/* Top Section */}
                  <div className="relative z-10 flex items-start gap-6 mb-6">
                    {/* Logo Container */}
                    <div className="flex-shrink-0 w-20 h-20 p-3 border border-gray-700 shadow-lg rounded-xl bg-gradient-to-br from-gray-900 to-gray-800">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    {/* School Info */}
                    <div className="flex-grow">
                      <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 mb-1 text-blue-300">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span className="text-lg font-semibold">{edu.school}</span>
                      </div>

                      {/* Grade Badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 mt-3 border rounded-full bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/30">
                        <FaAward className="text-yellow-400" />
                        <span className="font-bold text-white">Grade: {edu.grade}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative z-10">
                    <p className="py-2 pl-4 text-base leading-relaxed text-gray-300 border-l-4 md:text-lg border-purple-500/50">
                      {edu.desc}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full bg-gradient-to-bl from-purple-500/10 to-transparent"></div>
                </div>

                {/* Connection Line for Mobile */}
                <div className="absolute top-6 -left-6 w-6 h-0.5 bg-gradient-to-r from-purple-500 to-transparent md:hidden"></div>
              </div>

              {/* Floating Animation for Alternating Cards */}
              <style jsx>{`
                .group:nth-child(odd) .relative {
                  animation: float 6s ease-in-out infinite;
                }
                .group:nth-child(even) .relative {
                  animation: float 6s ease-in-out infinite 1s;
                }
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                }
              `}</style>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-20 md:grid-cols-3">
          <div className="p-6 text-center transition-all duration-300 border bg-gray-800/30 backdrop-blur-sm rounded-xl border-gray-700/50 hover:border-purple-500/30">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              {education.length}
            </div>
            <div className="mt-2 text-gray-300">Academic Milestones</div>
          </div>
          <div className="p-6 text-center transition-all duration-300 border bg-gray-800/30 backdrop-blur-sm rounded-xl border-gray-700/50 hover:border-purple-500/30">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              100%
            </div>
            <div className="mt-2 text-gray-300">Learning Commitment</div>
          </div>
          <div className="p-6 text-center transition-all duration-300 border bg-gray-800/30 backdrop-blur-sm rounded-xl border-gray-700/50 hover:border-purple-500/30">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              ∞
            </div>
            <div className="mt-2 text-gray-300">Growth Potential</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;