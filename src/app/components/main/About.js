"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";
import { SiPython, SiMysql, SiPhp, SiOpencv, SiPytorch, SiTensorflow, SiPandas, SiScikitlearn, SiNumpy, SiPostgresql, SiSqlite, SiDotnet, SiUnity, SiLaravel, SiSymfony, SiKeras, SiYolo, SiSpacy, SiHuggingface } from "react-icons/si";
import { FaDatabase, FaBrain, FaRobot } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

// Map skills to icons
const skillsData = [
  { name: "Python", icon: <SiPython className="text-yellow-400" />, dims: "TensorFlow, Pandas, Scikit-learn, NumPy" },
  { name: "SQL", icon: <SiMysql className="text-blue-500" />, dims: "PostgreSQL, MySQL, SQLite" },
  { name: "C#", icon: <TbBrandCSharp className="text-purple-600" />, dims: ".NET Core, Unity, ASP.NET" },
  { name: "PHP", icon: <SiPhp className="text-indigo-400" />, dims: "Laravel, Symfony" },
  { name: "AI & ML", icon: <FaBrain className="text-pink-500" />, dims: "PyTorch, Keras, OpenCV" },
  { name: "NLP & CV", icon: <FaRobot className="text-green-400" />, dims: "YOLO, Spacy, HuggingFace, Tesseract" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="about"
      className="min-h-screen flex items-center justify-center bg-white/0 relative"
    >
      <div className="max-w-4xl mx-auto py-10 px-5">
        {/* Section Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/5">
          {/* Left Section - Profile Details */}
          <div className="text-sm md:text-md lg:text-lg text-white text-justify leading-relaxed">
            <p>
              Hi, I'm <span className="font-bold text-purple-400">Hansana Kavinda</span>, a passionate{" "}
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
          <div className="w-full">
            {/* Smooth Tab Toggle */}
            <div className="flex bg-black/20 p-1 rounded-xl mb-6 relative">
              {["skills", "education"].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-2 rounded-lg text-sm md:text-base font-bold relative z-10 transition-colors duration-300 ${activeTab === tab ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-purple-600 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Content Section with AnimatePresence */}
            <div className="text-white min-h-[250px]">
              <AnimatePresence mode="wait">
                {activeTab === "skills" ? (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Tooltip.Provider>
                      <ul className="grid grid-cols-2 gap-4">
                        {skillsData.map((skill, index) => (
                          <li key={index} className="flex">
                            <Tooltip.Root delayDuration={200}>
                              <Tooltip.Trigger asChild>
                                <div className="flex items-center gap-3 p-3 w-full bg-white/5 rounded-lg hover:bg-white/10 transition cursor-pointer border border-white/5 hover:border-purple-500/50 group">
                                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                  </span>
                                  <span className="text-sm font-medium">{skill.name}</span>
                                </div>
                              </Tooltip.Trigger>
                              <Tooltip.Portal>
                                <Tooltip.Content
                                  className="bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl border border-purple-500/20 text-xs sm:text-sm animate-in fade-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95 z-50 max-w-[220px]"
                                  sideOffset={5}
                                >
                                  <p className="font-semibold text-purple-300 mb-1">Tools & Libs:</p>
                                  {skill.dims}
                                  <Tooltip.Arrow className="fill-gray-900" />
                                </Tooltip.Content>
                              </Tooltip.Portal>
                            </Tooltip.Root>
                          </li>
                        ))}
                      </ul>
                    </Tooltip.Provider>
                  </motion.div>
                ) : (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="pl-2"
                  >
                    <div className="relative pl-8 border-l-2 border-purple-800 space-y-8">
                      <div className="relative">
                        <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[23px] top-1 ring-4 ring-black/50"></div>
                        <h3 className="font-bold text-lg text-white">HND in Software Engineering</h3>
                        <p className="text-purple-300 text-sm">ESOFT Metro Campus</p>
                        <p className="text-gray-400 text-xs mt-1">2023 - 2025</p>
                      </div>
                      <div className="relative">
                        <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[23px] top-1 ring-4 ring-black/50"></div>
                        <h3 className="font-bold text-lg text-white">BSc (Hons) Data Science</h3>
                        <p className="text-blue-300 text-sm">ESOFT Metro Campus</p>
                        <p className="text-gray-400 text-xs mt-1">2025 - Present</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}