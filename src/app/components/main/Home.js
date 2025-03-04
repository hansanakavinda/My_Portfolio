"use client";


import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

export default function Home( {scrollToChatBot} ) {

    return(
        <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-center bg-white/0 leading-relaxed relative px-8 text-center md:text-left gap-4 ">
  <div className="flex flex-col items-center md:items-start ">
    <p className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
      Hi, I'm
    </p>
    <h1 className="text-4xl md:text-6xl lg:text-8xl font-raj font-bold mt-6 tracking-widest text-white-300 neon-text futuristic-text-glitch">
      Hansana Kavinda
    </h1>
    <p className="text-2xl md:text-4xl lg:text-5xl font-bold mt-6 tracking-widest bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent h-20 ">
      <Typewriter
        words={["A Software Engineer", "A Web Developer"]}
        loop={0}
        cursor
        cursorStyle=""
        typeSpeed={150}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </p>
  </div>
  
  <div className="flex flex-col items-center justify-center md:mt-0">
    <div className="relative w-40 h-40 md:w-60 md:h-60 lg:w-[350px] lg:h-[350px] rounded-full bg-radial">
      <div className="w-full h-full bg-black/20 rounded-full flex items-center justify-center">
        <Image
          src="/pf.png"
          alt="Profile Picture"
          width={250}
          height={250}
          className="rounded-full md:w-[350px] md:h-[350px]"
        />
      </div>
    </div>
  </div>
  
  {/* Ask Me Anything button */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-auto">
    <button className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-lg font-bold text-white bg-white/10 hover:bg-purple-700 rounded-full shadow-lg hover:scale-105 transition"
      onClick={scrollToChatBot}>
      Ask Me Anything
    </button>
  </div>
</section>
    );
}