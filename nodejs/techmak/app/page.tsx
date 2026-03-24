"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import CinematicScroll from "@/components/CinematicScroll";
import Hero3D from "@/components/Hero3D";

export default function Home() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { y: 50, opacity: 0, rotateX: -30 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.5
        }
      );
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-gradient-to-br from-[#071A1A] via-[#0A2E2E] to-[#052626] text-white overflow-x-hidden pt-20">

      {/* 3D HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-[#071A1A] via-[#0A2E2E] to-[#052626]">

        {/* 3D particle arcs in background */}
        <div className="absolute inset-0">
          <Hero3D />
        </div>

        {/* Foreground Content */}
        <div ref={textRef} className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center gap-5 select-none">

          {/* Brand label */}
          <p className="hero-text text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-[#78d4e8]/70">
            Techmak Technology Ltd.
          </p>

          {/* Large gradient heading */}
          <h1 className="hero-text font-bold leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)", animation: "fadeInUp 1s ease-out 0.2s both" }}>
            <span style={{
              background: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Securing What Matters
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-text text-[#8ab8c8] max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            Bangladesh's most trusted partner for intelligent security infrastructure
          </p>
          <p className="hero-text text-[#8ab8c8]/60 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed"
            style={{ animation: "fadeInUp 1s ease-out 0.3s both" }}>
            Advanced surveillance, access control, and intelligent automation, expertly delivered from design to deployment and support.
          </p>

          {/* CTAs */}
          <div className="hero-text mt-4 flex flex-wrap justify-center gap-4">
            <button className="group px-8 py-3 text-sm rounded-full bg-[rgba(14,165,201,0.15)] border border-[rgba(14,165,201,0.4)] text-white font-semibold flex items-center gap-2 backdrop-blur-md shadow-[0_0_20px_rgba(14,165,201,0.2)] hover:bg-[rgba(14,165,201,0.25)] hover:border-[rgba(14,165,201,0.7)] hover:shadow-[0_0_35px_rgba(14,165,201,0.4)] transition-all duration-500 hover:-translate-y-0.5">
              Explore Our Solutions
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>
            <button className="group px-8 py-3 text-sm rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] text-white/70 font-medium flex items-center gap-2 backdrop-blur-md hover:border-[rgba(14,165,201,0.4)] hover:text-white hover:bg-[rgba(14,165,201,0.08)] transition-all duration-500 hover:-translate-y-0.5">
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* CINEMATIC SERVICES */}
      <div className="relative z-20">
        <CinematicScroll />
      </div>

    </main>
  );
}