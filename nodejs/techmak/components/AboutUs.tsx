"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import gsap from "gsap";

/* ═══════════════════════════════════════════════
   DESIGN TOKENS — matching project palette
═══════════════════════════════════════════════ */
const gradient = "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)";

/* ── Timeline milestones ── */
const milestones = [
  {
    year: "2009",
    label: "Founded",
    title: "Company Established",
    desc: "Mr. A. Azam Tusher founded Techmak as a power system manufacturer, laying the foundation for a technology-first company built on quality and innovation.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    year: "2016",
    label: "Partnership",
    title: "Neo Technology Alliance",
    desc: "Strategic partnership with Neo Technology expanded Techmak's portfolio and opened access to enterprise-grade security product lines across Bangladesh.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    year: "2018",
    label: "Global Reach",
    title: "Faith International Collaboration",
    desc: "Collaboration with Faith International brought international standards and global technology partnerships, elevating Techmak to serve government and enterprise clients at scale.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    year: "2020–2023",
    label: "Scale",
    title: "Nationwide Expansion",
    desc: "Rapid expansion into CCTV, AI-powered detection, networking, and fire safety systems. Certified partnerships with Hikvision, Dahua, ZKTeco, Cisco, and 30+ global brands.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    year: "2025",
    label: "Present",
    title: "AI-Integrated Security Leader",
    desc: "Serving 500+ clients across government, banking, education, healthcare, and corporate sectors. Bangladesh's most trusted end-to-end security technology integrator.",
    isCurrent: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const stats = [
  {
    value: "17", suffix: "+", label: "Years in Business",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: "500", suffix: "+", label: "Projects Deployed",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    value: "30", suffix: "+", label: "Global Partners",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    value: "98", suffix: "%", label: "Client Retention",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Trust & Reliability",
    desc: "We build systems people trust with their lives. Every installation undergoes rigorous quality assurance against international standards.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: "Innovation First",
    desc: "From AI-powered surveillance to smart automation, we stay at the cutting edge — bringing tomorrow's technology to today's challenges.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Client-Centric",
    desc: "We don't just deploy systems — we partner with clients from design through lifetime support, ensuring long-term operational excellence.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "End-to-End Solutions",
    desc: "From initial consultation and system design to deployment, training, and ongoing maintenance — we own the entire value chain.",
  },
];

/* ═══════════════════════════════════════════════
   FLOATING PARTICLES (ambient background)
═══════════════════════════════════════════════ */
function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; r: number; vx: number; vy: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.offsetWidth;
        if (p.x > canvas.offsetWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.offsetHeight;
        if (p.y > canvas.offsetHeight) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 197, 224, ${p.alpha})`;
        ctx.fill();
      }

      // draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 197, 224, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

/* ═══════════════════════════════════════════════
   ANIMATED COUNTER
═══════════════════════════════════════════════ */
function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(value);
    if (isNaN(num)) { setDisplay(value); return; }

    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(Math.floor(eased * num).toString());
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      <span className="text-[#38c5e0]">{suffix}</span>
    </span>
  );
}

/* ═══════════════════════════════════════════════
   TIMELINE ITEM
═══════════════════════════════════════════════ */
function TimelineItem({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-5 group"
    >
      {/* Connector dot + line */}
      <div className="flex flex-col items-center relative z-10">
        <motion.div
          animate={inView && milestone.isCurrent ? {
            boxShadow: [
              "0 0 0px rgba(56,197,224,0.2)",
              "0 0 20px rgba(56,197,224,0.5)",
              "0 0 0px rgba(56,197,224,0.2)",
            ],
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
          style={{
            background: milestone.isCurrent ? "rgba(56,197,224,0.12)" : "rgba(255,255,255,0.05)",
            border: `1.5px solid ${milestone.isCurrent ? "rgba(56,197,224,0.5)" : "rgba(255,255,255,0.12)"}`,
          }}
        >
          {milestone.icon}
        </motion.div>
        {index < milestones.length - 1 && (
          <div
            className="w-px flex-1 mt-2"
            style={{
              background: "linear-gradient(to bottom, rgba(56,197,224,0.25), rgba(56,197,224,0.05))",
            }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -3, scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="flex-1 mb-8 p-6 rounded-2xl backdrop-blur-sm cursor-default relative overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Hover glow stripe */}
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "linear-gradient(90deg, transparent, #38c5e0, transparent)" }}
        />

        {/* Year badge */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {milestone.year}
          </span>
          <span className="text-[10px] text-[#78d4e8]/50 font-medium tracking-widest uppercase">
            — {milestone.label}
          </span>
          {milestone.isCurrent && (
            <span className="ml-auto inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-[#38c5e0] border border-[#38c5e0]/25 bg-[#38c5e0]/8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38c5e0] animate-pulse" />
              Active
            </span>
          )}
        </div>
        <h4 className="text-white font-semibold text-[15px] mb-2 group-hover:text-[#9ff6ff] transition-colors duration-300">
          {milestone.title}
        </h4>
        <p className="text-[#8ab8c8]/70 text-sm leading-relaxed font-light">
          {milestone.desc}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN ABOUT US COMPONENT
═══════════════════════════════════════════════ */
export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });
  const quoteRef = useRef(null);
  const quoteInView = useInView(quoteRef, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#052626] via-[#071A1A] to-[#0A2E2E] py-32"
    >
      {/* ── Ambient background ── */}
      <FloatingParticles />
      <div className="pointer-events-none absolute -top-40 left-1/3 w-[600px] h-[600px] rounded-full bg-[#38c5e0]/[0.04] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full bg-[#0ea5c9]/[0.04] blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ═══════════ SECTION HEADER ═══════════ */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: -30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={headingInView ? { opacity: 1, letterSpacing: "0.35em" } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs md:text-sm font-semibold uppercase text-[#78d4e8]/70 mb-5"
          >
            Our Journey Since 2009
          </motion.p>

          <h2
            className="font-bold leading-tight mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              background: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            About Techmak Technology Ltd.
          </h2>

          <p className="text-[#8ab8c8] max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Established by visionary entrepreneur Mr. A. Azam Tusher, Techmak began as a
            power system manufacturer driven by a singular mission — technology should
            protect what matters. Over 17 years, that conviction transformed us into
            Bangladesh&apos;s most trusted security and ICT solutions integrator.
          </p>

          <div
            className="mx-auto mt-8 rounded-full"
            style={{
              width: "100px",
              height: "3px",
              background: "linear-gradient(90deg, #ffffff, #0ea5c9)",
            }}
          />
        </motion.div>

        {/* ═══════════ TWO-COLUMN: STORY + TIMELINE ═══════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* ── LEFT: Our Story ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{
                  background: gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Story
              </h3>

              <div className="space-y-5 text-[#8ab8c8] text-[15px] leading-relaxed font-light">
                <p>
                  In <strong className="text-white font-medium">2009</strong>, when Bangladesh&apos;s
                  security infrastructure was still in its infancy, Mr. A. Azam Tusher saw an
                  opportunity to build something different — a technology company that didn&apos;t
                  just sell products, but engineered{" "}
                  <span className="text-[#9ff6ff]">complete, trustworthy systems</span>.
                </p>
                <p>
                  What started as a power systems manufacturer quickly evolved through strategic
                  partnerships with{" "}
                  <strong className="text-white font-medium">Neo Technology</strong> (2016) and{" "}
                  <strong className="text-white font-medium">Faith International</strong> (2018),
                  bringing world-class security products and international standards to Bangladesh.
                </p>
                <p>
                  Today, Techmak serves <strong className="text-white font-medium">500+ clients</strong>{" "}
                  across government, banking, education, healthcare, and corporate sectors — with
                  certified partnerships spanning{" "}
                  <strong className="text-white font-medium">30+ global brands</strong> including
                  Hikvision, Dahua, ZKTeco, Cisco, and Sensormatic.
                </p>
              </div>
            </motion.div>

            {/* Founder card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="mt-10 p-6 rounded-2xl backdrop-blur-sm relative overflow-hidden group cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(56,197,224,0.15)",
              }}
            >
              {/* Left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl" style={{ background: "linear-gradient(to bottom, #38c5e0, #0ea5c9)" }} />
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: "inset 0 0 40px rgba(56,197,224,0.06)" }} />

              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(56,197,224,0.1)",
                    border: "1.5px solid rgba(56,197,224,0.3)",
                  }}
                >
                  <span
                    className="text-lg font-bold"
                    style={{
                      background: gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    AT
                  </span>
                </div>
                <div>
                  <a
                    href="https://tusher.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold text-[15px] hover:text-[#9ff6ff] transition-colors duration-300 block"
                  >
                    Mr. A. Azam Tusher
                  </a>
                  <p className="text-[#78d4e8]/60 text-xs font-medium tracking-wider uppercase mt-0.5">
                    Founder &amp; CEO — Techmak Technology Ltd.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              ref={quoteRef}
              initial={{ opacity: 0, x: -20 }}
              animate={quoteInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 pl-6 relative"
              style={{
                borderLeft: "2px solid rgba(56,197,224,0.3)",
              }}
            >
              <p className="text-[#8ab8c8]/80 text-base italic leading-relaxed font-light">
                &ldquo;We didn&apos;t just want to sell technology — we wanted to build
                systems that{" "}
                <span className="text-[#9ff6ff] not-italic font-medium">
                  people could trust with their lives and livelihoods.
                </span>
                &rdquo;
              </p>
            </motion.blockquote>
          </div>

          {/* ── RIGHT: Timeline ── */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-10"
            >
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#78d4e8]/60">
                Company Milestones
              </p>
              <span className="flex-1 h-px bg-white/[0.06]" />
            </motion.div>

            <div className="relative">
              {milestones.map((m, i) => (
                <TimelineItem key={i} milestone={m} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ STATS BAR ═══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-32"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="flex flex-col items-center gap-3 p-7 rounded-2xl backdrop-blur-sm cursor-default group"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "border-color 0.4s, background 0.4s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(56,197,224,0.35)";
                el.style.background = "rgba(56,197,224,0.06)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-1" style={{ background: "rgba(56,197,224,0.08)", border: "1px solid rgba(56,197,224,0.15)" }}>{s.icon}</div>
              <span
                className="text-4xl md:text-5xl font-extrabold"
                style={{
                  background: gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-[#8ab8c8] text-xs font-medium tracking-wider uppercase text-center">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ═══════════ CORE VALUES ═══════════ */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{
                background: gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              What Drives Us
            </h3>
            <p className="text-[#8ab8c8]/70 text-sm max-w-2xl mx-auto">
              Our core values shape every decision, every system we deploy, and every
              relationship we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group p-7 rounded-2xl backdrop-blur-sm cursor-default relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "border-color 0.4s, background 0.4s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(56,197,224,0.35)";
                  el.style.background = "rgba(56,197,224,0.05)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                {/* Top glow line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(90deg, transparent, #38c5e0, transparent)" }}
                />
                <div className="mb-5 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(56,197,224,0.08)", border: "1px solid rgba(56,197,224,0.15)" }}>
                  {v.icon}
                </div>
                <h4 className="text-white font-semibold text-[15px] mb-2 group-hover:text-[#9ff6ff] transition-colors duration-300">
                  {v.title}
                </h4>
                <p className="text-[#8ab8c8]/70 text-sm leading-relaxed font-light">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════════ MISSION & VISION ═══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Mission */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="relative p-8 rounded-2xl backdrop-blur-sm overflow-hidden group cursor-default"
            style={{
              background: "rgba(56,197,224,0.04)",
              border: "1px solid rgba(56,197,224,0.15)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, #38c5e0, transparent)" }} />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(56,197,224,0.12)", border: "1px solid rgba(56,197,224,0.2)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <p className="text-[#78d4e8] text-xs font-semibold uppercase tracking-[0.25em]">
                Our Mission
              </p>
            </div>
            <p className="text-white/80 text-sm leading-relaxed font-light">
              To provide industry-leading design, technology, and customer support for
              long-term, reliable perimeter detection and industrial safety solutions
              across Bangladesh — because every space deserves protection you can trust.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            className="relative p-8 rounded-2xl backdrop-blur-sm overflow-hidden group cursor-default"
            style={{
              background: "rgba(14,165,201,0.04)",
              border: "1px solid rgba(14,165,201,0.15)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, transparent, #0ea5c9)" }} />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(14,165,201,0.12)", border: "1px solid rgba(14,165,201,0.2)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5c9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <p className="text-[#78d4e8] text-xs font-semibold uppercase tracking-[0.25em]">
                Our Vision
              </p>
            </div>
            <p className="text-white/80 text-sm leading-relaxed font-light">
              To be the leading Industrial Security and Automation Solution Company in
              Bangladesh, driven by quality, innovation, and unmatched service excellence
              — setting the benchmark for a safer, smarter nation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
