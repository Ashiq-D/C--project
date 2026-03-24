"use client";

import { useEffect, useRef } from "react";

/* ── colour tokens (green palette matching original template) ── */
const C = {
  accent:  "#00ff9d",
  accent2: "#00c97a",
  accent3: "#007a4a",
  dark:    "#040a08",
  dark2:   "#071410",
  dark3:   "#0b1f18",
  dark4:   "#102b21",
  text:    "#e0ede8",
  muted:   "rgba(224,237,232,0.45)",
  border:  "rgba(0,255,157,0.10)",
  border2: "rgba(0,255,157,0.22)",
};

/* ── timeline data ── */
const milestones = [
  {
    year: "2009 — Founded",
    title: "Company Established",
    desc: "Mr. A. Azam Tusher founded Techmak as a power system manufacturer, laying the foundation for a technology-first company built on quality and innovation.",
    active: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="2">
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    year: "2016 — Partnership",
    title: "Neo Technology Alliance",
    desc: "Strategic partnership with Neo Technology expanded Techmak's portfolio and opened access to enterprise-grade security product lines across Bangladesh.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.accent2} strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    year: "2018 — Global Reach",
    title: "Faith International Collaboration",
    desc: "Collaboration with Faith International brought international standards and global technology partnerships, elevating Techmak to serve government and enterprise clients at scale.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.accent2} strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    year: "2020–2023 — Scale",
    title: "Nationwide Expansion",
    desc: "Rapid expansion into CCTV, AI-powered detection, networking, and fire safety systems. Certified partnerships with Hikvision, Dahua, ZKTeco, Cisco, and 30+ global brands.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.accent2} strokeWidth="1.5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    year: "2025 — Present",
    title: "AI-Integrated Security Leader",
    desc: "Serving 500+ clients across government, banking, education, healthcare, and corporate sectors. Bangladesh's most trusted end-to-end security technology integrator.",
    active: true,
    badge: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const stats = [
  { value: "17", suffix: "+", label: "Years in business" },
  { value: "500", suffix: "+", label: "Projects deployed" },
  { value: "30", suffix: "+", label: "Global brand partners" },
  { value: "98", suffix: "%", label: "Client retention rate" },
];

/* ═══════════════════════════════════════════════ */
export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    /* reveal observer */
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("au-visible")),
      { threshold: 0.12 }
    );
    sectionRef.current.querySelectorAll(".au-reveal").forEach((el) => io.observe(el));

    /* timeline stagger */
    const items = sectionRef.current.querySelectorAll(".au-tl-item");
    const tlObs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = [...items].indexOf(e.target as Element);
            setTimeout(() => e.target.classList.add("au-visible"), idx * 120);
          }
        }),
      { threshold: 0.1 }
    );
    items.forEach((el) => tlObs.observe(el));

    return () => {
      io.disconnect();
      tlObs.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${C.dark}, ${C.dark2}, ${C.dark})`,
        zIndex: 2,
      }}
    >
      {/* subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,157,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,157,0.035) 1px,transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%,black 20%,transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 50%,black 20%,transparent 100%)",
        }}
      />

      <div className="relative z-[2] max-w-[1400px] mx-auto px-6 md:px-[60px] py-[120px]">
        {/* section label */}
        <div
          className="au-reveal flex items-center gap-3 mb-4"
          style={{
            fontFamily: "'JetBrains Mono','Outfit',monospace",
            fontSize: 10,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: C.accent,
          }}
        >
          <span style={{ display: "block", width: 24, height: 1, background: C.accent }} />
          Company Background
        </div>

        {/* ── two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-16">
          {/* LEFT */}
          <div>
            {/* heading */}
            <h2 className="au-reveal mb-8" style={{ fontFamily: "'Bebas Neue','Outfit',sans-serif", fontSize: 80, lineHeight: 0.92, letterSpacing: 2 }}>
              <span className="block" style={{ color: C.text }}>OUR</span>
              <span
                className="block"
                style={{
                  color: "transparent",
                  WebkitTextStroke: `1.5px ${C.accent}`,
                }}
              >
                STORY
              </span>
            </h2>

            {/* intro */}
            <p
              className="au-reveal mb-10"
              style={{ fontSize: 15.5, fontWeight: 300, lineHeight: 1.85, color: C.muted }}
            >
              Established in{" "}
              <b style={{ color: C.text, fontWeight: 400 }}>2009</b> by Mr. A. Azam Tusher,
              Techmak began as a power system manufacturer driven by a singular conviction.
              Technology should protect what matters. Over 17 years, that conviction evolved into
              Bangladesh&apos;s most trusted security and ICT solutions integrator.
            </p>

            {/* founder card */}
            <div
              className="au-reveal au-founder-card flex items-center gap-4 mb-10 relative overflow-hidden"
              style={{
                padding: "20px 24px",
                background: C.dark3,
                border: `1px solid ${C.border2}`,
                borderRadius: 10,
                transition: "box-shadow 0.4s ease, border-color 0.4s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = `0 0 25px rgba(0,255,157,0.25), 0 0 60px rgba(0,255,157,0.10)`;
                el.style.borderColor = "rgba(0,255,157,0.45)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "none";
                el.style.borderColor = C.border2;
              }}
            >
              {/* left accent bar */}
              <span className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: C.accent }} />
              {/* avatar */}
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: 48,
                  height: 48,
                  background: C.dark4,
                  border: `1px solid ${C.border2}`,
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: 18,
                  color: C.accent,
                }}
              >
                AT
              </div>
              <div>
                <a
                  href="https://tusher.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: C.text,
                    marginBottom: 2,
                    display: "block",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.accent; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = C.text; }}
                >
                  Mr. A. Azam Tusher
                </a>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: 10,
                    letterSpacing: 1,
                    color: C.muted,
                    textTransform: "uppercase",
                  }}
                >
                  Founder &amp; CEO — Techmak Technology Ltd.
                </div>
              </div>
            </div>

            {/* quote */}
            <blockquote
              className="au-reveal"
              style={{
                fontSize: 16,
                fontStyle: "italic",
                fontWeight: 300,
                color: C.muted,
                lineHeight: 1.75,
                paddingLeft: 20,
                borderLeft: `2px solid ${C.accent3}`,
              }}
            >
              &ldquo;We didn&apos;t just want to sell technology — we wanted to build systems that{" "}
              <span style={{ color: C.accent2, fontStyle: "normal" }}>
                people could trust with their lives and livelihoods.
              </span>
              &rdquo;
            </blockquote>
          </div>

          {/* RIGHT — timeline */}
          <div>
            {/* header */}
            <div
              className="au-reveal flex items-center gap-[10px] mb-8"
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 10,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: C.muted,
              }}
            >
              Company milestones
              <span className="flex-1 h-px" style={{ background: C.border }} />
            </div>

            {/* timeline */}
            <div className="relative">
              {/* vertical line */}
              <div
                className="absolute top-2 bottom-2"
                style={{
                  left: 19,
                  width: 1,
                  background: `linear-gradient(to bottom, ${C.accent}, ${C.accent3}, transparent)`,
                }}
              />

              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="au-tl-item flex gap-6 items-start relative mb-9"
                  style={{
                    opacity: 0,
                    transform: "translateX(20px)",
                    transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  {/* dot */}
                  <div
                    className="flex-shrink-0 rounded-full flex items-center justify-center relative z-[1]"
                    style={{
                      width: 38,
                      height: 38,
                      border: `1px solid ${m.active ? C.accent : C.border2}`,
                      background: m.active ? "rgba(0,255,157,0.08)" : C.dark2,
                      boxShadow: m.active ? `0 0 16px rgba(0,255,157,0.2)` : "none",
                      transition: "all 0.3s",
                    }}
                  >
                    {m.icon}
                  </div>

                  {/* body */}
                  <div
                    className="au-tl-body flex-1 relative group cursor-default"
                    style={{
                      background: C.dark2,
                      border: `1px solid ${C.border}`,
                      borderRadius: 10,
                      padding: "20px 24px",
                      transition: "border-color 0.3s, background 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = C.border2;
                      el.style.background = C.dark3;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = C.border;
                      el.style.background = C.dark2;
                    }}
                  >
                    {/* top gradient line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-px rounded-t-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(90deg, ${C.accent}, transparent)` }}
                    />

                    <div
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: 10,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        color: C.accent,
                        marginBottom: 6,
                      }}
                    >
                      {m.year}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: C.text, marginBottom: 6 }}>
                      {m.title}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 300, color: C.muted, lineHeight: 1.65 }}>
                      {m.desc}
                    </div>

                    {m.badge && (
                      <div
                        className="inline-flex items-center gap-[5px] mt-[10px]"
                        style={{
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: 9,
                          letterSpacing: 1.5,
                          textTransform: "uppercase",
                          color: C.accent,
                          padding: "3px 8px",
                          border: "1px solid rgba(0,255,157,0.25)",
                          borderRadius: 4,
                          background: "rgba(0,255,157,0.06)",
                        }}
                      >
                        <span
                          className="au-badge-dot"
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: C.accent,
                          }}
                        />
                        Currently Active
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── bottom stats ── */}
        <div
          className="au-reveal grid grid-cols-2 md:grid-cols-4 overflow-hidden mt-20"
          style={{
            gap: 1,
            background: C.border,
            border: `1px solid ${C.border}`,
            borderRadius: 12,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="au-stat-box relative overflow-hidden group cursor-default"
              style={{
                background: C.dark2,
                padding: "32px 28px",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = C.dark3;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = C.dark2;
              }}
            >
              {/* bottom glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${C.accent}, transparent)` }}
              />
              <div
                style={{
                  fontFamily: "'Bebas Neue',sans-serif",
                  fontSize: 52,
                  letterSpacing: 1,
                  lineHeight: 1,
                  color: C.text,
                }}
              >
                {s.value}
                <span style={{ color: C.accent }}>{s.suffix}</span>
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 9,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: C.muted,
                  marginTop: 6,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* scoped styles for reveal + blink */}
      <style jsx>{`
        .au-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .au-reveal.au-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .au-tl-item.au-visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        .au-badge-dot {
          animation: au-blink 1.5s infinite;
        }
        @keyframes au-blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
}
