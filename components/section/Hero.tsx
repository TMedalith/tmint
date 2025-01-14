"use client";

import React from "react";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Button } from "../ui/button";
import { tags } from "@/constants";

const Hero = () => {
  return (
    <section className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-24">
        {}
        <div className="flex flex-col-reverse md:flex-row md:gap-12 items-center">
          {}
          <div className="mt-8 md:mt-0 space-y-8 md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#588061]/10 border border-[#869F77]/20">
              <SparklesIcon className="text-[#FDE9EA] h-5 w-5" />
              <span className="text-[#FDE9EA] text-sm sm:text-base">
                Full-Stack & Mobile Developer 
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              {["Hello,", "I'm Tatiana Medalith"].map((text) => (
                <span
                  key={text}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-[#588061] to-[#ca7cb4]"
                >
                  {text}
                </span>
              ))}
            </h1>

            <p className="text-md sm:text-xl text-[#FDE9EA]">
              Passionate about leveraging technology to create innovative
              solutions. With experience in IoT, AI-driven applications, mobile and
              full-stack development, I thrive on turning ideas into impactful
              software.
            </p>

            <Button variant="link" href="#about">
              Learn More About Me
            </Button>
          </div>

          {}
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-square max-w-md mx-auto">
              <div className="relative w-full h-full">
                <Image
                  src="/tmint3.png"
                  alt="Tatiana Medalith - Software Engineer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#588061]/80 to-transparent opacity-60" />
              </div>
            </div>
          </div>
        </div>

        {}
        <div className="mt-12">
          <InfiniteMovingCards items={tags} direction="right" speed="fast" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
