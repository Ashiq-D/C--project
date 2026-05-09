"use client";

import Link from "next/link";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import CinematicScroll from "@/components/CinematicScroll";
import CompanySnapshot from "@/components/CompanySnapshot";
import TechPartners from "@/components/TechPartners";
import LocationMap from "@/components/LocationMap";

export default function HomeClient() {
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
    <main className="text-white overflow-x-hidden">

      {/* 3D HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 overflow-hidden">

        {/* Foreground Content */}
        <div ref={textRef} className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center gap-5 select-none">

          {/* Brand label */}
          <p className="hero-text text-lg md:text-2xl font-semibold tracking-[0.08em]">
            <span style={{
              backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Techmak Technology Ltd.
            </span>
          </p>

          {/* Large gradient heading */}
          <h1 className="hero-text font-bold leading-[1.1] tracking-tight whitespace-nowrap"
            style={{ fontSize: "clamp(1.4rem, 4.0vw, 4.0rem)", animation: "fadeInUp 1s ease-out 0.2s both" }}>
            <span style={{
              backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Advanced Solutions, Proven Performance
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-text text-[#8ab8c8]/60 max-w-[46rem] mx-auto text-sm md:text-base font-light leading-relaxed"
            style={{ animation: "fadeInUp 1s ease-out 0.3s both" }}>
            TTL is the flagship company of the Alliance and a leading provider of advanced technological systems and integrated solutions. The company specializes in modern surveillance, security, automation, and networking infrastructure tailored for high-security and mission-critical environments.
          </p>

          {/* CTAs */}
          <div className="hero-text mt-4 flex flex-wrap justify-center gap-4">
            <button className="group px-8 py-3 text-sm rounded-full bg-[rgba(14,165,201,0.15)] border border-[rgba(14,165,201,0.4)] text-white font-semibold flex items-center gap-2 backdrop-blur-md shadow-[0_0_20px_rgba(14,165,201,0.2)] hover:bg-[rgba(14,165,201,0.25)] hover:border-[rgba(14,165,201,0.7)] hover:shadow-[0_0_35px_rgba(14,165,201,0.4)] transition-all duration-500 hover:-translate-y-0.5">
              Explore Our Solutions
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>
            <Link href="/connect" className="group px-8 py-3 text-sm rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] text-white/70 font-medium flex items-center gap-2 backdrop-blur-md hover:border-[rgba(14,165,201,0.4)] hover:text-white hover:bg-[rgba(14,165,201,0.08)] transition-all duration-500 hover:-translate-y-0.5">
              Let&apos;s Collaborate
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CINEMATIC SERVICES */}
      <div className="relative z-20">
        <CinematicScroll />
      </div>

      {/* COMPANY SNAPSHOT — Techmak Technology LTD details */}
      <div className="relative z-20">
        <CompanySnapshot />
      </div>

      {/* TECHNOLOGY PARTNERS CAROUSEL */}
      <div className="relative z-20">
        <TechPartners />
      </div>

      {/* LOCATION MAP */}
      <div className="relative z-20">
        <LocationMap />
      </div>

    </main>
  );
}

