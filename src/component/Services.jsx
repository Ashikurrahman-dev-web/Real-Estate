"use client";
import {useEffect, useRef} from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Services = () => {
    const divRef = useRef(null);
 useEffect(() => {
  gsap.from(".head", {
        opacity: 0,
        y: -50,
        filter: "blur(10px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: divRef.current,
          start: "top 85%",
        },
      });
 }, []);
  const services = [
    {
      title: "Secure Development",
      description: "To ensure that we deliver high quality real estate developments for our clients, we have a dedicated team with extensive and deep experience in real estate development.",
      icon: "shield",
      color: "from-blue-500/20 to-blue-500/5",
      size: "lg:col-span-2 lg:row-span-2",
    },
    {
      title: "Sincerity & Transparency",
      description: "We sincerely believe that direct and honest communication is the basis for any successful business relationship and pride ourselves on our client testimonials.",
      icon: "verified",
      color: "from-emerald-500/20 to-emerald-500/5",
      size: "lg:col-span-1 lg:row-span-1",
    },
    {
      title: "Fast Delivery",
      description: "Optimized workflow ensuring quick turnaround times without quality loss.",
      icon: "bolt",
      color: "from-amber-500/20 to-amber-500/5",
      size: "lg:col-span-1 lg:row-span-1",
    },
    
   
  ];

  return (
    <section
  id="services"
  className="px-4 sm:px-6 lg:px-8 py-[80px] sm:py-[110px] lg:py-[130px]"
>
  <div className="max-w-7xl mx-auto">
    
    {/* Top Label */}
    <div ref={divRef} className="head text-center">
      <h2 className="text-5xl md:text-6xl font-black uppercase tracking-[6px] text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
        Services
      </h2>
    </div>

    {/* Heading */}
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12 mb-14 sm:mb-20 mt-4">
      
      <div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-on-background">
          Premium Services
          <br className="hidden md:block" />
          For Your Dreams.
        </h2>
      </div>

      <p className="text-sm sm:text-base text-on-surface-variant/80 max-w-md leading-relaxed lg:text-right">
        we provide end-to-end proper solutions that focus on performance,
        efficiency, and high-impact results.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
      {services.map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.6 }}
          className={`glass-card relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-white/5 p-6 sm:p-8 shadow-xl transition-all duration-500 hover:border-blue-500/30 group h-full ${service.size}`}
        >
          {/* Hover Gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col">
            
            {/* Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-surface-container-high flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-blue-500 text-2xl sm:text-3xl">
                {service.icon}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-on-background mb-3 font-heading">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-[15px] text-on-surface-variant/80 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Animated Beam */}
          <div className="absolute -top-[100%] -left-[100%] w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45 pointer-events-none group-hover:top-[100%] group-hover:left-[100%] transition-all duration-[1.5s] ease-in-out" />
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Services;