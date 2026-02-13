"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { GithubIcon, LinkedinIcon, Mail, ArrowUpRight, User, FolderKanban, Briefcase, Wrench, Camera } from "lucide-react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import {
  projects,
  workExperience,
  skills,
  education,
  siteConfig,
} from "@/data";

/* ── animation ────────────────────────────────── */
const fade = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ── nav sections ─────────────────────────────── */
const navSections = [
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "gallery", label: "Highlights", icon: Camera },
] as const;

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("projects");

  /* ── intersection observer for active nav ──── */
  useEffect(() => {
    const ids = navSections.map((s) => s.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="max-w-6xl mx-auto min-h-screen px-6 py-12 md:py-20 lg:px-12">
      {/* ━━━━━━━━━━ LEFT SIDEBAR (fixed) ━━━━━━━━━━ */}
      <header className="lg:fixed lg:top-0 lg:bottom-0 lg:left-[max(3rem,calc((100vw-72rem)/2))] lg:flex lg:flex-col lg:justify-between lg:w-[min(50vw,36rem)] lg:py-20 lg:pr-16">
        <div>
          {/* avatar + name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 group"
          >
            <Image
              src="/tmint.png"
              alt={siteConfig.name}
              width={140}
              height={140}
              className="rounded-full ring-4 ring-accent/20 shadow-lg shadow-accent/10 group-hover:ring-accent/40 group-hover:scale-105 transition-all duration-300"
              priority
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="space-y-2"
          >
            <motion.h1
              variants={fade}
              className="font-serif text-4xl md:text-5xl font-bold text-white"
            >
              {siteConfig.name}
            </motion.h1>

            <motion.p
              variants={fade}
              className="font-medium text-white/80"
            >
              Software Engineering Student at UPC
            </motion.p>
          </motion.div>

          {/* navigation (desktop only) */}
          <nav className="hidden lg:block mt-12" aria-label="In-page navigation">
            <ul className="space-y-1">
              {navSections.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={activeSection === id ? "page" : undefined}
                    className={`group flex items-center gap-3 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${activeSection === id
                      ? "text-white"
                      : "text-text-muted hover:text-white"
                      }`}
                  >
                    <span
                      className={`block h-px transition-all ${activeSection === id
                        ? "w-16 bg-white"
                        : "w-8 bg-text-muted/40 group-hover:w-16 group-hover:bg-white"
                        }`}
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* social icons (bottom of sidebar) */}
        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-5 justify-start items-center"
          >
            {[
              { href: siteConfig.social.github, icon: GithubIcon, label: "GitHub" },
              {
                href: siteConfig.social.linkedin,
                icon: LinkedinIcon,
                label: "LinkedIn",
              },
              { href: siteConfig.social.email, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${label} profile`}
                className="text-text-muted hover:text-accent transition-all hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </header>

      {/* ━━━━━━━━━━ RIGHT CONTENT (scrollable) ━━━━━━━ */}
      <main className="lg:ml-[50%] lg:w-1/2 pt-16 lg:pt-20 pb-24 lg:pb-0 space-y-20 md:space-y-24">        {/* ─── ABOUT ME ───────────────────────── */}
        <section id="about">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.h2
              variants={fade}
              className="font-serif text-2xl font-bold text-white mb-2 lg:sr-only"
            >
              About
            </motion.h2>
            <motion.p
              variants={fade}
              className="text-xs uppercase tracking-widest text-text-muted mb-8 hidden lg:block"
            >
              About
            </motion.p>

            <div className="space-y-4">
           
              <motion.p
                variants={fade}
                className="text-sm text-text-secondary leading-relaxed"
              >
                
                I spend most of my time building project, leading tech communities,  and pushing ideas into working products. 
    My team reached the<span className="text-white font-medium"> NASA Space Apps Global Finals 2025</span>.

              </motion.p>

              <motion.p
                variants={fade}
                className="text-sm text-text-secondary leading-relaxed"
              >
                These days I&apos;m deep into backend and AI integration. I don&apos;t stop until it works.
              </motion.p>
            </div>
          </motion.div>
        </section>
        {/* ─── PROJECTS ──────────────────────────── */}
        <section id="projects">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.h2
              variants={fade}
              className="font-serif text-2xl font-bold text-white mb-2 lg:sr-only"
            >
              Projects
            </motion.h2>
            <motion.p
              variants={fade}
              className="text-xs uppercase tracking-widest text-text-muted mb-8 hidden lg:block"
            >
              Projects
            </motion.p>

            <div className="space-y-8">
              {projects.map((p) => (
                <motion.article
                  key={p.title}
                  variants={fade}
                  className="group relative grid sm:grid-cols-[200px_1fr] gap-4 rounded-xl p-4 -mx-6 hover:bg-white/3 transition-all"
                >
                  {/* thumbnail */}
                  {p.image && (
                    <div className="relative h-32 sm:h-full rounded-lg overflow-hidden bg-white/5">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] text-accent tracking-wider uppercase font-semibold">
                          {p.type}
                        </span>
                        <h3 className="font-semibold text-white group-hover:text-accent transition-colors">
                          {p.title}
                          {(p.githubLink || p.liveDemoLink) && (
                            <ArrowUpRight className="inline w-3.5 h-3.5 ml-1 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                          )}
                        </h3>
                      </div>
                      <div className="flex gap-2 shrink-0 pt-1">
                        {p.githubLink && (
                          <a
                            href={p.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-text-muted hover:text-accent transition-all hover:scale-105"
                            aria-label={`View ${p.title} source code on GitHub`}
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Code</span>
                          </a>
                        )}
                        {p.liveDemoLink && (
                          <a
                            href={p.liveDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs text-text-muted hover:text-accent transition-all hover:scale-105"
                            aria-label={`View ${p.title} live demo`}
                          >
                            <ArrowUpRight className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Demo</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.technologies.map((t) => (
                        <span
                          key={t.name}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium hover:bg-accent/20 transition-colors"
                        >
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ─── EXPERIENCE & EDUCATION ────────────── */}
        <section id="experience">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.h2
              variants={fade}
              className="font-serif text-2xl font-bold text-white mb-2 lg:sr-only"
            >
              Experience &amp; Education
            </motion.h2>
            <motion.p
              variants={fade}
              className="text-xs uppercase tracking-widest text-text-muted mb-8 hidden lg:block"
            >
              Experience &amp; Education
            </motion.p>

            <div className="space-y-6">
              {/* Education first */}
              <motion.div
                variants={fade}
                className="group relative grid sm:grid-cols-[120px_1fr] gap-4 rounded-xl p-4 -mx-6 hover:bg-white/3 transition-all"
              >
                <p className="text-xs text-text-muted uppercase tracking-wide pt-1">
                  {education.period}
                </p>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-accent transition-colors">
                    {education.degree}
                  </h3>
                  <p className="text-text-muted text-sm mt-0.5">
                    {education.institution}
                  </p>
                  <p className="text-accent/80 text-xs mt-1">{education.note}</p>
                </div>
              </motion.div>

              {/* Work */}
              {workExperience.map((w) => (
                <motion.div
                  key={w.company}
                  variants={fade}
                  className="group relative grid sm:grid-cols-[120px_1fr] gap-4 rounded-xl p-4 -mx-6 hover:bg-white/3 transition-all"
                >
                  <p className="text-xs text-text-muted uppercase tracking-wide pt-1">
                    {w.period}
                  </p>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-accent transition-colors">
                      {w.role}
                    </h3>
                    <p className="text-text-muted text-sm mt-0.5">{w.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ─── SKILLS ────────────────────────────── */}
        <section id="skills">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <motion.h2
              variants={fade}
              className="font-serif text-2xl font-bold text-white mb-2 lg:sr-only"
            >
              Skills
            </motion.h2>
            <motion.p
              variants={fade}
              className="text-xs uppercase tracking-widest text-text-muted mb-8 hidden lg:block"
            >
              Skills
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((s) => (
                <motion.div
                  key={s.category}
                  variants={fade}
                  className="space-y-2"
                >
                  <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                    {s.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {s.skills.map((sk) => (
                      <span
                        key={sk}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium hover:bg-accent/20 transition-colors"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ─── HIGHLIGHTS ───────────────────────── */}
        <section id="gallery">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.h2
              variants={fade}
              className="font-serif text-2xl font-bold text-white mb-2 lg:sr-only"
            >
              Highlights
            </motion.h2>
            <motion.p
              variants={fade}
              className="text-xs uppercase tracking-widest text-text-muted mb-8 hidden lg:block"
            >
              Highlights
            </motion.p>

            <motion.div variants={fade}>
              <AnimatedTestimonials
                autoplay
                testimonials={[
                  {
                    name: "NASA Space Apps 2025",
                    designation: "Global Finalist — Top 45 / 10,000+ teams",
                    quote: "Built Memoralab with my team. RAG pipeline over 600+ NASA papers using LlamaIndex and Qdrant. Backend in Python/FastAPI, deployed on AWS Fargate. Making it to the finals was surreal.",
                    src: "/hackathon_nasa_1.webp",
                  },
                  {
                    name: "RIMAC Hackathon 2024",
                    designation: "1st Place",
                    quote: "48 hours to build a real-time insurance quote system. React frontend, Node.js backend, payment processing, the works. We barely slept but we won.",
                    src: "/hackathon_rimac_1.webp",
                  },
                  {
                    name: "CTF She Secure Peru 2024",
                    designation: "2nd Place — Cybersecurity CTF",
                    quote: "First time doing a proper CTF. Web exploitation, crypto challenges, reverse engineering. Got second place and learned a ton about security.",
                    src: "/ctf_shesecure_1.webp",
                  },
                  {
                    name: "Lima DevFest",
                    designation: "Logistics Coordinator",
                    quote: "Helped coordinate Lima's biggest Google Developer event. 500+ people, multiple tracks, somehow we pulled it off without major disasters.",
                    src: "/voluntariado_devfest_1.webp",
                  },
                  {
                    name: "CibersecUni",
                    designation: "Volunteer & Organizer",
                    quote: "Organized cybersecurity workshops and CTF competitions for students. Built a community of 200+ people who actually care about security.",
                    src: "/voluntariado_cibersec_1.webp",
                  },
                ]}
              />
            </motion.div>
          </motion.div>
        </section>

      </main>

      {/* ━━━━━━━━━━ MOBILE BOTTOM NAV ━━━━━━━━━━ */}
      <nav
        className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-base/90 backdrop-blur-xl border-t border-white/5 pb-safe"
        aria-label="Mobile navigation"
      >
        <ul className="flex justify-around items-center h-16 px-2">
          {navSections.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={activeSection === id ? "page" : undefined}
                className={`flex flex-col items-center gap-1 px-3 py-2 transition-all ${activeSection === id
                  ? "text-accent"
                  : "text-text-muted hover:text-white"
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium tracking-wide">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
