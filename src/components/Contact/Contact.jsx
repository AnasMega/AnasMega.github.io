import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FiMail, FiMapPin, FiSend, FiUser, FiMessageSquare,
  FiLinkedin, FiAlertCircle, FiCheck, FiGithub,
  FiTwitter, FiGlobe, FiSmartphone, FiClock, FiZap
} from "react-icons/fi";
import { SiGooglesheets } from "react-icons/si";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // ✅ CORRECT Google Script URL (Apna wala)
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyMYAVoDtxX8SzpdrNC4JzUeGuZXl6ilbiAomeJPhiDmfJGA5sJaE0Li4S2yClCq1xR/exec";

  // Mouse glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.user_name.trim() || !formData.user_email.trim() || !formData.message.trim()) {
      toast.error("❌ Please fill all required fields!", {
        position: "bottom-right",
        theme: "dark",
        icon: <FiAlertCircle className="text-red-400" />
      });
      return;
    }

    setIsLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.user_name.trim());
    formDataToSend.append('email', formData.user_email.trim());
    formDataToSend.append('subject', formData.subject.trim() || 'Portfolio Inquiry');
    formDataToSend.append('message', formData.message.trim());

    try {
      console.log("📤 Sending to Google Script...");

      // ✅ Using your updated URL
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSend
      });

      setIsLoading(false);

      // Success animation
      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: ""
      });

      toast.success(
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center gap-3"
        >
          <div className="p-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20">
            <FiCheck className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-left">
            <p className="font-bold text-white">🚀 Message Sent Successfully!</p>
            <p className="text-sm text-gray-300">I'll respond within 24 hours.</p>
          </div>
        </motion.div>,
        {
          position: "bottom-right",
          autoClose: 5000,
          theme: "dark",
          hideProgressBar: false,
          icon: false
        }
      );

    } catch (error) {
      setIsLoading(false);
      console.error("Error:", error);

      // Fallback email
      const subject = encodeURIComponent(formData.subject || "Portfolio Inquiry");
      const body = encodeURIComponent(
        `Name: ${formData.user_name}\n` +
        `Email: ${formData.user_email}\n\n` +
        `Message:\n${formData.message}`
      );

      window.open(`mailto:aw.abdulwaqar@gmail.com?subject=${subject}&body=${body}`, '_blank');

      toast.info(
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FiZap className="text-yellow-400 animate-pulse" />
            <span className="font-bold">Opening Email Client</span>
          </div>
          <p className="text-sm text-gray-300">
            Form submission failed. Please send the email manually.
          </p>
        </div>,
        {
          position: "bottom-right",
          autoClose: 8000,
          theme: "dark",
        }
      );
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Primary Email",
      value: "aw.abdulwaqar@gmail.com",
      link: "mailto:aw.abdulwaqar@gmail.com",
      badge: "Primary"
    },
    // {
    //   icon: FiMail,
    //   label: "Secondary Email",
    //   value: "mansoorturk757@gmail.com",
    //   link: "mailto:mansoorturk757@gmail.com",
    //   badge: "Backup"
    // },
    {
      icon: FiSmartphone,
      label: "Phone",
      value: "+92 123 456 7890",
      link: "tel:+921234567890"
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Karachi, Pakistan",
      link: "https://maps.google.com/?q=Karachi+Pakistan"
    },
    {
      icon: FiClock,
      label: "Response Time",
      value: "Within 24 hours",
      badge: "Fast"
    }
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/abdulwaqar/",
      color: "hover:text-blue-400",
      bg: "hover:bg-blue-500/10"
    },
    // {
    //   icon: FiGithub,
    //   label: "GitHub",
    //   link: "https://github.com/yourusername",
    //   color: "hover:text-gray-300",
    //   bg: "hover:bg-gray-500/10"
    // },
    // {
    //   icon: FiTwitter,
    //   label: "Twitter",
    //   link: "https://twitter.com/yourusername",
    //   color: "hover:text-sky-400",
    //   bg: "hover:bg-sky-500/10"
    // }


  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // SVG grid pattern as separate constant for cleaner code
  const gridPattern = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen px-4 py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Advanced Background Effects - FIXED */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute rounded-full w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 -top-48 -left-48 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute rounded-full w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 -bottom-48 -right-48 blur-3xl"
        />

        {/* Grid Pattern - FIXED */}
        <div
          className="absolute inset-0 opacity-30"
          style={gridPattern}
        />
      </div>

      {/* Mouse Follow Glow */}
      <div
        className="fixed z-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-20 text-center"
        >
          <div className="inline-block mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-1 mb-4 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            />
            <h2 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl font-display">
              <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text animate-gradient">
                Get In Touch
              </span>
            </h2>
            <div className="h-1 mt-4 rounded-full bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="max-w-3xl mx-auto text-xl text-gray-300"
          >
            Let's create something amazing together. Whether it's a project, collaboration, or just a hello—I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Premium Contact Info Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-1"
          >
            <div className="p-8 border shadow-2xl border-gray-700/50 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl">
              <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <FiGlobe className="text-purple-400 w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                  <p className="text-gray-400">Multiple ways to reach me</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 transition-all border rounded-xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 hover:from-purple-900/20 hover:to-pink-900/20 group border-gray-700/30"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20">
                      <item.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium text-gray-400">{item.label}</p>
                        {item.badge && (
                          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-medium text-white">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="mt-8">
                <h4 className="mb-4 text-lg font-bold text-white">Connect With Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 rounded-xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/50 text-gray-300 transition-all ${social.color} ${social.bg} shadow-lg hover:shadow-xl`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Technology Badge */}
              {/* <motion.div
                variants={itemVariants}
                className="p-5 mt-8 border rounded-2xl bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 border-green-500/30"
              > */}
              {/* <div className="flex items-center gap-4"> */}
              {/* <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 animate-ping"></div>
                    <div className="absolute top-0 w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500"></div>
                  </div> */}
              {/* <div>
                    <p className="font-bold text-green-400">🚀 Powered by Google Apps Script</p>
                    <p className="text-sm text-green-300/80">Real-time email notifications to both accounts</p>
                  </div> */}
              {/* <SiGooglesheets className="w-8 h-8 ml-auto text-green-400" /> */}
              {/* </div> */}
              {/* </motion.div> */}
            </div>
          </motion.div>

          {/* Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="p-8 border shadow-2xl border-gray-700/50 rounded-3xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <FiSend className="text-purple-400 w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                  <p className="text-gray-400">Fill the form below and I'll get back to you ASAP</p>
                </div>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      label: "Your Name *",
                      name: "user_name",
                      icon: FiUser,
                      placeholder: "John Doe"
                    },
                    {
                      label: "Your Email *",
                      name: "user_email",
                      icon: FiMail,
                      placeholder: "john@example.com",
                      type: "email"
                    }
                  ].map((field, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                    >
                      <label className="block mb-3 text-sm font-semibold text-gray-300">
                        {field.label}
                      </label>
                      <div className="relative group">
                        <field.icon className="absolute w-5 h-5 text-gray-500 transform -translate-y-1/2 left-4 top-1/2 group-focus-within:text-purple-400" />
                        <input
                          type={field.type || "text"}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          required={field.label.includes("*")}
                          className="w-full py-4 pl-12 pr-4 text-white placeholder-gray-500 transition-all border border-gray-600/50 rounded-xl bg-gray-800/30 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 group-hover:border-purple-400/50"
                          placeholder={field.placeholder}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block mb-3 text-sm font-semibold text-gray-300">
                    Subject
                  </label>
                  <div className="relative group">
                    <FiMessageSquare className="absolute w-5 h-5 text-gray-500 transform -translate-y-1/2 left-4 top-1/2 group-focus-within:text-purple-400" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full py-4 pl-12 pr-4 text-white placeholder-gray-500 transition-all border border-gray-600/50 rounded-xl bg-gray-800/30 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 group-hover:border-purple-400/50"
                      placeholder="Project Inquiry / Collaboration"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block mb-3 text-sm font-semibold text-gray-300">
                    Your Message *
                  </label>
                  <div className="relative group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full px-4 py-4 text-white placeholder-gray-500 transition-all border resize-none border-gray-600/50 rounded-xl bg-gray-800/30 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 group-hover:border-purple-400/50"
                      placeholder="Tell me about your project, ideas, or questions..."
                    />
                    <div className="absolute bottom-3 right-3">
                      <span className="text-sm text-gray-500">
                        {formData.message.length}/2000
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full py-5 overflow-hidden font-bold text-white transition-all shadow-2xl rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-700/20 via-pink-700/20 to-rose-700/20"
                    animate={{
                      x: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {isLoading ? (
                    <div className="relative flex items-center justify-center gap-3">
                      <div className="w-6 h-6 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                      <span className="text-lg">Sending Message...</span>
                    </div>
                  ) : (
                    <div className="relative flex items-center justify-center gap-3">
                      <FiSend className="w-6 h-6" />
                      <span className="text-lg">Send Message Now</span>
                    </div>
                  )}

                  {/* Hover shine effect */}
                  <div className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100">
                    <div className="absolute w-32 h-full -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
                  </div>
                </motion.button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                  className="pt-6 text-center border-t border-gray-700/50"
                >
                  {/* <p className="text-sm text-gray-400">
                    <span className="inline-flex items-center gap-2">
                      <FiZap className="text-yellow-400 animate-pulse" />
                      Powered by Google Apps Script • 100% Free & Unlimited
                    </span>
                  </p> */}
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Domain Binding Info Section
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="p-8 mt-12 border border-blue-500/30 rounded-3xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 backdrop-blur-sm"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-4 text-2xl font-bold text-white">🌐 Custom Domain Binding</h4>
              <p className="mb-4 text-gray-300">
                Want to use your own domain instead of Google Script URL?
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-400" />
                  Use Cloudflare Workers (Free)
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-400" />
                  Netlify/Vercel Redirects
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-400" />
                  Custom API endpoint
                </li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-black/30">
              <code className="text-sm text-gray-300">
               
                https://api.yourdomain.com/contact<br />
                ↓<br />
                Proxies to →<br />
                https://script.google.com/macros/s/...<br />
              </code>
            </div>
          </div>
        </motion.div> */}
      </div>

      {/* Enhanced Toast Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="!bg-gray-800/90 !backdrop-blur-sm !border !border-gray-700/50"
        progressClassName="!bg-gradient-to-r from-purple-500 to-pink-500"
      />
    </section>
  );
};



export default Contact;


