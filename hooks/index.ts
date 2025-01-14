
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



export const useGsapAnimations = (selectedCategory: string) => {
  const refs = {
    hero: useRef<HTMLDivElement>(null),
    cards: useRef<HTMLDivElement>(null),
    categories: useRef<HTMLDivElement>(null)
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (refs.hero.current) {
        gsap.fromTo(refs.hero.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
      }

      if (refs.categories.current?.children) {
        gsap.fromTo(refs.categories.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (refs.cards.current?.children) {
        gsap.fromTo(refs.cards.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
        );
      }
    });

    return () => ctx.revert();
  }, [selectedCategory]);

  return refs;
};