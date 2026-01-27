"use client";


import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Home({ scrollToChatBot }) {

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-white/0 leading-relaxed relative px-8 text-center md:text-left gap-4 overflow-hidden"
    >
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="flex flex-col items-center md:items-start z-10">
        <p className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Hi, I'm
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-raj font-bold mt-6 tracking-widest text-white-300 neon-text futuristic-text-glitch">
          Hansana Kavinda
        </h1>
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold mt-6 tracking-widest bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent h-20 ">
          <Typewriter
            words={["A Software Engineer", "A Web Developer", "An AI / ML Engineer"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={150}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6">
          <a href="https://github.com/hansanakavinda" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-purple-600 hover:scale-110 transition duration-300">
            <Github className="w-6 h-6 text-white" />
          </a>
          <a href="https://linkedin.com/in/hansanakavinda" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-blue-600 hover:scale-110 transition duration-300">
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a href="mailto:hansanakavinda7@gmail.com" className="p-2 bg-white/10 rounded-full hover:bg-red-500 hover:scale-110 transition duration-300">
            <Mail className="w-6 h-6 text-white" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-blue-400 hover:scale-110 transition duration-300">
            <Twitter className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:mt-0 z-10">
        {/* Profile Image with Glow */}
        <div className="relative w-40 h-40 md:w-60 md:h-60 lg:w-[350px] lg:h-[350px] rounded-full bg-radial">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-50 blur-xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative w-full h-full bg-black/20 rounded-full flex items-center justify-center overflow-hidden border-4 border-white/10">
            <Image
              src="/pf.png"
              alt="Profile Picture"
              width={350}
              height={350}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full flex justify-center gap-4">
        <button
          className="px-6 py-3 font-bold text-white bg-white/10 hover:bg-purple-700 rounded-full shadow-lg hover:scale-105 transition backdrop-blur-md border border-white/10"
          onClick={scrollToChatBot}
        >
          Ask Me Anything
        </button>
        {/* <a
          href="/cv.pdf"
          download="Hansana_Kavinda_CV.pdf"
          className="px-6 py-3 font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full shadow-lg hover:scale-105 transition flex items-center justify-center"
        >
          Download CV
        </a> */}
      </div>
    </motion.section>
  );
}