import { FaTrophy, FaCode, FaLaptopCode, FaHandsHelping, FaCalendarAlt, FaGraduationCap, FaAws, FaJava, FaMobile } from "react-icons/fa";
import { SiAngular, SiBackendless, SiCplusplus, SiDocker, SiExpress, SiFigma, SiFirebase, SiFlask, SiFlutter, SiFrontendmentor, SiGit, SiKotlin, SiLinux, SiMicrogenetics, SiNextdotjs, SiNodedotjs, SiPostman, SiPython, SiReact, SiSpring, SiTailwindcss, SiVuedotjs } from "react-icons/si";
import { IconType } from "react-icons";

export const  tags = [
  { title: "Frontend Developer" },
  { title: "Mobile Developer" },
  { title: "Backend Developer" },
  { title: "UI/UX Designer" },
  { title: "Cybersecurity Enthusiast" },
  { title: "AI Explorer" },
];

export const experiences = [
  // CTFs
  {
    id: 1,
    category: 'ctf',
    title: 'CTF SheSecure',
    description: 'Logré el 2° lugar en SheSecure CTF, destacando en desafíos de ciberseguridad ofensiva y explotación de vulnerabilidades.',
    image: '/ctf_shesecure_1.jpg',
    additionalImages: ['/ctf_shesecure_1.jpg', '/ctf_shesecure_2.jpg', '/ctf_shesecure_3.jpg', '/ctf_shesecure_4.jpg'],
    date: 'June 2024'
  },
  {
    id: 2,
    category: 'ctf',
    title: 'Prima AFP & Pacífico Seguros CTF',
    description: 'Top 10 y clasificado a la final presencial en las oficinas de la empresa, destacando en análisis forense y explotación de vulnerabilidades.',
    image: '/ctf_pacifico_1.jpg',
    additionalImages: ['/ctf_pacifico_1.jpg', '/ctf_pacifico_2.jpg', '/ctf_pacifico_3.jpg', '/ctf_pacifico_4.jpg'],
    date: 'April 2024'
  },
  {
    id: 3,
    category: 'ctf',
    title: 'CTF The Weekend Hack',
    description: '2° lugar con mi equipo en The Weekend Hack, resolviendo desafíos avanzados de ciberseguridad y captura de banderas.',
    image: '/ctf_twh_1.jpg',
    additionalImages: ['/ctf_twh_1.jpg', '/ctf_twh_2.jpg'],
    date: 'July 2024'
  },
  // Hackathons
  {
    id: 4,
    category: 'hackathons',
    title: 'Hackathon Ayni',
    description: 'Top 3 en la sede de Lima con una plataforma innovadora para mujeres emprendedoras, destacando entre más de 60 equipos.',
    image: '/hackathon_ayni_1.jpg',
    additionalImages: ['/hackathon_ayni_1.jpg', '/hackathon_ayni_2.jpg', '/hackathon_ayni_3.jpg', '/hackathon_ayni_4.jpg', '/hackathon_ayni_5.jpg', '/hackathon_ayni_6.jpg', '/hackathon_ayni_7.jpg'],
    date: 'November 2024'
  },
  {
    id: 6,
    category: 'hackathons',
    title: 'Hackathon EmpoderaTech 2024',
    description: '1° lugar con YUPI, una solución tecnológica para impulsar la educación y accesibilidad.',
    image: '/hackathon_empoderatech_1.jpg',
    additionalImages: [  '/hackathon_empoderatech_2.jpg', '/hackathon_empoderatech_4.jpg', '/hackathon_empoderatech_5.jpg', '/hackathon_empoderatech_6.jpg'],
    date: 'December 2024'
  },
  {
    id: 7,
    category: 'hackathons',
    title: 'NASA Space Apps Challenge Ayacucho 2024',
    description: '2° lugar en la sede de Ayacucho y nominados al reconocimiento global con una solución innovadora en exploración espacial.',
    image: '/hackathon_nasa_1.jpg',
    additionalImages: ['/hackathon_nasa_1.jpg', '/hackathon_nasa_2.jpg', '/hackathon_nasa_3.jpg', '/hackathon_nasa_4.jpg', '/hackathon_nasa_5.jpg'],
    date: 'October 2024'
  },
  {
    id: 8,
    category: 'hackathons',
    title: 'Hackathon Reto Digital RIMAC',
    description: '1° lugar con una solución disruptiva, liderando el desarrollo del front-end.',
    image: '/hackathon_rimac_1.jpg',
    additionalImages: ['/hackathon_rimac_1.jpg', '/hackathon_rimac_2.jpg', '/hackathon_rimac_3.jpg', '/hackathon_rimac_4.jpg', '/hackathon_rimac_5.jpg'],
    date: 'June 2024'
  },
  // Volunteer
  {
    id: 9,
    category: 'volunteer',
    title: 'CiberSecUNI 2024',
    description: 'Apoyé en la gestión y registro de asistentes en un evento de ciberseguridad, facilitando la organización y logística.',
    image: '/voluntariado_cibersec_1.jpg',
    additionalImages: ['/voluntariado_cibersec_1.jpg', '/voluntariado_cibersec_2.jpg', '/voluntariado_cibersec_3.jpg', '/voluntariado_cibersec_4.jpg'],
    date: 'November 2024'
  },
  {
    id: 10,
    category: 'volunteer',
    title: 'Lima DevFest 2024',
    description: 'Colaboré en la organización del evento, gestionando el registro y recopilando feedback de los asistentes.',
    image: '/voluntariado_devfest_1.jpg',
    additionalImages: ['/voluntariado_devfest_1.jpg', '/voluntariado_devfest_2.jpg', '/voluntariado_devfest_3.jpg', '/voluntariado_devfest_4.jpg'],
    date: 'November 2024'
  },
  {
    id: 11,
    category: 'ctf',
    title: 'Programming Training Camp',
    description: 'Entrenamiento avanzado en programación competitiva, mejorando habilidades en algoritmos y estructuras de datos.',
    image: '/pc_trainingcamp_1.jpg',
    additionalImages: ['/pc_trainingcamp_1.jpg', '/pc_trainingcamp_2.jpg'],
    date: 'August 2024'
  },
  {
    id: 12,
    category: 'events',
    title: 'Deloitte Cybersecurity Bootcamp',
    description: 'Bootcamp intensivo de ciberseguridad, analizando riesgos y simulando respuestas ante amenazas.',
    image: '/evento_deloitte_1.jpg',
    additionalImages: ['/evento_deloitte_1.jpg', '/evento_deloitte_2.jpg', '/evento_deloitte_3.jpg', '/evento_deloitte_4.jpg'],
    date: 'May 2024'
  },
  {
    id: 13,
    category: 'events',
    title: 'Evento Globant',
    description: 'Participé en charlas sobre tendencias en software y mejores prácticas de desarrollo impartidas por expertos de Globant.',
    image: '/evento_globant_1.jpg',
    additionalImages: ['/evento_globant_1.jpg', '/evento_globant_2.jpg', '/evento_globant_3.jpg', '/evento_globant_4.jpg'],
    date: 'November 2024'
  },
  {
    id: 14,
    category: 'events',
    title: 'Evento IBM',
    description: 'Exploré los últimos avances en computación en la nube e inteligencia artificial en un evento de IBM.',
    image: '/evento_ibm_1.jpg',
    additionalImages: ['/evento_ibm_1.jpg', '/evento_ibm_2.jpg', '/evento_ibm_3.jpg'],
    date: 'October 2024'
  },
  {
    id: 15,
    category: 'events',
    title: 'Evento Microsoft',
    description: 'Participé en workshops prácticos y demostraciones tecnológicas presentadas por expertos de Microsoft.',
    image: '/evento_microsoft_1.jpg',
    additionalImages: ['/evento_microsoft_1.jpg', '/evento_microsoft_2.jpg', '/evento_microsoft_3.jpg', '/evento_microsoft_4.jpg', '/evento_microsoft_5.jpg', '/evento_microsoft_6.jpg'],
    date: 'September 2024'
  },
  {
    id: 16,
    category: 'events',
    title: 'Evento NTT Data',
    description: 'Descubrí soluciones tecnológicas innovadoras y estrategias empresariales en un evento de NTT Data.',
    image: '/evento_nttdata_1.jpg',
    additionalImages: ['/evento_nttdata_1.jpg', '/evento_nttdata_2.jpg', '/evento_nttdata_3.jpg', '/evento_nttdata_4.jpg'],
    date: 'August 2024'
  }
];




