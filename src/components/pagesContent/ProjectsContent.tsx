"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

const projects = [
  {
    id: 1,
    title: "Agentic AI Workflow Automation System",
    desc: "Autonomous multi-step AI agent that replaces manual business workflows. Integrates LLMs with tool-calling, memory, and decision-making to handle tasks end-to-end without human intervention.",
    longDesc: "Designed and deployed a production Agentic AI system at AI by Tec for automating repetitive business workflows. The agent uses LLMs with tool-calling capabilities, maintains conversation memory, and makes autonomous decisions across multi-step processes. Deployed via FastAPI with real-time streaming responses and integrated with n8n for workflow orchestration.",
    tags: ["Python", "LLMs", "Agentic AI", "n8n", "FastAPI", "Prompt Engineering", "LangChain"],
    github: "https://github.com/shomi125",
    live: undefined,
    category: "Agentic AI",
    accent: "violet",
    metric: "80%",
    metricLabel: "Task automation",
    featured: true,
  },
  {
    id: 2,
    title: "Enterprise AI Chatbot (RAG-Powered)",
    desc: "Production chatbot with Retrieval-Augmented Generation for domain-specific Q&A. Answers questions accurately from custom knowledge bases using dense vector retrieval + LLM generation.",
    tags: ["Python", "LangChain", "FAISS", "FastAPI", "Generative AI", "LLMs"],
    github: "https://github.com/shomi125",
    live: undefined,
    category: "Chatbot Dev",
    accent: "cyan",
    metric: "RAG",
    metricLabel: "Architecture",
    featured: false,
  },
  {
    id: 3,
    title: "Computer Vision Object Detection",
    desc: "Deep learning-based object detection pipeline for real-world visual recognition tasks. Custom-trained on domain-specific datasets using TensorFlow and OpenCV.",
    tags: ["Python", "TensorFlow", "Computer Vision", "OpenCV", "Deep Learning", "AWS SageMaker"],
    github: "https://github.com/shomi125",
    live: undefined,
    category: "Computer Vision",
    accent: "purple",
    metric: "95%+",
    metricLabel: "Detection accuracy",
    featured: false,
  },
  {
    id: 4,
    title: "ML Recommendation Engine (Gen4Gen)",
    desc: "Machine learning recommendation system built at Gen4Gen. Matches user profiles to service providers using demand prediction and collaborative filtering models.",
    tags: ["Python", "Machine Learning", "TensorFlow", "Pandas", "NumPy", "AWS"],
    github: "https://github.com/shomi125",
    live: undefined,
    category: "Machine Learning",
    accent: "emerald",
    metric: "2-sided",
    metricLabel: "Marketplace ML",
    featured: false,
  },
  {
    id: 5,
    title: "Prompt Engineering & LLM Fine-Tuning",
    desc: "Systematic prompt engineering framework and LLM fine-tuning experiments for domain adaptation. Improved output quality for specialized tasks through targeted prompting strategies.",
    tags: ["Python", "LLMs", "Prompt Engineering", "Generative AI", "Hugging Face", "TensorFlow"],
    github: "https://github.com/shomi125",
    live: undefined,
    category: "LLMs",
    accent: "orange",
    metric: "GPT/Gemini",
    metricLabel: "Models used",
    featured: false,
  },
  {
    id: 6,
    title: "n8n AI Workflow Integrations",
    desc: "Automated AI-powered workflows using n8n for business process automation. Integrates web scraping, API calls, AI processing, and notifications into no-code/low-code pipelines.",
    tags: ["n8n", "Workflow Automation", "Python", "APIs", "Agentic AI"],
    github: "https://github.com/shomi125",
    live: undefined,
    category: "Automation",
    accent: "violet",
    metric: "n8n L1",
    metricLabel: "Certified",
    featured: false,
  },
];

const CATEGORIES = ["All", "Agentic AI", "Chatbot Dev", "Computer Vision", "Machine Learning", "LLMs", "Automation"];

const accentCls: Record<string, { text: string; border: string; badge: string; bg: string }> = {
  violet:  { text: "text-violet-400",  border: "border-violet-500/25",  badge: "bg-violet-500/10 text-violet-300",  bg: "bg-violet-500/8" },
  cyan:    { text: "text-cyan-400",    border: "border-cyan-500/25",    badge: "bg-cyan-500/10 text-cyan-300",      bg: "bg-cyan-500/8"   },
  purple:  { text: "text-purple-400",  border: "border-purple-500/25",  badge: "bg-purple-500/10 text-purple-300",  bg: "bg-purple-500/8" },
  emerald: { text: "text-emerald-400", border: "border-emerald-500/25", badge: "bg-emerald-500/10 text-emerald-300",bg: "bg-emerald-500/8" },
  orange:  { text: "text-orange-400",  border: "border-orange-500/25",  badge: "bg-orange-500/10 text-orange-300",  bg: "bg-orange-500/8" },
};

