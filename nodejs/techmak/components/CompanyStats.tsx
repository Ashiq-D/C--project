"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CompanyStats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current.children, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="bg-[#07071A] py-24 px-6 md:px-20 text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">
        Company at a Glance
      </h2>

      <div className="w-20 h-1 bg-[#00d4aa] mx-auto mb-12 rounded-full" />

      <div
        ref={ref}
        className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {[
          ["42", "Employees"],
          ["145", "Projects"],
          ["3", "Offices"],
          ["16+", "Years"],
        ].map(([num, label], i) => (
          <div
            key={i}
            className="bg-[#0d1f1f] rounded-2xl p-10 border border-white/5 hover:border-[#00d4aa]/40 transition"
          >
            <h3 className="text-4xl font-bold text-[#00d4aa] mb-2">
              {num}
            </h3>
            <p className="text-gray-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}