import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mt-20  ">
      <h2 className="text-4xl md:text-6xl  font-bold  text-transparent bg-clip-text  bg-[#869F77]   ">
        {title}
      </h2>
      <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
        {description}
      </p>
    </div>



    
  );
};

export default SectionHeader;