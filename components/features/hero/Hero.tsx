"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center bg-white dark:bg-deep-black pt-20 transition-colors duration-300">
    {/* Geometric Grid Background */}
    <div className="absolute inset-0 opacity-[0.02]"
         style={{
           backgroundImage: 'linear-gradient(var(--cream-white) 1px, transparent 1px), linear-gradient(90deg, var(--cream-white) 1px, transparent 1px)',
           backgroundSize: '100px 100px'
         }}>
    </div>

    {/* Content */}
    <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Text Content - Bold Typography */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 border border-electric-lime px-4 py-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-electric-lime"></div>
            <span className="text-xs font-bold text-deep-black dark:text-cream-white uppercase tracking-widest">
              Software Engineering @UPC
            </span>
          </motion.div>

          {/* Name - Massive Bold Typography */}
          <div className="space-y-2">
            <motion.h1
              className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter text-deep-black dark:text-cream-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              TATIANA
            </motion.h1>
            <motion.h2
              className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter text-deep-black dark:text-cream-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              PAUCAR
            </motion.h2>
            {/* Accent Line */}
            <motion.div
              className="w-32 h-1 bg-electric-lime mt-6"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>
          </div>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-gray-700 dark:text-cream-white/80 font-normal max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Creando soluciones innovadoras con{' '}
            <span className="font-black text-electric-lime">backend</span>,{' '}
            <span className="font-black text-electric-lime">cloud</span> e{' '}
            <span className="font-black text-electric-lime">IA</span>
          </motion.p>

          {/* CTAs - Clean Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-electric-lime text-deep-black font-black text-sm uppercase tracking-wider hover:bg-cream-white transition-all duration-300"
            >
              Ver Proyectos
            </a>

          </motion.div>


        </motion.div>

        {/* Image - Right - Brutalist Frame */}
        <motion.div
          className="relative flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Brutalist Border Frame */}
            <div className="absolute -inset-4 border-4 border-electric-lime"></div>

            {/* Image Container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden">
              <Image
                src="/tmint.png"
                alt="Tatiana Paucar"
                width={500}
                height={500}
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>

            {/* Corner Accent */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-electric-lime"></div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Scroll Indicator - Minimalist */}
    <motion.div
      className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-[2px] h-16 bg-electric-lime"></div>
        <span className="text-xs font-bold text-deep-black dark:text-cream-white uppercase tracking-widest rotate-90 origin-center">Scroll</span>
      </div>
    </motion.div>
  </section>
);

export default Hero;