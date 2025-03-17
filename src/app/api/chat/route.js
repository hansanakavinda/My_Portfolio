import { NextResponse } from "next/server";

const customResponses = {
  hi: "Hello!",
  "who are you": "I'm KaviBot. An AI assistant.",
  "what is your name": "My name is KaviBot.",
  "who is your creator":
    "I was created by Kavinda, a Data Science undergraduate.",
  "who created you": "I was created by Kavinda, a Data Science undergraduate.",
  "what is kavinda studying":
    "Kavinda is pursuing an HND in Software Engineering at ESOFT Metro Campus.",
  "what are kavinda's skills":
    "Kavinda has skills in Python, SQL, C#, PHP, teamwork, problem-solving, and critical thinking.",
  "what is kavinda working on":
    "Currently, Kavinda is working on a sentiment analysis project in the NLP domain using deep learning.",
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
      return NextResponse.json(
        { error: "No prompt provided" },
        { status: 400 }
      );
    }

    console.log("Received prompt:", prompt);

    // Check if it's a predefined response
    const customReply = checkCustomResponse(prompt);
    if (customReply) {
      return NextResponse.json({ reply: customReply });
    }

    console.log("API Key:", process.env.OPENROUTER_API_KEY);

    // Send request to OpenRouter AI
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        }),
      }
    );

    console.log("OpenRouter API status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter API Error:", errorText);
      return NextResponse.json(
        { error: `OpenRouter API error: ${errorText}` },
        { status: 500 }
      );
    }

    const data = await response.json();
    console.log("OpenRouter Response:", data);

    // Extract the reply from the response
    let botReply =
      data.choices?.[0]?.message?.content?.trim() ||
      "I'm not sure how to respond to that.";

    return NextResponse.json({ reply: botReply });
  } catch (error) {
    console.error("Server Error:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
