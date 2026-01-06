// // import React, { useState } from "react";
// // import { projects } from "../../constants";

// // const Work = () => {
// //   const [selectedProject, setSelectedProject] = useState(null);

// //   const handleOpenModal = (project) => {
// //     setSelectedProject(project);
// //   };

// //   const handleCloseModal = () => {
// //     setSelectedProject(null);
// //   };

// //   return (
// //     <section
// //       id="work"
// //       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
// //     >
// //       {/* Section Title */}
// //       <div className="mb-16 text-center">
// //         <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
// //         <div className="w-32 h-1 mx-auto mt-4 bg-purple-500"></div>
// //         <p className="mt-4 text-lg font-semibold text-gray-400">
// //           A showcase of the projects I have worked on, highlighting my skills
// //           and experience in various technologies
// //         </p>
// //       </div>

// //       {/* Projects Grid */}
// //       <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
// //         {projects.map((project) => (
// //           <div
// //             key={project.id}
// //             onClick={() => handleOpenModal(project)}
// //             className="overflow-hidden transition-transform duration-300 bg-gray-900 border border-white shadow-2xl cursor-pointer backdrop-blur-md rounded-2xl hover:shadow-purple-500/50 hover:-translate-y-2"
// //           >
// //             <div className="p-4">
// //               <img
// //                 src={project.image}
// //                 alt={project.title}
// //                 className="object-cover w-full h-48 rounded-xl"
// //               />
// //             </div>
// //             <div className="p-6">
// //               <h3 className="mb-2 text-2xl font-bold text-white">
// //                 {project.title}
// //               </h3>
// //               <p className="pt-4 mb-4 text-gray-500 line-clamp-3">
// //                 {project.description}
// //               </p>
// //               <div className="mb-4">
// //                 {project.tags.map((tag, index) => (
// //                   <span
// //                     key={index}
// //                     className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
// //                   >
// //                     {tag}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Modal Container */}
// //       {selectedProject && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90">
// //           <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
// //             <div className="flex justify-end p-4">
// //               <button
// //                 onClick={handleCloseModal}
// //                 className="text-3xl font-bold text-white hover:text-purple-500"
// //               >
// //                 &times;
// //               </button>
// //             </div>

// //             <div className="flex flex-col">
// //               <div className="flex justify-center w-full px-4 bg-gray-900">
// //                 <img
// //                   src={selectedProject.image}
// //                   alt={selectedProject.title}
// //                   className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
// //                 />
// //               </div>
// //               <div className="p-6 lg:p-8">
// //                 <h3 className="mb-4 font-bold text-white lg:text-3xl text-md">
// //                   {selectedProject.title}
// //                 </h3>
// //                 <p className="mb-6 text-xs text-gray-400 lg:text-base">
// //                   {selectedProject.description}
// //                 </p>
// //                 <div className="flex flex-wrap gap-2 mb-6">
// //                   {selectedProject.tags.map((tag, index) => (
// //                     <span
// //                       key={index}
// //                       className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
// //                     >
// //                       {tag}
// //                     </span>
// //                   ))}
// //                 </div>
// //                 <div className="flex gap-4">
// //                   <a
// //                     href={selectedProject.github}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="w-1/2 px-2 py-1 text-sm font-semibold text-center text-gray-400 bg-gray-800 hover:bg-purple-800 lg:px-6 lg:py-2 rounded-xl lg:text-xl"
// //                   >
// //                     View Code
// //                   </a>
// //                   <a
// //                     href={selectedProject.webapp}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="w-1/2 px-2 py-1 text-sm font-semibold text-center text-white bg-purple-600 hover:bg-purple-800 lg:px-6 lg:py-2 rounded-xl lg:text-xl"
// //                   >
// //                     View Live
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </section>
// //   );
// // };

// // export default Work;



// import React, { useState, useEffect } from "react";
// import { projects } from "../../constants";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiGithub, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const Work = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleOpenModal = (project, index) => {
//     setSelectedProject(project);
//     setCurrentIndex(index);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//   };

//   const navigateProjects = (direction) => {
//     let newIndex;
//     if (direction === 'next') {
//       newIndex = (currentIndex + 1) % projects.length;
//     } else {
//       newIndex = (currentIndex - 1 + projects.length) % projects.length;
//     }
//     setSelectedProject(projects[newIndex]);
//     setCurrentIndex(newIndex);
//   };

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!selectedProject) return;

