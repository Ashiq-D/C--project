"use client";

import Image from "next/image";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Camera,
  ShieldCheck,
  Store,
  Scan,
  Building,
  Radio,
  Factory,
  Code,
  ShieldAlert,
  Eye,
  Rocket,
} from "lucide-react";

/* ═══════════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════════ */
const gradient = "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)";

/* ── Specializations ── */
const specializations = [
  { title: "AI-Powered Surveillance & Video Analytics", icon: Camera },
  { title: "Electronic Security & Access Control Systems", icon: ShieldCheck },
  { title: "Retail Intelligence & EAS Solutions", icon: Store },
  { title: "Security Screening & Inspection Systems", icon: Scan },
  { title: "Building Management & Automation Systems", icon: Building },
  { title: "RFID & Intelligent Tracking Technologies", icon: Radio },
  { title: "Industrial & Critical Infrastructure Solutions", icon: Factory },
  { title: "Custom Software Development & System Integration", icon: Code },
  { title: "Defense & Mission-Critical Technology Solutions", icon: ShieldAlert },
];

/* ── Stats ── */
const stats = [
  { value: 17, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Projects Deployed" },
  { value: 30, suffix: "+", label: "Global Partners" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

/* ═══════════════════════════════════════════════
   ANIMATED COUNTER
═══════════════════════════════════════════════ */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}<span className="text-[#38c5e0]">{suffix}</span>
    </span>
  );
}

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════ */
export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-20px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden z-10">

      {/* ── Ambient glows ── */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[800px] h-[800px] rounded-full bg-[#38c5e0]/[0.03] blur-[180px]" />
      <div className="pointer-events-none absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-[#0ea5c9]/[0.04] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#38c5e0]/[0.03] blur-[120px]" />

      {/* ═══════════════════════════════════════
         PART 1 — EDITORIAL HERO
      ═══════════════════════════════════════ */}
      <div className="relative pt-16 pb-16 md:pt-24 md:pb-20 px-6">
        <div ref={heroRef} className="max-w-7xl mx-auto">

          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={heroInView ? { opacity: 1, width: "100%" } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-[#38c5e0]/40 to-transparent" />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-[9px] md:text-xs font-bold tracking-[0.15em] md:tracking-[0.5em] uppercase text-[#78d4e8]/60 shrink-0 text-center"
            >
              Established 2009 · Dhaka, Bangladesh
            </motion.span>
            <span className="h-px flex-1 bg-gradient-to-l from-[#38c5e0]/40 to-transparent" />
          </motion.div>

          {/* Big editorial headline */}
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-extrabold leading-[1.05] tracking-tight mb-6"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                backgroundImage: gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              About Techmak<br />Technology
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-[#8ab8c8]/80 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-10"
            >
              From Vision to Innovation Since 2009
            </motion.p>

            {/* Stats row inline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 md:gap-16"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <span
                    className="text-3xl md:text-4xl font-extrabold block"
                    style={{
                      backgroundImage: gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    <Counter value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="text-[#8ab8c8]/50 text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase mt-1 block">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
         PART 2 — THE NARRATIVE (Asymmetric editorial)
      ═══════════════════════════════════════ */}
      <div className="relative px-6 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto">

          {/* Story section header */}
          <motion.div
            ref={storyRef}
            initial={{ opacity: 0 }}
            animate={storyInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-5 mb-8"
          >
            <div>
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#78d4e8]/50 mb-1">Our Story</p>
              <h3 className="text-white text-xl md:text-2xl font-semibold">How It All Started</h3>
            </div>
            <span className="flex-1 h-px bg-white/[0.06]" />
          </motion.div>

          {/* Two-column narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Left column — large paragraph */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-white/90 text-[17px] md:text-lg font-light leading-[1.9] mb-8">
                Techmak Technology Ltd. was founded in{" "}
                <span className="font-semibold text-white">2009</span> by{" "}
                <span className="font-semibold text-[#9ff6ff] whitespace-nowrap">Nur A. Azam (Tusher)</span>,
                a young entrepreneur with a vision to transform Bangladesh&apos;s technology landscape through innovation, reliability, and engineering excellence.
              </p>
              <p className="text-[#8ab8c8]/80 text-[15px] leading-[1.9] font-light mb-8">
                Starting with a strong focus on power and energy solutions, Mr. Azam recognized the growing need for advanced technologies that could enhance security, operational efficiency, and infrastructure resilience across Bangladesh. What began as a small technology venture soon evolved into a trusted solutions provider serving government agencies, defense organizations, critical infrastructure operators, and leading private enterprises.
              </p>
              <p className="text-[#8ab8c8]/80 text-[15px] leading-[1.9] font-light">
                Driven by determination, technical expertise, and a commitment to customer success, Techmak Technology steadily expanded its capabilities into AI-powered surveillance, RFID technologies, electronic security systems, access control, building automation, industrial solutions, and mission-critical technologies.
              </p>
            </motion.div>

            {/* Right column — pullout quote + today statement */}
            <motion.div
              className="lg:col-span-4 flex flex-col gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Pullout callout */}
              <div
                className="rounded-2xl p-8 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(56,197,224,0.06), rgba(14,165,201,0.03))",
                  border: "1px solid rgba(56,197,224,0.12)",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-[2px]"
                  style={{ backgroundImage: "linear-gradient(90deg, #38c5e0, transparent)" }}
                />
                <p className="text-white/90 text-base md:text-lg leading-[1.85] font-light">
                  Today, the company stands as a{" "}
                  <span className="text-[#9ff6ff] font-medium">leading technology integrator</span>,
                  delivering world-class solutions through strategic partnerships with globally
                  recognized manufacturers while maintaining a strong commitment to local
                  engineering excellence and customer support.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Decorative glowing cyan line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 flex flex-col items-center justify-center"
          >
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#9ff6ff] to-[#38c5e0] shadow-[0_0_10px_rgba(56,197,224,0.5)]" />
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
         PART 3 — FOUNDER SPOTLIGHT (Full-width editorial strip)
      ═══════════════════════════════════════ */}
      <div
        className="relative pt-8 pb-14 md:pt-10 md:pb-20 px-6"
        style={{
          background: "linear-gradient(180deg, rgba(56,197,224,0.03) 0%, transparent 100%)",
          borderTop: "1px solid rgba(56,197,224,0.08)",
          borderBottom: "1px solid rgba(56,197,224,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-5 mb-12"
          >
            <div>
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#78d4e8]/50 mb-1">Leadership</p>
              <h3 className="text-white text-xl md:text-2xl font-semibold">The Vision Behind Techmak</h3>
            </div>
            <span className="flex-1 h-px bg-white/[0.06]" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Founder Photo Card (Left Side) */}
            <motion.div
              className="lg:col-span-5 flex justify-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full max-w-[380px] rounded-3xl overflow-hidden border border-[#38c5e0]/10 shadow-2xl bg-[#061818]/40 backdrop-blur-md p-10 flex flex-col items-center justify-center">
                {/* Initials Box */}
                <div className="w-[88px] h-[88px] rounded-[1.2rem] bg-[#0a2626]/60 backdrop-blur-md border border-[#38c5e0]/20 flex items-center justify-center shadow-[0_0_20px_rgba(56,197,224,0.05)] mb-8 transition-transform duration-500 hover:scale-105">
                  <span className="text-[#9ff6ff] text-[32px] font-black tracking-wide">NA</span>
                </div>
                
                <a
                  href="https://tusher.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[19px] font-bold hover:text-[#9ff6ff] transition-colors duration-300 block mb-2 text-center"
                >
                  Nur A. Azam (Tusher)
                </a>
                
                <p className="text-[#38c5e0]/80 text-[11px] font-bold tracking-[0.2em] uppercase mb-6 text-center">
                  Founder & Managing Director
                </p>
                
                <span className="block w-8 h-[1px] bg-white/10 mb-6" />
                
                <p className="text-[#8ab8c8]/60 text-[13px] font-light leading-relaxed text-center">
                  Visionary technology leader steering Techmak's mission to become South Asia's most trusted technology integrator.
                </p>
              </div>
            </motion.div>

            {/* Quote + vision text (Right Side) */}
            <motion.div
              className="lg:col-span-7 flex flex-col justify-center lg:pl-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Big quote */}
              <div className="relative mb-8">
                <span
                  className="absolute -top-10 -left-10 text-[100px] md:text-[120px] leading-none font-sans font-bold select-none pointer-events-none"
                  style={{ color: "#133a3a" }}
                >
                  &ldquo;
                </span>
                <blockquote className="relative z-10">
                  <p className="text-white/90 text-[22px] md:text-[28px] lg:text-[32px] font-light leading-[1.6] italic">
                    Technology should not only address today&apos;s challenges, it should architect a{" "}
                    <span className="text-[#9ff6ff] not-italic font-semibold">
                      safer, more intelligent, and deeply connected future
                    </span>{" "}
                    <span className="italic">for generations to come.</span>
                  </p>
                </blockquote>
              </div>

              <p className="text-[#8ab8c8]/70 text-[15px] leading-[1.85] font-light">
                This guiding principle permeates every dimension of our operations from
                the solutions we engineer to the enduring partnerships we cultivate with
                clients and technology allies worldwide. Under Mr. Azam&apos;s leadership,
                Techmak continues its trajectory toward becoming a regional benchmark in
                advanced technology, enterprise security, and digital transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
         PART 4 — VISION & MISSION (Bento grid)
      ═══════════════════════════════════════ */}
      <div className="relative pt-4 pb-6 md:pt-6 md:pb-10 px-6">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-5 mb-8"
          >
            <div>
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#78d4e8]/50 mb-1">Direction</p>
              <h3 className="text-white text-xl md:text-2xl font-semibold">Vision & Mission</h3>
            </div>
            <span className="flex-1 h-px bg-white/[0.06]" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -5 }}
              className="relative rounded-3xl p-10 md:p-12 overflow-hidden group cursor-default"
              style={{
                background: "linear-gradient(160deg, rgba(56,197,224,0.06) 0%, rgba(7,26,26,0.4) 100%)",
                border: "1px solid rgba(56,197,224,0.12)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-700" style={{ backgroundImage: "linear-gradient(90deg, #38c5e0, transparent)" }} />

              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-12 h-12 rounded-xl flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#38c5e0]/20 to-transparent opacity-50" />
                  <div className="absolute inset-0 border border-[#38c5e0]/30 rounded-xl" />
                  <div className="absolute inset-0 bg-[#38c5e0] blur-xl opacity-20 group-hover:opacity-50 transition-opacity" />
                  <Eye className="w-6 h-6 text-[#38c5e0] relative z-10 drop-shadow-[0_0_8px_rgba(56,197,224,0.8)]" />
                </div>
                <h4
                  className="text-lg font-bold tracking-wide uppercase"
                  style={{
                    backgroundImage: gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Our Vision
                </h4>
              </div>

              <p className="text-white/80 text-base md:text-lg leading-[1.85] font-light">
                To emerge as South Asia&apos;s most dependable technology and engineering
                solutions provider, empowering organizations through relentless innovation,
                intelligent automation, and secure digital transformation.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.35, delay: 0.05 }}
              whileHover={{ y: -5 }}
              className="relative rounded-3xl p-10 md:p-12 overflow-hidden group cursor-default"
              style={{
                background: "linear-gradient(160deg, rgba(14,165,201,0.06) 0%, rgba(7,26,26,0.4) 100%)",
                border: "1px solid rgba(14,165,201,0.12)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-700" style={{ backgroundImage: "linear-gradient(90deg, transparent, #0ea5c9)" }} />

              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-12 h-12 rounded-xl flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5c9]/20 to-transparent opacity-50" />
                  <div className="absolute inset-0 border border-[#0ea5c9]/30 rounded-xl" />
                  <div className="absolute inset-0 bg-[#0ea5c9] blur-xl opacity-20 group-hover:opacity-50 transition-opacity" />
                  <Rocket className="w-6 h-6 text-[#0ea5c9] relative z-10 drop-shadow-[0_0_8px_rgba(14,165,201,0.8)]" />
                </div>
                <h4
                  className="text-lg font-bold tracking-wide uppercase"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #ffffff, #0ea5c9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Our Mission
                </h4>
              </div>

              <p className="text-white/80 text-base md:text-lg leading-[1.85] font-light">
                To deliver world-class technology solutions that elevate security postures,
                amplify operational efficiency, and strengthen organizational resilience
                while generating sustainable value for our customers, employees, partners,
                and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
         PART 5 — WHAT WE DO (Horizontal pill cloud)
      ═══════════════════════════════════════ */}
      <div
        className="relative pt-8 pb-6 md:pt-10 md:pb-10 px-6"
        style={{
          borderTop: "1px solid rgba(56,197,224,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-5 mb-14"
          >
            <div>
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#78d4e8]/50 mb-1">Capabilities</p>
              <h3 className="text-white text-xl md:text-2xl font-semibold">What We Deliver</h3>
            </div>
            <span className="flex-1 h-px bg-white/[0.06]" />
          </motion.div>

          {/* Specializations as elegant list items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                whileHover={{ y: -2, scale: 1.01 }}
                className="flex items-center justify-center p-5 rounded-2xl cursor-default group text-center gap-4 flex-col sm:flex-row sm:text-left"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "border-color 0.4s, background 0.4s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(56,197,224,0.25)";
                  e.currentTarget.style.background = "rgba(56,197,224,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#38c5e0]/10 text-[#38c5e0] group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-white/70 text-sm font-medium leading-snug group-hover:text-white/90 transition-colors duration-300">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
         PART 6 — COMMITMENT CLOSING (Bold statement)
      ═══════════════════════════════════════ */}
      <div className="relative pt-8 pb-16 md:pt-10 md:pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "50px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase text-[#78d4e8]/50 mb-8">
              Our Commitment
            </p>

            <h3
              className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.3] mb-10"
              style={{
                backgroundImage: gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Seventeen Years of Delivering Innovation<br className="hidden md:block" /> That Matters
            </h3>

            <p className="text-[#8ab8c8]/70 text-base md:text-lg leading-[1.85] font-light max-w-3xl mx-auto mb-8">
              Every project we undertake reflects our dedication to quality craftsmanship,
              ethical integrity, and enduring partnership. Under the strategic leadership of
              Founder and Managing Director <strong className="text-white font-medium whitespace-nowrap">Nur A. Azam (Tusher)</strong>,
              the company continues its trajectory toward becoming a regional benchmark
              in advanced technology, enterprise security, intelligent automation, and
              comprehensive digital transformation.
            </p>

            {/* Closing tagline */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#38c5e0]/40" />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase"
                style={{
                  backgroundImage: gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Global Innovation · Local Expertise · Since 2009
              </motion.p>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#38c5e0]/40" />
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
