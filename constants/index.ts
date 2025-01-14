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
    description: 'Achieved 2nd place in the SheSecure CTF competition.',
    image: '/ctf_shesecure_1.jpg',
    additionalImages: [
      '/ctf_shesecure_1.jpg',
      '/ctf_shesecure_2.jpg',
      '/ctf_shesecure_3.jpg',
      '/ctf_shesecure_4.jpg'
    ],
    date: 'June 2024'
  },
  {
    id: 2,
    category: 'ctf',
    title: 'Prima AFP y Pacífico Seguros CTF',
    description: 'Top 10 and invited to the offices to compete in person.',
    image: '/ctf_pacifico_1.jpg',
    additionalImages: [
      '/ctf_pacifico_1.jpg',
      '/ctf_pacifico_2.jpg',
      '/ctf_pacifico_3.jpg',
      '/ctf_pacifico_4.jpg'
    ],
    date: 'April 2024'
  },
  {
    id: 3,
    category: 'ctf',
    title: 'CTF The Weekend Hack',
    description: 'My team achieved 2nd place.',
    image: '/ctf_twh_1.jpg',
    additionalImages: ['/ctf_twh_1.jpg', '/ctf_twh_2.jpg'],
    date: 'July 2024'
  },
  // Hackathons
  {
    id: 4,
    category: 'hackathons',
    title: 'Hackathon Ayni',
    description: ' We were one of the three groups invited to compete in person at the Lima headquarters.',
    image: '/hackathon_ayni_1.jpg',
    additionalImages: [
      '/hackathon_ayni_1.jpg',
      '/hackathon_ayni_2.jpg',
      '/hackathon_ayni_3.jpg',
      '/hackathon_ayni_4.jpg',
      '/hackathon_ayni_5.jpg',
      '/hackathon_ayni_6.jpg',
      '/hackathon_ayni_7.jpg'
    ],
    date: 'November 2024'
  },
  {
    id: 5,
    category: 'hackathons',
    title: 'Hackathon Belcorp 2023',
    description: 'We successfully advanced to the second stage.',
    image: '/hackathon_belcorp_1.jpg',
    additionalImages: ['/hackathon_belcorp_1.jpg', '/hackathon_belcorp_2.jpg', '/hackathon_belcorp_3.jpg'],
    date: 'October 2023'
  },
  {
    id: 6,
    category: 'hackathons',
    title: 'Hackathon EmpoderaTech 2024',
    description: 'I was part of the winning team that developed YUPI',
    image: '/hackathon_empoderatech_1.jpg',
    additionalImages: [
      '/hackathon_empoderatech_1.jpg',
      '/hackathon_empoderatech_2.jpg',
      '/hackathon_empoderatech_4.jpg',
      '/hackathon_empoderatech_5.jpg',
      '/hackathon_empoderatech_6.jpg',
      '/hackathon_empoderatech_7.jpg',
    ],
    date: 'December 2024'
  },
  {
    id: 7,
    category: 'hackathons',
    title: 'NASA Space Apps Challenge Ayacucho 2024',
    description: ' We achieved 2nd place in Ayacucho and were nominated for global recognition.',
    image: '/hackathon_nasa_1.jpg',
    additionalImages: [
      '/hackathon_nasa_1.jpg',
      '/hackathon_nasa_2.jpg',
      '/hackathon_nasa_3.jpg',
      '/hackathon_nasa_4.jpg',
      '/hackathon_nasa_5.jpg'
    ],
    date: 'October 2024'
  },
  {
    id: 8,
    category: 'hackathons',
    title: 'Hackathon Reto Digital RIMAC',
       description: 'We won the competition and I was responsible for developing the front-end.', 
       image: '/hackathon_rimac_1.jpg',
    additionalImages: [
      '/hackathon_rimac_1.jpg',
      '/hackathon_rimac_2.jpg',
      '/hackathon_rimac_3.jpg',
      '/hackathon_rimac_4.jpg',
      '/hackathon_rimac_5.jpg'
    ],
    date: 'June 2024'
  },
  // Volunteer
  {
    id: 9,
    category: 'volunteer',
    title: ' CiberSecUNI 2024',
        description: ' Assisted in the registration of attendees.', 
        image: '/voluntariado_cibersec_1.jpg',
    additionalImages: [
      '/voluntariado_cibersec_1.jpg',
      '/voluntariado_cibersec_2.jpg',
      '/voluntariado_cibersec_3.jpg',
      '/voluntariado_cibersec_4.jpg'
    ],
    date: 'November 2024'
  },
  {
    id: 10,
    category: 'volunteer',
    title: 'Lima DevFest 2024',
       description: 'Contributed to the registration of attendees and collected feedback from attendees about the speakers.', 
       image: '/voluntariado_devfest_1.jpg',
    additionalImages: [
      '/voluntariado_devfest_1.jpg',
      '/voluntariado_devfest_2.jpg',
      '/voluntariado_devfest_3.jpg',
      '/voluntariado_devfest_4.jpg'
    ],
    date: 'November 2024'
  },
  {
    id: 11,
    category: 'programming',
    title: 'Programming Training Camp',
    description: 'Attended an advanced training camp focused on competitive programming.',
    image: '/pc_trainingcamp_1.jpg',
    additionalImages: ['/pc_trainingcamp_1.jpg', '/pc_trainingcamp_2.jpg'],
    date: 'August 2024'
  }
  // },
  // {
  //   id: 12,
  //   category: 'events',
  //   title: 'Deloitte Cibersecurity Bootcamp',
  //       description: 'Engaged in a cybersecurity bootcamp where we analyzed risks and simulated startup roles to strategize responses to risk scenarios.',image: '/evento_deloitte_1.jpg',
  //   additionalImages: [
  //     '/evento_deloitte_1.jpg',
  //     '/evento_deloitte_2.jpg',
  //     '/evento_deloitte_3.jpg',
  //     '/evento_deloitte_4.jpg'
  //   ],
  //   date: 'May 2024'
  // },
  // {
  //   id: 13,
  //   category: 'events',
  //   title: 'Evento Globant',
  //   description: 'Explored software trends and development practices during Globant talks.',
  //   image: '/evento_globant_1.jpg',
  //   additionalImages: [
  //     '/evento_globant_1.jpg',
  //     '/evento_globant_2.jpg',
  //     '/evento_globant_3.jpg',
  //     '/evento_globant_4.jpg'
  //   ],
  //   date: 'November 2023'
  // },
  // {
  //   id: 14,
  //   category: 'events',
  //   title: 'Evento IBM',
  //   description: 'Learned about the latest advancements in cloud computing and AI.',
  //   image: '/evento_ibm_1.jpg',
  //   additionalImages: ['/evento_ibm_1.jpg', '/evento_ibm_2.jpg', '/evento_ibm_3.jpg'],
  //   date: 'October 2023'
  // },
  // {
  //   id: 15,
  //   category: 'events',
  //   title: 'Evento Microsoft',
  //   description: 'Engaged in hands-on workshops and tech demos by Microsoft experts.',
  //   image: '/evento_microsoft_1.jpg',
  //   additionalImages: [
  //     '/evento_microsoft_1.jpg',
  //     '/evento_microsoft_2.jpg',
  //     '/evento_microsoft_3.jpg',
  //     '/evento_microsoft_4.jpg',
  //     '/evento_microsoft_5.jpg',
  //     '/evento_microsoft_6.jpg'
  //   ],
  //   date: 'September 2023'
  // },
  // {
  //   id: 16,
  //   category: 'events',
  //   title: 'Evento NTT Data',
  //   description: 'Explored innovative solutions and technology at NTT Data events.',
  //   image: '/evento_nttdata_1.jpg',
  //   additionalImages: [
  //     '/evento_nttdata_1.jpg',
  //     '/evento_nttdata_2.jpg',
  //     '/evento_nttdata_3.jpg',
  //     '/evento_nttdata_4.jpg'
  //   ],
  //   date: 'August 2023'

];


