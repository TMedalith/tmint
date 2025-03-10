"use client";

import React from "react";
import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Button } from "../ui/button";
import { tags } from "@/constants";

const Hero = () => (
  <section className="min-h-screen ">
     
      <div className="flex flex-col md:flex-row items-center gap-8  ">
        <div className="space-y-4 md:space-y-8  order-1 md:order-0 ">
          <div className="inline-flex  gap-2 px-4 py-2 rounded-full bg-[#588061]/10 border border-[#588061]/20">
            <SparklesIcon className="text-white h-5 w-5" />
            <span className="text-white text-sm md:text-base">
            Software Engineering Student @UPC
            </span>
          </div>

          <h1 className=" block text-transparent bg-clip-text bg-[#588061]  text-3xl md:text-6xl font-bold" >
            Hola <br />Soy Tatiana Medalith
          </h1>


          <p className="text-base text-justify md:text-xl text-white">
            Me interesa el desarrollo backend, la arquitectura de software y la nube. He trabajado en aplicaciones web y móviles, explorando la integración de IA para optimizar procesos. Busco crear soluciones escalables y seguir aprendiendo tecnologías avanzadas.
          </p>

          <Button variant="link" href="#projects">
            Ver projectos
          </Button>

        </div>

        <div className="md:w-full w-1/2  order-0 md:order-1  ">
          <div className="relative aspect-square overflow-hidden rounded-2xl   ">
            <Image
              src="/tmint3.png"
              alt="Tatiana Medalith"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <div className="md:mt-12 mt-6">
        <InfiniteMovingCards items={tags} direction="right" speed="normal" />
      </div>
  </section>
);

export default Hero;