"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Zap, ShieldAlert, Briefcase, Globe, PenTool, ShoppingBag, ChevronUp, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const companies = [
  {
    name: "Techmak Technology Ltd.",
    description: "Technology, security systems, software, automation.",
    icon: Cpu,
    colSpan: "md:col-span-2",
    role: "FLAGSHIP COMPANY",
    about: "The leading provider of advanced technological systems and integrated solutions tailored for high-security and mission-critical environments.",
    capabilities: ["CCTV & IP Surveillance Systems", "Access Control & Time Attendance", "Building & Industrial Automation", "Networking & Communication Systems"],
    link: "https://techmakai.com"
  },
  {
    name: "Techmak Power & Energy",
    description: "Renewable energy, electrical engineering, power infrastructure.",
    icon: Zap,
    colSpan: "md:col-span-1",
    role: "ENERGY DIVISION",
    about: "Pioneering sustainable power solutions and large-scale electrical engineering projects to drive national infrastructure and green energy transitions.",
    capabilities: ["Solar & Renewable Energy Systems", "Substation & Transmission", "Industrial Power Setup", "Energy Consulting & Audit"],
    link: "#"
  },
  {
    name: "MSN Consortium Ltd.",
    description: "Government procurement, defense supply, strategic projects.",
    icon: ShieldAlert,
    colSpan: "md:col-span-1",
    role: "DEFENSE & GOVERNMENT SECTOR",
    about: "Strategic partner for government procurement and defense supply, ensuring strict compliance, security, and reliability in national projects.",
    capabilities: ["Defense Equipment Supply", "Government Tenders", "Strategic Procurement", "Secure Logistics & Operations"],
    link: "#"
  },
  {
    name: "Cindora Unified Solutions",
    description: "Business solutions, digital transformation, consulting.",
    icon: Briefcase,
    colSpan: "md:col-span-2",
    role: "CONSULTING & BUSINESS SOLUTIONS",
    about: "A dynamic consultancy focused on digital transformation, process optimization, and providing enterprise-grade business solutions.",
    capabilities: ["Digital Transformation Strategy", "ERP & Business Automation", "Corporate IT Consulting", "Cloud Infrastructure"],
    link: "#"
  },
  {
    name: "QCOM Corporation",
    description: "Trading, procurement, international business support.",
    icon: Globe,
    colSpan: "md:col-span-1",
    role: "TRADING & GLOBAL SOURCING",
    about: "Facilitating international trade and specialized procurement, acting as a crucial bridge between global manufacturers and local demands.",
    capabilities: ["International Trade", "Specialized Procurement", "Supply Chain Management", "Import & Export Operations"],
    link: "#"
  },
  {
    name: "SSTAF",
    description: "Steel fabrication, industrial manufacturing, engineering works.",
    icon: PenTool,
    colSpan: "md:col-span-1",
    role: "MANUFACTURING & FABRICATION",
    about: "Delivering robust steel fabrication, industrial manufacturing, and comprehensive engineering works tailored for heavy industries.",
    capabilities: ["Heavy Steel Fabrication", "Industrial Manufacturing", "Structural Engineering", "Custom Metal Works"],
    link: "#"
  },
  {
    name: "TrimEdge",
    description: "Global sourcing, apparel, merchandising, supply chain.",
    icon: ShoppingBag,
    colSpan: "md:col-span-1",
    role: "APPAREL & MERCHANDISING",
    about: "A premier global sourcing hub for apparel and merchandising, ensuring absolute quality control and supply chain excellence.",
    capabilities: ["Apparel Sourcing", "Quality Control & Assurance", "Merchandising Solutions", "Global Supply Chain Management"],
    link: "#"
  }
];

