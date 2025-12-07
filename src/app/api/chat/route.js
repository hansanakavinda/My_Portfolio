import { NextResponse } from "next/server";
import { PERSONA_DATA } from "@/lib/personaData";

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

    const systemPrompt = `
You are an AI assistant for Hansana Kavinda's portfolio website. Your name is KaviBot.
Answer questions based on the following information about Hansana.
If the answer is not in the data, you can say you don't know or suggest contacting him directly.
Be professional, friendly, and concise.

PERSONA DATA:
${JSON.stringify(PERSONA_DATA, null, 2)}
    `;

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
          model: "openai/gpt-oss-20b:free",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt },
          ],
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
