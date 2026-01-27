"use client";

import { motion } from "framer-motion";
import { SiPython, SiMysql, SiPhp, SiOpencv, SiPytorch, SiPandas, SiNumpy, SiScikitlearn, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiTensorflow, SiJavascript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaUniversity, FaBriefcase, FaBrain, FaCode } from "react-icons/fa";
import Image from "next/image";

const BentoCard = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className={`bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors duration-300 flex flex-col ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default function BentoGrid() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center p-4 py-20">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-[auto] gap-4">

                {/* 1. Header / Intro (Span 2 cols) */}
                <BentoCard className="md:col-span-2 lg:col-span-2 row-span-1 justify-center space-y-4">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        I'm <span className="font-bold text-white">Hansana Kavinda</span>, a Data Science undergraduate at ESOFT Metro Campus.
                        I bridge the gap between <span className="text-purple-300">Web Development</span> and <span className="text-blue-300">Artificial Intelligence</span>, creating intelligent applications that solve real-world problems.
                    </p>
                </BentoCard>

                {/* 2. Profile Image & Status (Span 1 col) */}
                <BentoCard className="md:col-span-1 row-span-2 relative overflow-hidden group p-0">
                    <Image
                        src="/pf.png"
                        alt="Profile"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        <span className="flex items-center gap-2 text-xs font-bold text-green-400">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Open to Work
                        </span>
                    </div>
                </BentoCard>

                {/* 3. My Journey / Philosophy (New Card - Replaces Socials) */}
                <BentoCard className="lg:col-span-1 row-span-2 bg-gradient-to-b from-purple-900/20 to-blue-900/20 justify-center">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <FaBrain className="text-purple-400" /> My Philosophy
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        I believe in the power of data to drive decisions and the elegance of code to build solutions. My journey started with simple scripts and evolved into complex machine learning models and full-stack applications. I am constantly learning and adapting to the latest tech trends.
                    </p>
                </BentoCard>

                {/* 4. AI & Data Science Stack (Span 2 cols) */}
                <BentoCard className="md:col-span-2 lg:col-span-2 row-span-1 space-y-4" delay={0.2}>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <FaBrain className="text-blue-400" /> AI & Data Science
                    </h3>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 text-center">
                        {[
                            { Icon: SiPython, color: "text-yellow-400", name: "Python" },
                            { Icon: SiPytorch, color: "text-orange-500", name: "PyTorch" },
                            { Icon: SiTensorflow, color: "text-orange-400", name: "TensorFlow" },
                            { Icon: SiScikitlearn, color: "text-orange-300", name: "Sklearn" },
                            { Icon: SiOpencv, color: "text-green-400", name: "OpenCV" },
                            { Icon: SiPandas, color: "text-white", name: "Pandas" },
                            { Icon: SiNumpy, color: "text-blue-300", name: "NumPy" },
                        ].map((skill, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 group">
                                <skill.Icon className={`text-2xl ${skill.color} group-hover:scale-125 transition-transform`} />
                                <span className="text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </BentoCard>

                {/* 5. Web & Software Dev Stack (New Card - Replaces Location/Socials mix) */}
                <BentoCard className="md:col-span-2 lg:col-span-2 row-span-1 space-y-4" delay={0.3}>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <FaCode className="text-purple-400" /> Web & Software Dev
                    </h3>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 text-center">
                        {[
                            { Icon: SiReact, color: "text-cyan-400", name: "React" },
                            { Icon: SiNextdotjs, color: "text-white", name: "Next.js" },
                            { Icon: SiTailwindcss, color: "text-cyan-300", name: "Tailwind" },
                            { Icon: SiJavascript, color: "text-yellow-300", name: "JavaScript" },
                            { Icon: SiNodedotjs, color: "text-green-500", name: "Node.js" },
                            { Icon: TbBrandCSharp, color: "text-purple-500", name: "C#" },
                            { Icon: SiMysql, color: "text-blue-500", name: "SQL" },
                            { Icon: SiPhp, color: "text-indigo-400", name: "PHP" },
                        ].map((skill, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 group">
                                <skill.Icon className={`text-2xl ${skill.color} group-hover:scale-125 transition-transform`} />
                                <span className="text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </BentoCard>


                {/* 6. Education (Span 4 cols - Full Width) */}
                <BentoCard className="md:col-span-3 lg:col-span-2 row-span-1" delay={0.4}>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <FaUniversity className="text-blue-400" /> Education
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex justify-between items-center border-b border-white/10 pb-4 md:border-b-0 md:border-r md:pr-6">
                            <div>
                                <h4 className="font-bold text-white text-lg">BSc (Hons) Data Science</h4>
                                <p className="text-sm text-gray-400">ESOFT Metro Campus (Kingston University)</p>
                            </div>
                            <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">2025 - Present</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="font-bold text-white text-lg">HND in Software Engineering</h4>
                                <p className="text-sm text-gray-400">ESOFT Metro Campus (Pearson BTEC)</p>
                            </div>
                            <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">2023 - 2025</span>
                        </div>
                    </div>
                </BentoCard>

            </div>
        </section>
    );
}
