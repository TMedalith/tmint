import { IconType } from 'react-icons';

// ============================================
// EXPERIENCE TYPES
// ============================================

export interface Experience {
  id: number;
  category: 'hackathons' | 'ctf' | 'volunteer' | 'events';
  title: string;
  description: string;
  image: string;
  additionalImages: string[];
  date: string;
}

export interface ExperienceCategory {
  id: Experience['category'];
  name: string;
  icon: IconType;
}

// ============================================
// PROJECT TYPES
// ============================================

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
  type: 'fullstack' | 'frontend' | 'backend' | 'mobile' | 'ai';
}

export interface ProjectType {
  id: string;
  label: string;
}

// ============================================
// CONTACT TYPES
// ============================================

export interface ContactLink {
  href: string;
  icon: IconType;
  label: string;
  text: string;
}

// ============================================
// SKILL TYPES
// ============================================

export enum SkillLevel {
  Expert = 100,
  Advanced = 75,
  Intermediate = 50,
  Beginner = 25,
}

export interface Skill {
  icon: IconType;
  level: SkillLevel;
}

export interface SkillCategory {
  icon: IconType;
  skills: string[];
}