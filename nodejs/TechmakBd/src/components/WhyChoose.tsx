"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { Layers, Route, Globe2, Landmark, Cog, ShieldCheck } from "lucide-react";

const reasons = [
  { title: "Multi-Industry Expertise", icon: Layers },
  { title: "End-to-End Project Delivery", icon: Route },
  { title: "Strong Global Partnerships", icon: Globe2 },
  { title: "Proven Government Sector Experience", icon: Landmark },
  { title: "Engineering & Technical Excellence", icon: Cog },
  { title: "Commitment to Quality & Compliance", icon: ShieldCheck },
];

export default function WhyChoose() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reason-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 z-10" ref={containerRef}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-center">
        
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-techmak-champagne to-techmak-bronze mb-4 sm:mb-6">
            Why Choose Techmak Alliance
          </h2>
          <p className="text-white/60 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
            We are more than just a service provider; we are a strategic partner dedicated to empowering your vision. Our synergistic approach ensures quality, reliability, and excellence across every touchpoint.
          </p>
        </div>

        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="reason-item glass p-4 sm:p-5 rounded-2xl flex items-center gap-3 sm:gap-4 hover:bg-white/5 transition-colors border border-white/5"
              >
                <div className="text-techmak-champagne">
                  <Icon size={24} />
                </div>
                <span className="text-white/90 font-medium text-sm md:text-base">
                  {reason.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
