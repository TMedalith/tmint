
  import Image from 'next/image';
  import { Experience } from '@/types';
  
  interface ExperienceCardProps {
    experience: Experience;
    onClick: () => void;
  }
  
  export const ExperienceCard = ({ experience, onClick }: ExperienceCardProps) => (
    <article
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative h-72 overflow-hidden rounded-xl border border-[#869F77]/20">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <span className="mb-3 inline-block rounded-full bg-[#869F77] px-4 py-1 text-sm text-white">
            {experience.date}
          </span>
          <h3 className="mb-2 text-xl font-semibold text-white">
            {experience.title}
          </h3>
        </div>
      </div>
    </article>
  );