export const categories = [
  
  { id: 'hackathons', name: 'Hackathons', icon: FaLaptopCode },
  { id: 'ctf', name: 'CTF Competitions', icon: FaCode },
  { id: 'volunteer', name: 'Volunteer Work', icon: FaHandsHelping },
  //{ id: 'events', name: 'Tech Events', icon: FaCalendarAlt },
  { id: 'programming', name: 'Programming', icon: FaGraduationCap },
];


export const COLORS = {
  glass: 'rgba(88, 128, 97, 0.15)',
  primary: '#588061',
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
    "title": "Evergrow",
    "description": "A mobile app leveraging real-time satellite data to help farmers optimize decisions, reduce risks, and boost crop yields with a user-friendly interface.",
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
    "title": "AlliA",
    "description": "An AI-powered content generation platform that allows users to create compelling content, analyze trends, and export in various formats for erse industries.",
    "technologies": [
      { "name": "Python" },
      { "name": "TensorFlow" },
      { "name": "React" },
      { "name": "MongoDB" },
      { "name": "AWS" }
    ],
    "githubLink": "https://github.com/Loomin-Team/allia-frontend",
    "liveDemoLink": "https://allia-frontend.vercel.app/",
    "image": "/project_allia.jpg",
    "type": "ai"
  },
  {
    "title": "UPet",
    "description": "An innovative mobile app that connects pet owners with certified veterinarians, digitizes pet medical records, and provides reminders to simplify pet care.",
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