import { Geist, Geist_Mono, Press_Start_2P, Orbitron, Rajdhani } from "next/font/google";
import "../globals.css";

import Navbar from "./components/navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import Poke from "./components/pokemon";
import DynamicBackground from "./components/DynamicBackground";
import FlipCard from './components/Flipcard';


// Existing fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add Press Start 2P
const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  subsets: ["latin"],
  weight: "400", // Only "400" is available for this font
});

const orbitron = Orbitron({ variable: "--font-orb", weight: ['400', '700'], subsets: ['latin'] });
const rajdhani = Rajdhani({ variable: "--font-raj", weight: ['400', '700'], subsets: ['latin'] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${pressStart.variable} ${orbitron.variable} ${rajdhani.variable} relative font-mono`}>
        
        <Navbar />
        <DynamicBackground/>
       
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
