"use client";
import dynamic from "next/dynamic";
import {useRef,useEffect,useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import a from '@/image/a.jpg';
import c from '@/image/c.jpg';
import b from '@/image/b.jpg';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import Magnetic from "./Magnetic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "./TiltCard";
gsap.registerPlugin(ScrollTrigger);
const LeafletMap = dynamic(
  () => import("@/component/LeafletMap"),
  {
    ssr: false,
  }
);
const ImageSlider = () => {
  const slides = [
    { id: 1, title: 'Property 1', img: a },
    { id: 2, title: 'Property 2', img: b },
    { id: 3, title: 'Property 3', img: c },
    
  ];
 const [showMap, setShowMap] = useState(false);
  const sectionRef = useRef(null);
 useEffect(() => {
  gsap.from(".about-heading", {
        opacity: 0,
        x: -50,
        filter: "blur(10px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
 }, []);
  return (
    <div ref={sectionRef}
     id='properties' className="about-heading max-w-6xl mx-auto px-4 py-8 relative">
      <div className="text-center mb-14 sm:mb-20 projects-title">
<h2 className="text-5xl md:text-6xl font-black uppercase tracking-[6px] text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
        Properties
      </h2>
    </div>
    <div className="flex justify-center my-6">
      <div 
className="w-[60%] sm:col-span-2 glass-card p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] border border-white/5 hover:border-blue-500/30 shadow-xl transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group overflow-hidden relative min-h-[180px]">
            
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <h4 className="text-2xl sm:text-3xl font-black text-on-background mb-2">
                Our Under Construction Project.
              </h4>
<p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
  54 Palashpur, Gas Road Kadamtoli, Dhaka-1236
</p>
              <p className="flex text-sm sm:text-base text-on-surface-variant leading-relaxed">
                 Below is a glimpse of our ongoing project.<span className="material-symbols-outlined text-blue-500">arrow_downward</span>
              </p>
            </div>

            <div className="text-5xl sm:text-7xl text-on-surface-variant/10 group-hover:text-blue-500/30 group-hover:scale-110 transition-all duration-700 relative z-10 self-end sm:self-auto">
              <button
              onClick={() => setShowMap(!showMap)}
className="bg-gradient-to-r from-blue-400 via-cyan-500 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:opacity-90 transition-all shadow-lg cursor-pointer"
            >
              {showMap ? "Hide Map" : "View Map"}
            </button>
      </div>
       {showMap && (
            <div className="w-full h-[400px] rounded-3xl overflow-hidden mt-8">
              <LeafletMap />
            </div>
          )}
          </div>
    </div>
      <div className="flex justify-center gap-3 mb-6">
        <Magnetic strength={0.3}>
<button className="prev-btn w-12 h-12 cursor-pointer rounded-full border border-gray-400 flex items-center justify-center hover:bg-blue-400 transition-colors">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button></Magnetic>
        <Magnetic strength={0.3}>
        <button className="next-btn w-12 h-12 cursor-pointer rounded-full border border-gray-400 flex items-center justify-center hover:bg-blue-400 transition-colors">
      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button></Magnetic>
      </div>
<Swiper
        modules={[Navigation]}
        spaceBetween={24} 
        slidesPerView={1.2} 
        navigation={{
          prevEl: '.prev-btn', 
          nextEl: '.next-btn', 
        }}
        breakpoints={{
          640: { slidesPerView: 1.3 },
          1024: { slidesPerView: 1.4 },
        }}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
           <Tilt className="w-full h-[500px]"> 
          <div className=" relative rounded-lg overflow-hidden group w-full h-[500px]">
              
        <Image 
                src={slide.img} 
                alt={slide.title} 
                fill
className="w-full h-full object-cover transition-transform duration-[2500ms] group-hover:scale-110"
              />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
                <p className="text-white/80 text-sm leading-relaxed mb-6 sm:mb-8 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                  A lively structure, full of exclusivity...
                </p>
              </div>  
            </div>
            </Tilt>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;