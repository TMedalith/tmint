export interface Experience {
  id: number;
  category: "hackathons" | "ctf" | "volunteer" | "bootcamps";
  title: string;
  description: string;
  image: string;
  additionalImages: string[];
  date: string;
}

export interface Technology {
  name: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  githubLink: string;
  liveDemoLink: string;
  image: string;
  type: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Achievement {
  icon: string;
  text: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  note: string;
  courses: string[];
}
