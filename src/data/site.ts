// ─────────────────────────────────────────────────────────────
// All personal content lives here — no other file needs edits
// to update text, links, projects, or skills.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Amulya Bazaru",
  initials: "AB",
  role: "Full-Stack Developer & Data Analyst",
  headline: "I build fast web apps, turn data into decisions, and automate the busywork.",
  intro:
    "Third-year B.Tech student and freelance developer working across React, Python, SQL, and AI/ML. Available for projects with clients in India and worldwide.",
  location: "India",
  availability: "Open to freelance projects",
  email: "amulyabazaru09@gmail.com",
  resumeUrl: "", // e.g. "/resume.pdf" — drop the file into /public to show a download button
  socials: {
    github: "https://github.com/amulyabazaru9",
    linkedin: "https://www.linkedin.com/in/amulya-bazaru/",
  },
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I'm a third-year B.Tech student and freelance developer. I enjoy working across the stack — from building responsive React interfaces to writing Python and SQL that makes sense of messy data, and experimenting with AI tools like speech-to-text models.",
    "As a freelancer, I focus on clear communication, realistic timelines, and clean, maintainable code. Whether you need a website, a dashboard, or a script that takes repetitive work off your plate, I'll work with you to scope it properly and deliver it well.",
  ],
  facts: [
    { label: "Education", value: "B.Tech, 3rd year" },
    { label: "Based in", value: "India" },
    { label: "Works with", value: "Clients in India & worldwide" },
    { label: "Time zone", value: "IST (UTC+5:30)" },
  ],
};

export type Service = {
  title: string;
  description: string;
  deliverables: string[];
  icon: "code" | "chart" | "bolt";
};

export const services: Service[] = [
  {
    title: "Web Development",
    icon: "code",
    description:
      "Responsive, fast websites and web apps built with React and modern tooling — from landing pages to full-stack products.",
    deliverables: [
      "Portfolio & business websites",
      "React / Next.js front-ends",
      "Python (Flask) back-ends & REST APIs",
      "Responsive, accessible UI",
    ],
  },
  {
    title: "Data Analytics",
    icon: "chart",
    description:
      "Clean, analyse, and visualise your data so you can answer real business questions with confidence.",
    deliverables: [
      "Data cleaning with Python & SQL",
      "Exploratory analysis & reports",
      "Charts & visualisations",
      "Basic ML models for prediction",
    ],
  },
  {
    title: "Automation",
    icon: "bolt",
    description:
      "Python scripts and small tools that take repetitive manual work off your plate and reduce errors.",
    deliverables: [
      "Spreadsheet & report automation",
      "Web scraping & data collection",
      "File & workflow scripting",
      "AI / API-based integrations",
    ],
  },
];

export const workProcess = [
  { step: "01", title: "Discuss", text: "We talk through your goals, scope, and timeline." },
  { step: "02", title: "Plan", text: "You get a clear proposal with deliverables and milestones." },
  { step: "03", title: "Build", text: "Regular progress updates so there are no surprises." },
  { step: "04", title: "Deliver", text: "Code handover and a walkthrough, with support through launch." },
];

export type Project = {
  title: string;
  description: string;
  highlights?: string[];
  tags: string[];
  category: string;
  status?: string;
  githubUrl?: string;
  liveUrl?: string;
};

// Add new projects here — cards and layout update automatically.
export const projects: Project[] = [
  {
    title: "AI Voice Note Summarizer",
    category: "AI / Web App",
    status: "In progress",
    description:
      "A Flask web app where users upload a voice note and get back a text transcript, generated with the Whisper large-v3 speech-recognition model via the Groq API. AI summarisation of the transcript is the next milestone.",
    highlights: [
      "Audio upload endpoint built with Flask",
      "Speech-to-text using Whisper large-v3 through the Groq API",
      "API keys kept out of source code with environment variables",
    ],
    tags: ["Python", "Flask", "Groq API", "Whisper", "JavaScript"],
    githubUrl: "https://github.com/amulyabazaru9/ai-voice-note-summarizer",
  },
];

// Adjust to match exactly what you know — keep it honest.
export const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Web Development",
    skills: ["React", "Next.js", "Flask", "HTML & CSS", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Data & Analytics",
    skills: ["Pandas", "NumPy", "Matplotlib", "Data Visualisation"],
  },
  {
    title: "AI / ML",
    skills: ["scikit-learn", "Machine Learning", "Speech-to-Text (Whisper)", "LLM APIs", "Jupyter"],
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "VS Code"],
  },
];
