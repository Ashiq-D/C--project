"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

import { Shield, Lock, Building2, Flame, Cctv, Eye, KeyRound, Cpu, Briefcase, ThermometerSnowflake } from "lucide-react";

/* ── Technology Partners data ── */
const partners = [
  {
    name: "Sensormatic",
    category: "EAS & Loss Prevention",
    icon: Shield,
    color: "#e63946",
    bg: "rgba(230,57,70,0.12)",
    border: "rgba(230,57,70,0.35)",
    description: "Authorized partner for retail loss prevention",
  },
  {
    name: "Checkpoint Systems",
    category: "Retail Security",
    icon: Lock,
    color: "#2196F3",
    bg: "rgba(33,150,243,0.12)",
    border: "rgba(33,150,243,0.35)",
    description: "Advanced EAS tagging & merchandise protection",
  },
  {
    name: "Johnson Controls",
    category: "Building Automation",
    icon: Building2,
    color: "#ff6b35",
    bg: "rgba(255,107,53,0.12)",
    border: "rgba(255,107,53,0.35)",
    description: "Smart building & HVAC automation systems",
  },
  {
    name: "Honeywell",
    category: "Industrial Safety",
    icon: Flame,
    color: "#e74c3c",
    bg: "rgba(231,76,60,0.12)",
    border: "rgba(231,76,60,0.35)",
    description: "Fire detection & industrial safety solutions",
  },
  {
    name: "Axis Communications",
    category: "IP Surveillance",
    icon: Cctv,
    color: "#009688",
    bg: "rgba(0,150,136,0.12)",
    border: "rgba(0,150,136,0.35)",
    description: "Network cameras & video surveillance",
  },
  {
    name: "Hikvision",
    category: "CCTV & AI",
    icon: Eye,
    color: "#c0392b",
    bg: "rgba(192,57,43,0.12)",
    border: "rgba(192,57,43,0.35)",
    description: "AI-powered video security & analytics",
  },
  {
    name: "Bosch Security",
    category: "Integrated Solutions",
    icon: KeyRound,
    color: "#e74c3c",
    bg: "rgba(231,76,60,0.12)",
    border: "rgba(231,76,60,0.35)",
    description: "Access control & intrusion detection",
  },
  {
    name: "Neo Technology",
    category: "Technology Partner",
    icon: Cpu,
    color: "#38c5e0",
    bg: "rgba(56,197,224,0.12)",
    border: "rgba(56,197,224,0.35)",
    description: "Strategic partner since 2016",
  },
  {
    name: "Faith International",
    category: "Business Partner",
    icon: Briefcase,
    color: "#9b59b6",
    bg: "rgba(155,89,182,0.12)",
    border: "rgba(155,89,182,0.35)",
    description: "Strategic collaboration since 2018",
  },
  {
    name: "Omnia",
    category: "Smart HVAC",
    icon: ThermometerSnowflake,
    color: "#27ae60",
    bg: "rgba(39,174,96,0.12)",
    border: "rgba(39,174,96,0.35)",
    description: "Smart HVAC & automation board brand",
  },
];

interface PartnerCardProps {
  partner: typeof partners[0];
  active: boolean;
  onClick: () => void;
}

function PartnerCard({ partner, active, onClick }: PartnerCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.04, y: -4 }}
      whileTap={{ scale: 0.97 }}
      className="relative flex-shrink-0 w-52 cursor-pointer rounded-2xl p-5 transition-all duration-500 select-none"
      style={{
        background: active ? partner.bg : "rgba(255,255,255,0.03)",
        border: `1.5px solid ${active ? partner.border : "rgba(255,255,255,0.08)"}`,
        boxShadow: active ? `0 0 30px ${partner.color}25` : "none",
      }}
    >
      {/* Logo badge */}
      <div
        className="w-12 h-12 rounded-full mb-4 flex items-center justify-center backdrop-blur-md"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          color: partner.color,
          boxShadow: `0 4px 20px ${partner.color}20`,
        }}
      >
        <partner.icon size={22} strokeWidth={2} />
      </div>

      <p className="font-semibold text-white text-sm mb-1 leading-tight">{partner.name}</p>
      <p
        className="text-xs font-medium mb-2"
        style={{ color: partner.color }}
      >
        {partner.category}
      </p>
      <p className="text-[#8ab8c8]/70 text-xs leading-relaxed">{partner.description}</p>

      {active && (
        <motion.div
          layoutId="activePartnerIndicator"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full"
          style={{ background: partner.color }}
        />
      )}
    </motion.div>
  );
}

