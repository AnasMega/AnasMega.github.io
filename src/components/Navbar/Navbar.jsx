import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = menuItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Adjust for navbar height
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
    }
  };

  // Updated menu items - removed Skills since it's in About section
  const menuItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }, // Uncomment if you have a Contact section
  ];

  // Gmail compose link with subject
  const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=aw.abdulwaqar@gmail.com&su=Inquiry%20from%20Portfolio&body=Hello%20Abdul%20Waqar,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect...";

  const socialLinks = [
    {
      icon: FiLinkedin,
      href: "https://linkedin.com/in/abdulwaqar",
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:border-blue-400 hover:bg-blue-400/10"
    },
    {
      icon: FiMail,
      href: gmailLink, // Updated with Gmail compose link
      label: "Email",
      color: "hover:text-red-400 hover:border-red-400 hover:bg-red-400/10"
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-gray-900/90 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl shadow-blue-900/10"
        : "bg-gradient-to-b from-gray-900/80 to-transparent backdrop-blur-lg"
        }`}
    >
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Logo with Animation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => handleMenuItemClick("about")}
        >
          <div className="relative">
            <motion.div
              animate={isScrolled ? { opacity: 0.75 } : { opacity: 1 }}
              className="absolute inset-0 transition-opacity rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 blur group-hover:opacity-100"
            ></motion.div>
            <div className="relative flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-900 border border-gray-700 rounded-lg group-hover:border-blue-500/50 group-hover:scale-105">
              <span className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                AW
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="font-bold text-white">ABDUL WAQAR</div>
            <div className="text-xs text-gray-400">Application Dev Manager</div>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden space-x-2 md:flex">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${activeSection === item.id
                  ? "text-white bg-gray-800/50"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/30"
                  }`}
              >
                {item.label}
                {(activeSection === item.id || isHovered === item.id) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    transition={{ type: "spring", bounce: 0.25 }}
                  />
                )}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Right Section: Social Links + Resume */}
        <div className="flex items-center gap-3">
          {/* Social Links */}
          <div className="hidden gap-3 md:flex">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center w-10 h-10 rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm text-gray-400 transition-all duration-300 ${social.color}`}
                title={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Resume Button */}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1L0Z9bGk2fCWlcDOpE2T-ikIECCdNQgiu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="items-center hidden gap-2 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 rounded-xl md:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
          >
            <FiDownload className="w-4 h-4" />
            Resume
          </motion.a>

          {/* Mobile Menu Icon */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-10 h-10 transition-colors border border-gray-700 rounded-xl md:hidden bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu className="w-6 h-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
          >
            <div className="px-4 py-4 border-t border-gray-800/50 bg-gray-900/95 backdrop-blur-xl">
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`flex w-full items-center justify-between px-4 py-3 text-left rounded-xl transition-all duration-200 ${activeSection === item.id
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                      }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="mobile-indicator"
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Social Links & Resume */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 + index * 0.1 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 mb-1" />
                    <span className="text-xs text-gray-400">{social.label}</span>
                  </motion.a>
                ))}
                <motion.a
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  href="https://drive.google.com/file/d/1L0Z9bGk2fCWlcDOpE2T-ikIECCdNQgiu/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 text-white rounded-xl bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  <FiDownload className="w-5 h-5 mb-1" />
                  <span className="text-xs">Resume</span>
                </motion.a>
              </div>

              {/* Contact Info in Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.5 }}
                className="pt-6 mt-6 border-t border-gray-800/50"
              >
                <div className="text-sm text-gray-400">
                  <div className="mb-2 font-medium text-white">Contact Information</div>
                  <div className="flex items-center gap-2 mb-2">
                    <FiMail className="w-4 h-4" />
                    <a
                      href={gmailLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 transition-colors hover:text-blue-400"
                    >
                      aw.abdulwaqar@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Phone:</span>
                    <span className="text-white">+92 333 3306242</span>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Based in Karachi, Pakistan
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;