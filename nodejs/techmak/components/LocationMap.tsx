"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LocationMap() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the map container with a 3D tilt reveal
      gsap.fromTo(
        ".map-container",
        {
          rotateX: 15,
          rotateY: -10,
          z: -100,
          scale: 0.9,
          opacity: 0,
        },
        {
          rotateX: 0,
          rotateY: 0,
          z: 0,
          scale: 1,
          opacity: 1,
          duration: 1.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".map-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate info cards with a staggered 3D popup
      gsap.fromTo(
        ".location-card",
        { y: 50, z: -50, rotateX: -10, opacity: 0 },
        {
          y: 0,
          z: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ".location-card",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Subtle floating ambient animation
      gsap.to(".ambient-glow", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        scale: "random(0.9, 1.1)",
        rotation: "random(-15, 15)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { amount: 2, from: "random" }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3D Hover Tilt Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (-10 to 10 degrees depending on mouse position)
    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = -((y - centerY) / centerY) * 8;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.4
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      ease: "power2.out",
      duration: 0.7
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-40 z-10 overflow-hidden bg-transparent"
    >
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Massive Full Bleed Container */}
        <div 
          className="map-container relative w-full min-h-[750px] lg:min-h-[85vh] rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-[1px] border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] group"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* 3D Glassmorphism Overlay Frame */}
          <div className="absolute inset-0 z-30 pointer-events-none border-[1px] border-white/5 rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] mix-blend-overlay transition-all duration-700 group-hover:border-cyan-400/20 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>

          {/* Map Layer (Absolute Background) */}
          <div className="absolute inset-0 z-0 pointer-events-auto" style={{ transform: "translateZ(-20px) scale(1.05)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9829577201112!2d90.3965951!3d23.7836212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7000107ac61%3A0xfe30487facf253a7!2sTechmak%20technology!5e0!3m2!1sbn!2sbd!4v1776461214232!5m2!1sbn!2sbd"
                width="100%"
                height="100%"
                style={{ 
                  border: 0, 
                  filter: "invert(100%) hue-rotate(185deg) brightness(0.9) contrast(0.9) sepia(0.3)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Techmak Technology Ltd. Location Map"
              />
          </div>

          {/* Atmospheric Gradients for Readability */}
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(3, 15, 15, 0.4) 0%, transparent 40%, rgba(3, 15, 15, 0.95) 100%)" }} />
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(3, 15, 15, 0.9) 0%, rgba(3, 15, 15, 0.4) 40%, transparent 100%)" }} />
          
          {/* Top Live Indicator */}
          <div className="absolute top-6 right-8 md:top-10 md:right-12 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/5 pointer-events-none">
             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]"></span>
             <span className="text-[10px] uppercase font-bold text-white/70 tracking-widest">Live Map Data</span>
          </div>

          {/* Floating UI Grid */}
          <div className="absolute inset-0 z-20 pointer-events-none p-6 md:p-12 lg:p-16 flex flex-col justify-between">
            
            {/* Top Left: Typography & Intro */}
            <div className="max-w-xl location-card pointer-events-auto" style={{ transform: "translateZ(30px)" }}>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 backdrop-blur-md"
                style={{ borderColor: "rgba(34, 211, 238, 0.3)", backgroundColor: "rgba(34, 211, 238, 0.05)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-cyan-300">Global Presence</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tighter drop-shadow-2xl text-white">
                Find Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Here.</span>
              </h2>
              <p className="text-cyan-50/80 text-lg md:text-xl font-medium max-w-md drop-shadow-md">
                Visit our innovation hub in the heart of Bashundhara for a personalized consultation on intelligent automation.
              </p>
            </div>

            {/* Bottom Array: Contact HUD */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end mt-12 w-full max-w-[1200px]">
              
              {/* HUD Panel 1: Location */}
              <div 
                className="location-card pointer-events-auto group relative overflow-hidden rounded-3xl p-8 backdrop-blur-2xl border border-white/10 transition-all duration-500 hover:border-cyan-400/40"
                style={{ backgroundColor: "rgba(3, 15, 15, 0.6)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-cyan-400">Headquarters</h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                  4th Floor, 36/E, Road-2, Block-D<br />
                  Bashundhara R/A, Dhaka 1229<br />
                  Bangladesh
                </p>
              </div>

              {/* HUD Panel 2: Direct Contact */}
              <div 
                className="location-card pointer-events-auto group relative overflow-hidden rounded-3xl p-8 backdrop-blur-2xl border border-white/10 transition-all duration-500 hover:border-emerald-400/40"
                style={{ backgroundColor: "rgba(3, 15, 15, 0.6)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4 text-emerald-400">Reach Out</h3>
                <div className="flex flex-col gap-3">
                  <a href="tel:+8801611224433" className="text-xl font-semibold text-white tracking-widest hover:text-emerald-400 transition-colors">
                    +880 1611-224433
                  </a>
                  <a href="mailto:info@techmakbd.com" className="text-white/60 hover:text-white transition-colors text-sm">
                    info@techmakbd.com
                  </a>
                </div>
              </div>

              {/* HUD Panel 3: Action Buttons */}
              <div className="location-card pointer-events-auto flex flex-col gap-4">
                
                <a
                  href="https://maps.app.goo.gl/RURniUgjMQTBH5Wi9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between w-full rounded-3xl p-6 md:p-8 border backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/50"
                  style={{ backgroundColor: "rgba(34, 211, 238, 0.05)", borderColor: "rgba(34, 211, 238, 0.2)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                >
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle at center, rgba(34,211,238,0.1) 0%, transparent 70%)" }}></div>
                  
                  <span className="relative z-10 text-cyan-400 font-bold tracking-[0.2em] uppercase transition-colors">
                    Get Directions
                  </span>
                  <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center border border-cyan-400/30 group-hover:bg-cyan-400/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                    </svg>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 rounded-3xl p-6 md:p-8 backdrop-blur-2xl border border-white/10" style={{ backgroundColor: "rgba(3, 15, 15, 0.6)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1 text-white/50">Business Hours</h3>
                    <p className="text-white font-medium text-sm md:text-base">Sun – Thu: 10AM – 7PM</p>
                    <p className="text-white/40 text-xs mt-1">Fri & Sat: Closed</p>
                  </div>
                </div>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
