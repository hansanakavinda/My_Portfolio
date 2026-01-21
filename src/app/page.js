"use client";

import { useRef } from "react";

import Chatbot from "./components/chatbot";
import Home from "./components/main/Home";
import BentoGrid from "./components/main/BentoGrid";
import Projects from "./components/main/Projects";
import Testimonials from "./components/main/Testimonials";
import Contacts from "./components/main/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";


export default function Main() {

  const chatBotRef = useRef(null);

  const scrollToChatBot = () => {
    if (chatBotRef.current) {
      chatBotRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative bg-[#0e041b] overflow-hidden">
      <div className="relative z-10">
        <Home scrollToChatBot={scrollToChatBot} />
      </div>

      <div className="relative z-10 pt-20">
        <BentoGrid />
      </div>

      <div className="relative z-10">
        <Projects />
      </div>

      <div className="relative z-10">
        <Testimonials />
        <Contacts />
      </div>

      <div ref={chatBotRef} ><Chatbot /></div>
      <BackToTop />
      <Footer />
    </div>

  );
}
