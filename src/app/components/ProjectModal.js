"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ProjectModal({ project, isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && project && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1a0b2e] border border-white/10 rounded-2xl shadow-2xl custom-scrollbar"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
                        >
                            <X size={20} />
                        </button>

                        {/* Modal Body */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
                            {/* Media Section */}
                            <div className="relative h-64 md:h-full min-h-[300px] bg-black/50">
                                {project.video ? (
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <Image
                                        src={project.image}
                                        alt={project.projectName}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-transparent to-transparent md:bg-gradient-to-r" />
                            </div>

                            {/* Content Section */}
                            <div className="p-8 space-y-6">
                                <div>
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                                        {project.projectName}
                                    </h2>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags?.map((tag, idx) => (
                                            <span key={idx} className="text-xs font-medium px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">The Problem</h3>
                                        <p className="text-sm leading-relaxed">
                                            {project.problem || "Information about the problem solved by this project will be added here."}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">The Solution</h3>
                                        <p className="text-sm leading-relaxed">
                                            {project.solution || "Details about the technical solution and architecture."}
                                        </p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-4 pt-6 mt-auto">
                                    {project.githublink && (
                                        <a
                                            href={project.githublink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold transition-all border border-white/10 hover:border-white/30"
                                        >
                                            <Github size={18} /> Source Code
                                        </a>
                                    )}
                                    {project.demolink && (
                                        <a
                                            href={project.demolink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all shadow-lg shadow-purple-900/30"
                                        >
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
