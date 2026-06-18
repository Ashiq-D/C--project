"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { Building2, Shield, Battery, Factory, Store, HardHat, Server, MonitorPlay } from "lucide-react";

const industries = [
  { name: "Government & Public Sector", icon: Building2 },
  { name: "Defense & Security", icon: Shield },
  { name: "Energy & Utilities", icon: Battery },
  { name: "Manufacturing & Industrial", icon: Factory },
  { name: "Retail & Commercial", icon: Store },
  { name: "Construction & Infrastructure", icon: HardHat },
  { name: "Technology & Telecom", icon: Server },
  { name: "Media & Creative", icon: MonitorPlay },
];

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".industry-card",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
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
    <section className="relative pt-8 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 z-10" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-3 sm:mb-4">
            Industries We Serve
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-lg px-2">
            Delivering impact at scale across the most critical sectors of the economy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="industry-card glass-card p-4 sm:p-6 flex flex-col items-center text-center gap-2 sm:gap-4 group hover:border-techmak-champagne/30 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Icon className="text-techmak-champagne" size={22} strokeWidth={1.5} />
                </div>
                <span className="text-xs sm:text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors leading-tight">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
