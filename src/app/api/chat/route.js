import { NextResponse } from "next/server";

const customResponses = {
    "hi": "Hello!",
    "who are you": "I'm KaviBot. An AI assistant.",
    "what is your name": "My name is KaviBot.",
    "who is your creator": "I was created by Kavinda, a Data Science undergraduate.",
    "who created you": "I was created by Kavinda, a Data Science undergraduate.",
    "what is kavinda studying": "Kavinda is pursuing an HND in Software Engineering at ESOFT Metro Campus.",
    "what are kavinda's skills": "Kavinda has skills in Python, SQL, C#, PHP, teamwork, problem-solving, and critical thinking.",
    "what is kavinda working on": "Currently, Kavinda is working on a sentiment analysis project in the NLP domain using deep learning.",
};

const checkCustomResponse = (question) => {
    const normalizedQuestion = question.toLowerCase().trim();
    return customResponses[normalizedQuestion] || null;
};


export async function POST(req) {
    try {
        const body = await req.json();
        console.log("Received request body:", body);

        const prompt = body?.message;
        if (!prompt) {
            console.error("No prompt received");
            return NextResponse.json({ error: "No prompt provided" }, { status: 400 });
        }

        console.log("Received prompt:", prompt);

        const customReply = checkCustomResponse(prompt);
        if (customReply) {
            return NextResponse.json({ reply: customReply });
        }

        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "deepseek-r1:1.5b",
                prompt: prompt,
                stream: false,
            }),
        });

        console.log("Ollama API status:", response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Ollama API Error:", errorText);
            return NextResponse.json({ error: `Ollama API error: ${errorText}` }, { status: 500 });
        }

        const data = await response.json();
        console.log("Ollama Response:", data);

        // ✅ Remove ALL <think> tags and their content
        let botReply = data.response?.trim() || "I'm not sure how to respond to that.";
        botReply = botReply.replace(/<think>.*?<\/think>/gis, "").trim(); // Handles multi-line cases

        return NextResponse.json({ reply: botReply });
    } catch (error) {
        console.error("Server Error:", error.message);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
