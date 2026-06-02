"use client";
import { Typewriter } from "react-simple-typewriter";

const TypewriterEffect = () => {
  return (
    <span className="text-violet-400">
      <Typewriter
        words={[
          "Machine Learning Engineer",
          "Agentic AI Developer",
          "Deep Learning Engineer",
          "Chatbot Developer",
          "Computer Vision Engineer",
          "AI Systems Designer",
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={160}
        deleteSpeed={90}
        delaySpeed={2200}
      />
    </span>
  );
};

export default TypewriterEffect;
