"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className= {` ${ hidden ? "-translate-y-16" : "translate-y-0" } 
    fixed font-bold font-orb top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[800px] bg-white/10 backdrop-blur-lg border border-white/10 shadow-md rounded-3xl py-4 px-10 z-50 transition-transform duration-300
    `} >
      {/* Hamburger Button (visible on small screens) */}
      <div className="md:hidden flex justify-end">
        <button
          className="text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`md:block ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-6 text-white  mt-4 md:mt-0">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`px-4 py-2 transition-all duration-300 ${
                  activeSection === section
                    ? "underline underline-offset-8 decoration-green-500"
                    : "hover:underline hover:underline-offset-8 hover:decoration-white/50"
                }`}
                onClick={() => setIsMenuOpen(false)} // close menu on click (mobile)
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
