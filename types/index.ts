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

