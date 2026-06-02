"use client";
import { ExternalLink, Github, Tag } from "lucide-react";
import { motion } from "motion/react";

interface CardProps {
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  live?: string;
  category: string;
  accent: string;
}

const accentMap: Record<string, { badge: string; dot: string; border: string; glow: string }> = {
  violet: {
    badge: "bg-violet-500/15 text-violet-300 border-violet-500/25",
    dot: "bg-violet-400",
    border: "border-violet-500/20",
    glow: "hover:shadow-violet-500/15",
  },
  cyan: {
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
    dot: "bg-cyan-400",
    border: "border-cyan-500/20",
    glow: "hover:shadow-cyan-500/15",
  },
  purple: {
    badge: "bg-purple-500/15 text-purple-300 border-purple-500/25",
    dot: "bg-purple-400",
    border: "border-purple-500/20",
    glow: "hover:shadow-purple-500/15",
  },
  emerald: {
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
    dot: "bg-emerald-400",
    border: "border-emerald-500/20",
    glow: "hover:shadow-emerald-500/15",
  },
  orange: {
    badge: "bg-orange-500/15 text-orange-300 border-orange-500/25",
    dot: "bg-orange-400",
    border: "border-orange-500/20",
    glow: "hover:shadow-orange-500/15",
  },
};

const Card = ({ title, desc, tags, github, live, category, accent }: CardProps) => {
  const c = accentMap[accent] ?? accentMap.violet;
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`group relative flex flex-col h-full p-6 rounded-2xl border ${c.border} bg-[#0a0f1e] hover:bg-[#0d1325] transition-all duration-300 shadow-lg ${c.glow} hover:shadow-xl`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${c.badge}`}>
          {category}
        </span>
        <div className={`w-2 h-2 rounded-full ${c.dot} mt-1`} />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-violet-200 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/[0.04] text-slate-400 border border-white/8"
          >
            <Tag size={9} />
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-auto">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${c.border} bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.06] text-sm font-medium transition-all duration-200 ${!live ? "w-full justify-center" : ""}`}
          >
            <Github size={15} />
            Code
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-violet-600/20"
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