//       if (e.key === 'Escape') {
//         handleCloseModal();
//       } else if (e.key === 'ArrowRight') {
//         navigateProjects('next');
//       } else if (e.key === 'ArrowLeft') {
//         navigateProjects('prev');
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [selectedProject, currentIndex]);

//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     if (selectedProject) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [selectedProject]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.3,
//         ease: "easeOut"
//       }
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.8,
//       transition: {
//         duration: 0.2
//       }
//     }
//   };

//   return (
//     <section
//       id="work"
//       className="relative px-4 py-16 font-sans lg:py-24 sm:px-6 lg:px-8 xl:px-20 bg-gradient-to-br from-gray-900 to-purple-900/20"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute bg-purple-500 rounded-full -top-20 -right-20 w-60 h-60 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//         <div className="absolute delay-1000 bg-indigo-500 rounded-full -bottom-20 -left-20 w-60 h-60 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//       </div>

//       {/* Section Title */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="relative z-10 mb-12 text-center lg:mb-16"
//       >
//         <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
//           PROJECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">PORTFOLIO</span>
//         </h2>
//         <div className="w-24 lg:w-32 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4 rounded-full"></div>
//         <p className="max-w-2xl mx-auto mt-4 text-base font-medium leading-relaxed text-gray-300 lg:mt-6 sm:text-lg">
//           A showcase of innovative projects demonstrating technical expertise and problem-solving capabilities across various domains
//         </p>
//       </motion.div>

//       {/* Projects Grid */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="relative z-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3"
//       >
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             variants={itemVariants}
//             onClick={() => handleOpenModal(project, index)}
//             className="overflow-hidden transition-all duration-500 border cursor-pointer group bg-gray-900/80 backdrop-blur-lg border-gray-700/50 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
//           >
//             {/* Project Image */}
//             <div className="relative overflow-hidden">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="object-cover w-full h-48 transition-transform duration-500 sm:h-56 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:opacity-100"></div>
//               <div className="absolute transition-opacity duration-300 opacity-0 bottom-4 left-4 right-4 group-hover:opacity-100">
//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.slice(0, 3).map((tag, tagIndex) => (
//                     <span
//                       key={tagIndex}
//                       className="px-2 py-1 text-xs font-medium text-white rounded-full bg-purple-600/80 backdrop-blur-sm"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                   {project.tags.length > 3 && (
//                     <span className="px-2 py-1 text-xs font-medium text-gray-300 rounded-full bg-gray-800/80 backdrop-blur-sm">
//                       +{project.tags.length - 3}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Project Content */}
//             <div className="p-4 sm:p-6">
//               <h3 className="mb-2 text-xl font-bold text-white transition-colors line-clamp-1 group-hover:text-purple-300">
//                 {project.title}
//               </h3>
//               <p className="mb-4 text-sm leading-relaxed text-gray-400 line-clamp-2">
//                 {project.description}
//               </p>

//               {/* Action Buttons */}
//               <div className="flex gap-3">
//                 <button className="flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white">
//                   <FiGithub className="w-4 h-4" />
//                   Code
//                 </button>
//                 <button className="flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300">
//                   <FiExternalLink className="w-4 h-4" />
//                   Live Demo
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Project Modal */}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
//             onClick={handleCloseModal}
//           >
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close Button */}
//               <button
//                 onClick={handleCloseModal}
//                 className="absolute z-10 p-2 text-white transition-all duration-300 rounded-full top-4 right-4 bg-gray-800/80 hover:bg-gray-700 hover:scale-110 backdrop-blur-sm"
//               >
//                 <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
//               </button>

//               {/* Navigation Arrows */}
//               <button
//                 onClick={() => navigateProjects('prev')}
//                 className="absolute z-10 p-2 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full left-4 top-1/2 bg-gray-800/80 hover:bg-gray-700 hover:scale-110 backdrop-blur-sm"
//               >
//                 <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
//               </button>
//               <button
//                 onClick={() => navigateProjects('next')}
//                 className="absolute z-10 p-2 text-white transition-all duration-300 transform -translate-y-1/2 rounded-full right-4 top-1/2 bg-gray-800/80 hover:bg-gray-700 hover:scale-110 backdrop-blur-sm"
//               >
//                 <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//               </button>

