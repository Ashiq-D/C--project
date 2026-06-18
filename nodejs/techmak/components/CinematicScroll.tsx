"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import TiltCard from "./TiltCard";

gsap.registerPlugin(ScrollTrigger);

import { services } from "@/lib/servicesData";
import { Shield, ShoppingCart, Cpu, Zap } from "lucide-react";

const coreCapabilities = [
  {
    title: "Advanced AI-Powered Surveillance Solutions",
    description:
      "Intelligent, next-generation surveillance systems leveraging artificial intelligence for enhanced security, real-time monitoring, and proactive threat detection.",
    icon: Shield,
    bgImage: "/images/security.png",
  },
  {
    title: "Renewable Energy & Energy Storage Solutions",
    description:
      "Leveraging over 17 years of expertise, Techmak Technology delivers advanced solar power generation and industrial Energy Storage Systems (ESS) for energy independence and sustainable growth.",
    icon: Zap,
    bgImage: "/images/solar.png",
  },
  {
    title: "Electronic Article Surveillance (EAS) Systems",
    description:
      "Comprehensive retail loss-prevention solutions designed to safeguard merchandise, reduce shrinkage, and improve operational control across retail environments.",
    icon: ShoppingCart,
    bgImage: "/images/gate.png",
  },
  {
    title: "Custom System Integration (Hardware & Software Solutions)",
    description:
      "End-to-end tailored integration services combining hardware and software to deliver seamless, scalable, and mission-specific technology ecosystems.",
    icon: Cpu,
    bgImage: "/images/custom.png",
  },
];

