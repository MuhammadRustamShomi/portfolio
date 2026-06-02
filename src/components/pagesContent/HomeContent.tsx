"use client";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import TypewriterEffect from "@/components/TypewriterEffect";
import { Spotlight } from "@/components/ui/spotlight";

const stats = [
  { value: "3+", label: "Years in ML/AI" },
  { value: "10+", label: "Projects Delivered" },
  { value: "7", label: "Certifications" },
  { value: "500+", label: "Professional Network" },
];

const codeLines = [
  { text: "# Muhammad Rustam — AI Engineer", color: "text-slate-500" },
  { text: "import tensorflow as tf", color: "text-violet-400" },
  { text: "from agentic_ai import build_agent", color: "text-violet-400" },
  { text: "", color: "" },
  { text: "agent = build_agent('rustam/workflow-v2')", color: "text-slate-300" },
  { text: "result = agent.replace_human_task()", color: "text-slate-300" },
  { text: "", color: "" },
  { text: "print(result.status)  # 'deployed'", color: "text-emerald-400" },
];

const techRow1 = ["Python", "TensorFlow", "PyTorch", "LangChain", "FastAPI", "Agentic AI", "LLMs", "RAG", "n8n", "Docker", "AWS SageMaker", "OpenCV"];
const techRow2 = ["Prompt Engineering", "Generative AI", "Hugging Face", "Gemini API", "FAISS", "Pandas", "NumPy", "Deep Learning", "Computer Vision", "Machine Learning", "Git", "OpenAI API"];

const selectedWork = [
  {
    title: "Agentic AI Workflow Automation",
    desc: "Autonomous multi-step AI agent replacing manual business workflows end-to-end. LLMs + tool-calling + n8n orchestration.",
    tags: ["Agentic AI", "LLMs", "n8n", "FastAPI"],
    metric: "80%",
    metricLabel: "Tasks automated",
    accent: "violet",
    category: "Agentic AI",
  },
  {
    title: "Enterprise RAG Chatbot",
    desc: "Production chatbot with Retrieval-Augmented Generation for domain-specific Q&A. Vector search + LLM generation pipeline.",
    tags: ["RAG", "LangChain", "FAISS", "Generative AI"],
    metric: "RAG",
    metricLabel: "Architecture",
    accent: "cyan",
    category: "Chatbot Dev",
  },
  {
    title: "Computer Vision Detection",
    desc: "Deep learning object detection pipeline custom-trained on domain-specific datasets. TensorFlow + OpenCV + SageMaker.",
    tags: ["TensorFlow", "OpenCV", "Deep Learning", "AWS"],
    metric: "95%+",
    metricLabel: "Detection accuracy",
    accent: "purple",
    category: "Computer Vision",
  },
];

const accentMap: Record<string, { border: string; text: string; badge: string; bg: string }> = {
  violet: { border: "border-violet-500/25", text: "text-violet-400", badge: "bg-violet-500/10 text-violet-300", bg: "bg-violet-500/8" },
  cyan:   { border: "border-cyan-500/25",   text: "text-cyan-400",   badge: "bg-cyan-500/10 text-cyan-300",   bg: "bg-cyan-500/8"   },
  purple: { border: "border-purple-500/25", text: "text-purple-400", badge: "bg-purple-500/10 text-purple-300",bg: "bg-purple-500/8" },
};

