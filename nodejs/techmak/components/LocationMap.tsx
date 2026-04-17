"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LocationMap() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the map container with a 3D tilt reveal
      gsap.fromTo(
        ".map-container",
        {
          rotateX: 15,
          rotateY: -5,
          scale: 0.9,
          opacity: 0,
        },
        {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".map-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate info cards
      gsap.fromTo(
        ".location-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".location-card",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 z-10 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div
          className="text-center mb-16 max-w-3xl mx-auto backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl"
          style={{ backgroundColor: "rgba(5, 38, 38, 0.6)" }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6"
            style={{
              borderColor: "rgba(31, 168, 154, 0.3)",
              backgroundColor: "rgba(31, 168, 154, 0.08)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#38c5e0" }}
            />
            <span
              className="text-[10px] font-bold tracking-[0.25em] uppercase"
              style={{ color: "#78d4e8" }}
            >
              Our Location
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4 select-none au-reveal"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Find Us Here
          </h2>
          <p className="au-reveal text-white/50 text-sm md:text-base max-w-lg mx-auto">
            Visit our office in the heart of Bashundhara, Dhaka for a consultation
          </p>
        </div>

        {/* 3D Map + Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map Container — spans 2 columns on desktop */}
          <div
            className="map-container lg:col-span-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            style={{
              transformStyle: "preserve-3d",
              boxShadow:
                "0 25px 60px -15px rgba(0, 0, 0, 0.5), 0 0 40px rgba(56, 197, 224, 0.08)",
            }}
          >
            {/* Map Header Bar */}
            <div
              className="flex items-center gap-3 px-6 py-4 border-b border-white/5"
              style={{ backgroundColor: "rgba(5, 38, 38, 0.95)" }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div
                className="flex-1 rounded-lg px-4 py-1.5 text-xs text-white/40 font-mono"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              >
                maps.google.com — Techmak Technology Ltd.
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="relative" style={{ height: "450px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9829577201112!2d90.3965951!3d23.7836212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7000107ac61%3A0xfe30487facf253a7!2sTechmak%20technology!5e0!3m2!1sbn!2sbd!4v1776461214232!5m2!1sbn!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Techmak Technology Ltd. Location"
              />
              {/* Gradient overlay on edges for seamless blending */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(5, 38, 38, 0.3) 0%, transparent 10%, transparent 90%, rgba(5, 38, 38, 0.5) 100%)",
                }}
              />
            </div>
          </div>

          {/* Info Panel — right column */}
          <div className="flex flex-col gap-5">
            {/* Address Card */}
            <div
              className="location-card rounded-2xl p-6 border border-white/5 backdrop-blur-md"
              style={{
                backgroundColor: "rgba(5, 38, 38, 0.7)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(56, 197, 224, 0.1)",
                    border: "1px solid rgba(56, 197, 224, 0.2)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#38c5e0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="au-reveal text-sm font-bold tracking-wide uppercase mb-2"
                    style={{ color: "#9ff6ff" }}
                  >
                    Office Address
                  </h3>
                  <p className="au-reveal text-white/70 text-sm leading-relaxed">
                    4th Floor, 36/E, Road-2, Block-D
                    <br />
                    Bashundhara R/A, Dhaka 1229
                    <br />
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div
              className="location-card rounded-2xl p-6 border border-white/5 backdrop-blur-md"
              style={{
                backgroundColor: "rgba(5, 38, 38, 0.7)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(31, 168, 154, 0.1)",
                    border: "1px solid rgba(31, 168, 154, 0.2)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1FA89A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="au-reveal text-sm font-bold tracking-wide uppercase mb-2"
                    style={{ color: "#9ff6ff" }}
                  >
                    Phone
                  </h3>
                  <a
                    href="tel:+8801611224433"
                    className="au-reveal text-white/70 text-sm hover:text-[#38c5e0] transition-colors"
                  >
                    +880 1611-224433
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div
              className="location-card rounded-2xl p-6 border border-white/5 backdrop-blur-md"
              style={{
                backgroundColor: "rgba(5, 38, 38, 0.7)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(14, 165, 201, 0.1)",
                    border: "1px solid rgba(14, 165, 201, 0.2)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0ea5c9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="au-reveal text-sm font-bold tracking-wide uppercase mb-2"
                    style={{ color: "#9ff6ff" }}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:info@techmakbd.com"
                    className="au-reveal text-white/70 text-sm hover:text-[#38c5e0] transition-colors"
                  >
                    info@techmakbd.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div
              className="location-card rounded-2xl p-6 border border-white/5 backdrop-blur-md"
              style={{
                backgroundColor: "rgba(5, 38, 38, 0.7)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(56, 197, 224, 0.1)",
                    border: "1px solid rgba(56, 197, 224, 0.2)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#38c5e0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="au-reveal text-sm font-bold tracking-wide uppercase mb-2"
                    style={{ color: "#9ff6ff" }}
                  >
                    Business Hours
                  </h3>
                  <p className="au-reveal text-white/70 text-sm leading-relaxed">
                    Sat – Thu: 10:00 AM – 7:00 PM
                    <br />
                    <span className="text-white/40">Friday: Closed</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Get Directions CTA */}
            <a
              href="https://maps.app.goo.gl/RURniUgjMQTBH5Wi9"
              target="_blank"
              rel="noopener noreferrer"
              className="location-card group flex items-center justify-center gap-3 rounded-2xl p-5 border text-sm font-semibold transition-all duration-500 hover:-translate-y-1"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(31, 168, 154, 0.15), rgba(14, 165, 201, 0.15))",
                borderColor: "rgba(31, 168, 154, 0.3)",
                color: "#9ff6ff",
                boxShadow: "0 0 20px rgba(31, 168, 154, 0.15)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              Get Directions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
