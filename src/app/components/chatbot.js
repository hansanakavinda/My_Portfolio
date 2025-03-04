"use client";
import { useState, useEffect, useRef } from "react";

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);
    const chatContainerRef = useRef(null); // Reference to chat container

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");
        setIsExpanded(false);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });

            const data = await res.json();

            if (!data.reply) {
                console.error("No response received from API");
                return;
            }

            const botMessage = { role: "bot", content: data.reply };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Scroll to bottom when messages update
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="relative text-sm md:text-md lg:text-lg">
            <div className="relative w-full max-w-3xl mx-auto p-4 m-8 bg-white/5 text-white rounded-lg shadow-lg   ">
            {/* Chatbot Messages */}
            <div 
                ref={chatContainerRef} 
                className="h-60 overflow-y-auto space-y-4 mb-4 text-justify p-4"
            >
                {messages.map((msg, index) => (
                    <div 
                        key={index} 
                        className={`flex ${msg.role === "user" ? "justify-end" : ""}`}
                    >
                        <p
                        
                            className={` 
                                ${msg.role === "user" && msg.content.trim() ? "bg-purple-700 text-white p-2 inline-block rounded-lg" : ""}
                                ${msg.role === "bot" && msg.content.trim() ? "bg-gray-700 text-white p-2 mr-8 inline-block rounded-lg" : ""}
                            `}
                        >
                            <strong>{msg.role === "user" ? "You: " : "Bot: "}</strong> {msg.content}
                        </p>
                    </div>
                ))}
            </div>

            {/* Input and Send Button */}
            <div className="flex items-center space-x-2 w-full">
                <input
                    className="flex-1 p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        setIsExpanded(e.target.value.trim() !== ""); // Expand only if user types
                    }}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Ask me anything..."
                />
                <button
                    className="bg-purple-800 px-4 py-2 rounded-lg text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    onClick={sendMessage}
                >
                    Send
                </button>
            </div>
        </div>
        </div>
    );
}
