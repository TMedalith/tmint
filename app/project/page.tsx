
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaFilter } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects, projectTypes } from '@/constants';
import ProjectCard from '@/components/widgets/ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const ProjectsPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!filterRef.current) return;

    gsap.fromTo(filterRef.current.children,
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
      }
    );
  }, []);

  const filteredProjects = selectedType === 'all'
    ? projects
    : projects.filter(project => project.type === selectedType);

  return (
    <div className="relative min-h-screen py-12 sm:py-16 lg:py-20 overflow-hidden px-4 sm:px-6">
      {}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FDE9EA] mb-4">
          All Projects
        </h1>
        <p className="text-lg sm:text-xl text-[#FDE9EA]/80 max-w-2xl mx-auto">
          Explore my complete portfolio of projects and filter by technology or category
        </p>
      </div>

      {}
      <div
        ref={filterRef}
        className="sticky top-4 z-20 flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-gray-900/80 p-3 sm:p-4 
        rounded-lg sm:rounded-xl backdrop-blur-xl border border-[#588061]/20 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto mb-12 sm:mb-16"
      >
        <FaFilter className="text-[#FDE9EA] w-4 h-4 sm:w-5 sm:h-5" />
        {projectTypes.map(type => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg transition-all duration-300 transform hover:scale-105 
            ${selectedType === type.id
              ? 'bg-[#588061] text-[#FDE9EA] shadow-lg'
              : 'bg-gray-800/80 text-[#FDE9EA]/60 hover:bg-gray-700'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {}
      <div className="space-y-12 sm:space-y-16 lg:space-y-24">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;