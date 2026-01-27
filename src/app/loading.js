"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-[#0e041b] z-[9999] fixed inset-0">
            <motion.div
                className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
}