export default function TechPartners() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* Auto-advance */
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % partners.length);
    }, 2800);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  /* Scroll track to keep active card centred */
  useEffect(() => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll<HTMLElement>(".partner-card");
    const card = cards[activeIndex];
    if (!card) return;
    const containerWidth = trackRef.current.offsetWidth;
    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;
    trackRef.current.scrollTo({
      left: cardLeft - containerWidth / 2 + cardWidth / 2,
      behavior: "smooth",
    });
  }, [activeIndex]);

  const activePartner = partners[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden z-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Decorative glows */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[140px] rounded-full opacity-30 transition-colors duration-1000"
        style={{ background: activePartner.color }}
      />

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto backdrop-blur-md bg-[#052626]/40 rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl"
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-[#78d4e8]/70 mb-4">
            Globally Trusted Brands
          </p>
          <h2
            className="font-bold leading-tight mb-5"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Technology Partners
          </h2>
          <p className="text-[#8ab8c8] max-w-2xl mx-auto text-base font-light">
            We are authorized dealers and integration partners with the world's leading
            security and automation brands — bringing global-grade solutions to Bangladesh.
          </p>
          <div
            className="mx-auto mt-6 rounded-full"
            style={{ width: "100px", height: "3px", backgroundImage: "linear-gradient(90deg, #ffffff, #0ea5c9)" }}
          />
        </motion.div>

        {/* ── Active partner spotlight ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 mx-auto max-w-lg"
        >
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl p-8 text-center backdrop-blur-md"
            style={{
              background: activePartner.bg,
              border: `1.5px solid ${activePartner.border}`,
              boxShadow: `0 0 60px ${activePartner.color}20`,
            }}
          >
            <div
              className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-md"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: activePartner.color,
                boxShadow: `0 8px 32px ${activePartner.color}20, inset 0 0 10px ${activePartner.color}10`,
              }}
            >
              <activePartner.icon size={36} strokeWidth={1.5} />
            </div>
            <h3 className="text-white font-bold text-2xl mb-1">{activePartner.name}</h3>
            <p className="text-sm font-semibold mb-3" style={{ color: activePartner.color }}>
              {activePartner.category}
            </p>
            <p className="text-[#8ab8c8]/80 text-sm leading-relaxed">{activePartner.description}</p>
          </motion.div>
        </motion.div>

        {/* ── Sliding carousel ── */}
        <div className="relative mt-4">
          {/* Scrollable track */}
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide py-2 px-10"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
            }}
          >
            {partners.map((partner, i) => (
              <div key={partner.name} className="partner-card">
                <PartnerCard
                  partner={partner}
                  active={i === activeIndex}
                  onClick={() => {
                    setActiveIndex(i);
                    setPaused(true);
                    setTimeout(() => setPaused(false), 5000);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex justify-center gap-2 mt-8">
          {partners.map((p, i) => (
            <button
              key={p.name}
              onClick={() => {
                setActiveIndex(i);
                setPaused(true);
                setTimeout(() => setPaused(false), 5000);
              }}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === activeIndex ? "24px" : "8px",
                height: "8px",
                background: i === activeIndex ? activePartner.color : "rgba(255,255,255,0.2)",
              }}
              aria-label={`Go to partner ${p.name}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