export const categories = [
  
  { id: 'hackathons', name: 'Hackathons', icon: FaLaptopCode },
  { id: 'ctf', name: 'Competitions', icon: FaCode },
  { id: 'volunteer', name: 'Volunteer Work', icon: FaHandsHelping },
  { id: 'events', name: 'Tech Events', icon: FaCalendarAlt }, 
];


export const COLORS = {
  glass: 'rgba(88, 128, 97, 0.15)',
  primary: '#869F77',
  secondary: '#869F77',
  accent: '#E7B5AC',
  highlight: '#FDE9EA',
  soft: '#F9E0DB',
} as const;

export const SkillLevel = {
  Expert: 100,
  Advanced: 75,
  Intermediate: 50,
  Beginner: 25
} as const;

export type Category = 'Frontend' | 'Backend' | 'Mobile' | 'DevOps' | 'Others' | 'Languages';

export interface CategoryInfo {
  icon: IconType;
  skills: string[];
}

export const skillcategories: Record<Category, CategoryInfo> = {
  Frontend: {
    icon: SiFrontendmentor,
    skills: ['React', 'Next.js', 'Vue.js', 'Angular', 'TailwindCSS']
  },
  Backend: {
    icon: SiBackendless,
    skills: ['Express.js', 'Spring Boot', 'flask']
  },
  Mobile: {
    icon: FaMobile,
    skills: ['Flutter', 'Kotlin']
  },
  DevOps: {
    icon: SiDocker,
    skills: ['Docker', 'AWS', 'Linux']
  },
  Others: {
    icon: SiFigma,
    skills: ['Git', 'Figma']
  },
  Languages: {
    icon: FaCode,
    skills: ['Python', 'Java', 'C++']
  }
};

