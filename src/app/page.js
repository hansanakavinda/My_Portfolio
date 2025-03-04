"use client";

import { useRef } from "react";

import Chatbot from "./components/chatbot";
import Home from "./components/main/Home";
import About from "./components/main/About";
import Projects from "./components/main/Projects";
import Contacts from "./components/main/Contact";
import Footer from "./components/Footer";


export default function Main() {

  const chatBotRef = useRef(null);

    const scrollToChatBot = () => {
      if (chatBotRef.current) {
        chatBotRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

  return (
    <div>
<div> <Home scrollToChatBot = {scrollToChatBot}/></div>
<div> <About/></div>
<div> <Projects/></div>
<div> <Contacts/></div>
<div ref={chatBotRef} ><Chatbot /></div>
<div> <Footer/></div>
  </div>
    
  );
}
