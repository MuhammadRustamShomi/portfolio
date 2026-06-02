import Link from "next/link";
import { FiLinkedin, FiMail } from "react-icons/fi";
import { FaBrain } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.linkedin.com/in/artificialintelligenceagentbuilderexpert", icon: <FiLinkedin size={16} />, label: "LinkedIn" },
  { href: "mailto:shomi125expert@gmail.com", icon: <FiMail size={16} />, label: "Email" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-violet-500/10 bg-[#030712]">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
          <Link href="/" className="flex items-center gap-2">
            <FaBrain className="text-violet-400 text-lg" />
            <span className="font-bold text-lg bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Rustam.
            </span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-slate-500 hover:text-violet-400 text-sm transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-violet-500/15 bg-violet-500/5 text-slate-500 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-5 text-center">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Muhammad Rustam. All rights reserved. · ML & Agentic AI Engineer
          </p>
        </div>
      </div>
    </footer>
  );
}
