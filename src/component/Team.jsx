"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard from "./TiltCard";
import g from "@/image/g.jpg";
import h from "@/image/h.jpg";
import i from "@/image/i.jpg";
import j from "@/image/j.png";
gsap.registerPlugin(ScrollTrigger);

const PROJECTS_PER_PAGE = 4;

const Team = () => {
  const sectionRef = useRef(null);
  const divRef = useRef(null);
  const [currentPage] = useState(1);

  const allProjects = [
    {
      title: "Chairman",
      description: "Adv: MD. Taukiruzzaman",
      image: h,
      
    },
    {
      title: "Director Engineer",
      description: "Engr: Tahmid-Uz-Zaman",
      image: g,
    },
    {
      title: "Managing Director",
      description: "A.K.M Kawsar kabir",
      image: i,
      
    },
    {
      title: "Marketing Director",
      description: "Sharmin Akter",
      image: j,
      
    },
  ];

  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const displayedProjects = allProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-title", {
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
      gsap.from(".projects", {
        opacity: 0,
        x: 40,
        filter: "blur(10px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef,divRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
  ref={sectionRef}
  id="team"
  className="px-4 sm:px-6 lg:px-8 py-[80px] sm:py-[110px] lg:py-[140px]"
>
  <div className="max-w-7xl mx-auto">
    
    {/* Heading */}
    <div className="text-center mb-14 sm:mb-20 projects-title">
<h2 className="text-5xl md:text-6xl font-black uppercase tracking-[6px] text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
        OurTeam
      </h2>
   <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm sm:text-base"> 
    Meet the talented individuals who make our team exceptional.
    </p>  
    </div>

    {/* Grid */}
    <div ref={divRef} className="projects grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 projects-grid">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="contents"
        >
          {displayedProjects.map((project, index) => (
            <div key={project.title} className="project-card-wrap">
              
              <TiltCard className="h-full">
<div className="relative h-[380px] sm:h-[430px] lg:h-[440px] rounded-[28px] sm:rounded-[32px] overflow-hidden group cursor-default shadow-2xl border border-outline-variant/10 bg-surface-container-low">
                   {/* Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized={typeof project.image === "string"}
                      className="w-full h-full object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                    />
                  </div>

                 <div className="absolute inset-0 bg-gradient-to-t from-black/110 via-black/30 to-transparent opacity-90 z-10 transition-opacity duration-700 group-hover:opacity-85" />

                  <div className="absolute inset-0 bg-black/10 z-[5]" />
                 

                  {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 lg:p-10 z-20">
                    
<div className="translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                      
                     

                      {/* Title */}
<h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1 drop-shadow-xl">
                        {project.title}
                      </h4>

                      {/* Description */}
<p className="text-white text-sm leading-relaxed mb-3 sm:mb-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                        {project.description}
                      </p>
<p className="text-white text-sm leading-relaxed mb-6 sm:mb-8 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
     Construct Real Estate & Developers Company Ltd.                  
                      </p>
 </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</section>
  );
};

export default Team;