// Knowledge base for Muhammad Rustam's AI portfolio chatbot.

// About
export const aboutChunk = `
## About Muhammad Rustam
- Full name: Muhammad Rustam
- LinkedIn headline: "I design AI systems that replace human workflows"
- Based in Karachi, Sindh, Pakistan
- Currently a Machine Learning Engineer at AI by Tec (Aug 2023 - Present, on-site, full-time)
- Also enrolled in PIAIC Agentic AI & Robotics Expert certification (Dec 2024 - Present)
- Email: shomi125expert@gmail.com
- LinkedIn: linkedin.com/in/artificialintelligenceagentbuilderexpert
- Education: Master of Library & Information Science (MLIS) from Allama Iqbal Open University (2016-2018); AIC (Grade A) from PIAIC (2020-2021); AWS ML Scholarship from Udacity (2021-2022)
- Top skills: Artificial Intelligence, Computer Vision, Python, Docker, AWS SageMaker
- 500+ professional connections on LinkedIn
- Passionate tech enthusiast who thrives on continuous learning and exploration
- Open to new roles, collaborations, and consulting work
`;

// Skills & Services
export const servicesChunk = `
## Skills & What Rustam Offers
AI & Machine Learning: Machine Learning, Deep Learning, Artificial Intelligence, TensorFlow, Computer Vision, AWS SageMaker
Agentic AI & LLMs: Agentic AI and Robotics, Generative AI, Large Language Models (LLM), Prompt Engineering, Chatbot Development
Data Science: Python, Pandas, NumPy, Data Science, Data Analysis
Cloud & DevOps: AWS SageMaker, Docker, Git, GitHub, Oracle Database
Workflow Automation: n8n (Level 1 Certified), Workflow Management, Workflow Applications
Other: WordPress, HTML, SEO, Freelancing

Rustam can help with:
- Building autonomous Agentic AI systems that replace human workflows
- Developing production AI chatbots with RAG pipelines and LLM integration
- Designing and training custom deep learning and machine learning models
- Computer vision systems for object detection and image classification
- Setting up n8n workflow automation pipelines for business processes
- Prompt engineering and LLM fine-tuning for domain-specific tasks
- Cloud ML deployment on AWS SageMaker
- WordPress integration with AI/ML features
`;

// Projects
export const portfolioChunk = `
## Rustam's Projects
1. Agentic AI Workflow Automation System — Autonomous multi-step AI agent replacing manual business workflows. Uses LLMs with tool-calling, memory, and n8n orchestration. GitHub: github.com/shomi125
2. Enterprise AI Chatbot (RAG-Powered) — Production chatbot with Retrieval-Augmented Generation for domain-specific Q&A using FAISS + LangChain. GitHub: github.com/shomi125
3. Computer Vision Object Detection — Deep learning object detection pipeline using TensorFlow, OpenCV, and AWS SageMaker. 95%+ accuracy on domain-specific datasets. GitHub: github.com/shomi125
4. ML Recommendation Engine (Gen4Gen) — Built at Gen4Gen internship: ML-powered 2-sided marketplace matching user profiles to service providers using demand prediction. GitHub: github.com/shomi125
5. Prompt Engineering & LLM Fine-Tuning — Systematic prompt engineering framework and LLM fine-tuning experiments for specialized domain adaptation. GitHub: github.com/shomi125
6. n8n AI Workflow Integrations — Automated AI-powered business workflows combining web scraping, API calls, AI processing, and notifications in n8n. GitHub: github.com/shomi125
`;

// Contact & Availability
export const processChunk = `
## Contact & Availability
- Email: shomi125expert@gmail.com
- LinkedIn: linkedin.com/in/artificialintelligenceagentbuilderexpert
- Location: Karachi, Sindh, Pakistan (available for remote work worldwide)
- Contact page: /contact (has a direct message form)
- Currently open to: ML engineering roles, Agentic AI projects, chatbot development, AI consulting, and freelance work
- Typical response time: within 24 hours on weekdays
- To work together: reach out via the Contact page or email shomi125expert@gmail.com with a brief description of your project or role
- Available Mon-Fri
`;

// Keyword routing
type Chunk = "about" | "services" | "portfolio" | "process";

const keywordMap: { keywords: RegExp; chunk: Chunk }[] = [
  {
    keywords: /\b(about|who|rustam|muhammad|background|experience|education|university|degree|where.*from|location|based|years|stats|career|piaic|udacity|gen4gen|ai by tec)\b/i,
    chunk: "about",
  },
  {
    keywords: /\b(skill|service|offer|build|train|model|develop|specialize|expertise|technology|stack|framework|tensorflow|python|cv|nlp|agentic|chatbot|llm|deep.?learn|n8n|workflow|automation|sagemaker|docker|computer.?vision|generative)\b/i,
    chunk: "services",
  },
  {
    keywords: /\b(project|portfolio|work|example|built|demo|live|github|detection|rag|recommendation|sentiment|forecasting|style|agentic|chatbot|agent|pipeline|automation|n8n|wordpress)\b/i,
    chunk: "portfolio",
  },
  {
    keywords: /\b(contact|hire|email|reach|available|availability|work.*together|collaborate|start|price|cost|quote|freelance|consulting|remote|opportunity|role|job|message|get in touch)\b/i,
    chunk: "process",
  },
];

const chunkMap: Record<Chunk, string> = {
  about: aboutChunk,
  services: servicesChunk,
  portfolio: portfolioChunk,
  process: processChunk,
};

export function getRelevantContext(userMessage: string): string {
  const matched = new Set<Chunk>();
  for (const { keywords, chunk } of keywordMap) {
    if (keywords.test(userMessage)) matched.add(chunk);
  }
  const chunks =
    matched.size > 0
      ? [...matched].map((k) => chunkMap[k])
      : Object.values(chunkMap);
  return chunks.join("\n");
}
