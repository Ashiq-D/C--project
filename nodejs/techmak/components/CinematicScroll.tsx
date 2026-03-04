"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Link from "next/link";

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

        // Initial cinematic position
        gsap.set([cardLeft, cardRight], {
          transformPerspective: 2000,
          transformStyle: "preserve-3d",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 40%",
            end: "bottom 20%",
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
                className="row flex justify-center gap-[6vw] relative"
              >
                {leftService && (
                  <Link
                    href={`/services/${leftService.slug}`}
                    className="card card-left
                    w-[45vw] h-[28vw] max-w-[700px] max-h-[520px]
                    bg-gradient-to-br from-[#0F3D3E] via-[#145959] to-[#1E7A7A]
                    rounded-3xl flex items-center justify-center
                    text-white text-[1.2vw] min-text-lg font-semibold text-center
                    shadow-2xl will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                  <img
                      src={leftService.image}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold text-center px-6">
                      {leftService.title}
                    </div>
                  </Link>
                )}

                {rightService && (
                  <Link
                    href={`/services/${leftService.slug}`}
                    className="card card-right
                    w-[45vw] h-[28vw] max-w-[700px] max-h-[520px]
                    bg-gradient-to-br from-[#0F3D3E] via-[#145959] to-[#1E7A7A]
                    rounded-3xl flex items-center justify-center
                    text-white text-xl font-semibold text-center
                    shadow-2xl will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                  <img
                      src={rightService.image}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold text-center px-6">
                      {leftService.title}
                    </div>
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