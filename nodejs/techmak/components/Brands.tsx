"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

/* ═══════════════════════════════════════════════
   DESIGN TOKENS — matching project palette
═══════════════════════════════════════════════ */
const gradient = "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)";

/* ── Our Brands Data from PDF ── */
const companies = [
  {
    name: "Techmak Technology Ltd.",
    category: "Security & ICT Solutions",
    role: "Flagship Company",
    desc: "The leading provider of advanced technological systems and integrated solutions tailored for high-security and mission-critical environments.",
    capabilities: [
      "CCTV & IP Surveillance Systems",
      "Access Control & Time Attendance",
      "Building & Industrial Automation",
      "Networking & Communication Systems"
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    ),
  },
  {
    name: "Techmak Power & Energy Ltd.",
    category: "Power Infrastructure",
    role: "Energy Management",
    desc: "Focuses on delivering efficient, scalable, and sustainable power solutions for industrial and commercial clients, supporting energy resilience.",
    capabilities: [
      "Industrial Power Management Systems",
      "Energy Storage Systems (ESS)",
      "Load Management & Optimization",
      "Power Infrastructure Support"
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: "SSTAF",
    category: "Industrial Fabrication",
    role: "Manufacturing",
    desc: "Shopno SS & Thai Aluminum Fabricators Ltd. providing high-quality steel, aluminum, and custom metal solutions equipped with modern machinery.",
    capabilities: [
      "Industrial Garments Furniture",
      "Custom Metal & Aluminum Fabrication",
      "Heavy and Light Steel Structures",
      "Warehouse & Factory Structural Works"
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M17 18h1" />
        <path d="M12 18h1" />
        <path d="M7 18h1" />
      </svg>
    ),
  },
  {
    name: "MSN Consortium Ltd.",
    category: "Defense Supply",
    role: "Government Contracting",
    desc: "Delivering specialized equipment and mission-critical solutions to security forces and public institutions with a strong compliance-driven approach.",
    capabilities: [
      "Military & Tactical PPE",
      "Professional Walkie-Talkies",
      "Defense Equipment Supply",
      "Emergency Response Support"
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Cindora Motion",
    category: "Media & Production",
    role: "Creative Agency",
    desc: "The creative and media arm of Techmak Group, offering professional visual communication services for industrial, corporate, and commercial clients.",
    capabilities: [
      "Industrial & Corporate Media Coverage",
      "Professional Video Advertisement",
      "Brand Storytelling Content",
      "Visual Communication Services"
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    ),
  },
  {
    name: "TrimEdge Sourcing",
    category: "Global Sourcing",
    role: "Buying House",
    desc: "Professional buying house and sourcing hub connecting global buyers with reliable manufacturers in Bangladesh, focusing on transparency and quality.",
    capabilities: [
      "Garments & Accessories Sourcing",
      "Supplier ID & Quality Control",
      "Production Coordination",
      "Export-Oriented Services"
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38c5e0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  }
];

/* ═══════════════════════════════════════════════
   FLOATING PARTICLES
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

    for (let i = 0; i < 40; i++) {
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

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 197, 224, ${0.05 * (1 - dist / 120)})`;
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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.5 }} />;
}

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════ */
export default function Brands() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-32 min-h-screen z-10">
      {/* ── Ambient background ── */}
      <FloatingParticles />
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-[#38c5e0]/[0.05] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#0ea5c9]/[0.04] blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ═══════════ HEADER ═══════════ */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: -30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24 max-w-4xl mx-auto backdrop-blur-md bg-[#052626]/40 rounded-3xl p-8 md:p-14 border border-white/5 shadow-2xl"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={headingInView ? { opacity: 1, letterSpacing: "0.35em" } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs md:text-sm font-semibold uppercase text-[#78d4e8]/70 mb-5"
          >
            Our Subsidiaries
          </motion.p>

          <h2
            className="font-bold leading-tight mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              backgroundImage: gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Techmak Group
          </h2>

          <p className="text-[#8ab8c8] max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed">
            A diversified Bangladeshi conglomerate delivering reliable, future-ready solutions across technology, security, power, fabrication, defense supply, media, and global sourcing.
          </p>

          <div
            className="mx-auto mt-8 rounded-full"
            style={{
              width: "100px",
              height: "3px",
              backgroundImage: "linear-gradient(90deg, #ffffff, #0ea5c9)",
            }}
          />
        </motion.div>

        {/* ═══════════ BRANDS GRID ═══════════ */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {companies.map((company, i) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-8 rounded-2xl backdrop-blur-sm cursor-default relative overflow-hidden flex flex-col h-full"
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
              {/* Hover glow line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: "linear-gradient(90deg, transparent, #38c5e0, transparent)" }}
              />

               {/* Badge & Icon */}
               <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(56,197,224,0.1)", border: "1px solid rgba(56,197,224,0.2)" }}>
                  {company.icon}
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-[#38c5e0] border border-[#38c5e0]/25 bg-[#38c5e0]/10">
                  {company.category}
                </div>
              </div>

              {/* Company Info */}
              <div className="flex-1">
                <p className="text-[#78d4e8]/60 text-xs font-semibold tracking-widest uppercase mb-2">
                  {company.role}
                </p>
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#9ff6ff] transition-colors duration-300">
                  {company.name}
                </h3>
                <p className="text-[#8ab8c8]/80 text-[13px] leading-relaxed font-light mb-6">
                  {company.desc}
                </p>
              </div>

              {/* Core Capabilities List */}
              <div className="pt-5 mt-auto border-t border-white/10">
                <p className="text-white text-xs font-semibold mb-3">Core Capabilities:</p>
                <ul className="space-y-2">
                  {company.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#8ab8c8] text-xs">
                      <span className="w-1 h-3 flex items-center justify-center shrink-0 pt-0.5">
                        <svg width="6" height="6" viewBox="0 0 24 24" fill="#38c5e0"><path d="M12 2l10 10-10 10L2 12z"/></svg>
                      </span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
