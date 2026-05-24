"use client";

import {useEffect, useRef} from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const items = [
  {
    title: "Landowners",
    position:
      "top-0 left-1/2 -translate-x-[300px] -translate-y-[20px]",
  },
  {
    title: "Development Capability",
    position:
      "bottom-0 left-1/2 -translate-x-[300px] translate-y-[20px]",
  },
  {
    title: "Financing Capability",
    position:
      "top-0 left-1/2 translate-x-[145px] -translate-y-[20px]",
  },
  {
    title: "Customers",
    position:
      "bottom-0 left-1/2 translate-x-[145px] translate-y-[20px]",
  },
];

const StrategySection = () => {
  const divRef = useRef(null);
 useEffect(() => {
  gsap.from(".heading", {
        opacity: 0,
        x: -50,
        filter: "blur(10px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 85%",
        },
      });
 }, []);
  return (
    <section id="strategy" className="relative min-h-screen bg-gradient-to-b from-white to-slate-100 overflow-hidden flex items-center justify-center px-4 py-24">
      
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-400/20 blur-3xl rounded-full" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        
        {/* Heading */}
        
    <div ref={divRef} 
            
 className="heading text-5xl md:text-6xl font-black uppercase tracking-[6px] text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500 mb-24"
        >
          Our Strategy
        </div>

        {/* Main Diagram */}
        <div className="relative w-full h-[700px] flex items-center justify-center">

          {/* SVG Lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 700"
            fill="none"
          >
            <motion.line
              x1="420"
              y1="240"
              x2="560"
              y2="320"
              stroke="#2563eb"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />

            <motion.line
              x1="420"
              y1="460"
              x2="560"
              y2="380"
              stroke="#2563eb"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.2 }}
            />

            <motion.line
              x1="780"
              y1="240"
              x2="640"
              y2="320"
              stroke="#2563eb"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.4 }}
            />

            <motion.line
              x1="780"
              y1="460"
              x2="640"
              y2="380"
              stroke="#2563eb"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.6 }}
            />
          </svg>

          {/* Side Circles */}
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.2,
              }}
              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}
              className={`absolute ${item.position}`}
            >
              <Circle text={item.title} />
            </motion.div>
          ))}

          {/* Center Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
            }}
            whileHover={{
              scale: 1.03,
            }}
            className="relative z-20"
          >
            <div className="w-[320px] h-[320px] rounded-full bg-blue-700  p-3 shadow-[0_0_60px_rgba(37,99,235,0.4)]">
              
              <div className="w-full h-full rounded-full bg-white p-3">
                
                <div className="w-full h-full rounded-full border-[10px] border-blue-500 flex items-center justify-center text-center px-8">
                  <p className="text-slate-700 leading-relaxed font-semibold text-lg">
                    We focus on delivering comprehensively mixed-use
                    developments that are of high quality and offer high returns
                    to investor.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 max-w-2xl text-center"
        >
          <h3 className="text-5xl md:text-6xl font-black uppercase tracking-[6px] text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
            Our Mission
          </h3>

          <p className="text-slate-600 text-lg leading-relaxed">
            We work to deliver quality aspirational real estate developments
            for our clients and build eye-catching buildings to make their
            dream comes true.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Circle = ({ text }) => {
  return (
    <div className="group relative">
      
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 p-[10px] shadow-2xl">
        
        <div className="w-full h-full rounded-full bg-white p-[6px]">
          
          <div className="w-full h-full rounded-full border-[7px] border-blue-500 flex items-center justify-center text-center px-5">
            <p className="font-bold text-slate-700 leading-snug text-sm md:text-base">
              {text}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StrategySection;