function FeaturedCard({ p }: { p: typeof projects[0] }) {
  const c = accentCls[p.accent] ?? accentCls.violet;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-2xl border ${c.border} bg-[#080e1c] overflow-hidden`}
    >
      <div className={`h-1 w-full ${c.bg}`} />
      <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`text-xs font-mono uppercase tracking-widest ${c.text}`}>
              ★ Featured Project
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${c.badge}`}>
              {p.category}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">{p.title}</h2>
          <p className="text-slate-400 leading-relaxed text-[15px]">{p.longDesc ?? p.desc}</p>
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className={`px-2.5 py-1 rounded-lg text-xs font-medium ${c.badge} border ${c.border}`}>
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3 pt-1">
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/20 text-sm font-medium transition-all">
                <Github size={15} /> GitHub Profile
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all shadow-lg shadow-violet-600/20">
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className={`p-6 rounded-xl border ${c.border} ${c.bg} text-center`}>
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">{p.metricLabel}</p>
            <p className={`text-4xl font-extrabold ${c.text}`}>{p.metric}</p>
          </div>
          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] space-y-2">
            <p className="text-[10px] text-slate-600 uppercase tracking-widest">Built at</p>
            <p className="text-sm font-semibold text-white">AI by Tec</p>
            <p className="text-xs text-slate-500">Production deployment · 2023–Present</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ p, index }: { p: typeof projects[0]; index: number }) {
  const c = accentCls[p.accent] ?? accentCls.violet;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.28, delay: index * 0.06 }}
      className={`group rounded-2xl border ${c.border} bg-[#080e1c] overflow-hidden flex flex-col hover:bg-[#0a1120] transition-all duration-300 hover:shadow-lg hover:shadow-black/20`}
    >
      <div className={`h-1 w-full ${c.bg} group-hover:h-[3px] transition-all duration-300`} />
      <div className="p-6 flex flex-col flex-1 gap-4">

        <div className="flex items-start justify-between gap-2">
          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${c.badge} border ${c.border}`}>
            {p.category}
          </span>
          <div className="text-right shrink-0">
            <p className={`text-xl font-extrabold ${c.text}`}>{p.metric}</p>
            <p className="text-[9px] text-slate-600 leading-tight mt-0.5">{p.metricLabel}</p>
          </div>
        </div>

        <div className="flex-1 space-y-2">
          <h3 className="text-white font-bold text-[15px] leading-snug group-hover:text-violet-100 transition-colors">
            {p.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {p.tags.slice(0, 4).map((t) => (
            <span key={t} className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${c.badge}`}>{t}</span>
          ))}
          {p.tags.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] text-slate-600 self-center">+{p.tags.length - 4}</span>
          )}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-colors group/gh"
            >
              <Github size={13} className="group-hover/gh:text-violet-400 transition-colors" />
              View on GitHub
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 text-xs font-medium ${c.text}`}
            >
              Live Demo <ExternalLink size={11} />
            </a>
          )}
          {!p.live && (
            <span className="text-[10px] text-slate-700 font-mono">private repo</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured && (activeCategory === "All" || p.category === activeCategory));

  return (
    <main className="relative min-h-screen bg-[#030712] text-white overflow-hidden">
      <Spotlight className="-top-40 left-1/2 -translate-x-1/2" fill="#8b5cf6" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_50%_10%,rgba(139,92,246,0.08),transparent)]" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: `radial-gradient(rgba(139,92,246,0.9) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-violet-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
            // projects.json
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              AI Systems{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {"I've Built"}
              </span>
            </h1>
            <p className="text-slate-500 text-sm">{projects.length} projects · production ML & AI</p>
          </div>
        </motion.div>

        <div className="mb-10">
          <FeaturedCard p={featured} />
        </div>

        <div className="flex gap-2 flex-wrap mb-6">
          {CATEGORIES.filter((cat) => cat === "All" || projects.filter((p) => !p.featured).some((p) => p.category === cat)).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-violet-500/20 text-violet-300 border border-violet-500/30"
                  : "bg-white/[0.03] text-slate-500 border border-white/8 hover:text-slate-300 hover:border-white/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p, i) => (
              <ProjectCard key={p.id} p={p} index={i} />
            ))}
            {rest.length === 0 && (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-12 text-center text-slate-600 text-sm"
              >
                No projects in this category.
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </div>
    </main>
  );
}
