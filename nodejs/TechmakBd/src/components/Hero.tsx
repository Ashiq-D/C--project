"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
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
    <section className="relative min-h-[60vh] flex items-center justify-center px-6 overflow-hidden pt-24 pb-16">
      {/* Foreground Content */}
      <div ref={textRef} className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center gap-5 select-none">
        
        {/* Brand label */}
        <p className="hero-text text-lg md:text-2xl font-semibold tracking-[0.08em] text-techmak-gold">
          Our Subsidiaries
        </p>

        {/* Large gradient heading */}
        <h1 className="hero-text font-bold leading-[1.1] tracking-tight whitespace-normal sm:whitespace-nowrap px-2"
          style={{ fontSize: "clamp(2rem, 8vw, 4.0rem)", animation: "fadeInUp 1s ease-out 0.2s both" }}>
          <span style={{
            backgroundImage: "linear-gradient(135deg, #ff4b3e 0%, #d4a93a 50%, #f2c14e 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Techmak Alliances
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-text text-white/90 max-w-[46rem] mx-auto text-sm md:text-base font-light leading-relaxed"
          style={{ animation: "fadeInUp 1s ease-out 0.3s both" }}>
          A diversified Bangladeshi conglomerate delivering reliable, future-ready solutions across technology, security, power, fabrication, defense supply, media, and global sourcing.
        </p>

        {/* Divider Line */}
        <div
          className="hero-text mx-auto mt-8 rounded-full"
          style={{
            width: "120px",
            height: "3px",
            backgroundImage: "linear-gradient(90deg, transparent, #ff4b3e, #d4a93a, transparent)",
          }}
        />
      </div>
    </section>
  );
}
