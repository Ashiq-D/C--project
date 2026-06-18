"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const leaders = [
  {
    name: "Nur A. Azam (Tusher)",
    role: "Founder & Group CEO",
    bio: "Visionary leader driving the strategic direction and exponential growth of the Alliance.",
  },
  {
    name: "Leadership Placeholder",
    role: "Chairman",
    bio: "Guiding the board with decades of industrial and corporate governance experience.",
  },
  {
    name: "Executive Name",
    role: "Key Executive",
    bio: "Ensuring operational excellence and execution across diverse portfolios.",
  }
];

export default function Leadership() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".leader-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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
    <section className="relative py-24 px-6 z-10" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
            Leadership
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Guided by experienced professionals committed to integrity, excellence, and sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="leader-card glass-card p-6 flex flex-col items-center text-center group">
              {/* Photo Placeholder */}
              <div className="w-32 h-32 rounded-full overflow-hidden bg-white/5 border border-white/10 mb-6 group-hover:border-techmak-champagne/40 transition-colors">
                {/* Fallback avatar gradient */}
                <div className="w-full h-full bg-gradient-to-tr from-techmak-bronze/20 to-techmak-champagne/20 flex items-end justify-center">
                   <div className="w-16 h-16 rounded-t-full bg-white/10" />
                </div>
              </div>
              
              <h3 className="text-xl font-medium text-white mb-1">
                {leader.name}
              </h3>
              <p className="text-techmak-champagne text-sm font-medium tracking-wide uppercase mb-4">
                {leader.role}
              </p>
              <p className="text-white/60 font-light text-sm leading-relaxed">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
