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



  return (
    <article className="     ">
      <div className="bg-gradient-to-br from-gray-900/90 to-transparent backdrop-blur rounded-2xl border border-[#869F77]/20   ">
        <div className="flex flex-col md:flex-row gap-6  p-6">
          <div className="md:w-1/2">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 md:space-y-6 space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-xl md:text-2xl tracking-wider font-bold text-white">
                {project.title}
              </h3>


              <div className="flex gap-4 z-10 relative">

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repositor"
                    className="p-2 text-[#869F77] hover:text-[#95cda1] transition-colors cursor-pointer"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                )}
                {project.liveDemoLink && (
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                    className="p-2 text-[#869F77] hover:text-[#abe2b7] transition-colors cursor-pointer"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-white  text-justify">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-lg text-white border border-[#869F77]/20 transition-transform hover:scale-105"
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