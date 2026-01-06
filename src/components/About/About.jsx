// import React, { useState, useEffect } from 'react';
// import ReactTypingEffect from 'react-typing-effect';
// import Tilt from 'react-parallax-tilt';
// import { motion, useInView, useAnimation } from 'framer-motion';
// import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
// // import profileImage from '../../assets/profile2.png';
// import profileImage from '../../assets/waqar_bhi_profile.png';

// const About = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const sectionRef = React.useRef(null);
//   const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
//   const controls = useAnimation();

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   useEffect(() => {
//     if (isInView) {
//       controls.start('visible');
//     }
//   }, [isInView, controls]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 50, opacity: 0, scale: 0.9 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };

//   const imageVariants = {
//     hidden: { scale: 0.5, opacity: 0, rotate: -180 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       rotate: 0,
//       transition: {
//         duration: 1,
//         ease: "easeOut",
//         type: "spring",
//         stiffness: 80
//       }
//     }
//   };

//   const floatingVariants = {
//     float: {
//       y: [0, -15, 0],
//       rotate: [0, 5, 0],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const glowPulse = {
//     pulse: {
//       boxShadow: [
//         '0 0 20px rgba(130, 69, 236, 0.5)',
//         '0 0 40px rgba(130, 69, 236, 0.8)',
//         '0 0 20px rgba(130, 69, 236, 0.5)'
//       ],
//       transition: {
//         duration: 2,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="about"
//       className="relative min-h-screen px-4 py-12 overflow-hidden font-sans sm:px-6 lg:px-8 xl:px-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900"
//     >
//       {/* Enhanced Background Elements with Parallax-like Animation */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.3 }}
//         transition={{ duration: 2 }}
//         className="absolute inset-0 overflow-hidden"
//       >
//         <motion.div
//           animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute w-64 h-64 bg-purple-600 rounded-full -top-20 -left-20 mix-blend-multiply filter blur-3xl opacity-30"
//         ></motion.div>
//         <motion.div
//           animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//           className="absolute w-64 h-64 bg-pink-600 rounded-full -bottom-20 -right-20 mix-blend-multiply filter blur-3xl opacity-30"
//         ></motion.div>
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//           className="absolute w-48 h-48 bg-blue-600 rounded-full top-1/3 left-1/3 mix-blend-multiply filter blur-3xl opacity-20"
//         ></motion.div>
//       </motion.div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate={controls}
//         className="relative z-10 flex flex-col items-center justify-between mx-auto max-w-7xl lg:flex-row lg:items-center"
//       >
//         {/* Left Content */}
//         <motion.div
//           variants={itemVariants}
//           className="w-full text-center lg:w-1/2 lg:text-left lg:pr-8 xl:pr-12"
//         >
//           {/* Greeting with Bounce */}
//           <motion.h1
//             variants={itemVariants}
//             whileHover={{ scale: 1.05 }}
//             className="mb-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:mb-3"
//           >
//             Hi, I'm
//           </motion.h1>

//           {/* Name with Enhanced Gradient and Hover Effect */}
//           <motion.h2
//             variants={itemVariants}
//             whileHover={{
//               scale: 1.05,
//               textShadow: '0 0 20px rgba(168, 85, 247, 0.8)'
//             }}
//             className="mb-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl lg:mb-4"
//           >
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
//               Abdul Waqar
//             </span>
//           </motion.h2>

//           {/* Typing Effect with More Options */}
//           <motion.div
//             variants={itemVariants}
//             className="mb-4 text-lg font-semibold sm:text-xl md:text-2xl lg:mb-6"
//           >
//             <span className="text-gray-300">I'm a </span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
//               <ReactTypingEffect
//                 text={[
//                   // 'Fullstack Developer',
//                   // 'Web App Developer',
//                   // 'Problem Solver',
//                   // 'Tech Enthusiast',
//                   // 'Innovator',
//                   // 'Code Ninja',

//                   'Application Development Manager',
//                   'Software Architect',
//                   'Team Leader',
//                   'Enterprise Solutions Expert',
//                   'Integration Specialist',
//                   'ERP Consultant',
//                   'JavaScript Guru',
//                   'Tech Strategist'

//                 ]}
//                 speed={80}
//                 eraseSpeed={40}
//                 typingDelay={300}
//                 eraseDelay={1500}
//                 cursorRenderer={(cursor) => (
//                   <motion.span
//                     animate={{ opacity: [1, 0, 1] }}
//                     transition={{ duration: 0.8, repeat: Infinity }}
//                     className="text-purple-400"
//                   >
//                     {cursor}
//                   </motion.span>
//                 )}
//               />
//             </span>
//           </motion.div>

//           {/* About Text with Read More? (Clichable expandable) */}
//           <motion.p
//             variants={itemVariants}
//             className="mb-6 text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg lg:mb-8 lg:max-w-2xl"
//           >
//             I’m Abdul Waqar, an Application Development Manager at InfoTech Solutions with over 8 years of experience in software design, development, and enterprise integration. I specialize in building scalable web and ERP solutions, leading cross-functional teams, and aligning technology with business goals. My work focuses on creating reliable, efficient, and data-driven systems that enhance organizational performance.
//           </motion.p>

//           {/* Stats with Count-up Animation Feel */}
//           {/* <motion.div
//             variants={itemVariants}
//             className="grid grid-cols-3 gap-4 mb-6 sm:gap-6 lg:mb-8"
//           >
//             {[
//               { num: '10+', label: 'Years Experience' },
//               { num: '50+', label: 'Projects Completed' },
//               { num: '40+', label: 'Happy Clients' }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 className="text-center lg:text-left"
//               >
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: index * 0.2, type: "spring" }}
//                   className="text-xl font-bold text-white sm:text-2xl"
//                 >
//                   {stat.num}
//                 </motion.div>
//                 <div className="text-xs text-gray-400 sm:text-sm">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div> */}

