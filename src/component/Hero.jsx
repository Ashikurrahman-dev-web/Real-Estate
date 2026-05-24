"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Image from "next/image";
import a from "@/image/a.jpg";
import b from "@/image/b.jpg";
import c from "@/image/c.jpg";

const HeroSlider = () => {
  const heroSlides = [
    {
      id: 1,
      img: a,
    },
    {
      id: 2,
      img: b,
    },
    {
      id: 3,
      img: c,
    },
  ];
  
  return (
    <div id="home" className=" w-[96%] h-[80vh] md:h-[90vh] mx-auto rounded-2xl relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop={true}
        className="hero h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
              
                <div className="absolute inset-0 scale-105 transition-transform duration-[3000ms]">
                  <Image
                    src={slide.img}
                    alt={`Slide ${slide.id}`}
                    fill
                    priority
                  className="object-cover"
                />
              </div>
        
              <div className="absolute inset-0 bg-black/50 z-10" />

              
<div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Find Your Dream Home
                </h1>

                <p className="max-w-2xl text-sm md:text-lg text-gray-200">
                  Discover luxury apartments, villas, and commercial spaces in
                  prime locations.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;