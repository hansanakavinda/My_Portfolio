"use client";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Chatbot from "./components/chatbot";
import { useRef } from "react";



export default function Home() {
  const [activeTab, setActiveTab] = useState("skills");

  const chatBotRef = useRef(null);

  const scrollToChatBot = () => {
    if (chatBotRef.current) {
      chatBotRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {/* Home Section */}
      <section id="home" className="h-screen flex items-center justify-center bg-white/0  leading-relaxed relative px-8">
      <div className="flex flex-col items-left "> 
        <p className="text-6xl font-bold text-left bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent ">Hi, I'm</p>
        <h1 className="text-8xl font-raj font-bold mt-6 tracking-widest text-white-300 neon-text futuristic-text-glitch mr-4">Hansana Kavinda</h1>
        <p className="text-5xl font-bold mt-6 tracking-widest bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent h-20">
        <Typewriter
          words={[ "A Software Engineer", "A Web Developer"]}
          loop={0} // Infinite loop
          cursor
          cursorStyle=""
          typeSpeed={150}
          deleteSpeed={50}
          delaySpeed={2000}
          />
        </p>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white/0">
      <div className="relative w-350 h-350 rounded-full bg-radial ">
          <div className="w-full h-full bg-black/20 rounded-full flex items-center justify-center  ">
            <Image
              src="/pf.png"
              alt="Profile Picture"
              width={450}
              height={450}
              className="rounded-full"
            />
          </div>
        </div>
      </div>

    {/*ask me anything button */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
    <button className="px-6 py-4 text-lg font-bold text-white bg-white/10 hover:bg-purple-700 rounded-full shadow-lg hover:scale-105 transition"
    onClick={scrollToChatBot} // Scrolls to chatbot
    >
      Ask Me Anything
    </button>
  </div>
      </section>

      {/* About Section */}
      <section id="about" className="h-screen flex items-center justify-center bg-black/20 relative">
      <div className="max-w-4xl mx-auto py-10 px-5">
      {/* Section Title */}
      <h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        About Me
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-white/10 rounded-lg shadow-md">
        {/* Left Section - Profile Details */}
        <div className="text-lg text-white bg-transparent p-10 rounded-lg text-justify leading-relaxed">
          <p>
            Hi, I'm <span className="font-bold">Hansana Kavinda</span>, a passionate{" "}
            <strong>Data Science undergraduate</strong> pursuing an{" "}
            <strong>BSc (Hons) in Data Science</strong> at{" "}
            <strong>ESOFT Metro Campus</strong>.
          </p>
          <p className="mt-4">
            I am interested in <strong>Web development, AI, machine learning, NLP, and computer vision</strong> 
            and have experience in developing{" "}
            <strong>object detection application, web applications, and data analysis systems</strong>.
          </p>
        </div>


        {/* Right Section - Skills & Education with Toggle */}
        <div className="bg-transparent p-5 rounded-lg  w-full max-w-3xl mx-auto">
      {/* Toggle Buttons */}
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-md transition ${
            activeTab === "skills" ? "bg-purple-700 text-white font-bold text-lg"  : "bg-gray-200 hover:bg-purple-500 text-gray-700 font-bold text-lg"
          }`}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
        <button
          className={`px-4 py-2 rounded-md transition ${
            activeTab === "education" ? "bg-purple-700  text-white font-bold text-lg" : "bg-gray-200 hover:bg-purple-500 text-gray-700 font-bold text-lg"
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>

      {/* Content Section with Fixed Height */}
      <div className="text-white text-center min-h-[200px] flex items-center justify-center">
        {/* Skills Section */}
        {activeTab === "skills" && (
          <div>
            <ul className="mt-2 text-lg list-disc list-inside text-left pl-20 leading-relaxed">
              <li>Python</li>
              <li>SQL</li>
              <li>C#</li>
              <li>PHP</li>
              <li>AI & Machine Learning</li>
              <li>NLP & Computer Vision</li>
            </ul>
          </div>
        )}

        {/* Education Section with Timeline */}
        {activeTab === "education" && (
          <div className="text-left">
            <div className="relative pl-6 border-l-2 border-gray-300 leading-relaxed">
              <div className="mb-4">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6px]"></div>
                <p className="font-bold text-lg">HND in Software Engineering</p>
                <p className="text-gray-300">ESOFT Metro Campus (2023 - 2025)</p>
              </div>
              <div>
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6px]"></div>
                <p className="font-bold text-lg">Bsc (HONS) Data Science</p>
                <p className="text-gray-300">ESOFT Metro Campus (2025 - Present)</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
      </div>
    </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-transparent text-white py-20 px-5">
  {/* Section Title */}
  <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
    My Projects
  </h1>
  <p className="text-lg text-gray-300 text-center w-3/4 md:w-1/2 mb-12">
    Here are some of my projects showcasing my skills in web development and AI.
  </p>

  {/* Project Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
    {/* Sample Project 1 */}
    <a
      href="https://github.com/yourusername/project1"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-lg shadow-lg transform transition hover:scale-105 bg-black/20 shadow-lg"
    >
      <img
        src="/project1.png"
        alt="Project 1"
        className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-75"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
        <span className="text-white font-bold text-xl">View Project</span>
      </div>
      <h3 className="mt-4 text-center text-xl font-semibold">Object detection application</h3>
    </a>

    {/* Sample Project 2 */}
    <a
      href="https://github.com/yourusername/project2"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-lg shadow-lg transform transition hover:scale-105 bg-black/20 shadow-lg"
    >
      <img
        src="/Malcolm.png"
        alt="Project 2"
        className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-75"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
        <span className="text-white font-bold text-xl">View Project</span>
      </div>
      <h3 className="mt-4 text-center text-xl font-semibold">Photography Website</h3>
    </a>

    {/* Sample Project 3 */}
    <a
      href="https://github.com/yourusername/project3"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-lg shadow-lg transform transition hover:scale-105 bg-black/20 shadow-lg"
    >
      <img
        src="BurgerHouse.png"
        alt="Project 3"
        className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-75"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
        <span className="text-white font-bold text-xl">View Project</span>
      </div>
      <h3 className="mt-4 text-center text-xl font-semibold">Data analysis System</h3>
    </a>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-black/20 text-white py-20 px-5">
  {/* Section Title */}
  <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
    Contact Me
  </h1>
  <p className="text-lg text-gray-300 text-center w-3/4 md:w-1/2 mb-12">
    Feel free to reach out for collaborations or inquiries!
  </p>

  {/* Contact Form */}
  <div className="w-full max-w-lg bg-white/5  p-8 rounded-lg shadow-lg">
    <form action="#" method="POST">
      <div className="mb-4">
        <label className="block text-gray-400 text-sm mb-2">Name</label>
        <input type="text" className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter your name" required />
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 text-sm mb-2">Email</label>
        <input type="email" className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Enter your email" required />
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 text-sm mb-2">Message</label>
        <textarea className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" rows="4" placeholder="Enter your message" required></textarea>
      </div>

      <button type="submit" className="w-full bg-purple-800 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg transition">
        Send Message
      </button>
    </form>
  </div>

</section>
<div ref={chatBotRef} className="relative">
    <Chatbot />
  </div>
<footer className="bg-black/20 backdrop-blur-lg text-white py-6">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left - Contact Details */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Kavinda</h3>
          <p className="text-gray-400 text-sm mt-1">
            Data Science Undergraduate | Software Engineer
          </p>
          <div className="mt-3 space-y-2 text-gray-400 text-sm">
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-400" />
              hansanakavinda7@gmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-green-400" />
              +94 77 49 49 345
            </p>
          </div>
        </div>

        {/* Center - Social Links */}
        <div className="flex space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-purple-400 text-3xl transition transition-transform transform hover:scale-110 duration-200">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-purple-400 text-3xl transition-transform transform hover:scale-110 duration-200">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:hansanakavinda7@gmail.com"
             className="text-gray-400 hover:text-purple-400 text-3xl transition-transform transform hover:scale-110 duration-200">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        {/* Right - Copyright */}
        <div className="text-gray-400 text-sm text-center md:text-right mt-4 md:mt-0">
          <p>© {new Date().getFullYear()} Kavinda. All rights reserved.</p>
        </div>
      </div>
    </footer> 



    </div>
    
  );
}