//           {/* Action Buttons with More Polish */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:gap-6"
//           >
//             {/* Download CV with Pulse */}
//             <motion.a
//               href="https://drive.google.com/file/d/1L0Z9bGk2fCWlcDOpE2T-ikIECCdNQgiu/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               animate={glowPulse.pulse}
//               className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 transform rounded-full sm:text-base hover:shadow-2xl"
//               style={{
//                 background: 'linear-gradient(135deg, #8245ec, #a855f7, #ec4899)',
//               }}
//             >
//               <FiDownload className="w-4 h-4 sm:w-5 sm:h-5" />
//               DOWNLOAD CV
//             </motion.a>

//             {/* Social Links with Tooltip-like Hover */}
//             <div className="flex justify-center gap-3 sm:gap-4 lg:justify-start">
//               {[
//                 // { icon: FiGithub, href: 'https://github.com/mansoor-farooq', color: 'hover:border-purple-500 hover:bg-purple-500/20' },
//                 { icon: FiLinkedin, href: 'https://linkedin.com/in/abdulwaqar', color: 'hover:border-blue-500 hover:bg-blue-500/20' },
//                 {
//                   icon: FiMail,
//                   href: 'https://mail.google.com/mail/?view=cm&fs=1&to=aw.abdulwaqar@gmail.com',
//                   className: 'hover:text-red-500 hover:bg-red-500/20 hover:border-red-500'
//                 }
//               ].map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.2, rotate: 360 }}
//                   transition={{ duration: 0.5 }}
//                   className={`p-2 text-gray-400 transition-all duration-300 border border-gray-600 rounded-full ${social.color}`}
//                 >
//                   <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Right Side - Profile Image with More Enhancements */}
//         <motion.div
//           variants={imageVariants}
//           className="relative w-full mt-8 lg:w-1/2 lg:mt-0 lg:flex lg:justify-end"
//         >
//           <div className="flex justify-center lg:justify-end">
//             <Tilt
//               tiltMaxAngleX={isMobile ? 10 : 25}
//               tiltMaxAngleY={isMobile ? 10 : 25}
//               perspective={800}
//               scale={1.1}
//               transitionSpeed={2000}
//               gyroscope={true}
//               className="relative"
//             >
//               {/* Main Image Container */}
//               <motion.div variants={floatingVariants} animate="float" className="relative">
//                 {/* Enhanced Background Glow */}
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                   className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-2xl opacity-40"
//                 ></motion.div>

