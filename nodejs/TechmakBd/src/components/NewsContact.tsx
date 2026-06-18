"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { ArrowRight, Newspaper, Handshake } from "lucide-react";

export default function NewsContact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nc-block",
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* News & Insights */}
        <div className="nc-block glass-card p-10 flex flex-col justify-between group hover:border-white/20 transition-colors">
          <div>
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
              <Newspaper className="text-techmak-sand" size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">News & Insights</h3>
            <p className="text-white/60 font-light mb-8">
              Stay updated with our latest project milestones, new strategic partnerships, corporate announcements, and industry insights.
            </p>
          </div>
          <button className="self-start flex items-center gap-2 text-techmak-champagne font-medium hover:gap-3 transition-all">
            Read Latest News <ArrowRight size={18} />
          </button>
        </div>

        {/* Partner With Us */}
        <div className="nc-block glass-card p-10 flex flex-col justify-between relative overflow-hidden group hover:border-techmak-champagne/40 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-techmak-bronze/10 to-transparent" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-techmak-champagne/10 flex items-center justify-center mb-6">
              <Handshake className="text-techmak-champagne" size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">Partner With Us</h3>
            <p className="text-white/60 font-light mb-8">
              Whether you have business inquiries, wish to register as a supplier, or explore career opportunities, we welcome strategic collaborations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-techmak-champagne to-techmak-bronze text-[#110e0c] font-medium transition-all hover:scale-105">
                Contact Us
              </button>
              <button className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
                Supplier Registration
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
