"use client";
import { Loader2, SendHorizonal, Linkedin, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";

const ContactContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error();
      toast.success("Message sent! I'll get back to you soon.");
      setName(""); setEmail(""); setMessage("");
    } catch {
      toast.error("Failed to send. Please email shomi125expert@gmail.com directly.");
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-hidden">
      <Spotlight className="-top-40 right-0 md:right-40" fill="#8b5cf6" />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: `radial-gradient(rgba(139,92,246,0.9) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
      />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(139,92,246,0.08),transparent)]" />

      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* Left panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center px-8 md:px-16 pt-28 pb-12 lg:pt-0 lg:pb-0 border-b lg:border-b-0 lg:border-r border-white/5"
        >
          <div className="max-w-md">
            <p className="text-violet-400 font-mono text-xs tracking-[0.2em] uppercase mb-6">
              // contact.py
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
              {"Let's build"}
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                something smart.
              </span>
            </h1>
            <p className="text-slate-400 text-base leading-relaxed mb-10">
              Open to ML engineering roles, Agentic AI projects, chatbot development,
              and AI consulting work. Based in Karachi — available for remote opportunities worldwide.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: <Mail size={16} />, label: "shomi125expert@gmail.com", href: "mailto:shomi125expert@gmail.com" },
                { icon: <MapPin size={16} />, label: "Karachi, Sindh, Pakistan", href: null },
                { icon: <Clock size={16} />, label: "Available Mon–Fri", href: null },
              ].map(({ icon, label, href }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-slate-400">
                  <span className="text-violet-400">{icon}</span>
                  {href ? (
                    <a href={href} className="hover:text-violet-400 transition-colors">{label}</a>
                  ) : (
                    <span>{label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { href: "https://linkedin.com/in/artificialintelligenceagentbuilderexpert", icon: <Linkedin size={16} />, label: "LinkedIn" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2 rounded-xl border border-white/8 bg-white/[0.03] text-slate-400 hover:text-white hover:border-violet-500/30 text-sm font-medium transition-all"
                >
                  {icon} {label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 font-medium">Currently available</span>
              <span className="text-slate-600">— response within 24h</span>
            </div>
          </div>
        </motion.div>

        {/* Right panel — form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-center px-8 md:px-16 py-12 lg:py-0"
        >
          <div className="max-w-md w-full mx-auto lg:mx-0">
            <h2 className="text-xl font-bold text-white mb-8">Send a message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] text-white placeholder:text-slate-700 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] text-white placeholder:text-slate-700 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your project, role, or idea..."
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] text-white placeholder:text-slate-700 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.05] transition-all resize-none text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-violet-600/25 hover:shadow-violet-500/35 hover:scale-[1.01]"
              >
                {loading ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <>
                    <SendHorizonal size={16} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-600">
                No spam. Goes straight to Muhammad Rustam.
              </p>
            </form>
          </div>
        </motion.div>
      </div>

      <ToastContainer theme="dark" position="bottom-center" />
    </div>
  );
};

export default ContactContent;