//                 {/* Image with Border and Shadow */}
//                 <div className="relative p-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-pulse">
//                   <img
//                     src={profileImage}
//                     alt="Abdul Waqar"
//                     className="object-cover w-48 h-48 transition-transform duration-500 border-4 border-gray-900 rounded-full shadow-2xl sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 hover:scale-105"
//                   />
//                 </div>

//                 {/* Floating Elements with More */}
//                 <motion.div
//                   animate={{
//                     y: [0, -20, 0],
//                     rotate: [0, 360, 0],
//                   }}
//                   transition={{
//                     duration: 5,
//                     repeat: Infinity,
//                     ease: "easeInOut"
//                   }}
//                   className="absolute hidden p-3 bg-gray-800 border-2 border-purple-500 rounded-full -top-6 -left-6 sm:flex"
//                 >
//                   <span className="text-lg font-bold text-purple-400">🚀</span>
//                 </motion.div>

//                 <motion.div
//                   animate={{
//                     y: [0, 20, 0],
//                     rotate: [0, -360, 0],
//                   }}
//                   transition={{
//                     duration: 5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: 1.5
//                   }}
//                   className="absolute hidden p-3 bg-gray-800 border-2 border-pink-500 rounded-full -bottom-6 -right-6 sm:flex"
//                 >
//                   <span className="text-lg font-bold text-pink-400">💻</span>
//                 </motion.div>

//                 {/* Additional Floating Tech Icons (Cliché) */}
//                 <motion.div
//                   animate={{
//                     x: [0, 10, 0],
//                     y: [0, -10, 0],
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: 2
//                   }}
//                   className="absolute hidden p-2 bg-gray-800 border border-blue-500 rounded-full top-1/4 -left-10 sm:flex"
//                 >
//                   <span className="text-sm font-bold text-blue-400">JS</span>
//                 </motion.div>
//               </motion.div>

//               {/* Experience Badge with Pop-in */}
//               <motion.div
//                 initial={{ scale: 0, rotate: -180 }}
//                 animate={isInView ? { scale: 1, rotate: 0 } : {}}
//                 whileHover={{ scale: 1.2 }}
//                 transition={{ duration: 0.8, type: "spring" }}
//                 className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4"
//               >
//                 <div className="px-4 py-2 text-sm font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-pink-600">
//                   🏆 10+ Years Exp
//                 </div>
//               </motion.div>
//             </Tilt>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Scroll Indicator with Enhanced Animation */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.8, delay: 1.5 }}
//         className="flex justify-center mt-12 lg:mt-16"
//       >
//         <motion.div
//           animate={{
//             y: [0, 15, 0],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut"
//           }}
//           className="flex flex-col items-center text-gray-400 cursor-pointer"
//           onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
//         >
//           <span className="mb-2 text-sm animate-pulse">Scroll Down to Explore</span>
//           <div className="flex justify-center w-6 h-10 border-2 border-gray-400 rounded-full">
//             <motion.div
//               animate={{
//                 y: [0, 18, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 ease: "easeInOut"
//               }}
//               className="w-1 h-2 mt-2 bg-gray-400 rounded-full"
//             />
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default About;






import React, { useState, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FiDownload, FiLinkedin, FiMail, FiBriefcase } from 'react-icons/fi';
// Import your skill logos from constants
import { SkillsInfo } from '../../constants';