export interface Skill {
  icon: IconType;
  level: number;
}

export const skills: Record<string, Skill> = {
  'React': { icon: SiReact, level: SkillLevel.Advanced },
  'Next.js': { icon: SiNextdotjs, level: SkillLevel.Intermediate },
  'Vue.js': { icon: SiVuedotjs, level: SkillLevel.Intermediate },
  'Angular': { icon: SiAngular, level: SkillLevel.Intermediate },
  'TailwindCSS': { icon: SiTailwindcss, level: SkillLevel.Advanced },

  'Express.js': { icon: SiExpress, level: SkillLevel.Intermediate },
  'Spring Boot': { icon: SiSpring, level: SkillLevel.Advanced },
  'flask': { icon: SiFlask, level: SkillLevel.Intermediate },

  'Flutter': { icon: SiFlutter, level: SkillLevel.Intermediate },
  'Kotlin': { icon: SiKotlin, level: SkillLevel.Intermediate },

  'Docker': { icon: SiDocker, level: SkillLevel.Intermediate },
  'AWS': { icon: FaAws, level: SkillLevel.Beginner },
  'Linux': { icon: SiLinux, level: SkillLevel.Advanced },

  'Python': { icon: SiPython, level: SkillLevel.Intermediate },
  'Java': { icon: FaJava, level: SkillLevel.Advanced },
  'C++': { icon: SiCplusplus, level: SkillLevel.Advanced },

  'Git': { icon: SiGit, level: SkillLevel.Expert },
  'Figma': { icon: SiFigma, level: SkillLevel.Intermediate },
};

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

export const projects: Project[] = [
  {
    "title": "AlliA",
    "description": "Plataforma de generación de contenido a partir de noticias impulsada por IA que permite a los usuarios crear contenido atractivo, analizar tendencias y exportar en varios formatos.",
    "technologies": [ { "name": "NextJs" }, 
      { "name": "Django" },
      { "name": "MySQL" }, 
      { "name": "Vectara" }, 
        { "name": "Docker" }, 
      { "name": "AWS" },
    
     
      { "name": "DALL·E" }, { "name": "OpenAI" },{ "name": "Grok" },
      { "name": "SerpApi" }
    ],
    "githubLink": "https://github.com/Loomin-Team/allia-frontend",
    "liveDemoLink": "https://allia-frontend.vercel.app/",
    "image": "/project_allia.jpg",
    "type": "ai"
  },
  {
    "title": "Evergrow",
    "description": "Una aplicación móvil que aprovecha datos satelitales en tiempo real para ayudar a los agricultores a optimizar decisiones, reducir riesgos y mejorar los rendimientos de los cultivos con una interfaz intuitiva.",
    "technologies": [
      { "name": "Node.js" },
      { "name": "React Native" },
      { "name": "Firebase" },
      { "name": "NASA Satellite Data API" },
      { "name": "MongoDB" }
    ],
    "githubLink": "https://github.com/Evergrow-NASA/evergrow_mobile_app",
    "liveDemoLink": "https://evergroww.netlify.app/",
    "image": "/project_evergrow.jpg",
    "type": "mobile"
  },
  {
    "title": "UPet",
    "description": "Una aplicación móvil que conecta a dueños de mascotas con veterinarios certificados, digitaliza los historiales médicos de las mascotas y proporciona recordatorios para facilitar su cuidado.",
    "technologies": [
      { "name": "React Native" },
      { "name": "Firebase" },
      { "name": "Node.js" },
      { "name": "MongoDB" },
      { "name": "Google Maps API" }
    ],
    "githubLink": "https://github.com/PetTechh/UPet-MobileApplication",
    "liveDemoLink": "https://pettechh.github.io/UPet-LandingPage/",
    "image": "/project_upet.jpg",
    "type": "mobile"
  }
];


export const projectTypes = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'ai', label: 'AI/ML' },
];

export interface Experience {
  additionalImages: any;
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
}