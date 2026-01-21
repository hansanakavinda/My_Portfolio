"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "John Doe",
        role: "Senior Developer at TechCrop",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        quote: "Hansana is an exceptional developer with a keen eye for detail. His work on our internal tools significantly improved our team's productivity."
    },
    {
        name: "Sarah Smith",
        role: "Project Manager at CreativeStudio",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        quote: "Working with Hansana was a pleasure. He delivered the project ahead of schedule and the quality of code was top-notch."
    },
    {
        name: "Michael Chen",
        role: "CTO at StartUp Inc",
        image: "https://randomuser.me/api/portraits/men/86.jpg",
        quote: "Hansana's understanding of both frontend and backend technologies makes him a versatile asset to any engineering team."
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                        Testimonials
                    </h2>
                    <p className="text-gray-400 text-lg">
                        What others say about working with me.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl relative hover:bg-white/10 transition-colors"
                        >
                            <Quote className="absolute top-8 right-8 text-purple-500/20" size={48} />

                            <p className="text-gray-300 italic mb-6 leading-relaxed relative z-10">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">{t.name}</h4>
                                    <p className="text-xs text-purple-400">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
