"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, ArrowUpRight, Briefcase, FlaskConical, GraduationCap, Zap } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

const experiences = [
  {
    id: 1,
    type: "Full-Time",
    role: "Machine Learning Engineer",
    company: "AI by Tec",
    shortName: "AI by Tec",
    location: "Pakistan · On-site",
    period: "Aug 2023 — Present",
    current: true,
    icon: <Zap size={16} />,
    color: "violet",
    desc: "Building and deploying production ML and Agentic AI systems for enterprise clients. Work spans machine learning model development, intelligent chatbot creation, prompt engineering, and LLM-powered workflow automation.",
    highlights: [
      "Developed and deployed end-to-end machine learning projects for real-world business automation",
      "Built production-grade AI chatbots using LLMs, RAG pipelines, and prompt engineering",
      "Implemented Agentic AI systems that autonomously handle multi-step business workflows",
      "Integrated ML models with WordPress and web platforms for seamless AI-powered experiences",
      "Applied computer vision and deep learning to solve client-specific problems",
    ],
    tags: ["Python", "TensorFlow", "Machine Learning", "Deep Learning", "Agentic AI", "Chatbot Dev", "Generative AI", "Prompt Engineering", "Docker", "AWS SageMaker"],
    metric: { label: "Duration", value: "2+ yrs" },
  },
  {
    id: 2,
    type: "Education",
    role: "Agentic AI & Robotics Expert",
    company: "PIAIC",
    shortName: "PIAIC",
    location: "Pakistan",
    period: "Dec 2024 — Present",
    current: true,
    icon: <GraduationCap size={16} />,
    color: "cyan",
    desc: "Currently enrolled in the Agentic AI and Robotics Expert certification program at PIAIC. Studying how AI agents perceive, reason, and autonomously execute complex multi-step tasks, with hands-on robotics and multi-agent system design.",
    highlights: [
      "Learning the theory and practice of autonomous AI agent architectures",
      "Building multi-agent systems that collaborate to solve complex tasks",
      "Studying robotics integration with AI — perception, planning, and execution",
      "Previously completed AIC (Artificial Intelligence & Computing) program with Grade A in 2020–2021",
      "Completed 4-year intensive PIAIC program (Feb 2020 – Mar 2024) covering ML, NLP, LLMs, and Generative AI",
    ],
    tags: ["Agentic AI", "Robotics", "LLMs", "Generative AI", "Prompt Engineering", "Python", "TensorFlow"],
    metric: { label: "AIC Grade", value: "A" },
  },
  {
    id: 3,
    type: "Internship",
    role: "Deep Learning Engineer",
    company: "Gen4Gen",
    shortName: "Gen4Gen",
    location: "Remote",
    period: "May 2021 — Mar 2022",
    current: false,
    icon: <FlaskConical size={16} />,
    color: "purple",
    desc: "Gen4Gen is a 2-sided digital marketplace that connects busy families with senior service providers using ML as a recommendation engine. Built deep learning components for user profile matching and demand prediction.",
    highlights: [
      "Developed ML recommendation engine matching user profiles to service providers",
      "Applied deep learning models to analyze user preference data and predict demand",
      "Contributed to computer vision features for the in-person services platform",
      "Worked on data pipelines for processing user behavior and profile data",
    ],
    tags: ["Python", "Deep Learning", "Machine Learning", "Computer Vision", "TensorFlow", "Data Science", "AWS"],
    metric: { label: "Duration", value: "11 mos" },
  },
  {
    id: 4,
    type: "Scholarship",
    role: "AWS Machine Learning Scholarship",
    company: "Udacity",
    shortName: "Udacity",
    location: "Online",
    period: "Jun 2021 — Oct 2021",
    current: false,
    icon: <Briefcase size={16} />,
    color: "emerald",
    desc: "Completed the prestigious AWS Machine Learning Scholarship at Udacity. Gained hands-on expertise in cloud-based ML model development, training, and deployment using AWS SageMaker and related AWS AI/ML services.",
    highlights: [
      "Mastered AWS SageMaker for end-to-end ML pipeline: data prep, training, and deployment",
      "Built and deployed ML models using AWS infrastructure and cloud best practices",
      "Completed program from Feb 2021 – Aug 2022 covering advanced cloud ML topics",
      "Applied cloud ML knowledge directly to subsequent professional roles",
    ],
    tags: ["AWS SageMaker", "Machine Learning", "Python", "Deep Learning", "Cloud ML", "AWS"],
    metric: { label: "Completed", value: "✓" },
  },
];

