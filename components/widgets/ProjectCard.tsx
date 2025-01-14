"use client"

import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Technology {
  name: string
}

interface Project {
  title: string
  description: string
  image: string
  githubLink: string
  liveDemoLink: string
  technologies: Technology[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const links = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      link: project.githubLink,
      label: "GitHub Repository"
    },
    {
      icon: <FaExternalLinkAlt className="w-5 h-5" />,
      link: project.liveDemoLink,
      label: "Live Demo"
    }
  ]



  return (
    <article className="max-w-6xl mx-auto p-6 group">
      <div className="bg-gradient-to-br from-gray-900/90 to-transparent backdrop-blur rounded-2xl border border-[#588061]/20 overflow-hidden ">
        { }
        <div className="absolute inset-0 opacity-50">
          <svg className="w-full h-full">
            <pattern
              id="grid"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 30 0 L 0 0 0 30"
                fill="none"
                stroke="#588061"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 p-6">
          { }
          <div className="lg:w-1/2">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          { }
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-2xl font-medium text-[#FDE9EA]">
              {project.title}
            </h3>


            <div className="flex gap-4 z-10 relative">
              {links.map((item, i) => item.link && (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="p-2 text-[#E7B5AC] hover:text-[#F9E0DB] transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <p className="text-text-description">
              {project.description}
            </p>

            { }
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={`${project.title}-tech-${index}`}
                  className="px-4 py-2 text-sm rounded-lg text-[#FDE9EA] border border-[#588061]/20 transition-transform hover:scale-105"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard