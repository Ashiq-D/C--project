"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/servicesData";
import TiltCard from "@/components/TiltCard";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesClient() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const capCards = gsap.utils.toArray<HTMLElement>(".cap-card");

      // Intro Animation
      if (capCards.length > 0) {
        capCards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 40 },
            {
              scrollTrigger: {
                trigger: ".cap-grid-container",
                start: "top 85%",
              },
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: (i % 3) * 0.15,
              ease: "power2.out",
            }
          );
        });
      }

      // Desktop Folding Animation
      mm.add("(min-width: 1024px)", () => {
        const capGrid = sectionRef.current?.querySelector(".cap-grid-container");
        const foldLefts = gsap.utils.toArray<HTMLElement>(".fold-card-left");
        const foldRights = gsap.utils.toArray<HTMLElement>(".fold-card-right");
        const centers = gsap.utils.toArray<HTMLElement>(".fold-card-center");

        if (foldLefts.length && foldRights.length && centers.length && capGrid) {
          const leftRect = foldLefts[0].getBoundingClientRect();
          const rightRect = foldRights[0].getBoundingClientRect();
          const centerRect = centers[0].getBoundingClientRect();

          const leftSlideDistance = centerRect.left - leftRect.left;
          const rightSlideDistance = centerRect.left - rightRect.left;

          const tlCap = gsap.timeline({
            scrollTrigger: {
              trigger: capGrid,
              start: "top 85%",
              end: "bottom 15%",
              scrub: true,
            },
          });

          tlCap.fromTo(foldLefts, { x: leftSlideDistance }, { x: 0, ease: "none", duration: 2 }, 0);
          tlCap.fromTo(foldRights, { x: rightSlideDistance }, { x: 0, ease: "none", duration: 2 }, 0);
          tlCap.to(foldLefts, { x: 0, duration: 1 }, 2);
          tlCap.to(foldRights, { x: 0, duration: 1 }, 2);
          tlCap.to(foldLefts, { x: leftSlideDistance, ease: "none", duration: 2 }, 3);
          tlCap.to(foldRights, { x: rightSlideDistance, ease: "none", duration: 2 }, 3);
        }
      });

      // Mobile / Tablet 3D exit animation
      mm.add("(max-width: 1023px)", () => {
        capCards.forEach((card) => {
          gsap.set(card, { transformPerspective: 2000, transformStyle: "preserve-3d" });
          gsap.fromTo(card, 
            { y: 0, z: 0, scale: 1, opacity: 1 },
            {
              scrollTrigger: {
                trigger: card,
                start: "top top",
                end: "bottom top",
                scrub: 1.2,
                invalidateOnRefresh: true,
              },
              y: -20,
              z: -40,
              scale: 0.9,
              opacity: 0.4,
              ease: "power2.out",
            }
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={sectionRef} className="relative min-h-screen text-white pt-8 md:pt-16 pb-24 overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center mb-20 relative z-20 backdrop-blur-md bg-[#052626]/40 rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl max-w-4xl mx-auto">
          <p className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-[#78d4e8]/70 mb-4">
            Our Expertise
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            style={{
              backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Engineering the Future
          </h1>
          <p className="text-[#8ab8c8]/80 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed mb-8">
            Delivering advanced, intelligent solutions tailored for robust security, automation, and enterprise infrastructure.
          </p>
          <div
            className="mx-auto rounded-full"
            style={{
              width: "120px",
              height: "3px",
              backgroundImage: "linear-gradient(90deg, #ffffff, #0ea5c9)",
            }}
          />
        </div>

        {/* Services Grid */}
        <div
          className="cap-grid-container grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative z-20"
          style={{ perspective: 1200 }}
        >
          {services.map((service, index) => {
            let posClass = "fold-card-center relative z-30";
            if (index % 3 === 0) posClass = "fold-card-left relative z-10";
            else if (index % 3 === 2) posClass = "fold-card-right relative z-10";

            return (
              <div key={service.slug} className={`cap-card h-full ${posClass}`}>
                <Link href={`/services/${service.slug}`} className="block h-full group">
                <TiltCard className="h-full rounded-2xl overflow-hidden bg-[#0A2E2E] border border-[#1FA89A]/15 group-hover:border-[#1FA89A]/50 transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(31,168,154,0.25)] group-hover:-translate-y-1 relative">

                  {/* Background Image layer */}
                  {service.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-1000 ease-out opacity-40 group-hover:opacity-60"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                  )}
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040A08] via-[#071A1A]/80 to-transparent pointer-events-none" />

                  <div className="p-8 h-full flex flex-col justify-between relative z-10" style={{ transform: "translateZ(30px)" }}>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white group-hover:text-[#9ff6ff] transition-colors duration-300 drop-shadow-lg">
                        {service.title}
                      </h2>
                      <p className="text-[#e0ede8]/80 font-light leading-relaxed mb-8 drop-shadow-md">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[#78d4e8]">
                      <span className="text-sm font-semibold tracking-wider uppercase">Explore</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-2 transition-transform duration-300"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