const colorMap: Record<string, { tab: string; tabActive: string; border: string; text: string; badge: string; dot: string; accent: string }> = {
  violet:  { tab: "hover:text-violet-400",  tabActive: "text-violet-400 border-violet-400",  border: "border-violet-500/20",  text: "text-violet-400",  badge: "bg-violet-500/10 text-violet-300 border border-violet-500/20",  dot: "bg-violet-400",  accent: "from-violet-500/20" },
  cyan:    { tab: "hover:text-cyan-400",    tabActive: "text-cyan-400 border-cyan-400",      border: "border-cyan-500/20",    text: "text-cyan-400",    badge: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",        dot: "bg-cyan-400",    accent: "from-cyan-500/20" },
  purple:  { tab: "hover:text-purple-400",  tabActive: "text-purple-400 border-purple-400",  border: "border-purple-500/20",  text: "text-purple-400",  badge: "bg-purple-500/10 text-purple-300 border border-purple-500/20",  dot: "bg-purple-400",  accent: "from-purple-500/20" },
  emerald: { tab: "hover:text-emerald-400", tabActive: "text-emerald-400 border-emerald-400",border: "border-emerald-500/20", text: "text-emerald-400", badge: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",dot: "bg-emerald-400", accent: "from-emerald-500/20" },
};

export default function ExperienceContent() {
  const [activeId, setActiveId] = useState(1);
  const active = experiences.find((e) => e.id === activeId)!;
  const c = colorMap[active.color];

  return (
    <main className="relative min-h-screen bg-[#030712] text-white overflow-hidden">
      <Spotlight className="-top-40 right-0 md:right-60" fill="#8b5cf6" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_60%_20%,rgba(139,92,246,0.08),transparent)] pointer-events-none" />

      {/* Header */}
      <section className="relative pt-24 pb-12 px-6 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-violet-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">
              // experience.log
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Career{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Timeline
                </span>
              </h1>
              <div className="flex flex-wrap gap-2">
                {[
                  { v: "3+", l: "Years in AI/ML" },
                  { v: "2", l: "Current Roles" },
                  { v: "7+", l: "Certifications" },
                ].map(({ v, l }) => (
                  <div key={l} className="px-4 py-1.5 rounded-full border border-white/8 bg-white/[0.03] text-center">
                    <span className="text-white font-bold text-sm">{v}</span>
                    <span className="text-slate-500 text-xs ml-1">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab switcher + content */}
      <section className="relative px-6 pb-24 pt-0">
        <div className="max-w-5xl mx-auto">

          <div className="flex gap-0 border-b border-white/5 mt-0 overflow-x-auto scrollbar-none">
            {experiences.map((exp) => {
              const isActive = exp.id === activeId;
              const tc = colorMap[exp.color];
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`relative shrink-0 px-6 py-4 text-sm font-medium transition-colors duration-200 ${
                    isActive ? tc.tabActive + " border-b-2" : "text-slate-500 border-b-2 border-transparent " + tc.tab
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {exp.current && (
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    )}
                    {exp.shortName}
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="pt-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Sidebar */}
                <div className="space-y-5">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${c.border} text-xs font-semibold ${c.text}`}>
                    {active.icon}
                    {active.type}
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white leading-snug">{active.role}</h2>
                    <p className={`text-lg font-semibold mt-1 ${c.text}`}>{active.company}</p>
                  </div>

                  <div className="space-y-2 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className={c.text} />
                      <span>{active.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className={c.text} />
                      <span>{active.location}</span>
                    </div>
                  </div>

                  <div className={`p-4 rounded-xl border ${c.border} bg-gradient-to-br ${c.accent} to-transparent`}>
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">{active.metric.label}</p>
                    <p className={`text-3xl font-extrabold ${c.text}`}>{active.metric.value}</p>
                  </div>

                  {active.current && (
                    <div className="flex items-center gap-2 text-xs text-green-400">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Currently active
                    </div>
                  )}
                </div>

                {/* Main detail */}
                <div className="lg:col-span-2 space-y-6">
                  <p className="text-slate-300 leading-relaxed text-[15px]">{active.desc}</p>

                  <div>
                    <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-3">Key highlights</p>
                    <ul className="space-y-3">
                      {active.highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className="flex items-start gap-3 text-sm text-slate-300"
                        >
                          <span className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                          {h}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-3">Tech stack</p>
                    <div className="flex flex-wrap gap-2">
                      {active.tags.map((tag) => (
                        <span key={tag} className={`px-3 py-1 rounded-lg text-xs font-medium ${c.badge}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-white/5 bg-white/[0.01] px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-sm mb-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 font-medium">Open to new opportunities</span>
            </div>
            <p className="text-slate-400 text-sm">
              Looking for ML engineering positions, Agentic AI projects, and AI consulting work.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all hover:scale-105 shadow-lg shadow-violet-600/20"
          >
            {"Let's Talk"} <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}
