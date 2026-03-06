"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Link from "next/link";
import TiltCard from "./TiltCard";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "CCTV & IP Surveillance Systems", slug: "cctv", image: "/images/cctv.jpg" },
  { title: "Under Vehicle Surveillance Systems (UVSS)", slug: "uvss", image: "/images/uvss.jpeg" },
  { title: "X-ray Baggage Scanners & Screening", slug: "xray", image: "/images/xray.jpg" },
  { title: "Archway & Handheld Metal Detectors", slug: "metal-detectors", image: "/images/metal.png" },
  { title: "Access Control & Time Attendance Systems", slug: "access-control", image: "/images/access.jpg" },
  { title: "Building & Industrial Automation", slug: "automation", image: "/images/automation.jpg" },
  { title: "EAS Anti-Theft Systems for Retail", slug: "eas", image: "/images/retail.jpg" },
  { title: "Advanced Traffic & Transportation Solutions", slug: "traffic", image: "/images/traffic.png" },
  { title: "Structured Networking & Communication Systems", slug: "networking", image: "/images/network.jpg" },
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
      lenis.destroy();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#071A1A] via-[#0A2E2E] to-[#052626] py-40 overflow-hidden"
      style={{
        perspective: "2000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="max-w-7xl mx-auto px-10">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-6 select-none"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "fadeInUp 1s ease-out 0.2s both",
          }}
        >
          Our Core Capabilities
        </h2>
        <div
          className="mx-auto mb-32 rounded-full"
          style={{
            width: "120px",
            height: "3px",
            background: "linear-gradient(90deg, #ffffff, #0ea5c9)",
            animation: "fadeInUp 1s ease-out 0.4s both",
          }}
        />

        <div className="space-y-8">
          {Array.from({
            length: Math.ceil(services.length / 2),
          }).map((_, rowIndex) => {
            const leftService = services[rowIndex * 2];
            const rightService = services[rowIndex * 2 + 1];

            return (
              <div
                key={rowIndex}
                className="row flex justify-center gap-[6vw] relative"
              >
                {leftService && (
                  <Link
                    href={`/services/${leftService.slug}`}
                    className="card card-left
                    w-[45vw] h-[28vw] max-w-[700px] max-h-[520px]
                    rounded-3xl flex items-center justify-center
                    text-white text-[1.2vw] min-text-lg font-semibold text-center
                    shadow-2xl will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <TiltCard className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#0F3D3E] via-[#145959] to-[#1E7A7A]">
                      <img
                        src={leftService.image}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-black/40"></div>

                      <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold text-center px-6" style={{ transform: "translateZ(30px)" }}>
                        {leftService.title}
                      </div>
                    </TiltCard>
                  </Link>
                )}

                {rightService && (
                  <Link
                    href={`/services/${leftService.slug}`}
                    className="card card-right
                    w-[45vw] h-[28vw] max-w-[700px] max-h-[520px]
                    rounded-3xl flex items-center justify-center
                    text-white text-xl font-semibold text-center
                    shadow-2xl will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <TiltCard className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#0F3D3E] via-[#145959] to-[#1E7A7A]">
                      <img
                        src={rightService.image}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-black/40"></div>

                      <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold text-center px-6" style={{ transform: "translateZ(30px)" }}>
                        {rightService.title}
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