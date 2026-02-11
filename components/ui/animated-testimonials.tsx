"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  return (
    <div className="w-full space-y-5">
      {/* ── Image ── */}
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-white/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[active].src}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={testimonials[active].src}
              alt={testimonials[active].name}
              fill
              draggable={false}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* nav arrows on image */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-3 pb-3 pt-12 bg-linear-to-t from-black/50 to-transparent">
          <div>
            <p className="text-sm font-semibold text-white drop-shadow-lg">
              {testimonials[active].name}
            </p>
            <p className="text-xs text-white/70 drop-shadow-lg">
              {testimonials[active].designation}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous highlight"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all hover:scale-110"
            >
              <ArrowLeft className="h-4 w-4 text-white" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next highlight"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all hover:scale-110"
            >
              <ArrowRight className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Caption ── */}
      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="text-sm leading-relaxed text-text-secondary"
        >
          {testimonials[active].quote}
        </motion.p>
      </AnimatePresence>

      {/* ── Dots indicator ── */}
      <div className="flex justify-center gap-1.5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`View highlight ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${isActive(i)
              ? "w-6 bg-accent"
              : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
          />
        ))}
      </div>
    </div>
  );
};
