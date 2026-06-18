"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { Info, History, Target } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
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
        <div className="text-center mb-16 about-card">
          <h2 className="text-3xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-techmak-champagne to-techmak-bronze inline-block">
            About Techmak Alliance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Story Card spanning 2 columns */}
          <div className="about-card glass-card p-10 md:col-span-2 flex flex-col justify-center relative overflow-hidden group hover:border-techmak-champagne/40 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <History size={120} />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-techmak-bronze/20 flex items-center justify-center">
                <Info size={20} className="text-techmak-champagne" />
              </div>
              <h3 className="text-xl font-medium text-white/90">Our Genesis</h3>
            </div>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light relative z-10">
              Founded by <span className="text-techmak-champagne font-medium">Nur A. Azam (Tusher)</span>, Techmak Alliance has evolved from a technology-focused enterprise into a diversified business group. Today, we serve public and private sector clients across multiple industries, delivering integrated, end-to-end solutions.
            </p>
          </div>

          {/* Vision Card */}
          <div className="about-card glass-card p-10 flex flex-col justify-center hover:border-techmak-bronze/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-techmak-champagne/20 flex items-center justify-center">
                <Target size={20} className="text-techmak-champagne" />
              </div>
              <h3 className="text-xl font-medium text-white/90">Our Vision</h3>
            </div>
            <p className="text-white/60 leading-relaxed font-light">
              To be the premier partner for scalable, future-ready operations in Bangladesh and beyond, driven by engineering excellence, strategic partnerships, and relentless innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
