"use client";

import Image from 'next/image';
import { Experience } from '@/types';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <article className="group animate-slide-up">
      {/* Main Card Container - Brutalist */}
      <div className="relative h-full bg-white dark:bg-deep-black border-2 border-gray-200 dark:border-cream-white/20 overflow-hidden hover:border-electric-lime transition-all duration-300">
        {/* Image Section */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={experience.image}
            alt={experience.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-deep-black/50 dark:bg-deep-black/50 group-hover:bg-deep-black/30 transition-all duration-500"></div>

          {/* Date Badge */}
          <div className="absolute top-3 right-3 bg-electric-lime text-deep-black px-4 py-1.5 text-xs font-black uppercase tracking-wider">
            {experience.date}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-3 bg-white dark:bg-deep-black">
          <h3 className="text-xl font-black text-deep-black dark:text-cream-white leading-tight line-clamp-2 group-hover:text-electric-lime transition-colors uppercase tracking-tight">
            {experience.title}
          </h3>
          <p className="text-gray-700 dark:text-cream-white/70 text-sm leading-relaxed line-clamp-3">
            {experience.description}
          </p>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-electric-lime transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
      </div>
    </article>
  );
};