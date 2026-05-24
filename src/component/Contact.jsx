"use client";

import {useEffect, useRef} from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const contactMethods = [
    {
      icon: "✉️",
      title: "EMAIL",
      value: "developersconsturct@gmail.com",
      link: "https://accounts.google.com/b/0/AddMailService",
      color: "bg-blue-500/10"
    },
    {
      icon: "💬",
      title: "WHATSAPP",
      value: "+8801941-453299",
      link: "https://wa.me/8801941453299",
      color: "bg-cyan-500/10"
    },
    ];
 const divRef = useRef(null);
 useEffect(() => {
  gsap.from(".heading", {
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
  return (
    <section className="max-w-[80%] mx-auto px-6 py-[120px]" id="contact">
      {/* Header */}
      <div ref={divRef} className=" heading text-center mb-20">
<h2 className="text-5xl md:text-6xl font-black uppercase tracking-[6px] text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
        Contact Us
      </h2>
        <h1 className="text-h1 text-on-background mt-3">
          Get in Touch
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-20 items-start">
        {/* LEFT — Talk to me cards */}
        <div className="space-y-8">
          <p className="text-sm font-bold text-on-surface-variant uppercase tracking-[0.2em] text-center md:text-left">
            Talk to me
          </p>
          <div className="grid gap-6">
            {contactMethods.map((method, i) => (
                <Magnetic key={i} strength={0.1}>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
className="glass-card p-8 text-center flex flex-col items-center border border-green-500/5 hover:border-blue-500/30 shadow-xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] group hover:bg-surface-container-high/60 transition-all duration-500"
              >
                <div className={`w-12 h-12 rounded-2xl ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                  {method.isTextIcon ? (
                    <span className="font-black text-xl text-primary">{method.icon}</span>
                  ) : (
                    <span className="text-xl">{method.icon}</span>
                  )}
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-background mb-1">
                  {method.title}
                </p>
                <p className="text-sm text-on-surface-variant mb-6 truncate max-w-full px-2">
                  {method.value}
                </p>
                <a
                  href={method.link}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-primary text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Write me
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </motion.div>
            </Magnetic>))}
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div className="space-y-8">
<p className="text-sm font-bold text-on-surface-variant uppercase tracking-[0.2em] text-center md:text-left">
            Write me your project
          </p>
          
        </div>
        </div>
    </section>
  );
};

export default Contact;