"use client";

import { useState } from 'react';
import { experiences, categories } from '@/constants';
import { ExperienceCard } from '@/components/widgets/ExperienceCard';

const AboutSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('hackathons');

  const filteredExperiences = experiences
    .filter((exp) => exp.category === selectedCategory)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section id="about" className="py-32 px-6 md:px-16 lg:px-24 bg-white dark:bg-deep-black border-t border-gray-200 dark:border-cream-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Bold & Minimalist */}
        <div className="mb-20 animate-fade-in">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 bg-electric-lime"></div>
            <span className="text-xs font-bold text-gray-600 dark:text-cream-white/60 uppercase tracking-widest">
              Trayectoria
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-deep-black dark:text-cream-white mb-6 tracking-tighter">
            MIS EXPERIENCIAS
          </h2>

          <div className="flex items-start gap-8">
            <div className="w-24 h-1 bg-electric-lime mt-4"></div>
            <p className="text-lg text-gray-700 dark:text-cream-white/70 max-w-2xl leading-relaxed">
              Mi participación en hackathons, CTFs, voluntariados y eventos tecnológicos
            </p>
          </div>
        </div>

        {/* Category Filters - Brutalist */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map(({ id, name, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`px-6 py-3 font-black transition-all flex items-center gap-3 uppercase tracking-wider text-sm ${
                selectedCategory === id
                  ? 'bg-electric-lime text-deep-black'
                  : 'bg-white dark:bg-deep-black border-2 border-gray-300 dark:border-cream-white/30 text-deep-black dark:text-cream-white hover:border-electric-lime'
              }`}
            >
              <Icon className="h-5 w-5" />
              {name}
            </button>
          ))}
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
