"use client";

import { motion } from "framer-motion";

export default function DynamicBackground() {
  return (
    <motion.div
      className="absolute inset-0 min-h-screen bg-gradient-to-br from-gray-700 via-black to-gray-700"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
