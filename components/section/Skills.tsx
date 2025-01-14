"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { COLORS, Category, skillcategories, skills } from '@/constants';
import SectionHeader from '../ui/SectionHeader';

const getPosition = (index: number, total: number, radius: number) => {
  const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius
  };
};

const CenterDecoration = () => (
  <g className="center-decoration">
    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
      <g key={`decoration-${i}`} transform={`rotate(${angle})`}>
        <path
          d="M 0,-30 Q 20,-10 0,0 Q 20,10 0,30"
          fill="none"
          stroke={COLORS.accent}
          strokeWidth="1.5"
          opacity="0.5"
        />
        <circle cx="0" cy="-30" r="2" fill={COLORS.accent} />
      </g>
    ))}
    <circle
      r="20"
      fill="none"
      stroke={COLORS.accent}
      strokeWidth="1"
      strokeDasharray="4 4"
      className="animate-pulse"
    />
  </g>
);

const SkillNode = ({ skill, index, total }: { skill: string, index: number, total: number }) => {
  const pos = getPosition(index, total, 120);
  const tech = skills[skill];
  const strokeLength = 119.4;

  return (
    <g key={`tech-${index}`} transform={`translate(${pos.x}, ${pos.y})`} className="tech-node">
      <circle r="20" fill={COLORS.glass} className="transition-all duration-300" />
      <circle
        r="19"
        fill="none"
        stroke={COLORS.secondary}
        strokeWidth="1.5"
        className="transition-all duration-300"
        strokeDasharray={`${strokeLength}`}
        strokeDashoffset={strokeLength - (strokeLength * tech.level / 100)}
      />
      <foreignObject x="-10" y="-10" width="20" height="20">
        <div className="flex items-center justify-center w-full h-full">
          <tech.icon className="w-5 h-5 text-white/90" />
        </div>
      </foreignObject>
      <text y="32" textAnchor="middle" fill={COLORS.highlight} fontSize="11" className="font-medium">
        {skill}
      </text>
      <text y="45" textAnchor="middle" fill={COLORS.secondary} fontSize="9">
        {tech.level === 100 ? 'Expert' : tech.level === 75 ? 'Advanced' : 'Intermediate'}
      </text>
    </g>
  );
};

const CategoryNode = ({ category, index, selectedCategory, setSelectedCategory }: { category: Category, index: number, selectedCategory: Category, setSelectedCategory: (category: Category) => void }) => {
  const pos = getPosition(index, Object.keys(skillcategories).length, 200);
  const Icon = skillcategories[category].icon;
  const isSelected = category === selectedCategory;

  return (
    <g
      key={`category-${index}`}
      transform={`translate(${pos.x}, ${pos.y})`}
      onClick={() => setSelectedCategory(category)}
      style={{ cursor: 'pointer' }}
      className="category-node"
    >
      <circle
        r="25"
        fill={isSelected ? COLORS.primary : COLORS.glass}
        className="transition-all duration-300"
      />
      <foreignObject x="-15" y="-15" width="30" height="30">
        <div className="flex items-center justify-center w-full h-full">
          <Icon className={`w-7 h-7 ${isSelected ? 'text-white' : 'text-white/70'}`} />
        </div>
      </foreignObject>
      <text y="40" textAnchor="middle" fill={COLORS.highlight} fontSize="12" className="font-medium">
        {category}
      </text>
    </g>
  );
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Frontend');
  const orbitsRef = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    const animations = [
      gsap.from('.skill-title', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }),
      gsap.from('.orbit-path', {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
      }),
      gsap.to('.center-decoration', {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: 'none',
        transformOrigin: 'center'
      })
    ];

    orbitsRef.current.forEach((orbit, index) => {
      if (orbit) {
        animations.push(
          gsap.to(orbit, {
            rotation: 360,
            duration: 60 + index * 20,
            repeat: -1,
            ease: 'none',
            transformOrigin: 'center'
          })
        );
      }
    });

    return () => animations.forEach(anim => anim.kill());
  }, []);

  return (
    <div id="skills" className="min-h-screen   w-full py-0 px-2">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Tech Ecosystem"
          description="Showcasing my skills in web development and technology."
        />
        <div className="relative w-full overflow-hidden">
          <svg className="w-3/4 h-3/4 mx-auto" viewBox="-250 -250 500 500">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <CenterDecoration />

            <g ref={el => { orbitsRef.current[0] = el; }}>
              <circle className="orbit-path" r="200" fill="none" stroke={`${COLORS.primary}33`} strokeWidth="1" strokeDasharray="3 5" />
            </g>

            {Object.keys(skillcategories).map((category, index) =>
              <CategoryNode key={index} category={category as Category} index={index} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            )}

            <g ref={el => { orbitsRef.current[1] = el; }}>
              <circle className="orbit-path" r="120" fill="none" stroke={`${COLORS.secondary}33`} strokeWidth="1" strokeDasharray="3 5" />
            </g>

            {skillcategories[selectedCategory].skills.map((skill, index) =>
              <SkillNode key={index} skill={skill} index={index} total={skillcategories[selectedCategory].skills.length} />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Skills;