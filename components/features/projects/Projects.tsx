import React from 'react';
import { projects } from '@/constants';
import ProjectCard from '@/components/widgets/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-16 lg:px-24 bg-gray-50 dark:bg-deep-black border-t border-gray-200 dark:border-cream-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Bold & Minimalist */}
        <div className="mb-20 animate-fade-in">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 bg-electric-lime"></div>
            <span className="text-xs font-bold text-gray-600 dark:text-cream-white/60 uppercase tracking-widest">
              Portfolio
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-deep-black dark:text-cream-white mb-6 tracking-tighter">
            MIS PROYECTOS
          </h2>

          <div className="flex items-start gap-8">
            <div className="w-24 h-1 bg-electric-lime mt-4"></div>
            <p className="text-lg text-gray-700 dark:text-cream-white/70 max-w-2xl leading-relaxed">
              Soluciones tecnológicas que combinan creatividad, código e innovación
            </p>
          </div>
        </div>

        {/* Cards Grid - Clean Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;