// import profileImage from '../../assets/profile2.png';
import profileImage from '../../assets/waqar_bhi_profile.png';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // Auto-rotate skill categories
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % SkillsInfo.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, SkillsInfo.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.5, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 80
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const skillLevels = {
    // Enterprise Systems
    'SAP S/4HANA': 92,
    'Microsoft Dynamics AX': 88,
    'ERP Implementation': 85,
    'System Integration': 90,
    'Data Warehouse': 87,

    // Leadership & Management
    'Team Leadership': 95,
    'Project Management': 92,
    'Stakeholder Management': 90,
    'Strategic Planning': 88,
    'Cross-functional Teams': 85,

    // Development Frameworks
    '.NET Core': 90,
    'ASP.NET MVC': 88,
    'Angular': 85,
    'React.js': 82,
    'Node.js': 80,

    // Mobile Development
    'Android Native': 85,
    'Kotlin': 82,
    'REST API Integration': 90,
    'UI/UX Implementation': 80,

    // Database & Data Management
    'Microsoft SQL Server': 88,
    'MySQL': 85,
    'PostgreSQL': 80,
    'Sybase': 75,

    // Programming Languages
    'C#': 90,
    'JavaScript': 88,
    'TypeScript': 85,
    'Python': 75,

    // Tools & Technologies
    'Git': 92,
    'Postman': 88,
    'Power BI': 80,
    'Visual Studio': 90,
    'Figma': 70,
  };

  // Get current category skills
  const currentCategory = SkillsInfo[activeCategory];

  // Gmail compose link with subject
  const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=aw.abdulwaqar@gmail.com&su=Inquiry%20from%20Portfolio";

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen px-4 py-12 overflow-hidden font-sans sm:px-6 lg:px-8 xl:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Professional Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-64 h-64 rounded-full bg-blue-600/20 -top-32 -left-32 mix-blend-multiply filter blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-64 h-64 rounded-full bg-purple-600/20 -bottom-32 -right-32 mix-blend-multiply filter blur-3xl"
        ></motion.div>
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="2" />
              <path d="M20,20 L80,80" stroke="white" strokeWidth="1" />
              <path d="M80,20 L20,80" stroke="white" strokeWidth="1" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 flex flex-col items-center justify-between mx-auto max-w-7xl lg:flex-row lg:items-center"
      >
        {/* Left Content */}
        <motion.div
          variants={itemVariants}
          className="w-full text-center lg:w-1/2 lg:text-left lg:pr-8 xl:pr-12"
        >
          {/* Professional Badge */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 backdrop-blur-sm"
          >
            <FiBriefcase className="text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Application Development Manager</span>
          </motion.div>

          {/* Greeting */}
          <motion.h1
            variants={itemVariants}
            className="mb-2 text-2xl font-semibold text-gray-300 sm:text-3xl md:text-4xl lg:mb-3"
          >
            Hello, I am
          </motion.h1>

          {/* Name */}
          <motion.h2
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              textShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
            }}
            className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl lg:mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
              ABDUL WAQAR
            </span>
          </motion.h2>

          {/* Typing Effect */}
          <motion.div
            variants={itemVariants}
            className="mb-6 text-xl font-semibold sm:text-2xl md:text-3xl lg:mb-8"
          >
            <span className="text-gray-400">Leading </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              <ReactTypingEffect
                text={[
                  'Enterprise Software Solutions',
                  'ERP Integration Projects',
                  'Cross-Functional Teams',
                  'System Architecture Design',
                  'Digital Transformation',
                  'Full-Stack Development',
                  'Data-Driven Applications',
                  'Technical Strategy'
                ]}
                speed={70}
                eraseSpeed={40}
                typingDelay={400}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-blue-400"
                  >
                    {cursor}
                  </motion.span>
                )}
              />
            </span>
          </motion.div>

          {/* Professional Summary */}
          <motion.p
            variants={itemVariants}
            className="mb-8 text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl lg:mb-10 lg:max-w-2xl"
          >
            Experienced Application Development Manager specializing in enterprise software architecture,
            ERP integrations (SAP S/4HANA, Dynamics AX), and full-stack development. Currently leading
            software operations at InfoTech Solutions with a focus on building scalable, data-driven
            applications that align technology with business objectives.
          </motion.p>

          {/* Dynamic Skills Showcase */}
          <motion.div variants={itemVariants} className="mb-6">
            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-4 lg:justify-start">
              {SkillsInfo.map((category, index) => (
                <button
                  key={category.title}
                  onClick={() => {
                    setActiveCategory(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 sm:text-sm ${activeCategory === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                    }`}
                >
                  {category.title.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Current Category Skills */}
            <div className="p-4 border rounded-xl bg-gray-800/30 backdrop-blur-sm border-gray-700/50">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-white sm:text-base">{currentCategory.title}</h4>
                <span className="px-2 py-1 text-xs text-blue-300 rounded-full bg-blue-500/20">
                  {currentCategory.skills.length} skills
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {currentCategory.skills.slice(0, 4).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center p-3 transition-all duration-300 border rounded-lg bg-gray-800/50 border-gray-700/50 hover:border-blue-500/30"
                  >
                    <div className="relative w-8 h-8 mb-2 sm:w-10 sm:h-10">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="object-contain w-full h-full"
                      />
                      {skillLevels[skill.name] >= 90 && (
                        <div className="absolute w-3 h-3 bg-green-500 border border-gray-800 rounded-full -top-1 -right-1"></div>
                      )}
                    </div>
                    <span className="text-xs text-center text-gray-300">{skill.name}</span>
                    <div className="w-16 h-1 mt-1 bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skillLevels[skill.name]}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full rounded-full ${skillLevels[skill.name] >= 90 ? 'bg-green-500' :
                          skillLevels[skill.name] >= 80 ? 'bg-blue-500' :
                            skillLevels[skill.name] >= 70 ? 'bg-purple-500' :
                              'bg-yellow-500'
                          }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {currentCategory.skills.length > 4 && (
                <div className="mt-3 text-center">
                  <span className="text-xs text-gray-500">
                    +{currentCategory.skills.length - 4} more skills in this category
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 sm:flex-row sm:gap-6 lg:gap-8"
          >
            {/* Primary CTA */}
            <motion.a
              href="https://drive.google.com/file/d/1L0Z9bGk2fCWlcDOpE2T-ikIECCdNQgiu/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                  '0 0 40px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white transition-all duration-300 transform rounded-full sm:text-lg hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #1e40af, #4f46e5, #7c3aed)',
              }}
            >
              <FiDownload className="w-5 h-5" />
              DOWNLOAD RESUME
            </motion.a>

            {/* Social Links */}
            <div className="flex justify-center gap-4 sm:gap-5 lg:justify-start">
              {[
                {
                  icon: FiLinkedin,
                  href: 'https://linkedin.com/in/abdulwaqar',
                  color: 'hover:bg-blue-500/20 hover:border-blue-500',
                  label: 'LinkedIn'
                },
                {
                  icon: FiMail,
                  href: gmailLink, // Using Gmail compose link
                  color: 'hover:bg-red-500/20 hover:border-red-500',
                  label: 'Email'
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`relative flex flex-col items-center p-3 text-gray-400 transition-all duration-300 border border-gray-600 rounded-xl group ${social.color}`}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="absolute mt-10 text-xs transition-opacity opacity-0 group-hover:opacity-100">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          variants={imageVariants}
          className="relative w-full mt-10 lg:w-1/2 lg:mt-0 lg:flex lg:justify-end"
        >
          <div className="flex justify-center lg:justify-end">
            <Tilt
              tiltMaxAngleX={isMobile ? 10 : 20}
              tiltMaxAngleY={isMobile ? 10 : 20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1500}
              gyroscope={true}
              className="relative"
            >
              {/* Main Image Container */}
              <motion.div variants={floatingVariants} animate="float" className="relative">
                {/* Glow Effect */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 blur-2xl"
                ></motion.div>

                {/* Image Container */}
                <div className="relative p-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
                  <div className="relative overflow-hidden border-4 border-gray-900 rounded-full">
                    <img
                      src={profileImage}
                      alt="Abdul Waqar - Application Development Manager"
                      className="object-cover w-56 h-56 transition-transform duration-500 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] hover:scale-110"
                    />
                    {/* Professional Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Floating Badges */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 360, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute hidden p-3 border-2 border-blue-500 rounded-full bg-gray-900/80 backdrop-blur-sm -top-8 -left-8 sm:flex"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">SAP</div>
                    <div className="text-xs text-gray-300">S/4HANA</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -360, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute hidden p-3 border-2 border-purple-500 rounded-full bg-gray-900/80 backdrop-blur-sm -bottom-8 -right-8 sm:flex"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">.NET</div>
                    <div className="text-xs text-gray-300">Core</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6"
              >
                <div className="px-5 py-3 text-sm font-bold text-white rounded-full shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <FiBriefcase />
                    <span>8+ Years Leadership</span>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="flex justify-center mt-16 lg:mt-20"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center text-gray-400 cursor-pointer"
          onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="mb-2 text-sm tracking-wider text-gray-500 uppercase">Explore Experience</span>
          <div className="flex justify-center w-6 h-10 border-2 border-gray-700 rounded-full">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-3 mt-2 rounded-full bg-gradient-to-b from-blue-400 to-purple-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;








