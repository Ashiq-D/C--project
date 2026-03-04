"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "CCTV & IP Surveillance Systems", slug: "cctv" },
  { title: "Under Vehicle Surveillance Systems (UVSS)", slug: "uvss" },
  { title: "X-ray Baggage Scanners & Screening", slug: "xray" },
  { title: "Archway & Handheld Metal Detectors", slug: "metal-detectors" },
  { title: "Access Control & Time Attendance Systems", slug: "access-control" },
  { title: "Building & Industrial Automation", slug: "automation" },
  { title: "EAS Anti-Theft Systems for Retail", slug: "eas" },
  { title: "Advanced Traffic & Transportation Solutions", slug: "traffic" },
  { title: "Structured Networking & Communication Systems", slug: "networking" },
];

export default function CinematicScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // 🔥 LENIS SETUP
    const lenis = new Lenis({
      lerp: 0.07,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);

    // 🔥 GSAP CONTEXT
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".row");

      rows.forEach((row, index) => {
        const cardLeft = row.querySelector<HTMLElement>(".card-left");
        const cardRight = row.querySelector<HTMLElement>(".card-right");

        if (!cardLeft || !cardRight) return;

        // Initial cinematic position
        gsap.set([cardLeft, cardRight], {
          transformPerspective: 2000,
          transformStyle: "preserve-3d",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            end: "bottom 15%",
            scrub: true,
          },
        });

        // LEFT CARD
        tl.to(
          cardLeft,
          {
            x: -900 - index * 150,
            y: -250 - index * 120,
            rotateZ: -8 - index * 4,
            rotateY: -25,
            z: -300,
            scale: 0.9,
            ease: "none",
          },
          0
        )

        // RIGHT CARD
        .to(
          cardRight,
          {
            x: 900 + index * 150,
            y: -250 - index * 120,
            rotateZ: 8 + index * 4,
            rotateY: 25,
            z: -300,
            scale: 0.9,
            ease: "none",
          },
          0
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-40 overflow-hidden"
      style={{
        perspective: "2000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-4xl font-semibold text-center text-white mb-32">
          Our Core Capabilities
        </h2>

        <div className="space-y-1">
          {Array.from({
            length: Math.ceil(services.length / 2),
          }).map((_, rowIndex) => {
            const leftService = services[rowIndex * 2];
            const rightService = services[rowIndex * 2 + 1];

            return (
              <div
                key={rowIndex}
                className="row flex justify-center gap-24 relative"
              >
                {leftService && (
                  <Link
                    href={`/services/${leftService.slug}`}
                    className="card card-left w-[55%] h-[520px]
                               bg-gradient-to-br from-[#0F3D3E] via-[#145959] to-[#1E7A7A]
                               rounded-3xl flex items-center justify-center
                               text-white text-xl font-semibold text-center
                               shadow-2xl will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {leftService.title}
                  </Link>
                )}

                {rightService && (
                  <Link
                    href={`/services/${rightService.slug}`}
                    className="card card-right w-[55%] h-[520px]
                               bg-gradient-to-br from-[#0F3D3E] via-[#145959] to-[#1E7A7A]
                               rounded-3xl flex items-center justify-center
                               text-white text-xl font-semibold text-center
                               shadow-2xl will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {rightService.title}
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