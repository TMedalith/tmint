"use client"

import React from 'react'
import { projects } from '@/constants'
import ProjectCard from '../widgets/ProjectCard'
import SectionHeader from '../ui/SectionHeader'
import { Button } from '../ui/button'

const Projects = () => {
  const displayedProjects = projects

  return (
    <section id="projects" className="  md:space-y-16    space-y-8">
      <SectionHeader
        title="Proyectos Destacados"
        description="Una muestra de mi trabajo más reciente"
      />
      {displayedProjects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          index={index}
        />
      ))}

      {/* <div className="mt-12 text-center">
          <Button variant='link' href="/project">View More Projects</Button>
        </div> */}
    </section>
  )
}

export default Projects