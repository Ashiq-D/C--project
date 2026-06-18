"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/* ─── Typing Effect for Subtitle Words ─── */
function RotatingWords() {
  const words = ["Technology", "Security", "Energy", "Engineering", "Innovation"];
  const [index, setIndex] = useState(0);
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (wordRef.current) {
        gsap.to(wordRef.current, {
          y: -20,
          opacity: 0,
          filter: "blur(8px)",
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            setIndex((prev) => (prev + 1) % words.length);
            if (wordRef.current) {
              gsap.fromTo(
                wordRef.current,
                { y: 20, opacity: 0, filter: "blur(8px)" },
                { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.5, ease: "power2.out" }
              );
            }
          },
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      ref={wordRef}
      className="inline-block font-normal"
      style={{
        backgroundImage: "linear-gradient(135deg, #fce4d6, #a83248)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {words[index]}
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Staggered entrance
      gsap.fromTo(
        ".hero-elem",
        { y: 60, opacity: 0, filter: "blur(14px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      // Horizontal line reveal
      gsap.fromTo(
        ".hero-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: "power3.inOut", delay: 0.8 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full blur-[100px] md:blur-[150px] opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(168,50,72,0.5) 0%, transparent 70%)",
            top: "15%",
            left: "5%",
          }}
        />
      </div>
      {/* Dark center vignette — makes text readable over 3D */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(26,15,20,0.75) 0%, rgba(26,15,20,0.4) 50%, transparent 80%)",
        }}
      />

      <div
        ref={containerRef}
        className="relative z-10 w-full flex flex-col items-center justify-center px-4 sm:px-6 -mt-8 sm:-mt-16 md:-mt-48 lg:-mt-56"
      >
        {/* Content Container */}
        <div
          className="flex flex-col items-center gap-2 md:gap-3 max-w-3xl mx-auto w-full text-center"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.3)" }}
        >
          {/* Main heading */}
          <h1 className="hero-elem text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            <span className="text-white/95 mr-3 md:mr-4">Techmak</span>
            <span className="gradient-text-champagne">Alliance</span>
          </h1>

          {/* Divider line */}
          <div
            className="hero-line h-px w-full max-w-[140px] origin-center"
            style={{
              backgroundImage: "linear-gradient(90deg, transparent, #a83248, transparent)",
            }}
          />

          {/* Rotating subtitle */}
          <div className="hero-elem text-lg md:text-xl lg:text-2xl font-light text-white/70 leading-relaxed text-center">
            Powering the future through <RotatingWords />
          </div>

          {/* Description */}
          <p className="hero-elem text-xs sm:text-sm md:text-base text-white/60 max-w-5xl leading-relaxed mx-auto px-4 md:px-0">
            A diversified Bangladeshi business group delivering innovative and reliable solutions across technology, artificial intelligence, renewable energy, fabrication, defense supply, media, and global sourcing.
          </p>

        </div>
      </div>
    </section>
  );
}
