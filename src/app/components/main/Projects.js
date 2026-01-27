"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState, useRef } from "react";
import ProjectModal from "../ProjectModal";

function ProjectCard({ githublink, demolink, image, projectName, tags, video, onClick }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseEnter() {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log("Video play failed", e));
    }
  }

  function handleMouseLeave() {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl shadow-lg bg-white/5 border border-white/10 flex flex-col h-full cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Image / Video Container */}
      <div className="relative w-full h-48 overflow-hidden z-0 bg-black">
        {video ? (
          <video
            ref={videoRef}
            src={video}
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
          />
        ) : null}

        <img
          src={image}
          alt={projectName}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${isPlaying && video ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-60" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 p-5 flex flex-col flex-grow bg-gray-900/40 backdrop-blur-md">
        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
          {projectName}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag, idx) => (
            <span key={idx} className="text-xs font-medium px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex-grow" /> {/* Spacer */}

        {/* Buttons */}
        <div className="flex gap-3 mt-4 pt-4 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
          {githublink && (
            <a
              href={githublink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-semibold transition-colors flex-1"
            >
              <Github size={16} /> Code
            </a>
          )}
          {demolink ? (
            <a
              href={demolink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold transition-colors flex-1 shadow-lg shadow-purple-900/20"
            >
              <ExternalLink size={16} /> Demo
            </a>
          ) : (
            <button
              disabled
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-500 text-sm font-semibold cursor-not-allowed flex-1"
            >
              <ExternalLink size={16} /> No Demo
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const projects = [
  {
    githublink: "https://github.com/hansanakavinda/IntelligentItineraryPlanner",
    demolink: null,
    image: "/travelio.png",
    projectName: "Intelligent Itinerary Planner",
    tags: ["Python", "Flask", "React", "AI"],
    video: null,
    problem: "Travelers often spend hours planning trips, struggling to find optimal routes and attractions that fit their schedule and budget.",
    solution: "Developed an AI-powered planner that generates personalized itineraries based on user preferences. Used Flask for the backend API and React for the frontend, with a custom algorithm for route optimization."
  },
  {
    githublink: "https://github.com/hansanakavinda/ObjectDetection",
    demolink: null,
    image: "/project1.png",
    projectName: "Object detection application",
    tags: ["Python", "OpenCV", "YOLO", "Deep Learning"],
    video: null,
    problem: "Real-time object detection in dynamic environments is computationally expensive and difficult to implement accurately.",
    solution: "Implemented a YOLO-based object detection system using OpenCV and Python. Optimized the model for faster inference times without sacrificing significant accuracy."
  },
  {
    githublink: "https://github.com/hansanakavinda/MediCare",
    demolink: null,
    image: "/medicare.png",
    projectName: "MediCare",
    tags: ["Next.js", "Tailwind", "Supabase"],
    video: null,
    problem: "Patients struggle to manage medical records and appointments efficiently across different healthcare providers.",
    solution: "Built a comprehensive patient management system using Next.js and Supabase. Features include appointment scheduling, secure record storage, and a user-friendly dashboard for patients and doctors."
  },
  {
    githublink: "https://github.com/hansanakavinda/Photography_website",
    demolink: null,
    image: "/Malcolm.png",
    projectName: "Photography Website",
    tags: ["HTML", "CSS", "JavaScript"],
    video: null,
    problem: "A photographer needed a visually stunning portfolio to showcase high-resolution images without slow load times.",
    solution: "Created a responsive, performance-optimized gallery website using vanilla JS and CSS Grid. Implemented lazy loading for images to ensure fast initial page loads."
  },
  {
    githublink: "https://github.com/hansanakavinda/Data_analysis_system",
    demolink: null,
    image: "/BurgerHouse.png",
    projectName: "Data analysis System",
    tags: ["Python", "Pandas", "Matplotlib", "DataFree"],
    video: null,
    problem: "Small businesses lack affordable tools to analyze sales data and generate actionable insights.",
    solution: "Developed a Python-based data analysis tool using Pandas and Matplotlib. It ingests CSV data and automatically generates visual reports on sales trends, inventory levels, and customer demographics."
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-transparent text-white py-20 px-5"
    >
      {/* Section Title */}
      <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        My Projects
      </h1>
      <p className="text-base md:text-md lg:text-lg text-gray-300 text-center w-3/4 md:w-1/2 mb-12">
        Here are some of my projects showcasing my skills in web development and AI. Click on a card for more details.
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl text-base md:text-md lg:text-lg">
        {projects.map((p, idx) => (
          <ProjectCard
            key={`${p.projectName}-${idx}`}
            {...p}
            onClick={() => setSelectedProject(p)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </motion.section>
  );
}