"use client";
import Hero from "@/components/section/Hero";
import Projects from "@/components/section/Projects";
import Skills from "@/components/section/Skills";
import AboutSection from "@/components/section/About";
import Image from "next/image";
import Contact from "@/components/section/Contact";
import SocialMedia from "@/components/layout/SocialMedia";

export default function Home() {
  return (
    <main >
      <div className="flex flex-col ">
        <SocialMedia />
        <Hero />
        <Projects />
        <AboutSection />
        {/* //<Skills /> */}
        
        <Contact />
      </div>
    </main>
  );
}
