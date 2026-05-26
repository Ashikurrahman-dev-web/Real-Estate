"use client";

import { useEffect, useRef, useState } from "react";
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
  
  // ফর্ম সাবমিশন এবং স্টেট ট্র্যাকিংয়ের জন্য
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  // ফর্ম হ্যান্ডলার ফাংশন (৩ নম্বর অপশন - নো কোড সার্ভিস)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    
    formData.append("access_key", "42d04a17-c053-46e0-acee-6c3b355c3903");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        e.target.reset(); // ফর্মটি খালি করার জন্য
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-[80%] mx-auto px-6 py-[120px]" id="contact">
      {/* Header */}
      <div ref={divRef} className="heading text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-[6px] text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
          Contact Us
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-20 items-start">
        {/* LEFT — Talk to me cards */}
        <div className="space-y-8">
          <p className="text-sm font-bold text-on-surface-variant uppercase tracking-[0.2em] text-center md:text-left">
            Talk to Us Directly
          </p>
          <div className="grid gap-6">
            {contactMethods.map((method, i) => (
              <Magnetic key={i} strength={0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
className="glass-card p-8 text-center flex flex-col items-center border border-green-500/5 hover:border-blue-500/30 shadow-xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] group hover:bg-surface-container-high/60 transition-all duration-500"
                >
                  <div className={`w-12 h-12 rounded-2xl ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <span className="text-xl">{method.icon}</span>
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
              </Magnetic>
            ))}
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div className="space-y-8">
          <p className="text-sm font-bold text-on-surface-variant uppercase tracking-[0.2em] text-center md:text-left">
            Schedule a Meeting
          </p>
          
          {/* নতুন যুক্ত করা ফর্ম */}
          <motion.form 
            onSubmit={handleFormSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
    className="space-y-6 bg-surface-container-high/20 p-8 rounded-3xl border border-green-500/5 hover:border-blue-500/30 shadow-xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] backdrop-blur-md"
          >
            {/* Full Name Input */}
            <div>
              <input 
                type="text" 
                name="name"
                placeholder="Full Name*" 
                required
                className="w-full bg-transparent border-b border-on-surface-variant/30 py-4 px-2 text-on-background placeholder-on-surface-variant/50 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number*" 
                required
                className="w-full bg-transparent border-b border-on-surface-variant/30 py-4 px-2 text-on-background placeholder-on-surface-variant/50 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Email Address Input */}
            <div>
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-on-surface-variant/30 py-4 px-2 text-on-background placeholder-on-surface-variant/50 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            {/* Select Time Dropdown */}
            <div>
              <select 
                name="time_slot"
                className="w-full bg-transparent border-b border-on-surface-variant/30 py-4 px-2 text-on-background/80 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer appearance-none"
                defaultValue=""
              >
                <option value="" disabled className="flex bg-blue-500 text-on-surface-variant/50">Select A Time</option>
                <option value="morning" className="bg-blue-500 text-white">Morning (10:00 AM - 12:00 PM)</option>
                <option value="afternoon" className="bg-blue-500 text-white">Afternoon (02:00 PM - 05:00 PM)</option>
                <option value="evening" className="bg-blue-500 text-white">Evening (07:00 PM - 11:00 PM)</option>
              </select>
            </div>
{/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-10 py-4 bg-transparent border border-on-background text-on-background font-bold uppercase tracking-wider rounded-xl hover:bg-blue-500 hover:text-background transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>

            {/* স্ট্যাটাস নোটিফিকেশন */}
            {submitStatus === "success" && (
              <p className="text-green-500 text-sm font-semibold mt-2">✓ Thank you! Your response has been sent.</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-500 text-sm font-semibold mt-2">✕ Something went wrong. Please try again.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;