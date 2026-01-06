// // src/components/Skills/Skills.jsx
// import React, { useState, useRef, useEffect } from "react";
// import { SkillsInfo } from "../../constants";
// import Tilt from "react-parallax-tilt";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import {
//   FiChevronLeft,
//   FiChevronRight,
//   FiStar,
//   FiAward,
//   FiTrendingUp,
//   FiCode,
//   FiCpu,
//   FiDatabase,
//   FiUsers,
//   FiLayers,
//   FiShield,
//   FiTarget,
//   FiPieChart,
//   FiSmartphone,
//   FiGlobe,
//   FiServer,
//   FiBox,
//   FiGitBranch,
//   FiTool
// } from "react-icons/fi";

// // Fixed skill levels configuration (removed duplicate)
// const skillLevels = {
//   // Enterprise Systems
//   'SAP S/4HANA': 92,
//   'Microsoft Dynamics AX': 88,
//   'ERP Implementation': 85,
//   'System Integration': 90,
//   'Data Warehouse': 87,

//   // Leadership & Management
//   'Team Leadership': 95,
//   'Project Management': 92,
//   'Stakeholder Management': 90,
//   'Strategic Planning': 88,
//   'Cross-functional Teams': 85,

//   // Development Frameworks
//   '.NET Core': 90,
//   'ASP.NET MVC': 88,
//   'Angular': 85,
//   'React.js': 82,
//   'Node.js': 80,

//   // Mobile Development
//   'Android Native': 85,
//   'Kotlin': 82,
//   'REST API Integration': 90,
//   'UI/UX Implementation': 80,

//   // Database & Data Management
//   'Microsoft SQL Server': 88,
//   'MySQL': 85,
//   'PostgreSQL': 80,
//   'Sybase': 75,

//   // Programming Languages
//   'C#': 90,
//   'JavaScript': 88,
//   'TypeScript': 85,
//   'Python': 75,

//   // Tools & Technologies
//   'Git': 92,
//   'Postman': 88,
//   'Power BI': 80,
//   'Visual Studio': 90,
//   'Figma': 70,
// };

// // Icon mapping for skills
// const skillIcons = {
//   // Enterprise Systems
//   'SAP S/4HANA': FiLayers,
//   'Microsoft Dynamics AX': FiServer,
//   'ERP Implementation': FiBox,
//   'System Integration': FiGitBranch,
//   'Data Warehouse': FiDatabase,

//   // Leadership & Management
//   'Team Leadership': FiUsers,
//   'Project Management': FiTarget,
//   'Stakeholder Management': FiUsers,
//   'Strategic Planning': FiTarget,
//   'Cross-functional Teams': FiUsers,

//   // Development Frameworks
//   '.NET Core': FiCode,
//   'ASP.NET MVC': FiGlobe,
//   'Angular': FiCode,
//   'React.js': FiCode,
//   'Node.js': FiServer,

//   // Mobile Development
//   'Android Native': FiSmartphone,
//   'Kotlin': FiCode,
//   'REST API Integration': FiServer,
//   'UI/UX Implementation': FiTool,

//   // Database & Data Management
//   'Microsoft SQL Server': FiDatabase,
//   'MySQL': FiDatabase,
//   'PostgreSQL': FiDatabase,
//   'Sybase': FiDatabase,

//   // Programming Languages
//   'C#': FiCode,
//   'JavaScript': FiCode,
//   'TypeScript': FiCode,
//   'Python': FiCode,

//   // Tools & Technologies
//   'Git': FiGitBranch,
//   'Postman': FiTool,
//   'Power BI': FiPieChart,
//   'Visual Studio': FiCode,
//   'Figma': FiTool,
// };

// // 3D Floating Icons Data with React Icons
// const floatingIcons = [
//   { icon: FiCode, size: "w-16 h-16", position: "top-10 left-5", animation: "animate-float-slow" },
//   { icon: FiSmartphone, size: "w-12 h-12", position: "top-20 right-8", animation: "animate-float-medium" },
//   { icon: FiGlobe, size: "w-14 h-14", position: "bottom-20 left-8", animation: "animate-float-fast" },
//   { icon: FiServer, size: "w-10 h-10", position: "bottom-10 right-10", animation: "animate-float-slow" },
//   { icon: FiTool, size: "w-12 h-12", position: "top-1/3 left-10", animation: "animate-float-medium" },
//   { icon: FiDatabase, size: "w-8 h-8", position: "bottom-1/3 right-12", animation: "animate-float-fast" },
// ];

// const Skills = () => {
//   const [activeCategory, setActiveCategory] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

