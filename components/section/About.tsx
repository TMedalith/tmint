"use client";

import { useState, useCallback, useMemo } from 'react';
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useGsapAnimations } from '@/hooks';
import { experiences, categories } from '@/constants';
import SectionHeader from "../ui/SectionHeader";
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Definición de tipos
interface Experience {
  id: string | number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  additionalImages?: string[];
}

const AboutSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('hackathons');
  const [imageIndices, setImageIndices] = useState<Record<string | number, number>>({});
  
  const refs = useGsapAnimations(selectedCategory);

  // Usar useMemo para filtrar experiencias solo cuando cambia la categoría
  const filteredExperiences = useMemo(() => {
    return experiences
      .filter((exp: Experience) => exp.category === selectedCategory)
      .sort((a: Experience, b: Experience) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
  }, [selectedCategory]);

  // Usar useCallback para funciones que no necesitan recrearse en cada render
  const changeImage = useCallback((experienceId: string | number, direction: 'next' | 'prev', e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    
    setImageIndices(prev => {
      const currentIndex = prev[experienceId] || 0;
      const experience = experiences.find(exp => exp.id === experienceId);
      if (!experience) return prev;
      
      const images = experience.additionalImages || [experience.image];
      
      let newIndex;
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % images.length;
      } else {
        newIndex = (currentIndex - 1 + images.length) % images.length;
      }
      
      return { ...prev, [experienceId]: newIndex };
    });
  }, []);

  // Optimizar la función para seleccionar directamente una imagen
  const selectImage = useCallback((experienceId: string | number, index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    
    setImageIndices(prev => ({
      ...prev,
      [experienceId]: index
    }));
  }, []);

  // Hacer el cambio de categoría más eficiente
  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    // Reiniciar los índices de imágenes al cambiar de categoría
    setImageIndices({});
  }, []);

  return (
    <section id="about" className="min-h-screen space-y-10 text-white pt-20">
      <div ref={refs.hero} className="mx-auto max-w-7xl">
        <SectionHeader
          title="Sobre Mí"
          description="Combinando creatividad para desarrollar software con impacto."
        />
      </div>

      <div className="max-w-4xl w-full mx-auto">
  {/* <p className="text-lg text-justify leading-relaxed">
    Estudiante de Ingeniería de Software en UPC  apasionada por el desarrollo de soluciones tecnológicas innovadoras. Mi experiencia abarca desde la creación de plataformas impulsadas por IA hasta aplicaciones que aprovechan datos satelitales, enfocándome siempre en arquitecturas escalables y experiencias de usuario intuitivas. Domino múltiples lenguajes y frameworks, incluyendo Java, Python, JavaScript, Next.js y Spring Boot. Mi participación en hackathones y comunidades tech me ha permitido fortalecer habilidades de resolución de problemas y trabajo en equipo. Certificada en metodologías ágiles, busco constantemente aplicar mis conocimientos para desarrollar sistemas distribuidos que generen impacto real y positivo.
  </p> */}
</div>

      {/* Categorías de experiencia - Optimizado */}
      <section className="mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4" ref={refs.categories}>
          {categories.map(({ id, name, icon: Icon }) => (
            <Button
              key={id}
              variant="button"
              onClick={() => handleCategoryChange(id)}
              className={cn(
                'transition-all duration-300 ease-in-out !px-6 !py-3',
                selectedCategory === id
                  ? 'bg-[#869F77] text-white shadow-lg scale-105'
                  : '!bg-[#869F77]/10 text-neutral-200 hover:!bg-[#869F77]/20'
              )}
              showArrow={false}
            >
              <Icon className="h-5 w-5 mr-2" />
              {name}
            </Button>
          ))}
        </div>
      </section>

      {/* Grid de experiencias - Optimizado para navegación rápida */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16" ref={refs.cards}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredExperiences.map((experience: Experience) => {
            const images = experience.additionalImages || [experience.image];
            const currentImageIndex = imageIndices[experience.id] || 0;
            const currentImage = images[currentImageIndex];
            
            return (
              <div
                key={experience.id.toString()}
                className="bg-gray-800/40 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[#869F77]/30 hover:scale-[1.02]"
              >
                {/* Contenedor de imagen con proporción fija */}
                <div className="relative aspect-video bg-black">
                  {/* Agregar key para forzar la recreación del componente Image cuando cambia la imagen */}
                  <Image
                    key={`${experience.id}-${currentImageIndex}`}
                    src={currentImage || "/placeholder.jpg"}
                    alt={`${experience.title} - imagen ${currentImageIndex + 1}`}
                    layout="fill"
                    objectFit="contain"
                    priority={currentImageIndex === 0} // Priorizar la carga de la primera imagen
                    loading="eager"
                    className="max-h-full"
                  />
                  
                  {/* Navegación táctil - toda la imagen es navegable */}
                  {images.length > 1 && (
                    <div className="absolute inset-0 z-10">
                      <div className="h-full w-1/2 float-left" onClick={(e) => changeImage(experience.id, 'prev', e)} />
                      <div className="h-full w-1/2 float-right" onClick={(e) => changeImage(experience.id, 'next', e)} />
                    </div>
                  )}
                  
                  {/* Controles de navegación */}
                  {images.length > 1 && (
                    <>
                      {/* Botones de navegación */}
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3 z-20 pointer-events-none">
                        <button 
                          onClick={(e) => changeImage(experience.id, 'prev', e)}
                          className="bg-black/30 hover:bg-black/50 rounded-full p-1.5 transition-colors pointer-events-auto"
                          aria-label="Imagen anterior"
                        >
                          <ChevronLeft size={20} className="text-white" />
                        </button>
                        
                        <button 
                          onClick={(e) => changeImage(experience.id, 'next', e)}
                          className="bg-black/30 hover:bg-black/50 rounded-full p-1.5 transition-colors pointer-events-auto"
                          aria-label="Siguiente imagen"
                        >
                          <ChevronRight size={20} className="text-white" />
                        </button>
                      </div>
                      
                      {/* Indicadores simplificados */}
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-20">
                        {images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => selectImage(experience.id, idx, e)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentImageIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
                            }`}
                            aria-label={`Ver imagen ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
                    {images.length > 1 && (
                      <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-md">
                        {currentImageIndex + 1}/{images.length}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-3">
                    {new Date(experience.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </p>
                  
                  <p className="text-sm text-gray-300">{experience.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default AboutSection;