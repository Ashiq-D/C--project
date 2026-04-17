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
      className="relative py-24 md:py-32 z-10 overflow-hidden"
      style={{ perspective: "1500px" }}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] -translate-y-1/2 -translate-x-1/2 rounded-full ambient-glow bg-[#38c5e0] opacity-10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] -translate-x-1/2 rounded-full ambient-glow bg-[#1FA89A] opacity-10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-16 max-w-3xl mx-auto backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group"
          style={{ backgroundColor: "rgba(5, 38, 38, 0.4)" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Animated gradient border on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]" 
               style={{ background: "radial-gradient(circle at center, rgba(56, 197, 224, 0.15) 0%, transparent 70%)" }} />
               
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 relative z-10"
            style={{
              borderColor: "rgba(31, 168, 154, 0.4)",
              backgroundColor: "rgba(31, 168, 154, 0.1)",
              boxShadow: "0 0 20px rgba(31,168,154,0.2) inset"
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse shadow-[0_0_8px_#38c5e0]"
              style={{ backgroundColor: "#38c5e0" }}
            />
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#78d4e8]"
            >
              Our Location
            </span>
          </div>
          <h2
            className="text-4xl md:text-6xl font-extrabold mb-5 select-none au-reveal relative z-10 drop-shadow-2xl tracking-tight"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ffffff 0%, #a5f3fc 25%, #22d3ee 50%, #0891b2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Find Us Here
          </h2>
          <p className="au-reveal text-[#a5f3fc]/70 text-sm md:text-lg max-w-lg mx-auto relative z-10 font-medium">
            Visit our innovation hub in the heart of Bashundhara, Dhaka for a personalized consultation.
          </p>
        </div>

        {/* 3D Map + Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start" style={{ transformStyle: "preserve-3d" }}>
          
          {/* Map Container — spans 2 columns on desktop */}
          <div
            className="map-container lg:col-span-2 rounded-[2rem] overflow-hidden border border-white/10 relative group"
            style={{
              transformStyle: "preserve-3d",
              boxShadow: "0 30px 60px -20px rgba(0, 0, 0, 0.6), 0 0 50px rgba(34, 211, 238, 0.1)",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* 3D Glassmorphism Overlay Frame */}
            <div className="absolute inset-0 z-20 pointer-events-none border-[2px] border-white/5 rounded-[2rem] mix-blend-overlay transition-all duration-500 group-hover:border-cyan-400/30 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
            
            {/* Map Header Bar */}
            <div
              className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/10 backdrop-blur-md"
              style={{ backgroundColor: "rgba(5, 38, 38, 0.85)" }}
            >
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-400/80 shadow-[0_0_10px_rgba(248,113,113,0.4)]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-400/80 shadow-[0_0_10px_rgba(251,191,36,0.4)]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-400/80 shadow-[0_0_10px_rgba(52,211,153,0.4)]" />
                </div>
                <div
                  className="rounded-lg px-4 py-1.5 text-xs text-cyan-100/50 font-mono flex items-center gap-2"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  Techmak Technology
                </div>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2 shadow-[0_0_8px_#34d399]"></span>
                <span className="text-[10px] uppercase font-bold text-emerald-400/80 tracking-widest">Live</span>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="relative" style={{ height: "480px", transform: "translateZ(-10px)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9829577201112!2d90.3965951!3d23.7836212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7000107ac61%3A0xfe30487facf253a7!2sTechmak%20technology!5e0!3m2!1sbn!2sbd!4v1776461214232!5m2!1sbn!2sbd"
                width="100%"
                height="100%"
                style={{ 
                  border: 0, 
                  filter: "invert(100%) hue-rotate(190deg) brightness(1.2) contrast(0.85) sepia(0.2)",
                  transform: "scale(1.02)" // Prevents edge bleeding
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Techmak Technology Ltd. Location"
              />
              {/* Inner vignette for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at center, transparent 30%, rgba(5,38,38,0.7) 100%)",
                }}
              />
            </div>
          </div>

          {/* Info Panel — right column */}
          <div className="flex flex-col gap-4 md:gap-5" style={{ transformStyle: "preserve-3d" }}>
            
            {/* Address Card */}
            <div
              className="location-card rounded-2xl p-6 border border-white/5 backdrop-blur-xl group cursor-default transition-all duration-500 hover:border-cyan-400/30"
              style={{
                backgroundColor: "rgba(5, 38, 38, 0.4)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start gap-4" style={{ transform: "translateZ(30px)" }}>
                <div
                  className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                  style={{
                    backgroundColor: "rgba(34, 211, 238, 0.1)",
                    border: "1px solid rgba(34, 211, 238, 0.2)",
                    boxShadow: "0 0 20px rgba(34,211,238,0.1) inset"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="au-reveal text-xs font-bold tracking-[0.2em] uppercase mb-2 text-cyan-300">Headquarters</h3>
                  <p className="au-reveal text-cyan-50/80 text-sm leading-relaxed font-medium">
                    4th Floor, 36/E, Road-2, Block-D<br />
                    Bashundhara R/A, Dhaka 1229<br />
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div
              className="location-card rounded-2xl p-6 border border-white/5 backdrop-blur-xl group cursor-default transition-all duration-500 hover:border-emerald-400/30"
              style={{
                backgroundColor: "rgba(5, 38, 38, 0.4)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start gap-4" style={{ transform: "translateZ(30px)" }}>
                <div
                  className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                  style={{
                    backgroundColor: "rgba(52, 211, 153, 0.1)",
                    border: "1px solid rgba(52, 211, 153, 0.2)",
                    boxShadow: "0 0 20px rgba(52,211,153,0.1) inset"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="au-reveal text-xs font-bold tracking-[0.2em] uppercase mb-1 text-emerald-300">Direct Line</h3>
                  <a href="tel:+8801611224433" className="au-reveal text-xl font-semibold text-white tracking-wide hover:text-emerald-400 transition-colors inline-block mt-1">
                    +880 1611-224433
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div
              className="location-card rounded-2xl p-6 border border-white/5 backdrop-blur-xl group cursor-default transition-all duration-500 hover:border-blue-400/30"
              style={{
                backgroundColor: "rgba(5, 38, 38, 0.4)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-start gap-4" style={{ transform: "translateZ(30px)" }}>
                <div
                  className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                  style={{
                    backgroundColor: "rgba(96, 165, 250, 0.1)",
                    border: "1px solid rgba(96, 165, 250, 0.2)",
                    boxShadow: "0 0 20px rgba(96,165,250,0.1) inset"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="au-reveal text-xs font-bold tracking-[0.2em] uppercase mb-1 text-blue-300">Support & Inquiries</h3>
                  <a href="mailto:info@techmakbd.com" className="au-reveal text-lg font-medium text-white hover:text-blue-400 transition-colors inline-block mt-1">
                    info@techmakbd.com
                  </a>
                </div>
              </div>
            </div>

            {/* Get Directions CTA */}
            <a
              href="https://maps.app.goo.gl/RURniUgjMQTBH5Wi9"
              target="_blank"
              rel="noopener noreferrer"
              className="location-card group relative flex items-center justify-center gap-3 rounded-2xl p-5 border overflow-hidden mt-2"
              style={{
                backgroundColor: "rgba(34, 211, 238, 0.05)",
                borderColor: "rgba(34, 211, 238, 0.4)",
                boxShadow: "0 10px 30px rgba(34, 211, 238, 0.15)",
                transformStyle: "preserve-3d"
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Dynamic hover background */}
              <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              <div className="relative z-10 flex items-center gap-3 text-cyan-300 group-hover:text-[#052626] font-bold text-base tracking-wide transition-colors duration-300" style={{ transform: "translateZ(20px)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                GET DIRECTIONS
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