//   // Check mobile on mount and resize
//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 1024);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const getProficiencyColor = (level) => {
//     if (level >= 90) return "from-emerald-400 to-green-500";
//     if (level >= 80) return "from-blue-400 to-cyan-500";
//     if (level >= 70) return "from-purple-400 to-indigo-500";
//     return "from-amber-400 to-orange-500";
//   };

//   const getProficiencyText = (level) => {
//     if (level >= 90) return "Expert";
//     if (level >= 80) return "Advanced";
//     if (level >= 70) return "Proficient";
//     return "Intermediate";
//   };

//   const nextCategory = () => {
//     setActiveCategory((prev) => (prev + 1) % SkillsInfo.length);
//   };

//   const prevCategory = () => {
//     setActiveCategory((prev) => (prev - 1 + SkillsInfo.length) % SkillsInfo.length);
//   };

//   // Auto-rotate categories
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       nextCategory();
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, SkillsInfo.length]);

//   // Get icon for skill
//   const getSkillIcon = (skillName) => {
//     const IconComponent = skillIcons[skillName] || FiCode;
//     return <IconComponent className="w-4 h-4 lg:w-5 lg:h-5" />;
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="skills"
//       className="relative min-h-screen px-4 py-8 overflow-hidden font-sans lg:px-8 lg:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
//     >
//       {/* 3D Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Floating React Icons */}
//         {floatingIcons.map((item, index) => {
//           const IconComponent = item.icon;
//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 0.1, scale: 1 }}
//               transition={{ duration: 1, delay: index * 0.2 }}
//               className={`absolute ${item.position} ${item.size} ${item.animation} text-white/10 pointer-events-none`}
//             >
//               <IconComponent className="w-full h-full" />
//             </motion.div>
//           );
//         })}

//         {/* Animated Gradient Orbs */}
//         <div className="absolute bg-blue-500 rounded-full w-72 h-72 -top-36 -right-36 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//         <div className="absolute delay-1000 bg-purple-500 rounded-full w-72 h-72 -bottom-36 -left-36 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//         <div className="absolute delay-500 -translate-x-1/2 -translate-y-1/2 rounded-full w-96 h-96 bg-cyan-500 top-1/2 left-1/2 mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

//         {/* Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 mx-auto max-w-7xl">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8 }}
//           className="mb-8 text-center lg:mb-12"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={isInView ? { scale: 1 } : { scale: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="inline-flex items-center gap-2 px-4 py-2 mb-4 border rounded-full bg-white/5 border-white/10 backdrop-blur-sm"
//           >
//             <FiTrendingUp className="w-4 h-4 text-cyan-400" />
//             <span className="text-sm font-medium text-cyan-400">TECHNICAL MASTERY</span>
//           </motion.div>

//           <h2 className="mb-3 text-3xl font-bold lg:text-5xl lg:mb-6">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
//               Skills & Expertise
//             </span>
//           </h2>

//           <p className="max-w-2xl px-4 mx-auto text-base text-gray-300 lg:text-lg">
//             Strategic leadership combined with deep technical proficiency
//           </p>
//         </motion.div>

