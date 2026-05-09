"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Link from "next/link";
import TiltCard from "./TiltCard";

gsap.registerPlugin(ScrollTrigger);

import { services } from "@/lib/servicesData";

export default function CinematicScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // 🔥 GSAP CONTEXT
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".row");

      rows.forEach((row, index) => {
        const cardLeft = row.querySelector<HTMLElement>(".card-left");
        const cardRight = row.querySelector<HTMLElement>(".card-right");

        if (!cardLeft || !cardRight) return;

        // Initial state
        gsap.set([cardLeft, cardRight], {
          transformPerspective: 2000,
          transformStyle: "preserve-3d",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            end: "bottom top",
            scrub: 0.8,
          },
        });

        // LEFT CARD — flies left with rotation
        tl.to(
          cardLeft,
          {
            x: -600 - index * 100,
            y: -150 - index * 60,
            rotateZ: -6 - index * 2,
            rotateY: -15,
            z: -200,
            scale: 0.85,
            opacity: 0,
            ease: "power2.inOut",
          },
          0
        )
          // RIGHT CARD — flies right with rotation
          .to(
            cardRight,
            {
              x: 600 + index * 100,
              y: -150 - index * 60,
              rotateZ: 6 + index * 2,
              rotateY: 15,
              z: -200,
              scale: 0.85,
              opacity: 0,
              ease: "power2.inOut",
            },
            0
          );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-0 pb-20 overflow-hidden z-10"
      style={{
        perspective: "2000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-32 max-w-3xl mx-auto backdrop-blur-md bg-[#052626]/40 rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 select-none"
            style={{
              backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "fadeInUp 1s ease-out 0.2s both",
            }}
          >
            Our Core Capabilities
          </h2>
          <div
            className="mx-auto rounded-full"
            style={{
              width: "120px",
              height: "3px",
              backgroundImage: "linear-gradient(90deg, #ffffff, #0ea5c9)",
              animation: "fadeInUp 1s ease-out 0.4s both",
            }}
          />
        </div>

        <div className="space-y-8">
          {Array.from({
            length: Math.ceil(services.length / 2),
          }).map((_, rowIndex) => {
            const leftService = services[rowIndex * 2];
            const rightService = services[rowIndex * 2 + 1];

            return (
              <div
                key={rowIndex}
                className="row flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[6vw] relative"
              >
                {leftService && (
                  <Link
                    href={`/services/${leftService.slug}`}
                    className="card card-left
                    w-[90vw] md:w-[45vw] h-[60vw] md:h-[28vw] max-w-[700px] max-h-[520px]
                    rounded-3xl flex items-center justify-center
                    text-white text-xl md:text-[1.2vw] font-semibold text-center
                    shadow-2xl will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <TiltCard className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#0F3D3E] via-[#145959] to-[#1E7A7A]">
                      <img
                        src={leftService.image}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#071A1A]/90 via-[#071A1A]/20 to-transparent"></div>

                      <div className="absolute inset-0 flex flex-col justify-end p-8" style={{ transform: "translateZ(40px)" }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1FA89A]/30 bg-[#1FA89A]/10 text-[#78d4e8] text-[0.6rem] font-bold tracking-widest uppercase mb-3 backdrop-blur-md w-max">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#38c5e0] animate-pulse" />
                          Core System
                        </div>
                        <h3 className="text-white text-2xl font-bold leading-snug drop-shadow-lg tracking-wide">
                          {leftService.title}
                        </h3>
                      </div>
                    </TiltCard>
                  </Link>
                )}

                {rightService && (
                  <Link
                    href={`/services/${rightService.slug}`}
                    className="card card-right
                    w-[90vw] md:w-[45vw] h-[60vw] md:h-[28vw] max-w-[700px] max-h-[520px]
                    rounded-3xl flex items-center justify-center
                    text-white text-xl md:text-[1.2vw] font-semibold text-center
                    shadow-2xl will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <TiltCard className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#0F3D3E] via-[#145959] to-[#1E7A7A]">
                      <img
                        src={rightService.image}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#071A1A]/90 via-[#071A1A]/20 to-transparent"></div>

                      <div className="absolute inset-0 flex flex-col justify-end p-8" style={{ transform: "translateZ(40px)" }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1FA89A]/30 bg-[#1FA89A]/10 text-[#78d4e8] text-[0.6rem] font-bold tracking-widest uppercase mb-3 backdrop-blur-md w-max">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#38c5e0] animate-pulse" />
                          Core System
                        </div>
                        <h3 className="text-white text-2xl font-bold leading-snug drop-shadow-lg tracking-wide">
                          {rightService.title}
                        </h3>
                      </div>
                    </TiltCard>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}