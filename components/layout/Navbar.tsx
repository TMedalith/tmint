import React from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 bg-white/95 dark:bg-deep-black/95 backdrop-blur-sm z-50 border-b border-gray-200/50 dark:border-cream-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Bold & Minimalist */}
          <a href="/#home" className="group">
            <span className="text-2xl md:text-3xl font-black text-deep-black dark:text-cream-white tracking-tighter hover:text-electric-lime transition-colors duration-300">
              TATIANA
            </span>
          </a>

          {/* Navigation Links - Clean Typography */}
          <div className="flex items-center gap-8">
            <a
              href="/#about"
              className="text-sm font-bold text-gray-700 dark:text-cream-white/70 hover:text-electric-lime transition-colors duration-300 uppercase tracking-wider"
            >
              Experiencias
            </a>
            <a
              href="/#projects"
              className="text-sm font-bold text-gray-700 dark:text-cream-white/70 hover:text-electric-lime transition-colors duration-300 uppercase tracking-wider"
            >
              Proyectos
            </a>
            <a
              href="/#contact"
              className="text-sm font-bold text-gray-700 dark:text-cream-white/70 hover:text-electric-lime transition-colors duration-300 uppercase tracking-wider"
            >
              Contacto
            </a>
            <ThemeToggle />
          </div>

          {/* CTA Button - Brutalist */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-3 bg-electric-lime text-deep-black font-black text-sm uppercase tracking-wider hover:bg-cream-white transition-all duration-300"
          >
            Ver CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
