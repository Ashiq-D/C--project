"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    const ctx = gsap.context(() => {

      const rows = gsap.utils.toArray<HTMLElement>(".row");

      rows.forEach((row, index) => {
        const cardLeft = row.querySelector<HTMLElement>(".card-left");
        const cardRight = row.querySelector<HTMLElement>(".card-right");

        if (!cardLeft && !cardRight) return;

        // Dynamic values based on index
        const leftX = -600 - index * 120;
        const rightX = 600 + index * 120;

        const leftRotate = -10 - index * 5;
        const rightRotate = 10 + index * 5;

        const yMove = -150 - index * 80;

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1.5,

          onUpdate: (self) => {
            const progress = self.progress;

            if (cardLeft) {
              cardLeft.style.transform = `
                translateX(${progress * leftX}px)
                translateY(${progress * yMove}px)
                rotate(${progress * leftRotate}deg)
              `;
            }

            if (cardRight) {
              cardRight.style.transform = `
                translateX(${progress * rightX}px)
                translateY(${progress * yMove}px)
                rotate(${progress * rightRotate}deg)
              `;
            }
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-40 overflow-hidden"
      style={{ perspective: "1500px" }}
    >
      <div className="max-w-7xl mx-auto px-10">

        <h2 className="text-4xl font-semibold text-center text-white mb-32">
          Our Core Capabilities
        </h2>

        <div className="space-y-32">

          {Array.from({
            length: Math.ceil(services.length / 2),
          }).map((_, rowIndex) => {
            const leftService = services[rowIndex * 2];
            const rightService = services[rowIndex * 2 + 1];

            return (
              <div
                key={rowIndex}
                className="row flex justify-center gap-20"
              >
                {leftService && (
                  <Link
                    href={`/services/${leftService.slug}`}
                    className="card card-left w-[40%] h-[350px]
                               bg-gradient-to-br from-[#0F3D3E] via-[#145959] to-[#1E7A7A]
                               rounded-3xl flex items-center justify-center
                               text-white text-xl font-semibold text-center
                               shadow-2xl transition duration-500
                               hover:scale-105
                               hover:shadow-[0_0_60px_rgba(30,122,122,0.6)]
                               will-change-transform"
                  >
                    {leftService.title}
                  </Link>
                )}

                {rightService && (
                  <Link
                    href={`/services/${rightService.slug}`}
                    className="card card-right w-[40%] h-[350px]
                               bg-gradient-to-br from-[#0F3D3E] via-[#145959] to-[#1E7A7A]
                               rounded-3xl flex items-center justify-center
                               text-white text-xl font-semibold text-center
                               shadow-2xl transition duration-500
                               hover:scale-105
                               hover:shadow-[0_0_60px_rgba(30,122,122,0.6)]
                               will-change-transform"
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