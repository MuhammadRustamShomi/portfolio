import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#030712" }],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rustam.ai"),
  title: {
    default: "Muhammad Rustam | ML & Agentic AI Engineer",
    template: "%s | Muhammad Rustam",
  },
  description:
    "Muhammad Rustam — ML & Agentic AI Engineer based in Karachi, Pakistan. Designing AI systems that replace human workflows. Specializing in Machine Learning, Agentic AI, Chatbot Development, and Deep Learning.",
  keywords: [
    "Muhammad Rustam",
    "Rustam",
    "AI Engineer",
    "ML Engineer",
    "Machine Learning Engineer",
    "Agentic AI",
    "Chatbot Development",
    "Deep Learning",
    "Computer Vision",
    "Generative AI",
    "LLM Engineer",
    "Prompt Engineering",
    "n8n Automation",
    "AI Portfolio",
    "Karachi Pakistan",
  ],
  authors: [{ name: "Muhammad Rustam", url: "https://linkedin.com/in/artificialintelligenceagentbuilderexpert" }],
  creator: "Muhammad Rustam",
  openGraph: {
    title: "Muhammad Rustam | ML & Agentic AI Engineer",
    description: "I design AI systems that replace human workflows. ML, Agentic AI, Chatbots, Deep Learning.",
    type: "website",
    locale: "en_US",
    url: "https://linkedin.com/in/artificialintelligenceagentbuilderexpert",
    siteName: "Muhammad Rustam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rustam | ML & Agentic AI Engineer",
    description: "I design AI systems that replace human workflows — ML, Agentic AI, Chatbots.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030712] text-white`}>
        <Navbar />
        {children}
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
