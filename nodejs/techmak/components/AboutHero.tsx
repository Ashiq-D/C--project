"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutHero() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !imageRef.current) return;

    const tl = gsap.timeline();

    // TEXT ANIMATION
    tl.from(textRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    // IMAGE ANIMATION
    tl.from(
      imageRef.current,
      {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.6"
    );

    // FLOATING IMAGE
    gsap.to(imageRef.current, {
      y: -12,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // MOUSE PARALLAX 🔥
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      gsap.to(containerRef.current, {
        x,
        y,
        duration: 0.6,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-20 bg-[#07071A]">

      {/* MAIN CONTENT */}
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 items-center gap-16"
      >

        {/* LEFT TEXT */}
        <div ref={textRef} className="space-y-6">

          <p className="text-sm text-[#00d4aa] tracking-widest uppercase">
            Founder & CEO
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Nur A. Azam <br />
            <span className="text-[#00d4aa]">(Tusher)</span>
          </h1>

          <p className="text-gray-400">
            Technology & Infrastructure Entrepreneur
          </p>

          <p className="text-gray-300 leading-relaxed max-w-md">
            I build practical, reliable, and future-ready solutions across
            security systems, power & energy, industrial fabrication, and
            global sourcing. With over 16+ years of experience, my focus
            has been on delivering scalable solutions for government,
            defense, and industrial sectors.
          </p>

          <button className="mt-4 px-7 py-3 rounded-full bg-[#00d4aa] text-black font-semibold hover:scale-105 transition shadow-[0_0_25px_rgba(0,212,170,0.4)]">
            Explore More →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div
            ref={imageRef}
            className="relative p-3 rounded-2xl glass-card"
          >
            <img
              src="/images/about-person.png"
              alt="Founder"
              className="h-[420px] md:h-[520px] w-auto object-contain rounded-xl"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/400/500";
              }}
            />

            {/* LIGHT GLOW */}
            <div className="absolute inset-0 bg-[#00d4aa]/10 blur-3xl rounded-xl -z-10" />
          </div>
        </div>

      </div>

      {/* BACKGROUND LIGHT BLOBS */}
      <div className="absolute left-[-150px] top-[30%] w-[400px] h-[400px] bg-[#00d4aa] opacity-20 blur-[150px] rounded-full" />
      <div className="absolute right-[-150px] bottom-[20%] w-[400px] h-[400px] bg-[#1FA89A] opacity-20 blur-[150px] rounded-full" />

    </section>
  );
}