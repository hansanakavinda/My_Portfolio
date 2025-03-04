"use client";

import { useState } from "react";

export default function About() {
    const [activeTab, setActiveTab] = useState("skills");


    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-white/0 relative">
      <div className="max-w-4xl mx-auto py-10 px-5">
      {/* Section Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        About Me
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-white/10 rounded-lg shadow-md">
        {/* Left Section - Profile Details */}
        <div className="text-sm md:text-md lg:text-lg text-white bg-transparent p-10 rounded-lg text-justify leading-relaxed">
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
      <div className="flex justify-center space-x-4 mb-4 text-sm md:text-md lg:text-lg">
        <button
          className={`px-4 py-2 rounded-md transition ${
            activeTab === "skills" ? "bg-purple-700 text-white font-bold "  : "bg-gray-200 hover:bg-purple-500 text-gray-700 font-bold "
          }`}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
        <button
          className={`px-4 py-2 rounded-md transition ${
            activeTab === "education" ? "bg-purple-700  text-white font-bold " : "bg-gray-200 hover:bg-purple-500 text-gray-700 font-bold "
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>

      {/* Content Section with Fixed Height */}
      <div className="text-sm md:text-md lg:text-lg text-white text-center min-h-[200px] flex items-left justify-center ">
        {/* Skills Section */}
        {activeTab === "skills" && (
          <div>
            <ul className="mt-2 list-disc list-inside text-left pl-5 sm:pl-20 leading-relaxed">
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
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] sm:-left-[6px]"></div>
                <p className="font-bold text-lg">HND in Software Engineering</p>
                <p className="text-gray-300">ESOFT Metro Campus (2023 - 2025)</p>
              </div>
              <div>
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] sm:-left-[6px]"></div>
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
    );
}