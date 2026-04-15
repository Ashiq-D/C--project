"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutSections() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="bg-[#07071A] py-24 px-6 md:px-20">
      <div
        ref={ref}
        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        {[
          {
            title: "Our Vision",
            text: "To lead in delivering innovative and reliable technology solutions globally.",
          },
          {
            title: "Our Mission",
            text: "To provide high-quality systems across security, energy, and industrial sectors.",
          },
          {
            title: "Our Philosophy",
            text: "We believe in practical innovation, trust, and long-term partnerships.",
          },
          {
            title: "Our Story",
            text: "Founded in 2009, we have grown into a multi-sector technology company.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-[#0d1f1f] border border-white/5 hover:border-[#00d4aa]/40 transition"
          >
            <h2 className="text-2xl font-semibold text-[#00d4aa] mb-4">
              {item.title}
            </h2>
            <p className="text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}