//         {/* Executive Stats - Mobile Optimized */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="grid grid-cols-2 gap-3 mb-8 lg:grid-cols-4 lg:gap-6 lg:mb-12"
//         >
//           {[
//             { value: "8+", label: "Years Exp", icon: FiAward, color: "from-blue-500 to-cyan-500" },
//             { value: "50+", label: "Projects", icon: FiCode, color: "from-purple-500 to-pink-500" },
//             { value: "$15M+", label: "Budget", icon: FiTrendingUp, color: "from-green-500 to-emerald-500" },
//             { value: "12+", label: "Team Size", icon: FiUsers, color: "from-orange-500 to-red-500" },
//           ].map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
//               className="p-3 text-center transition-all duration-300 border rounded-2xl bg-white/5 backdrop-blur-lg border-white/10 hover:border-cyan-500/30 lg:p-4"
//             >
//               <div className={`inline-flex items-center justify-center w-8 h-8 mb-2 rounded-full bg-gradient-to-r ${stat.color} lg:w-10 lg:h-10`}>
//                 <stat.icon className="w-4 h-4 text-white lg:w-5 lg:h-5" />
//               </div>
//               <div className="text-xl font-bold text-white lg:text-2xl">{stat.value}</div>
//               <div className="text-xs text-gray-400 lg:text-sm">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Mobile Category Navigation */}
//         {isMobile && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="mb-6"
//           >
//             <div className="flex gap-2 px-1 pb-2 overflow-x-auto scrollbar-hide">
//               {SkillsInfo.map((category, index) => (
//                 <button
//                   key={category.title}
//                   onClick={() => {
//                     setActiveCategory(index);
//                     setIsAutoPlaying(false);
//                     setTimeout(() => setIsAutoPlaying(true), 5000);
//                   }}
//                   className={`flex-shrink-0 px-4 py-3 rounded-xl font-semibold transition-all duration-300 border backdrop-blur-sm whitespace-nowrap ${activeCategory === index
//                     ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 border-transparent"
//                     : "bg-white/5 text-gray-300 border-white/10 hover:border-cyan-500/30 hover:text-white"
//                     }`}
//                 >
//                   {category.title.split(' ')[0]}
//                 </button>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* Desktop Category Navigation */}
//         {!isMobile && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="mb-8"
//           >
//             <div className="flex flex-wrap justify-center gap-3">
//               {SkillsInfo.map((category, index) => (
//                 <motion.button
//                   key={category.title}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => {
//                     setActiveCategory(index);
//                     setIsAutoPlaying(false);
//                     setTimeout(() => setIsAutoPlaying(true), 5000);
//                   }}
//                   className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 border backdrop-blur-sm ${activeCategory === index
//                     ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 border-transparent"
//                     : "bg-white/5 text-gray-300 border-white/10 hover:border-cyan-500/30 hover:text-white"
//                     }`}
//                 >
//                   {category.title}
//                 </motion.button>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {/* Skills Display */}
//         <div className="relative">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeCategory}
//               initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: isMobile ? 0 : -50 }}
//               transition={{ duration: 0.4 }}
//               className={`gap-6 ${isMobile ? 'space-y-6' : 'grid lg:grid-cols-2'}`}
//             >
//               {/* Skills Progress */}
//               <Tilt
//                 tiltMaxAngleX={isMobile ? 3 : 5}
//                 tiltMaxAngleY={isMobile ? 3 : 5}
//                 perspective={1000}
//                 scale={1.02}
//                 transitionSpeed={1500}
//                 className="p-5 border rounded-2xl bg-white/5 backdrop-blur-lg border-white/10 lg:p-6"
//               >
//                 <h3 className="mb-4 text-xl font-bold text-white lg:text-2xl lg:mb-6">
//                   {SkillsInfo[activeCategory].title}
//                 </h3>

//                 <div className="space-y-3 lg:space-y-4">
//                   {SkillsInfo[activeCategory].skills.map((skill, index) => (
//                     <motion.div
//                       key={skill.name}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.4, delay: index * 0.1 }}
//                       className="p-3 transition-all duration-300 border group rounded-xl bg-white/5 border-white/5 hover:border-cyan-500/20 lg:p-4"
//                     >
//                       <div className="flex items-center justify-between mb-2">
//                         <div className="flex items-center gap-3">
//                           <div className="relative flex items-center justify-center w-8 h-8 transition-transform duration-300 rounded-lg bg-white/5 group-hover:scale-110 lg:w-10 lg:h-10">
//                             {getSkillIcon(skill.name)}
//                             <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/20 to-transparent"></div>
//                           </div>
//                           <span className="text-sm font-semibold text-white lg:text-base">{skill.name}</span>
//                         </div>
//                         <div className="text-right">
//                           <div className="text-sm font-bold text-cyan-400 lg:text-base">
//                             {skillLevels[skill.name]}%
//                           </div>
//                           <div className="text-xs text-gray-400">
//                             {getProficiencyText(skillLevels[skill.name])}
//                           </div>
//                         </div>
//                       </div>

//                       <div className="w-full h-2 overflow-hidden rounded-full bg-white/10">
//                         <motion.div
//                           initial={{ width: 0 }}
//                           animate={{ width: `${skillLevels[skill.name]}%` }}
//                           transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
//                           className={`h-full bg-gradient-to-r ${getProficiencyColor(skillLevels[skill.name])} rounded-full shadow-lg`}
//                         />
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </Tilt>

//               {/* Expertise Highlights */}
//               <Tilt
//                 tiltMaxAngleX={isMobile ? 3 : 5}
//                 tiltMaxAngleY={isMobile ? 3 : 5}
//                 perspective={1000}
//                 scale={1.02}
//                 transitionSpeed={1500}
//                 className="p-5 border rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-lg border-cyan-500/20 lg:p-6"
//               >
//                 <h3 className="mb-4 text-xl font-bold text-white lg:text-2xl lg:mb-6">
//                   Expertise Highlights
//                 </h3>