export default function CinematicScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // 🔥 GSAP CONTEXT
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const rows = gsap.utils.toArray<HTMLElement>(".row");
      const capCards = gsap.utils.toArray<HTMLElement>(".cap-card");

      // Core Capabilities Intro Animation
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
              delay: i * 0.15,
              ease: "power2.out",
            }
          );

          const elements = card.querySelectorAll(".cap-title, .cap-desc");
          gsap.fromTo(
            elements,
            { opacity: 0, x: -15 },
            {
              scrollTrigger: {
                trigger: ".cap-grid-container",
                start: "top 85%",
              },
              opacity: 1,
              x: 0,
              duration: 0.7,
              stagger: 0.1,
              delay: i * 0.15 + 0.2,
              ease: "power2.out",
            }
          );
        });
      }

      // Desktop
      mm.add("(min-width: 768px)", () => {

        // ── Core Capabilities Folding Animation ──
        const foldLeft = sectionRef.current?.querySelector(".fold-card-left");
        const foldRight = sectionRef.current?.querySelector(".fold-card-right");
        const capGrid = sectionRef.current?.querySelector(".cap-grid-container");

        if (foldLeft && foldRight && capGrid) {
          // Compute the actual pixel distance each card needs to slide
          const leftRect = (foldLeft as HTMLElement).getBoundingClientRect();
          const rightRect = (foldRight as HTMLElement).getBoundingClientRect();
          const innerCard1 = capGrid.children[1] as HTMLElement;
          const innerCard2 = capGrid.children[2] as HTMLElement;
          const innerRect1 = innerCard1.getBoundingClientRect();
          const innerRect2 = innerCard2.getBoundingClientRect();
          const centerX = (innerRect1.left + innerRect2.left) / 2;

          const leftSlideDistance = centerX - leftRect.left;   // positive → slides right
          const rightSlideDistance = centerX - rightRect.left;  // negative → slides left

          const tlCap = gsap.timeline({
            scrollTrigger: {
              trigger: capGrid,
              start: "top 85%",
              end: "bottom 15%",
              scrub: 1.5, // Smooth interpolation instead of direct lock
            },
          });

          // Phase 1: Unfold (Takes up first 40% of scroll distance for super smooth reveal)
          tlCap.fromTo(foldLeft, { x: leftSlideDistance }, { x: 0, ease: "none", duration: 2 }, 0);
          tlCap.fromTo(foldRight, { x: rightSlideDistance }, { x: 0, ease: "none", duration: 2 }, 0);

          // Phase 2: Stay fully separated to be read (Takes up middle 20% of scroll distance)
          tlCap.to(foldLeft, { x: 0, duration: 1 }, 2);
          tlCap.to(foldRight, { x: 0, duration: 1 }, 2);

          // Phase 3: Fold back in (Takes up final 40% of scroll distance for super smooth exit)
          tlCap.to(foldLeft, { x: leftSlideDistance, ease: "none", duration: 2 }, 3);
          tlCap.to(foldRight, { x: rightSlideDistance, ease: "none", duration: 2 }, 3);
        }

        // ── Services Rows Animation ──
        rows.forEach((row, index) => {
          const cardLeft = row.querySelector<HTMLElement>(".card-left");
          const cardRight = row.querySelector<HTMLElement>(".card-right");
          if (!cardLeft || !cardRight) return;

          gsap.set([cardLeft, cardRight], { transformPerspective: 2000, transformStyle: "preserve-3d" });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: row,
              start: "top 50%",
              end: "bottom top",
              scrub: 1.5,
            },
          });

          tl.to(cardLeft, {
            x: -60 - index * 20, y: -20 - index * 10, rotateZ: -2 - index * 1, rotateY: -5, z: -40, scale: 0.95, opacity: 0.3, ease: "power2.inOut",
          }, 0)
            .to(cardRight, {
              x: 60 + index * 20, y: -20 - index * 10, rotateZ: 2 + index * 1, rotateY: 5, z: -40, scale: 0.95, opacity: 0.3, ease: "power2.inOut",
            }, 0);
        });
      });

      // Mobile
      mm.add("(max-width: 767px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".card, .cap-card");

        cards.forEach((card, i) => {
          gsap.set(card, { transformPerspective: 2000, transformStyle: "preserve-3d" });
          gsap.fromTo(card, 
            { y: 0, z: 0, scale: 1, opacity: 1 },
            {
              scrollTrigger: {
                trigger: card,
                start: "top top", // Only start fading when the card hits the top of the screen
                end: "bottom top", // Finish fading exactly when the card completely leaves the screen
                scrub: 1.2,
                invalidateOnRefresh: true,
              },
              z: -20, // Push backward into screen
              scale: 0.95,
              opacity: 0.5,
              ease: "power1.out", // Smooth deceleration
            }
          );
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-0 pb-4 overflow-hidden z-10"
    >
      <div
        className="max-w-7xl mx-auto px-10"
        style={{
          perspective: "2000px",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="text-center mb-16 max-w-3xl mx-auto backdrop-blur-md bg-[#052626]/40 rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl">
          <h2
            className="font-bold mb-6 select-none whitespace-nowrap tracking-tight"
            style={{
              fontSize: "clamp(1.2rem, 4.5vw, 3rem)",
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

        {/* ── Core Capabilities Grid ── */}
        <div className="cap-grid-wrapper w-full relative">
          <div className="cap-grid-container grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6 mb-32 max-w-7xl mx-auto relative z-20">
            {coreCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              const isInner = i === 1 || i === 2;
              return (
                <div
                  key={i}
                  className={`cap-card group relative p-[1px] overflow-hidden rounded-[2rem] isolation-auto flex flex-col h-full ${i === 1 ? "order-first md:order-none" : ""} z-20 ${isInner ? "md:z-30" : "md:z-10"} ${i === 0 ? "fold-card-left" : ""} ${i === 3 ? "fold-card-right" : ""}`}
                >
                  {/* Border gradient that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-[#38c5e0]/10 to-[#38c5e0]/50 opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className={`relative h-full bg-[#040f1a]/50 backdrop-blur-xl ${isInner ? "md:bg-[#040f1a]" : ""} rounded-[calc(2rem-1px)] border border-[#38c5e0]/10 flex flex-col items-start text-left z-10 shadow-lg overflow-hidden group-hover:shadow-[0_0_30px_rgba(56,197,224,0.2)] group-hover:bg-[#040f1a]/70 transition-all duration-500`}>

                    {/* Main Content Section */}
                    <div className="px-6 pt-8 pb-2 flex flex-col relative z-20 w-full">
                      <h3
                        className="cap-title text-lg md:text-[20px] font-bold mb-5 leading-[1.4] tracking-wide pr-2"
                        style={{
                          backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {cap.title}
                      </h3>

                      <div
                        className="w-10 h-[2px] mb-5 rounded-full"
                        style={{
                          backgroundImage: "linear-gradient(90deg, #ffffff, #0ea5c9)"
                        }}
                      ></div>

                      <p className="cap-desc text-[#a1c4d4] text-[13.5px] leading-relaxed font-normal pr-1">
                        {cap.description}
                      </p>
                    </div>

                    {/* Bottom Image Graphic Section */}
                    <div
                      className="relative w-full h-[240px] shrink-0 mt-auto"
                      style={{
                        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 100%)",
                        maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 100%)"
                      }}
                    >
                      <img
                        src={cap.bgImage}
                        alt={cap.title}
                        className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 mix-blend-screen"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mb-16 max-w-3xl mx-auto backdrop-blur-md bg-[#052626]/40 rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl">
          <h2
            className="font-bold mb-6 select-none whitespace-nowrap tracking-tight"
            style={{
              fontSize: "clamp(1.1rem, 4.5vw, 3rem)",
              backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "fadeInUp 1s ease-out 0.2s both",
            }}
          >
            Our Products & Solutions
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
                    shadow-2xl"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <TiltCard className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#0F3D3E] via-[#145959] to-[#1E7A7A]">
                      <img
                        src={leftService.image}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#071A1A]/90 via-[#071A1A]/20 to-transparent"></div>

                      <div className="absolute inset-0 flex flex-col justify-end p-8" style={{ transform: "translateZ(40px)" }}>
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
                    shadow-2xl"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <TiltCard className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#0F3D3E] via-[#145959] to-[#1E7A7A]">
                      <img
                        src={rightService.image}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#071A1A]/90 via-[#071A1A]/20 to-transparent"></div>

                      <div className="absolute inset-0 flex flex-col justify-end p-8" style={{ transform: "translateZ(40px)" }}>
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