"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";  // Corrected import
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-screen z-0"
    style={{ pointerEvents: "none" }} // Ensures particles do not interfere with other content
  >
        <Particles
    init={particlesInit}
    options={{ 
        background: {
          color: "transparent", // Transparent background to blend with the page
        },
        particles: {
          number: {
            value: 60, // Number of particles
          },
          size: {
            value: 3, random: true// Particle size
          },
          move: { enable: true,
            speed: 3, // Movement speed
          },
          color: {
            value: ["#8a2be2", "#8400ff", "#8f00ff"] // Purple color  
          },
          opacity: {
            value: 0.3, // Slightly transparent particles
          },
          line_linked: { enable: true, distance: 200, color: "#8a2be2", opacity: 0.7 },
          shadow: { enable: true, color: "#8a2be2", blur: 10 }

        },
        
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 200, // Reduce this to make the effect area smaller
              duration: 0.4, // Reduce for a quicker repulse effect
              speed: 0.5, // Increase to make particles move away faster
            },
          },
        },
      }}
  /></div>
    
  );
}
