"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { MapPin } from "lucide-react";

const locations = [
  { country: "Bangladesh", role: "Headquarters & Core Operations" },
  { country: "Australia", role: "Strategic Partner Network" },
  { country: "China", role: "Global Sourcing Hub" },
  { country: "UAE", role: "Middle East Trade Operations" },
];

export default function GlobalPresence() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".location-item",
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
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
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 z-10" ref={containerRef}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-center">
        
        {/* Placeholder for a stylized map */}
        <div className="flex-1 w-full aspect-[4/3] sm:aspect-square md:aspect-auto md:h-[400px] glass-card rounded-2xl sm:rounded-3xl flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,219,206,0.1)_0%,transparent_70%)]" />
           <p className="text-white/20 font-medium tracking-widest uppercase text-xs sm:text-base">Interactive Map</p>
           {/* Dots on map placeholder */}
           <div className="absolute w-3 h-3 rounded-full bg-techmak-champagne shadow-[0_0_15px_#e8dbce] top-[40%] left-[65%] animate-pulse" />
           <div className="absolute w-2 h-2 rounded-full bg-techmak-bronze top-[70%] left-[80%]" />
           <div className="absolute w-2 h-2 rounded-full bg-techmak-bronze top-[35%] left-[75%]" />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-4 sm:mb-6">
            Global Presence
          </h2>
          <p className="text-white/60 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
            While deeply rooted in Bangladesh, Techmak Alliance maintains a strategic international footprint, enabling world-class sourcing, technology transfer, and global business partnerships.
          </p>

          <div className="space-y-3 sm:space-y-4">
            {locations.map((loc, index) => (
              <div key={index} className="location-item flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-techmak-champagne/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-techmak-champagne" size={18} />
                </div>
                <div>
                  <h4 className="text-white font-medium">{loc.country}</h4>
                  <p className="text-white/50 text-sm">{loc.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
