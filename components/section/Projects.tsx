"use client"

import React from 'react'
import { projects } from '@/constants'
import ProjectCard from '../widgets/ProjectCard'
import SectionHeader from '../ui/SectionHeader'
import { Button } from '../ui/button'

const Projects = () => {
  const displayedProjects = projects.slice(0, 3)

  return (
    <section id="projects" className="min-h-screen px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          description="A showcase of my latest work and creative endeavors in web development"
        />

        <div className="space-y-16">
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <Button variant='link' href="/project">View More Projects</Button>
        </div> */}
      </div>
    </section>
  )
}

export default Projects