//               {/* Modal Content */}
//               <div className="flex flex-col h-full lg:flex-row">
//                 {/* Image Section */}
//                 <div className="flex items-center justify-center p-4 bg-gray-800 lg:w-1/2 sm:p-6">
//                   <img
//                     src={selectedProject.image}
//                     alt={selectedProject.title}
//                     className="object-contain w-full h-64 sm:h-80 lg:h-full rounded-xl"
//                   />
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-4 overflow-y-auto lg:w-1/2 sm:p-6 lg:p-8">
//                   <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
//                     {selectedProject.title}
//                   </h3>

//                   <p className="mb-6 text-sm leading-relaxed text-gray-300 sm:text-base">
//                     {selectedProject.description}
//                   </p>

//                   {/* Tags */}
//                   <div className="mb-6">
//                     <h4 className="mb-3 font-semibold text-white">Technologies Used</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {selectedProject.tags.map((tag, index) => (
//                         <span
//                           key={index}
//                           className="bg-purple-600/20 text-purple-300 text-xs font-medium px-3 py-1.5 rounded-full border border-purple-500/30"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Action Buttons */}
//                   <div className="flex flex-col gap-3 sm:flex-row">
//                     <a
//                       href={selectedProject.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-semibold text-center text-gray-300 transition-all duration-300 bg-gray-800 hover:bg-gray-700 rounded-xl hover:scale-105"
//                     >
//                       <FiGithub className="w-5 h-5" />
//                       View Code
//                     </a>
//                     <a
//                       href={selectedProject.webapp}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center justify-center flex-1 gap-2 px-4 py-3 font-semibold text-center text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl hover:scale-105"
//                     >
//                       <FiExternalLink className="w-5 h-5" />
//                       Live Demo
//                     </a>
//                   </div>

//                   {/* Project Counter */}
//                   <div className="mt-6 text-sm text-center text-gray-400">
//                     {currentIndex + 1} of {projects.length} Projects
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Empty State */}
//       {projects.length === 0 && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="py-16 text-center"
//         >
//           <div className="text-lg text-gray-400">No projects to display</div>
//           <div className="mt-2 text-sm text-gray-500">Check back soon for updates!</div>
//         </motion.div>
//       )}
//     </section>
//   );
// };

// export default Work;










