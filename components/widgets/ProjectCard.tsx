"use client";

import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

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

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      {/* Main Card Container - Brutalist */}
      <div className="relative h-full bg-white dark:bg-deep-black border-2 border-gray-200 dark:border-cream-white/20 overflow-hidden hover:border-electric-lime transition-all duration-300">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-deep-black/40 dark:bg-deep-black/40 group-hover:bg-deep-black/20 transition-all duration-500"></div>

          {/* Action Links */}
          <div className="absolute top-4 right-4 flex gap-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="w-10 h-10 flex items-center justify-center bg-cream-white text-deep-black hover:bg-electric-lime transition-all duration-300"
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
                className="w-10 h-10 flex items-center justify-center bg-electric-lime text-deep-black hover:bg-cream-white transition-all duration-300"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4 bg-white dark:bg-deep-black">
          {/* Title */}
          <h3 className="text-2xl font-black text-deep-black dark:text-cream-white leading-tight tracking-tight group-hover:text-electric-lime transition-colors uppercase">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-700 dark:text-cream-white/70 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Technologies - Clean Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.slice(0, 5).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-xs font-bold bg-white dark:bg-deep-black border border-gray-300 dark:border-cream-white/30 text-deep-black dark:text-cream-white hover:border-electric-lime hover:text-electric-lime transition-all uppercase tracking-wider"
              >
                {tech.name}
              </span>
            ))}
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-electric-lime transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard