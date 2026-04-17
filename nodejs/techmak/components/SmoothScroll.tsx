"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Initialize Lenis for Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      lerp: 0.1,
    });

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // 2. Global GSAP Scroll Reveal (to replicate the "aesthetic")
    let ctx = gsap.context(() => {});
    
    // We use a timeout to let child components render and mount to the DOM
    const timeout = setTimeout(() => {
      ctx.add(() => {
        // Select heading and text elements, excluding ones that already have custom GSAP/Observer animations
        const textElements = gsap.utils.toArray<HTMLElement>(
          "h1:not(.hero-text):not(.au-reveal):not(nav *), h2:not(.hero-text):not(.au-reveal):not(nav *), h3:not(.hero-text):not(.au-reveal):not(nav *), p:not(.hero-text):not(.au-reveal):not(nav *):not(header *)"
        );

        textElements.forEach((el) => {
          gsap.fromTo(
            el,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        // Also add a subtle scale-up reveal for standard images
        const imageElements = gsap.utils.toArray<HTMLElement>("img:not(.card img):not(.au-stat-box img)");
        imageElements.forEach((el) => {
          gsap.fromTo(
            el,
            { scale: 0.95, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

        ScrollTrigger.refresh();
      });
    }, 150);

    return () => {
      clearTimeout(timeout);
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, [pathname]);

  return <>{children}</>;
}