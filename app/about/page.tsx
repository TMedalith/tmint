"use client";
import { useState } from 'react';
import { experiences, categories } from '@/constants';
import type { Experience } from '@/types';
import { Button } from '@/components/ui/button';
import { ExperienceCard } from '@/components/widgets/ExperienceCard';
import ImageModal from '@/components/widgets/ImageModal';
import { cn } from '@/lib/utils';
import { useGsapAnimations } from '@/hooks';

export default function About() {
  const [selectedCategory, setSelectedCategory] = useState('hackathons');
  const [selectedImage, setSelectedImage] = useState<Experience | null>(null);
  
  const refs = useGsapAnimations(selectedCategory);

  const sortedExperiences = experiences
    .filter((exp) => exp.category === selectedCategory)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen w-full pb-16 pt-20">
      <section
        ref={refs.hero}
        className="mx-auto mb-16 max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <h1 className="mb-6 text-center text-5xl font-bold text-white md:text-6xl">
          My Journey in <span className="text-[#588061]">Software Engineering</span>
        </h1>
        <p className="mx-auto max-w-3xl text-center text-lg text-neutral-300">
          As a Software Engineering student at UPC, I constantly seek to expand
          the boundaries of what is possible through code.
        </p>
      </section>

      <section className="mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          className={cn("flex flex-wrap justify-center gap-4")} 
          ref={refs.categories}
        >
          {categories.map(({ id, name, icon: Icon }) => (
            <Button
              key={id}
              variant="button"
              onClick={() => setSelectedCategory(id)}
              className={cn(
                'transition-all duration-300 ease-in-out !px-6 !py-3',
                selectedCategory === id
                  ? 'bg-[#588061] text-white shadow-lg scale-105'
                  : '!bg-[#588061]/10 text-neutral-200 hover:!bg-[#588061]/20'
              )}
              showArrow={false}
            >
              <Icon className="h-5 w-5" />
              {name}
            </Button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          ref={refs.cards}
        >
          {sortedExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              onClick={() => setSelectedImage(experience)}
            />
          ))}
        </div>
      </section>

      {selectedImage && (
        <ImageModal
        images={selectedImage.additionalImages}
        title={selectedImage.title}
        description={selectedImage.description}
        date={selectedImage.date}
        onClose={() => setSelectedImage(null)}
      />
      )}
    </div>
  );
}