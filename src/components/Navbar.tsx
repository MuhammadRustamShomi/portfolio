"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 top-0" aria-label="Main navigation">
      <div
        className={cn(
          "backdrop-blur-xl border-b transition-all duration-300",
          scrolled
            ? "bg-[#030712]/95 border-white/10 shadow-lg shadow-black/30"
            : "bg-[#030712]/80 border-white/[0.06]"
        )}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-all">
                R
              </div>
              <span className="font-mono text-sm text-slate-300 group-hover:text-white transition-colors">
                rustam<span className="text-violet-400">@ml</span>
                <span className="text-slate-600">:~$</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-5 h-16 flex items-center text-sm font-medium transition-colors duration-200",
                      isActive ? "text-white" : "text-slate-500 hover:text-slate-300"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-violet-500/30 text-violet-300 text-xs font-semibold hover:bg-violet-500/10 hover:border-violet-500/50 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Hire Me
              </Link>
              <button
                className="md:hidden w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden border-t border-white/5 bg-[#030712]/95">
            <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-0.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive
                        ? "text-violet-400 bg-violet-500/8"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    )}
                  </Link>
                );
              })}
              <div className="pt-2 pb-1">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-violet-500/25 text-violet-300 text-sm font-semibold text-center justify-center hover:bg-violet-500/10 transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Gradient accent line */}
      <div
        className={cn(
          "h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent transition-opacity duration-300",
          scrolled ? "opacity-0" : "opacity-100"
        )}
      />
    </nav>
  );
}