//                 <div className="space-y-3 lg:space-y-4">
//                   {SkillsInfo[activeCategory].skills.slice(0, 3).map((skill, index) => (
//                     <motion.div
//                       key={skill.name}
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
//                       className="p-3 transition-all duration-300 border rounded-xl bg-white/5 border-white/10 hover:border-cyan-500/30 lg:p-4"
//                     >
//                       <div className="flex items-center justify-between mb-2">
//                         <div className="flex items-center gap-3">
//                           <div className="p-2 rounded-lg bg-white/10">
//                             {getSkillIcon(skill.name)}
//                           </div>
//                           <span className="text-sm font-bold text-white lg:text-base">{skill.name}</span>
//                         </div>
//                         <div className="px-2 py-1 text-xs font-bold rounded-full bg-cyan-500/20 text-cyan-400">
//                           TOP SKILL
//                         </div>
//                       </div>

//                       <p className="mb-2 text-xs text-gray-300 lg:text-sm">
//                         {skillLevels[skill.name] >= 90 && "Expert-level proficiency with extensive project experience"}
//                         {skillLevels[skill.name] >= 80 && skillLevels[skill.name] < 90 && "Advanced skills with successful implementations"}
//                         {skillLevels[skill.name] >= 70 && skillLevels[skill.name] < 80 && "Proficient with hands-on project experience"}
//                       </p>

//                       <div className="flex items-center gap-2">
//                         <div className="flex gap-0.5">
//                           {[...Array(5)].map((_, i) => (
//                             <FiStar
//                               key={i}
//                               className={`w-3 h-3 ${i < Math.floor(skillLevels[skill.name] / 20)
//                                 ? "text-yellow-400 fill-yellow-400"
//                                 : "text-gray-600"
//                                 }`}
//                             />
//                           ))}
//                         </div>
//                         <span className="text-xs text-gray-400">
//                           Level {Math.floor(skillLevels[skill.name] / 20) + 1}/5
//                         </span>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Category Summary */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: 0.6 }}
//                   className="p-3 mt-4 border rounded-xl bg-white/5 border-white/10 lg:p-4 lg:mt-6"
//                 >
//                   <h4 className="mb-2 text-sm font-semibold text-white lg:text-base">Category Strength</h4>
//                   <div className="flex items-center justify-between">
//                     <div className="text-xl font-bold text-cyan-400 lg:text-2xl">
//                       {Math.round(
//                         SkillsInfo[activeCategory].skills.reduce((acc, skill) => acc + skillLevels[skill.name], 0) /
//                         SkillsInfo[activeCategory].skills.length
//                       )}%
//                     </div>
//                     <div className="text-xs text-gray-400 lg:text-sm">
//                       Average Proficiency
//                     </div>
//                   </div>
//                 </motion.div>
//               </Tilt>
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Navigation Controls */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="flex justify-center gap-4 mt-6 lg:mt-8"
//         >
//           <button
//             onClick={prevCategory}
//             className="p-3 text-white transition-all duration-300 border rounded-full bg-white/5 border-white/10 hover:bg-cyan-500/20 hover:border-cyan-500/30"
//           >
//             <FiChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
//           </button>

//           <div className="flex items-center gap-2">
//             {SkillsInfo.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveCategory(index)}
//                 className={`transition-all duration-300 ${activeCategory === index
//                   ? "w-6 h-2 bg-cyan-400 rounded-full"
//                   : "w-2 h-2 bg-white/30 rounded-full hover:bg-white/50"
//                   }`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={nextCategory}
//             className="p-3 text-white transition-all duration-300 border rounded-full bg-white/5 border-white/10 hover:bg-cyan-500/20 hover:border-cyan-500/30"
//           >
//             <FiChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
//           </button>
//         </motion.div>
//       </div>

//       {/* Add custom animations to CSS */}
//       <style jsx>{`
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
//         @keyframes float-medium {
//           0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
//           33% { transform: translateX(10px) translateY(-15px) rotate(120deg); }
//           66% { transform: translateX(-5px) translateY(10px) rotate(240deg); }
//         }
//         @keyframes float-fast {
//           0%, 100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
//           25% { transform: translate(15px, -10px) scale(1.1) rotate(90deg); }
//           50% { transform: translate(5px, 15px) scale(0.9) rotate(180deg); }
//           75% { transform: translate(-10px, 5px) scale(1.05) rotate(270deg); }
//         }
//         .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
//         .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
//         .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
//       `}</style>
//     </section>
//   );
// };

// export default Skills;