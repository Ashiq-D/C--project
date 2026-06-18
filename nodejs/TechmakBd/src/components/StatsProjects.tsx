"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "20+", label: "Government Clients" },
  { value: "5+", label: "International Partners" },
];

export default function StatsProjects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-item",
        { y: 30, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-24 px-6 z-10" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        
        <div className="glass-card p-10 md:p-16 border-t border-b border-white/5 rounded-3xl overflow-hidden relative">
          {/* Ambient background glow for this block */}
          <div className="absolute inset-0 bg-gradient-to-r from-techmak-bronze/5 to-techmak-champagne/5" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
                Major Projects & Achievements
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                From high-security defense installations and national power grid infrastructure to large-scale fabrication and international sourcing, we have consistently delivered on complex, high-stakes mandates.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-6 w-full">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-techmak-champagne/40 transition-colors">
                  <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-techmak-champagne mb-2">
                    {stat.value}
                  </span>
                  <span className="text-white/60 text-sm font-medium text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
