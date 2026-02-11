import type {
  Project,
  WorkExperience,
  Stat,
  Achievement,
  Certification,
  SkillCategory,
  Education,
  Experience,
} from "@/types";

/* ─── Site config ──────────────────────────────── */
export const siteConfig = {
  name: "Tatiana Paucar",
  title: "Software Engineer",
  social: {
    github: "https://github.com/TMedalith",
    linkedin: "https://www.linkedin.com/in/tatiana-paucar-de-la-cruz/",
    email: "mailto:tatiana.paucard@gmail.com",
    whatsapp: "https://wa.me/51906829019",
  },
};

/* ─── Proof bar (hero) ─────────────────────────── */
export const highlights = [
  "NASA Space Apps Global Finalist",
  "SWE Intern @ DOMUSAI",
  "Top 5th at UPC",
];

/* ─── Work experience ─────────────────────────── */
export const workExperience: WorkExperience[] = [
  {
    company: "DOMUSAI",
    role: "Software Engineer Intern",
    period: "Jan 2025 — Jun 2025",
    highlights: [
      "Built an event-driven WhatsApp notification pipeline for 200+ active users — my first production system that real people depended on daily.",
      "Migrated 10+ serverless functions from Supabase to NestJS, untangling spaghetti logic into maintainable services.",
      "Shipped responsive front-end features with React and Next.js across mobile and desktop.",
    ],
  },
];

/* ─── Projects ─────────────────────────────────── */
export const projects: Project[] = [
  {
    title: "Memoralab",
    description:
      "Started because I wanted to make NASA's space biology research actually searchable. Built a RAG pipeline (LlamaIndex + Qdrant) over 600+ papers so anyone can query in natural language and get real answers. Python/FastAPI backend on AWS Fargate with Docker. Our team made it to the Global Finals — top 45 out of 10,000+ teams.",
    technologies: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "OpenAI API" },
      { name: "LlamaIndex" },
      { name: "Qdrant" },
      { name: "AWS Fargate" },
      { name: "Docker" },
      { name: "Next.js" },
    ],
    githubLink: "https://github.com/TMedalith/Raccly",
    liveDemoLink: "https://raccly.vercel.app",
    image: "/p_raccly.png",
    type: "AI · RAG Pipeline",
  },
  {
    title: "Banking System",
    description:
      "I wanted to understand how real banks handle money at scale, so I built it from scratch. Reactive microservices for accounts, transactions, and transfers using Spring WebFlux on MongoDB. Wrote tests obsessively — 85%+ coverage with JUnit 5 and Mockito.",
    technologies: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Spring WebFlux" },
      { name: "MongoDB" },
      { name: "JUnit 5" },
      { name: "Mockito" },
    ],
    githubLink: "https://github.com/BankMicroservices/SystemBankingSpringboot",
    liveDemoLink: "https://banking-system-demo.vercel.app",
    image: "/p_banking.png",
    type: "Microservices",
  },
];

/* ─── About bio (used in hero subtitle) ────────── */
export const aboutBio =
  "I discovered programming in high school when a teacher showed me how code could control physical objects. That moment hooked me. I studied Software Engineering and threw myself into it — leading tech communities, building student projects, and eventually becoming a Global Finalist at NASA Space Apps Challenge 2025. Now I focus on backend development and integrating AI into applications. I'm comfortable figuring things out as I go, and I stick with projects until they work.";

/* ─── Education ────────────────────────────────── */
export const education: Education = {
  institution: "Universidad Peruana de Ciencias Aplicadas (UPC)",
  degree: "B.S. in Software Engineering",
  period: "2021 — 2026",
  note: "Top Fifth · AWS re/Start Graduate",
  courses: [
    "Algorithms & Data Structures",
    "Software Architecture",
    "Databases & Web Applications",
  ],
};

/* ─── Skills ───────────────────────────────────── */
export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C#", "SQL"],
  },
  {
    category: "AI & ML",
    skills: ["LlamaIndex", "OpenAI API", "Qdrant", "RAG Pipelines", "LangChain"],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Spring Boot", ".NET", "Node.js", "REST APIs"],
  },
  {
    category: "Cloud & Infra",
    skills: ["AWS", "Docker", "PostgreSQL", "MongoDB", "Git"],
  },
];

/* ─── Achievements + Leadership (merged) ───────── */
export const achievements: Achievement[] = [
  { icon: "trophy", text: "Global Finalist (Top 45 / 10,000+) — NASA Space Apps Challenge 2025" },
  { icon: "trophy", text: "1st Place — RIMAC Hackathon 2024" },
  { icon: "trophy", text: "1st Place — EmpoderaTech Hackathon 2024" },
  { icon: "medal", text: "2nd Place — CTF She Secure Peru 2024" },
  { icon: "star", text: "HackerRank — 5★ Problem Solving" },
  { icon: "globe", text: "Chapter Development Director — LEAD UPC 2025, organized 5+ tech events" },
  { icon: "globe", text: "Webmaster — IEEE Computer Society UPC 2025, built official landing page" },
  { icon: "globe", text: "Logistics Coordinator — CibersecUni, Lima DevFest, AWSome Women Summit" },
];

/* ─── Why Technology ──────────────────────────── */
export const whyTechnology = [
  "I grew up in Lima watching how a single app could change whether a family gets a loan, finds a doctor, or sells their harvest. That gap between the people who need tools and the people who build them — that's where I want to be.",
  "My first hackathon changed everything. 48 hours without sleeping, building something from nothing under pressure — and it didn't feel like sacrifice. It felt like the first time I was fully awake. I won that one, then the next, and eventually made it to the NASA Space Apps global finals with a team I believed in.",
  "What drives me isn't the trophy. It's the moment a system clicks — when you trace a bug through three microservices at 2 a.m. and finally understand why the queue was dropping messages. That feeling of mastery over complexity is what I'm chasing.",
  "I want to build infrastructure so reliable that millions of people depend on it without ever knowing my name. That's the kind of impact I'm after.",
];

/* ─── Data kept for backward compat (unused) ───── */
export const certifications: Certification[] = [];
export const extracurriculars: string[] = [];
export const categories = [
  { id: "hackathons", name: "Hackathons" },
] as const;
export const experiences: Experience[] = [];
