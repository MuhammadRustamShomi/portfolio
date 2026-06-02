"use client";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { ArrowUpRight, Award } from "lucide-react";
import Link from "next/link";

const skillCategories = [
  { label: "AI & Machine Learning", color: "violet", skills: ["Machine Learning", "Deep Learning", "Artificial Intelligence", "TensorFlow", "Computer Vision", "AWS SageMaker"] },
  { label: "Agentic AI & LLMs",    color: "cyan",   skills: ["Agentic AI & Robotics", "Generative AI", "Large Language Models", "Prompt Engineering", "Chatbot Development"] },
  { label: "Data Science",         color: "purple",  skills: ["Python", "Pandas", "NumPy", "Data Science", "Data Analysis"] },
  { label: "Cloud & DevOps",       color: "emerald", skills: ["AWS SageMaker", "Docker", "Git", "GitHub", "Oracle Database"] },
  { label: "Workflow Automation",  color: "orange",  skills: ["n8n", "Workflow Management", "Workflow Applications"] },
  { label: "Other Skills",         color: "blue",    skills: ["WordPress", "HTML", "SEO", "English", "Urdu", "Chinese (HSK 2)"] },
];

const colorMap: Record<string, { border: string; text: string; badge: string; header: string }> = {
  violet:  { border: "border-violet-500/20",  text: "text-violet-400",  badge: "bg-violet-500/10 text-violet-300 border border-violet-500/20",  header: "from-violet-500/20 to-transparent" },
  cyan:    { border: "border-cyan-500/20",    text: "text-cyan-400",    badge: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",         header: "from-cyan-500/20 to-transparent" },
  purple:  { border: "border-purple-500/20",  text: "text-purple-400",  badge: "bg-purple-500/10 text-purple-300 border border-purple-500/20",   header: "from-purple-500/20 to-transparent" },
  emerald: { border: "border-emerald-500/20", text: "text-emerald-400", badge: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",header: "from-emerald-500/20 to-transparent" },
  orange:  { border: "border-orange-500/20",  text: "text-orange-400",  badge: "bg-orange-500/10 text-orange-300 border border-orange-500/20",   header: "from-orange-500/20 to-transparent" },
  blue:    { border: "border-blue-500/20",    text: "text-blue-400",    badge: "bg-blue-500/10 text-blue-300 border border-blue-500/20",         header: "from-blue-500/20 to-transparent" },
};

const bioLines = [
  { label: "name",      value: "Muhammad Rustam",                 color: "text-cyan-400" },
  { label: "role",      value: "ML & Agentic AI Engineer",         color: "text-violet-400" },
  { label: "location",  value: "Karachi, Sindh, Pakistan",         color: "text-slate-300" },
  { label: "education", value: "MLIS — AIOU | AIC — PIAIC",        color: "text-slate-300" },
  { label: "focus",     value: "Agentic AI · ML · LLMs · CV",     color: "text-emerald-400" },
  { label: "status",    value: "open to new roles 🟢",             color: "text-green-400" },
];

const certifications = [
  {
    icon: "☁️",
    title: "AWS Machine Learning Scholarship",
    issuer: "Udacity",
    period: "Jun – Oct 2021",
    desc: "Completed AWS SageMaker end-to-end ML pipeline training, deployment, and cloud ML best practices.",
    color: "emerald",
  },
  {
    icon: "🎓",
    title: "AIC — Artificial Intelligence & Computing",
    issuer: "PIAIC",
    period: "2020 – 2021",
    desc: "Grade A. Covered AI fundamentals, deep learning, and applied computing with hands-on projects.",
    color: "violet",
    badge: "Grade A",
  },
  {
    icon: "🤖",
    title: "4-Year AI/ML Intensive Program",
    issuer: "PIAIC",
    period: "Feb 2020 – Mar 2024",
    desc: "Full-stack AI education: Machine Learning, NLP, LLMs, Generative AI, and production deployment.",
    color: "cyan",
  },
  {
    icon: "⚙️",
    title: "n8n Level 1 Certified",
    issuer: "n8n",
    period: "2024",
    desc: "Certified workflow automation expert. Building production AI-powered automation pipelines with n8n.",
    color: "orange",
    badge: "Certified",
  },
  {
    icon: "📚",
    title: "MLIS — Library & Information Science",
    issuer: "AIOU",
    period: "2019",
    desc: "Masters degree in Library & Information Science from Allama Iqbal Open University.",
    color: "purple",
  },
];

const certColorMap: Record<string, { border: string; text: string; bg: string; badge: string }> = {
  violet:  { border: "border-violet-500/20",  text: "text-violet-400",  bg: "bg-violet-500/8",  badge: "bg-violet-500/15 text-violet-300" },
  cyan:    { border: "border-cyan-500/20",    text: "text-cyan-400",    bg: "bg-cyan-500/8",    badge: "bg-cyan-500/15 text-cyan-300"    },
  emerald: { border: "border-emerald-500/20", text: "text-emerald-400", bg: "bg-emerald-500/8", badge: "bg-emerald-500/15 text-emerald-300" },
  orange:  { border: "border-orange-500/20",  text: "text-orange-400",  bg: "bg-orange-500/8",  badge: "bg-orange-500/15 text-orange-300" },
  purple:  { border: "border-purple-500/20",  text: "text-purple-400",  bg: "bg-purple-500/8",  badge: "bg-purple-500/15 text-purple-300" },
};

export default function AboutContent() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-white overflow-hidden">

      {/* Hero Banner */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <Spotlight className="-top-60 right-0 md:right-40" fill="#8b5cf6" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_70%_30%,rgba(139,92,246,0.09),transparent)]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-violet-400 font-mono text-xs tracking-[0.2em] uppercase mb-8"
          >
            // about.md
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-16 border-b border-white/5">

            {/* Terminal bio card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-violet-500/15 bg-[#080e1c] overflow-hidden"
            >
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5 bg-white/[0.015]">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
                <span className="ml-2 text-[10px] text-slate-600 font-mono">rustam@ai ~/whoami</span>
              </div>
              <div className="p-5 font-mono text-sm space-y-2">
                {bioLines.map(({ label, value, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="flex gap-3"
                  >
                    <span className="text-slate-600 w-20 shrink-0">{label}:</span>
                    <span className={color}>{value}</span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                  className="pt-2"
                >
                  <span className="text-slate-600">$</span>
                  <span className="text-violet-400 ml-2">_</span>
                  <span className="inline-block w-2 h-4 bg-violet-400 cursor-blink align-middle ml-0.5" />
                </motion.div>
              </div>
            </motion.div>

            {/* Text intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col justify-center space-y-6"
            >
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
                  I design AI systems that{" "}
                  <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    replace human workflows.
                  </span>
                </h1>
              </div>

              <div className="space-y-3 text-slate-400 text-[15px] leading-relaxed">
                <p>
                  I am a passionate AI/ML engineer based in Karachi, Pakistan, currently building production
                  ML and Agentic AI systems at{" "}
                  <span className="text-violet-400 font-medium">AI by Tec</span>.
                </p>
                <p>
                  My work spans{" "}
                  <span className="text-violet-400 font-medium">machine learning models</span>,{" "}
                  <span className="text-cyan-400 font-medium">agentic AI pipelines</span>, and{" "}
                  <span className="text-emerald-400 font-medium">intelligent chatbot development</span>{" "}
                  — always with an eye on real-world deployment and impact.
                </p>
                <p>
                  With a constant hunger for knowledge, I stay at the cutting edge — from foundation models
                  to n8n workflow automation and beyond.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-all hover:scale-105 shadow-lg shadow-violet-600/20"
                >
                  View Experience <ArrowUpRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-violet-500/30 text-sm font-medium transition-all"
                >
                  {"Let's Talk"}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="text-violet-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
              // skills.json
            </p>
            <h2 className="text-3xl font-bold">
              AI Toolkit
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map(({ label, color, skills }, i) => {
              const c = colorMap[color] ?? colorMap.violet;
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className={`rounded-xl border ${c.border} overflow-hidden bg-[#080e1c] hover:bg-[#0a1020] transition-colors`}
                >
                  <div className={`px-5 py-3 bg-gradient-to-r ${c.header} border-b ${c.border}`}>
                    <h3 className={`text-xs font-bold uppercase tracking-widest ${c.text}`}>
                      {label}
                    </h3>
                  </div>
                  <div className="p-4 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className={`px-2.5 py-1 rounded-lg text-xs font-medium ${c.badge}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="py-20 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex items-end justify-between flex-wrap gap-4"
          >
            <div>
              <p className="text-violet-400 font-mono text-xs tracking-[0.2em] uppercase mb-2">
                // certifications.log
              </p>
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Award size={28} className="text-violet-400" />
                Certifications & Education
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-slate-500">7+ credentials earned</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map(({ icon, title, issuer, period, desc, color, badge }, i) => {
              const c = certColorMap[color] ?? certColorMap.violet;
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className={`rounded-xl border ${c.border} bg-[#080e1c] p-5 flex flex-col gap-3 hover:bg-[#0a1020] transition-colors`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${c.bg}`}>
                      {icon}
                    </div>
                    {badge && (
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${c.badge}`}>
                        {badge}
                      </span>
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-semibold text-sm leading-snug">{title}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold ${c.text}`}>{issuer}</span>
                      <span className="text-slate-700">·</span>
                      <span className="text-xs text-slate-600">{period}</span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
