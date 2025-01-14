import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold  text-transparent bg-clip-text  bg-gradient-to-r from-[#588061] to-[#869F77] mb-4">
        {title}
      </h2>
      <p className="text-[#FDE9EA]/60 text-lg sm:text-xl max-w-2xl mx-auto">
        {description}
      </p>
    </div>



    
  );
};

export default SectionHeader;