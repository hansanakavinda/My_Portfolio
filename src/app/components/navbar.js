"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setHidden(true); // Hide navbar when scrolling down
      } else {
        setHidden(false); // Show navbar when scrolling up
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if at the bottom of the page - activate last section
      if (window.scrollY + windowHeight >= documentHeight - 50) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      // Check if at the top of the page - activate first section
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      // Find the section that is currently most visible in the viewport
      let currentSection = "home";
      let minDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Calculate distance from the top of viewport (accounting for navbar)
          const distance = Math.abs(rect.top - 100);

          // If section top is above or at viewport top and is closer than previous
          if (rect.top <= windowHeight * 0.5 && distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={` ${hidden ? "-translate-y-16" : "translate-y-0"} 
    fixed font-bold font-orb top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[800px] bg-white/10 backdrop-blur-lg border border-white/10 shadow-md rounded-3xl py-4 px-10 z-50 transition-transform duration-300
    `} >
      <div className="flex justify-between items-center md:block">
        {/* Hamburger Button (visible on small screens) */}
        <div className="md:hidden flex justify-end w-full items-center gap-4">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex justify-between items-center">
          <ul className="flex flex-row justify-between items-center space-x-6 text-white w-full justify-center">
            {["home", "about", "projects", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`px-4 py-2 transition-all duration-300 ${activeSection === section
                    ? "underline underline-offset-8 decoration-green-500"
                    : "hover:underline hover:underline-offset-8 hover:decoration-white/50"
                    }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navigation Menu (Animated) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center space-y-4 text-white mt-4 pb-4">
              {["home", "about", "projects", "contact"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={`block px-4 py-2 transition-all duration-300 ${activeSection === section
                      ? "text-purple-400 font-bold"
                      : "hover:text-purple-300"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
