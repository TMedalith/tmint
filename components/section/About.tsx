"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Me"
          description="Blending creativity and technical expertise to build impactful software."
        />

        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
          {}
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/hackathon_ayni_3.jpg"
              alt="Hackathon participation - Developing innovative solutions"
              width={700}
              height={700}
              className="hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
            />
          </div>

          {}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold mb-6 text-[#a0d995]">
              A Journey of Growth
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              I am a Software Engineering student at UPC, with a strong focus on creating solutions that tackle real-world challenges. My projects span diverse areas such as IoT-based agriculture, AI-powered platforms, and full-stack web and mobile applications.
            </p>
           
            <p className="text-lg leading-relaxed mb-6">
              When I’m not coding, you’ll find me exploring new tech trends, participating in hackathons, or working on passion projects. I believe in the power of technology to drive meaningful change.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#a0d995] text-gray-900 font-medium shadow-md hover:bg-[#8fc97b] transition-all duration-300"
            >
              Explore Experience Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