export default function HomeContent() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-white overflow-hidden">

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden pt-20">
        <Spotlight className="-top-40 left-1/2 -translate-x-1/2" fill="#8b5cf6" />

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(139,92,246,1) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/8 text-violet-300 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              open to new opportunities
            </div>
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-violet-500/30 to-transparent" />
          </motion.div>

          {/* 3:2 grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

            {/* Left — text */}
            <div className="lg:col-span-3 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <p className="text-slate-500 font-mono text-sm mb-4 tracking-wider uppercase">
                  AI / Machine Learning Engineer
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
                  <span className="text-white">Muhammad</span>
                  <br />
                  <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                    Rustam
                  </span>
                </h1>
                <div className="mt-5 text-xl sm:text-2xl font-semibold text-slate-400 min-h-[2rem]">
                  <TypewriterEffect />
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="text-slate-400 text-lg leading-relaxed max-w-lg"
              >
                I design AI systems that replace human workflows. Building ML models,
                Agentic AI solutions, and intelligent chatbots that ship to production
                at AI by Tec, Karachi.
              </motion.p>

              {/* CTAs + socials */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-violet-600/30 hover:shadow-violet-500/40 hover:scale-105"
                >
                  Explore Projects
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-slate-300 hover:text-white text-sm font-medium border border-white/10 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-200"
                >
                  Get In Touch
                </Link>

                <div className="flex items-center gap-2 ml-auto sm:ml-0">
                  {[
                    { href: "https://linkedin.com/in/artificialintelligenceagentbuilderexpert", icon: <Linkedin size={18} />, label: "LinkedIn" },
                    { href: "mailto:shomi125expert@gmail.com", icon: <Mail size={18} />, label: "Email" },
                  ].map(({ href, icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/8 bg-white/[0.03] text-slate-500 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-200"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — terminal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-xl border border-violet-500/20 bg-[#080e1c] overflow-hidden shadow-2xl shadow-violet-900/20">
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5 bg-white/[0.015]">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-[10px] text-slate-600 font-mono">~/ai/agent_builder.py</span>
                </div>
                <div className="p-5 font-mono text-xs sm:text-sm leading-6 space-y-0.5">
                  {codeLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 + i * 0.07 }}
                      className={line.color || "h-3"}
                    >
                      {line.text || ""}
                    </motion.div>
                  ))}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="inline-block w-2 h-4 bg-violet-400 cursor-blink align-middle"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-1.5 border-t border-white/5 bg-white/[0.01] text-[10px] font-mono text-slate-700">
                  <span className="text-emerald-600">● Python 3.11</span>
                  <span>TensorFlow 2.x</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5"
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-[#030712] px-6 py-5 text-center hover:bg-violet-500/5 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {value}
                </div>
                <div className="text-slate-500 text-xs mt-1 font-medium">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="relative py-12 overflow-hidden border-y border-white/[0.04] bg-white/[0.012]">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
        <p className="text-center text-[10px] font-mono text-slate-600 tracking-[0.25em] uppercase mb-5">
          Tech Stack
        </p>
        <div className="space-y-3">
          <div className="flex gap-3 animate-marquee w-max">
            {[...techRow1, ...techRow1].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/[0.025] text-slate-400 text-xs font-medium whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400/60 shrink-0" />
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-3 animate-marquee-slow w-max">
            {[...techRow2, ...techRow2].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/[0.025] text-slate-400 text-xs font-medium whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_50%_at_50%_60%,rgba(139,92,246,0.06),transparent)]" />
        <div className="max-w-6xl mx-auto relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12 flex-wrap gap-4"
          >
            <div>
              <p className="text-violet-400 text-xs font-mono tracking-[0.2em] uppercase mb-2">
                // core expertise
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                What I specialize in
              </h2>
            </div>
            <Link href="/projects" className="text-sm text-slate-500 hover:text-violet-400 transition-colors flex items-center gap-1 group">
              See all projects
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: "🤖",
                title: "Agentic AI",
                desc: "Building autonomous AI agents that replace human workflows — task automation, multi-agent orchestration, and intelligent decision systems.",
                wide: true,
                accent: "violet",
              },
              {
                icon: "🧠",
                title: "Deep Learning",
                desc: "Custom neural networks and fine-tuned models for classification, detection, and generation tasks using TensorFlow and PyTorch.",
                wide: false,
                accent: "cyan",
              },
              {
                icon: "💬",
                title: "Chatbot Dev",
                desc: "Production-grade AI chatbots powered by LLMs, with RAG pipelines for domain-specific knowledge and natural conversation flows.",
                wide: false,
                accent: "purple",
              },
              {
                icon: "👁️",
                title: "Computer Vision",
                desc: "Object detection, image classification, and visual AI pipelines with OpenCV and deep learning on AWS SageMaker.",
                wide: false,
                accent: "emerald",
              },
            ].map(({ icon, title, desc, wide, accent }, i) => {
              const borderCls = { violet: "border-violet-500/20 hover:border-violet-500/40", cyan: "border-cyan-500/20 hover:border-cyan-500/40", purple: "border-purple-500/20 hover:border-purple-500/40", emerald: "border-emerald-500/20 hover:border-emerald-500/40" }[accent];
              const glowCls   = { violet: "hover:bg-violet-500/[0.06]", cyan: "hover:bg-cyan-500/[0.06]", purple: "hover:bg-purple-500/[0.06]", emerald: "hover:bg-emerald-500/[0.06]" }[accent];
              const iconCls   = { violet: "bg-violet-500/10 text-violet-400", cyan: "bg-cyan-500/10 text-cyan-400", purple: "bg-purple-500/10 text-purple-400", emerald: "bg-emerald-500/10 text-emerald-400" }[accent];
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className={`${wide ? "sm:col-span-2" : ""} group p-6 rounded-2xl border ${borderCls} bg-[#080e1c] ${glowCls} transition-all duration-300`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${iconCls}`}>
                    {icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="relative py-20 px-6 border-t border-white/[0.04]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(139,92,246,0.05),transparent)]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-10 flex-wrap gap-4"
          >
            <div>
              <p className="text-violet-400 text-xs font-mono tracking-[0.2em] uppercase mb-2">
                // selected.work
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                {"Projects I've built"}
              </h2>
            </div>
            <Link href="/projects" className="group inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-violet-400 transition-colors">
              View all projects
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {selectedWork.map(({ title, desc, tags, metric, metricLabel, accent, category }, i) => {
              const c = accentMap[accent] ?? accentMap.violet;
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.09 }}
                  className={`group rounded-2xl border ${c.border} bg-[#080e1c] overflow-hidden flex flex-col hover:bg-[#0a1120] transition-all duration-300`}
                >
                  <div className={`h-1 w-full ${c.bg} group-hover:h-[3px] transition-all duration-300`} />
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${c.badge} border ${c.border}`}>
                        {category}
                      </span>
                      <div className="text-right shrink-0">
                        <p className={`text-xl font-extrabold ${c.text}`}>{metric}</p>
                        <p className="text-[9px] text-slate-600 leading-tight mt-0.5">{metricLabel}</p>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-white font-bold text-base leading-snug group-hover:text-violet-100 transition-colors">{title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((t) => (
                        <span key={t} className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${c.badge}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-10 text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-violet-500/30 text-violet-300 hover:bg-violet-500/10 hover:border-violet-500/50 text-sm font-semibold transition-all"
            >
              See all 6 projects <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
