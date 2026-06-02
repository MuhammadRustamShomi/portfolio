"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Bot, Trash2, Loader2, Mic, MicOff, CheckCircle2 } from "lucide-react";
import { TbMessageChatbotFilled } from "react-icons/tb";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

type ContactStep = null | "name" | "email" | "message" | "sending" | "done";

interface ContactData {
  name: string;
  email: string;
  message: string;
}

// ── Speech Recognition type shim ──────────────────────────────────────────────

interface ISpeechRecognition extends EventTarget {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  onresult: ((e: ISpeechRecognitionEvent) => void) | null;
}

interface ISpeechRecognitionEvent {
  results: { [index: number]: { [index: number]: { transcript: string } } };
}

declare global {
  interface Window {
    SpeechRecognition: new () => ISpeechRecognition;
    webkitSpeechRecognition: new () => ISpeechRecognition;
  }
}

// ── Constants ─────────────────────────────────────────────────────────────────

const ASSISTANT_NAME = "Rustam's Assistant";

const STARTER_PROMPTS = [
  "What Agentic AI projects has Rustam built?",
  "What is Rustam's AI tech stack?",
  "Is Rustam available for hire?",
];

const CONTACT_INTENT_RE =
  /\b(contact|hire|reach|email|message|get in touch|work with|collaborate|send.*message|start.*project|inquiry|available|role|opportunity)\b/i;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── Component ─────────────────────────────────────────────────────────────────

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);

  const [contactStep, setContactStep] = useState<ContactStep>(null);
  const [contactData, setContactData] = useState<ContactData>({ name: "", email: "", message: "" });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // ── Effects ───────────────────────────────────────────────────────────────

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    if (isOpen) inputRef.current?.focus();
  }, [messages, isOpen]);

  useEffect(() => {
    return () => { recognitionRef.current?.abort(); };
  }, []);

  // ── Helpers ───────────────────────────────────────────────────────────────

  function addAssistantMessage(content: string) {
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content }]);
  }

  function addUserMessage(content: string) {
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "user", content }]);
  }

  // ── Voice Input ───────────────────────────────────────────────────────────

  const toggleVoice = useCallback(() => {
    const SR = window.SpeechRecognition ?? window.webkitSpeechRecognition;
    if (!SR) {
      addAssistantMessage("Sorry, your browser doesn't support voice input. Try Chrome or Edge.");
      return;
    }
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }
    const rec = new SR();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onstart = () => setIsListening(true);
    rec.onresult = (e: ISpeechRecognitionEvent) => {
      setInput(e.results[0][0].transcript);
      setIsListening(false);
    };
    rec.onerror = () => setIsListening(false);
    rec.onend = () => setIsListening(false);
    recognitionRef.current = rec;
    rec.start();
  }, [isListening]);

  // ── Contact Flow ──────────────────────────────────────────────────────────

  function startContactFlow() {
    setContactStep("name");
    setContactData({ name: "", email: "", message: "" });
    addAssistantMessage("Sure! I'll help you send Rustam a message. 📩\n\nFirst, what's your name?");
  }

  async function handleContactStep(text: string) {
    addUserMessage(text);
    setInput("");

    if (contactStep === "name") {
      setContactData((d) => ({ ...d, name: text }));
      setContactStep("email");
      addAssistantMessage(`Nice to meet you, ${text}! 👋\n\nWhat's your email address?`);
      return;
    }

    if (contactStep === "email") {
      if (!EMAIL_RE.test(text)) {
        addAssistantMessage("That doesn't look like a valid email. Please try again.");
        return;
      }
      setContactData((d) => ({ ...d, email: text }));
      setContactStep("message");
      addAssistantMessage("Got it! Now describe your project, role, or inquiry:");
      return;
    }

    if (contactStep === "message") {
      const finalData = { ...contactData, message: text };
      setContactData(finalData);
      setContactStep("sending");
      addAssistantMessage("Sending your message to Rustam... ⏳");

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: finalData.name,
            email: finalData.email,
            message: finalData.message,
          }),
        });
        if (!res.ok) throw new Error();
        setContactStep("done");
        addAssistantMessage(
          `✅ Message sent, ${finalData.name}! Rustam will reply to ${finalData.email} within 24 hours.\n\nAnything else I can help you with?`
        );
      } catch {
        setContactStep(null);
        addAssistantMessage(
          "❌ Something went wrong. Please try the Contact page directly or email shomi125expert@gmail.com"
        );
      }
      return;
    }

    setContactStep(null);
    sendToAI(text);
  }

  // ── AI Chat ───────────────────────────────────────────────────────────────

  async function sendToAI(trimmed: string) {
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: trimmed };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setIsLoading(true);

    const assistantId = crypto.randomUUID();
    setMessages((prev) => [...prev, { id: assistantId, role: "assistant", content: "" }]);

    abortRef.current = new AbortController();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated.map(({ role, content }) => ({ role, content })) }),
        signal: abortRef.current.signal,
      });

      if (!res.ok) throw new Error("API error");

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const lines = decoder.decode(value).split("\n");
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") break;
          try {
            const delta = JSON.parse(data).text;
            if (delta) {
              setMessages((prev) =>
                prev.map((m) => m.id === assistantId ? { ...m, content: m.content + delta } : m)
              );
              if (!isOpen) setHasUnread(true);
            }
          } catch { /* ignore malformed chunks */ }
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") return;
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId ? { ...m, content: "Sorry, something went wrong. Please try again." } : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  }

  // ── Main send handler ─────────────────────────────────────────────────────

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    setInput("");
    if (contactStep && contactStep !== "done") { handleContactStep(trimmed); return; }
    if (CONTACT_INTENT_RE.test(trimmed)) { addUserMessage(trimmed); startContactFlow(); return; }
    sendToAI(trimmed);
  }

  function clearChat() {
    abortRef.current?.abort();
    recognitionRef.current?.abort();
    setMessages([]);
    setIsLoading(false);
    setIsListening(false);
    setContactStep(null);
    setContactData({ name: "", email: "", message: "" });
  }

  const placeholder =
    contactStep === "name" ? "Enter your name..." :
    contactStep === "email" ? "Enter your email..." :
    contactStep === "message" ? "Describe your project or inquiry..." :
    "Ask about Rustam's ML work...";

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Floating Toggle Button ── */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <AnimatePresence>
          {hasUnread && !isOpen && (
            <motion.div
              initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 z-10"
            />
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen((v) => !v)}
          whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }}
          aria-label={isOpen ? "Close chat" : "Open chat"}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-xl shadow-violet-600/40 flex items-center justify-center border border-violet-400/30 hover:shadow-violet-500/60 transition-shadow duration-300"
        >
          {!isOpen && <span className="absolute inset-0 rounded-full bg-violet-500/30 animate-ping" />}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <TbMessageChatbotFilled size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed z-50 flex flex-col rounded-2xl border border-violet-500/20 bg-[#0a0f1e]/95 backdrop-blur-2xl shadow-2xl shadow-black/60 overflow-hidden left-3 right-3 bottom-20 sm:left-auto sm:right-6 sm:bottom-24 sm:w-[380px] h-[min(520px,72vh)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-gradient-to-r from-violet-600/15 to-transparent shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-600/30">
                  <Bot size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-none">{ASSISTANT_NAME}</p>
                  <p className="text-xs text-violet-400 mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button onClick={clearChat} title="Clear chat" className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-red-500 hover:bg-red-500/10 transition-all duration-200">
                    <Trash2 size={15} />
                  </button>
                )}
                <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/8 transition-all duration-200">
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Contact step indicator */}
            <AnimatePresence>
              {contactStep && contactStep !== "done" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                  className="px-4 py-2 bg-violet-500/10 border-b border-violet-500/20 shrink-0"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-violet-400 font-medium">Sending message to Rustam</p>
                    <div className="flex items-center gap-1.5">
                      {(["name", "email", "message"] as const).map((step, i) => (
                        <div key={step} className={`w-5 h-1.5 rounded-full transition-all duration-300 ${
                          contactStep === step ? "bg-violet-500" :
                          i < ["name", "email", "message"].indexOf(contactStep === "sending" ? "message" : contactStep) ? "bg-violet-700" :
                          "bg-white/10"
                        }`} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-5 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    <Bot size={26} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{"Hi! I'm"} {ASSISTANT_NAME}</p>
                    <p className="text-slate-500 text-xs mt-1">Ask me about Rustam's ML work</p>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    {STARTER_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => sendMessage(prompt)}
                        className="text-xs text-left px-3 py-2.5 rounded-xl border border-white/8 bg-white/[0.03] text-slate-400 hover:text-violet-400 hover:border-violet-500/30 hover:bg-violet-500/8 transition-all duration-200"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                      {msg.role === "assistant" && (
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                          {contactStep === "done" ? <CheckCircle2 size={13} className="text-white" /> : <Bot size={13} className="text-white" />}
                        </div>
                      )}
                      <div className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line break-words overflow-hidden ${
                        msg.role === "user"
                          ? "bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-tr-sm shadow-lg shadow-violet-600/20"
                          : "bg-white/[0.05] text-slate-200 border border-white/8 rounded-tl-sm"
                      }`}>
                        {msg.content === "" && msg.role === "assistant" ? (
                          <span className="flex items-center gap-1 py-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:0ms]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:150ms]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:300ms]" />
                          </span>
                        ) : msg.content}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-white/[0.06] bg-white/[0.02] shrink-0">
              <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} className="flex items-end gap-2">
                <button
                  type="button" onClick={toggleVoice}
                  title={isListening ? "Stop listening" : "Voice input"}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isListening
                      ? "bg-red-500/20 border border-red-500/50 text-red-500 animate-pulse"
                      : "bg-white/[0.04] border border-white/8 text-slate-500 hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-500/8"
                  }`}
                >
                  {isListening ? <MicOff size={16} /> : <Mic size={16} />}
                </button>

                <textarea
                  ref={inputRef} rows={1} value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    e.target.style.height = "auto";
                    e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage(input);
                      e.currentTarget.style.height = "auto";
                    }
                  }}
                  placeholder={placeholder}
                  disabled={isLoading || contactStep === "sending"}
                  className="flex-1 bg-white/[0.04] border border-white/8 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all duration-200 disabled:opacity-50 resize-none overflow-y-auto leading-5"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isLoading || contactStep === "sending"}
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all duration-200 hover:scale-105 active:scale-95 shrink-0 shadow-lg shadow-violet-600/20"
                >
                  {isLoading || contactStep === "sending" ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
