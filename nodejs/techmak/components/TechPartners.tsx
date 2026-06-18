"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

import { Shield, Lock, Building2, Flame, Cctv, Eye, KeyRound, Cpu } from "lucide-react";

/* ── Technology Partners data ── */
const partners = [
  {
    name: "Sensormatic",
    logo: "/images/sensormatic.png",
    category: "Retail Intelligence & Loss Prevention",
    icon: Shield,
    color: "#e63946",
    bg: "rgba(230,57,70,0.12)",
    border: "rgba(230,57,70,0.35)",
    description: "Global leader in Electronic Article Surveillance (EAS), inventory visibility, and retail loss prevention technologies.",
  },
  {
    name: "Hikvision",
    logo: "/images/Hik.png",
    category: "AI-Powered Video Surveillance",
    icon: Eye,
    color: "#c0392b",
    bg: "rgba(192,57,43,0.12)",
    border: "rgba(192,57,43,0.35)",
    description: "Advanced intelligent surveillance solutions featuring AI analytics, perimeter protection, facial recognition, and smart security management.",
  },
  {
    name: "ZKTeco",
    logo: "/images/Zk.png",
    category: "Access Control & Biometrics",
    icon: KeyRound,
    color: "#27ae60",
    bg: "rgba(39,174,96,0.12)",
    border: "rgba(39,174,96,0.35)",
    description: "Industry-leading biometric authentication, access control, attendance management, and identity verification technologies.",
  },
  {
    name: "Honeywell",
    logo: "/images/Honey.png",
    category: "Building Automation & Security",
    icon: Flame,
    color: "#ff6b35",
    bg: "rgba(255,107,53,0.12)",
    border: "rgba(255,107,53,0.35)",
    description: "Comprehensive solutions for smart buildings, fire safety, security management, and operational efficiency.",
  },
  {
    name: "Bosch",
    logo: "/images/Bosch.png",
    category: "Enterprise Security & Public Safety",
    icon: Lock,
    color: "#2980b9",
    bg: "rgba(41,128,185,0.12)",
    border: "rgba(41,128,185,0.35)",
    description: "Innovative security, communication, and life-safety technologies designed for mission-critical environments.",
  },
  {
    name: "Johnson Controls",
    logo: "/images/john.png",
    category: "Smart Buildings & BMS",
    icon: Building2,
    color: "#3498db",
    bg: "rgba(52,152,219,0.12)",
    border: "rgba(52,152,219,0.35)",
    description: "Integrated building technologies that enhance energy efficiency, sustainability, safety, and occupant comfort.",
  },
  {
    name: "Motorola Solutions",
    logo: "/images/motorola.png",
    category: "Mission-Critical Communications",
    icon: Cctv,
    color: "#009688",
    bg: "rgba(0,150,136,0.12)",
    border: "rgba(0,150,136,0.35)",
    description: "Reliable communication systems, digital radio networks, emergency response technologies, and operational intelligence platforms.",
  },
  {
    name: "Obiz",
    logo: "/images/Obiz.png",
    category: "Critical Infrastructure Solutions",
    icon: Cpu,
    color: "#9b59b6",
    bg: "rgba(155,89,182,0.12)",
    border: "rgba(155,89,182,0.35)",
    description: "Australian technology partner specializing in integrated security solutions, surveillance systems, screening technologies, and critical infrastructure protection.",
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
      className="relative flex-shrink-0 w-60 cursor-pointer rounded-2xl p-5 transition-all duration-500 select-none h-full flex flex-col"
      style={{
        background: active ? partner.bg : "rgba(255,255,255,0.03)",
        border: `1.5px solid ${active ? partner.border : "rgba(255,255,255,0.08)"}`,
        boxShadow: active ? `0 0 30px ${partner.color}25` : "none",
      }}
    >
      {partner.logo ? (
        <div
          className="w-16 h-16 rounded-full mb-4 flex items-center justify-center shrink-0 backdrop-blur-md p-1"
          style={{
            background: "rgba(14, 165, 201, 0.15)",
            border: "1px solid rgba(14, 165, 201, 0.4)",
          }}
        >
          <div 
            className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center"
            style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)", transform: "translateZ(0)" }}
          >
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className={`w-full h-full object-contain transition-all duration-300 ${
                active 
                  ? `opacity-100 ${["Sensormatic", "Johnson Controls"].includes(partner.name) ? "scale-90" : "scale-[1.3]"}` 
                  : `opacity-80 grayscale ${["Sensormatic", "Johnson Controls"].includes(partner.name) ? "scale-75" : "scale-[1.1]"}`
              }`} 
            />
          </div>
        </div>
      ) : (
        <div
          className="w-12 h-12 rounded-full mb-4 flex items-center justify-center backdrop-blur-md shrink-0"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: partner.color,
            boxShadow: `0 4px 20px ${partner.color}20`,
          }}
        >
          <partner.icon size={22} strokeWidth={2} />
        </div>
      )}

      <p className="font-semibold text-white text-sm mb-1 leading-tight shrink-0">{partner.name}</p>
      <p
        className="text-xs font-medium mb-3 shrink-0"
        style={{ color: partner.color }}
      >
        {partner.category}
      </p>
      <p className="text-[#8ab8c8]/70 text-xs leading-relaxed flex-grow pb-4">{partner.description}</p>

      {active && (
        <motion.div
          layoutId="activePartnerIndicator"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full shrink-0"
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
      className="relative pt-0 pb-32 overflow-hidden z-10"
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
            className="font-bold leading-tight mb-5 tracking-tight"
            style={{
              fontSize: "clamp(1.2rem, 3.5vw, 2.5rem)",
              backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            GLOBAL TECHNOLOGY ALLIANCES
          </h2>
          <p className="text-[#8ab8c8] max-w-2xl mx-auto text-base font-light">
            Techmak Technology collaborates with globally recognized manufacturers and technology innovators to deliver world-class security, surveillance, automation, and critical infrastructure solutions across Bangladesh.
            Through our authorized partnerships and certified integration expertise, we provide clients with proven technologies backed by local engineering, deployment, and lifecycle support.
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
            {activePartner.logo ? (
              <div
                className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-md p-1"
                style={{
                  background: "rgba(14, 165, 201, 0.15)",
                  border: "1px solid rgba(14, 165, 201, 0.4)",
                  boxShadow: `0 0 40px rgba(14, 165, 201, 0.3)`,
                }}
              >
                <div 
                  className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center"
                  style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)", transform: "translateZ(0)" }}
                >
                  <img 
                    src={activePartner.logo} 
                    alt={activePartner.name} 
                    className={`w-full h-full object-contain ${["Sensormatic", "Johnson Controls"].includes(activePartner.name) ? "scale-90" : "scale-[1.4]"}`} 
                  />
                </div>
              </div>
            ) : (
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
            )}
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
              <div key={partner.name} className="partner-card flex h-full">
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
