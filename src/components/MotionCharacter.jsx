// src/components/MotionCharacter.jsx
import React from 'react';
import { motion } from 'framer-motion';

const MotionCharacter = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div
                animate={{
                    y: [0, -20, 0, -10, 0],
                    rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute w-64 h-64 right-10 bottom-20 opacity-20"
            >
                {/* Developer Silhouette */}
                <div className="relative w-full h-full">
                    {/* Head */}
                    <div className="absolute w-16 h-16 transform -translate-x-1/2 rounded-full shadow-2xl top-4 left-1/2 bg-gradient-to-br from-blue-500 to-purple-600"></div>

                    {/* Body */}
                    <div className="absolute w-20 transform -translate-x-1/2 shadow-2xl top-20 left-1/2 h-28 bg-gradient-to-b from-blue-600 to-blue-800 rounded-xl"></div>

                    {/* Laptop */}
                    <div className="absolute w-32 h-16 transform -translate-x-1/2 rounded-lg shadow-2xl top-32 left-1/2 bg-gradient-to-b from-gray-700 to-gray-900">
                        <div className="absolute bg-gray-900 rounded top-1 left-1 right-1 bottom-1">
                            <div className="absolute h-1 rounded top-2 left-2 right-2 bg-green-500/50"></div>
                            <div className="absolute h-1 rounded top-5 left-2 right-4 bg-blue-500/30"></div>
                            <div className="absolute h-1 rounded top-8 left-2 right-6 bg-purple-500/30"></div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Floating code elements */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    x: [0, 10, 0],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute text-2xl top-20 left-20 text-blue-400/20"
            >
                {"</>"}
            </motion.div>

            <motion.div
                animate={{
                    y: [0, -40, 0],
                    x: [0, -15, 0],
                    rotate: [0, -180, -360],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute text-xl bottom-40 left-40 text-purple-400/20"
            >
                {"{}"}
            </motion.div>
        </div>
    );
};

export default MotionCharacter;