export default function GroupCompanies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isMdScreen, setIsMdScreen] = useState(false);

  // Track screen size to conditionally apply row-hiding (only on md+ where grid is 3-col)
  useEffect(() => {
    const checkWidth = () => setIsMdScreen(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.company-card');
      
      gsap.fromTo(
        cards,
        { 
          y: 100,
          opacity: 0,
          rotateX: 10
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  // Re-trigger scroll triggers when expanding to ensure smooth recalculation for OTHER sections
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [expandedIndex]);

  // Auto-scroll to center the expanded card so it doesn't get cut off
  useEffect(() => {
    if (expandedIndex !== null && cardRefs.current[expandedIndex]) {
      setTimeout(() => {
        cardRefs.current[expandedIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 150); // slight delay to allow layout animation to start expanding
    }
  }, [expandedIndex]);

  // Helper to determine which row an item is in based on the current static layout
  const getRow = (index: number) => {
    if (index === 0 || index === 1) return 1;
    if (index === 2 || index === 3) return 2;
    return 3;
  };

  return (
    <section className="relative pt-4 sm:pt-8 pb-8 px-4 sm:px-6 z-10 -mt-32 sm:-mt-40 md:-mt-64 lg:-mt-80" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {companies.map((company, index) => {
              const Icon = company.icon;
              const isExpanded = expandedIndex === index;
              const isSameRowAsExpanded = expandedIndex !== null && getRow(expandedIndex) === getRow(index);
              const isHidden = isMdScreen && isSameRowAsExpanded && !isExpanded;
              const activeColSpan = isExpanded ? "md:col-span-3" : company.colSpan;

              if (isHidden) return null; // Remove from DOM to let expanded card take full width smoothly

              return (
                <motion.div
                  ref={(el: HTMLDivElement | null) => {
                    cardRefs.current[index] = el;
                  }}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                  key={company.name}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className={`company-card glass-card group cursor-pointer hover:shadow-[0_20px_40px_rgba(173,216,230,0.15)] ${activeColSpan} flex flex-col relative border ${isExpanded ? 'border-techmak-champagne/30 p-4 sm:p-6 md:p-8' : 'border-white/5 p-4 sm:p-5'} overflow-hidden`}
                >
                  <motion.div layout="position" className="w-full">
                    {!isExpanded ? (
                      <div className="flex items-center gap-3 sm:gap-4 relative w-full">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-techmak-champagne/10 to-transparent flex items-center justify-center border border-white/5 flex-shrink-0 group-hover:border-techmak-champagne/30 transition-colors duration-300">
                          <Icon className="text-techmak-champagne/70 group-hover:text-techmak-champagne transition-colors duration-300" size={20} />
                        </div>
                        <div className="flex flex-col pr-8">
                          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white/90 group-hover:text-techmak-champagne transition-colors duration-300 leading-tight">
                            {company.name}
                          </h3>
                          <p className="text-white/50 text-xs md:text-sm font-light mt-0.5 line-clamp-1">
                            {company.description}
                          </p>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-7 h-7 rounded-full border border-white/5 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center group-hover:border-techmak-champagne/40 group-hover:bg-techmak-champagne/10 transition-all duration-300 overflow-hidden">
                          <ArrowRight className="text-white/40 group-hover:text-techmak-champagne transition-all duration-500 group-hover:rotate-90" size={14} />
                        </div>
                      </div>
                    ) : (
                      // --- EXPANDED VIEW (Compact Design) ---
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="flex flex-col gap-5"
                      >
                        {/* Header Row */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-5">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-techmak-champagne/20 to-techmak-bronze/10 flex items-center justify-center border border-white/10 flex-shrink-0 shadow-[0_0_15px_rgba(232,219,206,0.1)]">
                              <Icon className="text-techmak-champagne" size={24} />
                            </div>
                            <div>
                              <h3 className="text-xl md:text-2xl font-semibold text-techmak-champagne mb-0.5">
                                {company.name}
                              </h3>
                              <p className="text-white/40 text-xs tracking-[0.1em] font-medium uppercase">
                                {company.role}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end mt-2 md:mt-0">
                            <a 
                              href={company.link} 
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()} 
                              className="group px-5 py-2.5 rounded-full flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-2xl hover:bg-white/20 transition-all duration-300 shadow-[0_4_15px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
                            >
                              <span className="text-white text-xs font-medium tracking-wider">VISIT WEBSITE</span>
                            </a>
                            <button className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                              <ChevronUp className="text-techmak-champagne" size={18} />
                            </button>
                          </div>
                        </div>

                        {/* Details Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 pt-1">
                          {/* About Column */}
                          <div>
                            <h4 className="text-techmak-bronze text-xs font-semibold tracking-wider mb-3 uppercase">About</h4>
                            <p className="text-white/80 leading-relaxed font-light text-sm md:text-base">
                              {company.about}
                            </p>
                          </div>

                          {/* Capabilities Column */}
                          <div>
                            <h4 className="text-techmak-bronze text-xs font-semibold tracking-wider mb-3 uppercase">Core Capabilities</h4>
                            <ul className="flex flex-col gap-2.5">
                              {company.capabilities.map((cap, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <span className="w-1.5 h-1.5 mt-1.5 rounded-sm bg-techmak-champagne rotate-45 flex-shrink-0 shadow-[0_0_8px_rgba(232,219,206,0.5)]" />
                                  <span className="text-white/80 font-light text-sm md:text-base">{cap}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
