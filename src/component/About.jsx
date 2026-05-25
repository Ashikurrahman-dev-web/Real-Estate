"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GiVillage } from "react-icons/gi";
gsap.registerPlugin(ScrollTrigger);
const LeafMap = dynamic(
  () => import("@/component/LeafMap"),
  {
    ssr: false,
  }
);
const About = () => {
  const sectionRef = useRef(null);
const [showMap, setShowMap] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about", {
        opacity: 0,
        x: -50,
        filter: "blur(10px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".about-content-item", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.fromTo(".bento-item", 
        {
          opacity: 0,
          scale: 0.8,
          y: 40,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
<section
  ref={sectionRef}
  id="about"
  className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-[80px] sm:py-[110px] lg:py-[140px]"
>
  <div className="max-w-7xl mx-auto">
    
    {/* Heading */}
    <div className="about text-center space-y-3 sm:space-y-4 mb-14 sm:mb-20">
<h2 className="text-5xl md:text-6xl font-black uppercase tracking-[6px] text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
       About Us
      </h2>
    </div>

    {/* Main Grid */}
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
      
      {/* Left Content */}
      <div className="lg:col-span-6 space-y-8 sm:space-y-10 text-center lg:text-left">
        
        <div className="space-y-5 sm:space-y-6">
          
          <div className="about-content-item">
            <p className="text-base sm:text-lg lg:text-xl font-medium text-on-background leading-relaxed">
              <span className="text-blue-800 font-bold">CONSTRUCT</span><span className="text-blue-400 font-bold"> REAL ESTATE</span><br></br>
construct Real Estate & Developers Company Limited started its journey in construction and land 
development in the year of 2023.
 Ever since, the company has grown from strength to strength.
  Today Construct Real Estate stands as a trusted name in construction industry.
            </p>
          </div>

          <div className="about-content-item">
            <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant leading-relaxed">
The success mantra that we have adopted over the years has been – “We Build Eye Catching Buildings to make your dreams come true”. Backed by a highly futuristic vision. Construct Real Estate delivers households based on customer requirements at reasonable and reality based prices.

The entire team from Construct Real Estate is a group of professional and experienced realtors led by Md. Taukirujjaman Mridha Chairman of Construct Real Estate & Developers Company.

Customer service is our number one priority. We strive to provide a consistent superior level of service that surpass client’s expectations. We sincerely believe that direct and honest communication is the basis for any successful business relationship and pride ourselves on our client testimonials. A true reward to customers is planning and executing projects that add value to their lives and enhance their lifestyles.

Construct Real Estate incorporates this perspective from the inception to completion of each project. Our team chooses to work alongside with customers to understand their challenges to create spaces that resolve them. Consequently, we never choose to walk on the beaten path. We take great pleasure in exploring solutions that are unexpected yet the best for lifestyle.  

In an ever changing business environment it’s vital that construction companies have a futuristic approach. Technologies are rapidly changing and the World’s business ecosystem has transformed. We realize that rapid technological advancements should be incorporated at each step of the process. Thus, we constantly acquaint ourselves with new technologies and integrate them at each stage. Though we realize the need to train our team and take them into confidence.  

At Construct Real Estate & Developers Company Limited our pillar of strength is our team that is responsible for our success. We have travelled a long journey and our dreams wouldn’t be realized without their unshakable faith in our vision.

Construct Real Estate & Developers Company Limited believes in doing its bit for the society and is always engaged in being a part of social initiatives.
            </p>
          </div>
        </div>
      </div>

      {/* Right Bento Grid */}
      <div className="lg:col-span-6 relative flex flex-col justify-center">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          
          {/* Box 1 */}
<div className="bento-item sm:col-span-2 glass-card p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] border border-white/5 hover:border-green-500/30 shadow-xl transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group overflow-hidden relative min-h-[180px]">
            
<div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <h4 className="text-2xl sm:text-3xl font-black text-on-background mb-2">
                Our Address
              </h4>

              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                127 Azimpur Rd, Dhaka-1205(2nd Floor), Bangladesh.
              </p>
            </div>

            <div className="text-5xl sm:text-7xl text-on-surface-variant/10 group-hover:text-green-500/30 group-hover:scale-110 transition-all duration-700 relative z-10 self-end sm:self-auto">
              <button
              onClick={() => setShowMap(!showMap)}
className="bg-gradient-to-r from-blue-400 via-cyan-500 text-white px-6 py-3 rounded-2xl font-bold text-sm hover:opacity-90 transition-all shadow-lg cursor-pointer"
            >
              {showMap ? "Hide Map" : "View Map"}
            </button>
            </div>
            {showMap && (
            <div className="w-full h-[400px] rounded-3xl overflow-hidden mt-8">
              <LeafMap />
            </div>
          )}
          </div>

          {/* Box 2 */}
<div className="bento-item glass-card p-6 rounded-[28px] sm:rounded-[32px] border border-white/5 hover:border-blue-500/30 shadow-xl transition-all duration-500 flex flex-col justify-center items-center text-center group min-h-[170px] sm:min-h-[190px] relative overflow-hidden">
            
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <span className=" text-3xl text-blue-400">
                <GiVillage />
              </span>
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-on-background">
                Modern Architecture
            </h4>

            <p className="text-[10px] sm:text-xs text-on-surface-variant mt-2 tracking-widest uppercase font-bold">
              security
            </p>
          </div>

          {/* Box 3 */}
          <div className="bento-item glass-card p-6 rounded-[28px] sm:rounded-[32px] border border-white/5 hover:border-yellow-600/30 shadow-xl transition-all duration-500 flex flex-col justify-center items-center text-center group min-h-[170px] sm:min-h-[190px] relative overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFD700]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-3xl text-[#FFD700]">
                build
              </span>
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-on-background">
              Quality Development
            </h4>

            <p className="text-[10px] sm:text-xs text-on-surface-variant mt-2 tracking-widest uppercase font-bold">
              Performance
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
};

export default About;
