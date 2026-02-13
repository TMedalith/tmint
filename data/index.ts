import type {
  Project,
  WorkExperience,
  SkillCategory,
  Education,
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



/* ─── Work experience ─────────────────────────── */
export const workExperience: WorkExperience[] = [
  {
    company: "DOMUSAI",
    role: "Software Engineer Intern",
    period: "Jan 2025 — Jun 2025",
    highlights: [
      "Built a WhatsApp notification system that 200+ people actually use every day. First time shipping something to real users.",
      "Cleaned up 10+ messy serverless functions and moved them to NestJS. Way easier to maintain now.",
      "Built responsive features with React and Next.js. Works on phones, tablets, whatever.",
    ],
  },
];

/* ─── Projects ─────────────────────────────────── */
export const projects: Project[] = [
  {
    title: "Memoralab",
    description:
      "Built a tool that lets users ask natural language questions over 600+ NASA papers and get precise answers. Developed the backend with Python and FastAPI, the frontend with Next.js, and used LlamaIndex and Qdrant to index the papers. Deployed on AWS Fargate, creating an efficient and scalable system to access complex information.",
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
      "To understand how banks handle transactions, I developed reactive microservices with Spring Boot and Spring WebFlux, using MySQL and MongoDB to manage different data layers. Covered accounts, transfers, and critical logic, and ensured reliability with tests exceeding 85% coverage.",
    technologies: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Spring WebFlux" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "JUnit 5" },
      { name: "Mockito" },
    ],
    githubLink: "https://github.com/BankMicroservices/SystemBankingSpringboot",
    liveDemoLink: "https://banking-system-demo.vercel.app",
    image: "/p_banking.png",
    type: "Microservices",
  },
];



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
    skills: ["Python", "Java", "Typescript", "C++"],
  },

  {
    category: "Backend",
    skills: ["FastAPI", "Spring Boot", "Node.js"],
  },
  {
    category: "Cloud & Infra",
    skills: ["AWS", "Docker", "PostgreSQL", "MongoDB", "Git"],
  },  {
    category: "FrontEnd",
    skills: ["React", "NextJs"],
  },
];


