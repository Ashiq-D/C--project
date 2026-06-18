"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { Leaf, Sun, Scale, Users } from "lucide-react";

const pillars = [
  { title: "Environmental Responsibility", description: "Minimizing carbon footprint across industrial operations.", icon: Leaf },
  { title: "Renewable Energy Initiatives", description: "Driving transition through Techmak Power & Energy.", icon: Sun },
  { title: "Ethical Business Practices", description: "Strict adherence to compliance and transparent governance.", icon: Scale },
  { title: "Community Development", description: "Investing in education, health, and local infrastructure.", icon: Users },
];

export default function Sustainability() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sus-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-3 sm:mb-4">
            Sustainability & Responsibility
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-lg px-2">
            As a major conglomerate, we bear the responsibility to build a better tomorrow, ensuring our growth positively impacts society and the environment.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="sus-card glass-card p-4 sm:p-6 md:p-8 flex flex-col items-center text-center group hover:border-techmak-champagne/40 transition-colors">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-techmak-champagne/20 to-transparent flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="text-techmak-champagne" size={22} />
                </div>
                <h3 className="text-sm sm:text-lg font-medium text-white/90 mb-2 sm:mb-3 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
