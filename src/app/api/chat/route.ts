import { GoogleGenAI } from "@google/genai";
import { NextRequest } from "next/server";
import { getRelevantContext } from "@/lib/portfolio";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
const MODEL = process.env.GEMINI_MODEL ?? "gemini-2.5-flash-lite";

const ASSISTANT_NAME = "Rustam's Assistant";

const BASE_SYSTEM_PROMPT = `You are ${ASSISTANT_NAME}, the AI assistant on Muhammad Rustam's portfolio website.
Muhammad Rustam is an ML & Agentic AI Engineer based in Karachi, Pakistan, currently at AI by Tec. His headline is "I design AI systems that replace human workflows."
He specializes in Machine Learning, Agentic AI, Chatbot Development, Deep Learning, Computer Vision, and n8n workflow automation.
Answer using ONLY the context provided below — be concise (2-4 sentences) and conversational.
If the answer is not in the context, say you don't have that detail and suggest visiting the Contact page.
For hiring inquiries or project collaborations, direct users to the Contact page or shomi125expert@gmail.com.
Only answer questions about Rustam, his skills, projects, and availability — for anything else say: "I'm here to answer questions about Muhammad Rustam's AI/ML work. Feel free to ask about his projects, skills, or availability!"`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages ?? [];

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid messages" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const lastMessage = messages[messages.length - 1].content;
    const context = getRelevantContext(lastMessage);
    const systemPrompt = `${BASE_SYSTEM_PROMPT}\n\n---\n${context}\n---`;

    const history = messages.slice(0, -1).map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const chat = ai.chats.create({
      model: MODEL,
      config: {
        systemInstruction: systemPrompt,
        maxOutputTokens: 1024,
      },
      history,
    });

    const stream = await chat.sendMessageStream({ message: lastMessage });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.text;
            if (text) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err) {
    console.error("[/api/chat]", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
