// import React from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   // Smooth scroll function
//   const handleScroll = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
//       <div className="container mx-auto text-center">
//         {/* Name / Logo */}
//         <h2 className="text-xl font-semibold text-purple-500"> Mansoor Turk </h2>

//         {/* Navigation Links - Responsive */}
//         <nav className="flex flex-wrap justify-center mt-4 space-x-4 sm:space-x-6">
//           {[
//             { name: "About", id: "about" },
//             { name: "Skills", id: "skills" },
//             { name: "Experience", id: "experience" },
//             { name: "Projects", id: "projects" },
//             { name: "Education", id: "education" },
//           ].map((item, index) => (
//             <button
//               key={index}
//               onClick={() => handleScroll(item.id)}
//               className="my-1 text-sm hover:text-purple-500 sm:text-base"
//             >
//               {item.name}
//             </button>
//           ))}
//         </nav>

//         {/* Social Media Icons - Responsive */}
//         <div className="flex flex-wrap justify-center mt-6 space-x-4">
//           {[
//             { icon: <FaFacebook />, link: "https://www.facebook.com/tarun.kaushik.3511041/" },
//             { icon: <FaTwitter />, link: "https://twitter.com/CodingMaster6?s=09" },
//             { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tarun-kaushik-553b441a4" },
//             { icon: <FaInstagram />, link: "https://www.instagram.com/coding_.master/" },
//             { icon: <FaYoutube />, link: "https://www.youtube.com/codingmasteryt" },

//           ].map((item, index) => (
//             <a
//               key={index}
//               href={item.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-xl transition-transform transform hover:text-purple-500 hover:scale-110"
//             >
//               {item.icon}
//             </a>
//           ))}
//         </div>

//         {/* Copyright Text */}
//         <p className="mt-6 text-sm text-gray-400">
//           © 2025 Tarun Kaushik. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.3,
      rotate: 360,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.9
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: '#a855f7',
      transition: {
        duration: 0.3
      }
    }
  };

  const glowAnimation = {
    pulse: {
      textShadow: [
        '0 0 5px rgba(168, 85, 247, 0.5)',
        '0 0 20px rgba(168, 85, 247, 0.8)',
        '0 0 5px rgba(168, 85, 247, 0.5)'
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer className="relative px-4 py-12 overflow-hidden text-white sm:px-6 lg:px-8 xl:px-20 bg-gradient-to-t from-gray-900 via-purple-900/20 to-gray-900">
      {/* Background Glow Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 bg-purple-600 rounded-full -top-20 -left-20 mix-blend-multiply filter blur-3xl opacity-20"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [0, -180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 bg-pink-600 rounded-full -bottom-20 -right-20 mix-blend-multiply filter blur-3xl opacity-20"
        ></motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.1 }}
        className="container relative z-10 mx-auto text-center"
      >
        {/* Name / Logo with Glow and Bounce */}
        <motion.h2
          variants={itemVariants}
          animate={glowAnimation.pulse}
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold sm:text-3xl"
          style={{
            background: 'linear-gradient(to right, #8245ec, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Abdul Waqar
        </motion.h2>

        {/* Navigation Links - Enhanced with Underline Animation  { id: "contact", label: "Contact" }, */}
        <nav className="flex flex-wrap justify-center mt-6 space-x-4 sm:space-x-6">
          {[
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <motion.button
              key={index}
              variants={linkVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll(item.id)}
              className="relative my-2 overflow-hidden text-sm text-gray-300 sm:text-base"
            >
              {item.name}
              <motion.span
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </motion.button>
          ))}
        </nav>

        {/* Social Media Icons - With Spin and Glow */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-8 space-x-6"
        >
          {[
            { icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=61574736493486", _blank: true, color: 'hover:text-blue-500' },
            { icon: FaTwitter, link: "#", color: 'hover:text-blue-400' },
            { icon: FiLinkedin, href: 'https://linkedin.com/in/abdulwaqar', color: 'hover:border-blue-500 hover:bg-blue-500/20' },
            // {
            //   icon: FiMail,
            //   href: 'https://mail.google.com/mail/?view=cm&fs=1&to=aw.abdulwaqar@gmail.com',
            //   className: 'hover:text-red-500 hover:bg-red-500/20 hover:border-red-500'
            // },
            // { icon: FaInstagram, link: "https://www.instagram.com/coding_.master/", color: 'hover:text-pink-500' },
            // { icon: FaYoutube, link: "https://www.youtube.com/codingmasteryt", color: 'hover:text-red-500' },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className={`text-2xl transition-colors duration-300 ${item.color}`}
              style={{ filter: 'drop-shadow(0 0 5px rgba(168, 85, 247, 0.3))' }}
            >
              <item.icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright Text with Fade-in */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-sm text-gray-400"
        >
          © 2025 Abdul Waqar. All rights reserved. | Built with ❤️ and React
        </motion.p>

        {/* Back to Top Button (Cliché Enhancement) */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-block px-6 py-2 mt-6 text-sm font-semibold text-white transition-all duration-300 rounded-full hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #8245ec, #a855f7)',
            boxShadow: '0 4px 15px rgba(130, 69, 236, 0.4)',
          }}
        >
          Back to Top ↑
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default Footer;