import React, { useState, useEffect, useCallback } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiServer,
  FiDatabase,
  FiCode,
  FiGlobe,
  FiBarChart2,
  FiCpu,
  FiCloud,
  FiShield,
  FiZap,
  FiTrendingUp
} from "react-icons/fi";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for premium feel
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = useCallback((project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const navigateProjects = useCallback((direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % projects.length;
    } else {
      newIndex = (currentIndex - 1 + projects.length) % projects.length;
    }
    setSelectedProject(projects[newIndex]);
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  // Get icon for technology
  const getTechIcon = (tag) => {
    const techIcons = {
      'SAP': <FiServer className="w-3 h-3" />,
      'FBR': <FiGlobe className="w-3 h-3" />,
      'ERP': <FiDatabase className="w-3 h-3" />,
      'API': <FiCode className="w-3 h-3" />,
      'Mobile': <FiCpu className="w-3 h-3" />,
      'Cloud': <FiCloud className="w-3 h-3" />,
      'Security': <FiShield className="w-3 h-3" />,
      'Performance': <FiZap className="w-3 h-3" />,
      'Analytics': <FiTrendingUp className="w-3 h-3" />,
      'Integration': <FiDatabase className="w-3 h-3" />,
    };
    return techIcons[tag] || <FiCode className="w-3 h-3" />;
  };

  // Get project metrics
  const getProjectMetrics = (projectId) => {
    const metrics = {
      0: { efficiency: '40%', time: '6 months', team: '8' },
      1: { efficiency: '35%', time: '8 months', team: '6' },
      2: { efficiency: '45%', time: '10 months', team: '10' },
      3: { efficiency: '60%', time: '12 months', team: '12' },
      4: { efficiency: '80%', time: '4 months', team: '4' },
      5: { efficiency: '50%', time: '3 months', team: '3' },
    };
    return metrics[projectId] || { efficiency: '30%', time: '6 months', team: '5' };
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') handleCloseModal();
      else if (e.key === 'ArrowRight') navigateProjects('next');
      else if (e.key === 'ArrowLeft') navigateProjects('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, navigateProjects, handleCloseModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: 30,
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      rotateX: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  };

  // Loading skeleton
  if (isLoading) {
    return (
      <section className="min-h-screen px-4 py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="w-48 h-10 mx-auto mb-4 bg-gray-700 rounded-lg animate-pulse"></div>
            <div className="w-64 h-4 mx-auto mb-6 bg-gray-700 rounded animate-pulse"></div>
            <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="p-4 bg-gray-800/30 rounded-2xl animate-pulse">
                <div className="h-48 mb-4 bg-gray-700 rounded-xl"></div>
                <div className="h-6 mb-3 bg-gray-700 rounded"></div>
                <div className="h-4 mb-2 bg-gray-700 rounded"></div>
                <div className="w-3/4 h-4 bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="work"
      className="relative min-h-screen px-4 py-16 sm:py-24 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute rounded-full top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl animate-pulse"></div>

        {/* Grid pattern with animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e505_1px,transparent_1px),linear-gradient(to_bottom,#4f46e505_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-400/30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Section Header - Premium */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto mb-16 text-center max-w-7xl lg:mb-24"
      >
        {/* Premium Badge */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          className="inline-flex items-center gap-2 px-6 py-3 mb-8 border shadow-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border-blue-500/30 backdrop-blur-xl shadow-blue-500/10"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur animate-pulse"></div>
            <FiServer className="relative w-6 h-6 text-blue-400" />
          </div>
          <span className="text-lg font-semibold text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text">
            ENTERPRISE PORTFOLIO
          </span>
        </motion.div>

        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Strategic</span>
            <span className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Solutions
              </span>
            </span>
          </h2>

          <div className="inline-block w-40 h-1.5 sm:w-56 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full mb-6">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl px-4 mx-auto text-lg leading-relaxed text-gray-300 sm:text-xl"
        >
          Transforming complex business challenges into scalable, high-performance enterprise solutions through innovative technology architecture.
        </motion.p>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid max-w-md grid-cols-3 gap-4 mx-auto mt-10"
        >
          {[
            // { value: projects.length, label: 'Projects' },
            { value: '8+', label: 'Years Exp' },
            { value: '98%', label: 'Success Rate' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-1 text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
              <div className="text-xs tracking-wider text-gray-400 uppercase sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Premium Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              onClick={() => handleOpenModal(project, index)}
              className="cursor-pointer group"
            >
              {/* Premium Card */}
              <div className="relative overflow-hidden transition-all duration-500 border shadow-2xl rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border-gray-700/30 shadow-black/20 hover:shadow-blue-500/10 hover:border-blue-500/50">
                {/* Glow effect */}
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:opacity-100"></div>

                {/* Image Container */}
                <div className="relative overflow-hidden h-52 sm:h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent group-hover:opacity-100"></div>

                  {/* Tech Tags Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50 group-hover:border-blue-500/30 transition-colors"
                        >
                          {getTechIcon(tag)}
                          <span>{tag.length > 10 ? tag.substring(0, 10) + '...' : tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Button */}
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      VIEW
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white transition-colors sm:text-xl line-clamp-1 group-hover:text-blue-300">
                      {project.title}
                    </h3>
                    <FiExternalLink className="w-4 h-4 text-gray-500 transition-all transform translate-x-0 group-hover:text-blue-400 group-hover:translate-x-1" />
                  </div>

                  <p className="mb-4 text-sm text-gray-400 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Project Metrics */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <FiBarChart2 className="w-3 h-3" />
                      <span>{getProjectMetrics(project.id).efficiency} efficiency</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiZap className="w-3 h-3" />
                      <span>{getProjectMetrics(project.id).time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Premium Modal */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
            onClick={handleCloseModal}
          >
            {/* Backdrop Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>

            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl shadow-blue-500/10 border border-gray-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Premium */}
              <button
                onClick={handleCloseModal}
                className="absolute z-20 p-3 text-white transition-all duration-300 border rounded-full top-6 right-6 bg-gray-800/80 backdrop-blur-xl border-gray-700/50 hover:bg-gray-700 hover:scale-110 hover:border-blue-500/50 group"
              >
                <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
                <div className="absolute text-xs text-gray-400 transition-opacity transform -translate-x-1/2 opacity-0 -bottom-8 left-1/2 group-hover:opacity-100 whitespace-nowrap">
                  ESC
                </div>
              </button>

              {/* Navigation Arrows - Premium */}
              {projects.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateProjects('prev');
                    }}
                    className="absolute z-20 hidden p-3 text-white transition-all duration-300 -translate-y-1/2 border rounded-full left-6 top-1/2 bg-gray-800/80 backdrop-blur-xl border-gray-700/50 hover:bg-gray-700 hover:scale-110 hover:border-blue-500/50 sm:block"
                  >
                    <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateProjects('next');
                    }}
                    className="absolute z-20 hidden p-3 text-white transition-all duration-300 -translate-y-1/2 border rounded-full right-6 top-1/2 bg-gray-800/80 backdrop-blur-xl border-gray-700/50 hover:bg-gray-700 hover:scale-110 hover:border-blue-500/50 sm:block"
                  >
                    <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </>
              )}

              <div className="flex flex-col h-full lg:flex-row">
                {/* Left Panel - Premium Image */}
                <div className="relative p-6 lg:w-2/5 sm:p-8 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>

                  <div className="relative h-64 overflow-hidden border shadow-2xl sm:h-72 lg:h-full rounded-2xl border-gray-700/50">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="object-cover w-full h-full"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

                    {/* Mobile Navigation */}
                    {projects.length > 1 && (
                      <div className="absolute flex justify-between bottom-4 left-4 right-4 sm:hidden">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigateProjects('prev');
                          }}
                          className="p-2 text-white border rounded-full bg-gray-900/80 backdrop-blur-sm border-gray-700/50"
                        >
                          <FiChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigateProjects('next');
                          }}
                          className="p-2 text-white border rounded-full bg-gray-900/80 backdrop-blur-sm border-gray-700/50"
                        >
                          <FiChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6">
                    <h4 className="mb-3 text-sm font-semibold text-gray-400">TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.slice(0, 5).map((tag, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-300 bg-gray-800/50 rounded-xl border border-gray-700/50"
                        >
                          {getTechIcon(tag)}
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Panel - Premium Content */}
                <div className="p-6 overflow-y-auto lg:w-3/5 sm:p-8">
                  {/* Project Header */}
                  <div className="mb-6">
                    <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                      {selectedProject.title}
                    </h3>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(getProjectMetrics(selectedProject.id)).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-blue-400">{value}</div>
                          <div className="mt-1 text-xs tracking-wider text-gray-400 uppercase">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p className="leading-relaxed text-gray-300">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="mb-4 text-lg font-semibold text-white">Key Achievements</h4>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {[
                        "Enterprise-grade architecture",
                        "Real-time data integration",
                        "Scalable cloud infrastructure",
                        "Enhanced security protocols",
                        "Performance optimization",
                        "Cross-platform compatibility"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 border bg-gray-800/30 rounded-xl border-gray-700/30">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <a
                      href={selectedProject.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 font-semibold text-center text-gray-300 transition-all duration-300 border bg-gray-800/50 rounded-xl border-gray-700/50 hover:bg-gray-700/50 hover:border-blue-500/30 hover:text-white"
                    >
                      View Case Study
                    </a>
                    <a
                      href={selectedProject.liveDemo || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 font-semibold text-center text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      Request Technical Demo
                    </a>
                  </div>

                  {/* Project Counter */}
                  <div className="pt-6 mt-8 border-t border-gray-700/50">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                      <div className="flex items-center gap-4">
                        <div className="text-sm text-gray-400">
                          Project <span className="font-semibold text-white">{currentIndex + 1}</span> of <span className="font-semibold text-white">{projects.length}</span>
                        </div>
                        <div className="flex gap-1">
                          {projects.map((_, idx) => (
                            <div
                              key={idx}
                              className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-blue-500' : 'bg-gray-700'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        Enterprise Solution • Business Impact Focused
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Work;









