import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="space-y-8 mb-20">
      <h2 className="text-5xl md:text-7xl font-black text-cream-white tracking-tighter uppercase">
        {title}
      </h2>
      <div className="flex items-start gap-8">
        <div className="w-24 h-1 bg-electric-lime mt-4"></div>
        <p className="text-lg text-cream-white/70 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;