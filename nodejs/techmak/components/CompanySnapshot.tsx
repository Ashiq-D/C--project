"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Variants, animate, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { Landmark, Clock, PackageCheck, Building2, Cctv, Cpu, Tag, Waypoints, Network, Flame } from "lucide-react";

/* ── Data from Techmak Technology LTD profile ── */
const stats = [
  { value: "2009", label: "Founded", icon: Landmark },
  { value: "17+", label: "Years Experience", icon: Clock },
  { value: "500+", label: "Projects Delivered", icon: PackageCheck },
  { value: "3500", label: "Sq.ft. HQ", icon: Building2 },
];

const coreServices = [
  {
    icon: Cctv,
    title: "Industrial Security & Surveillance",
    desc: "Advanced CCTV, IP cameras, perimeter detection and authorized Sensormatic surveillance systems tailored for enterprise and government environments.",
  },
  {
    icon: Cpu,
    title: "Automation Systems",
    desc: "PLC, HMI, Motor & Servo Drives expertise for precision industrial process automation in manufacturing, utilities and smart buildings.",
  },
  {
    icon: Tag,
    title: "RFID & EAS Solutions",
    desc: "Electronic Article Surveillance (EAS) and RFID-based asset tracking that dramatically reduces retail shrinkage and improves inventory accuracy.",
  },
  {
    icon: Waypoints,
    title: "Advanced Traffic Solutions",
    desc: "Smart traffic management and transportation intelligence systems engineered for Bangladesh's growing urban infrastructure.",
  },
  {
    icon: Network,
    title: "Networking & Communication",
    desc: "Structured cabling, corporate and industrial networking infrastructure designed for reliability, scalability and high throughput.",
  },
  {
    icon: Flame,
    title: "Safety & Fire Detection",
    desc: "Comprehensive industrial safety systems, fire detection and suppression solutions compliant with international standards.",
  },
];

const clientCategories = [
  {
    category: "Government / Defense / Public Organizations",
    items: [
      { name: "Bangladesh Navy", logo: "/images/bdNavy.jpg" },
      { name: "Bangladesh Army", logo: "/images/Army.jpg" },
      { name: "Bangladesh Air Force", logo: "/images/Biman.jpg" },
      { name: "Bangladesh Coast Guard", logo: "/images/coastGuard.png", scale: "scale-[1.4]" },
      { name: "Police & Law Enforcement Agencies", logo: "/images/police.jpg" },
      { name: "Bangladesh Jail", logo: "/images/bdj.png" },
    ],
  },
  {
    category: "Private Companies / Media / Brands",
    items: [
      { name: "BRAC Aarong", logo: "/images/aarong.png" },
      { name: "SUNDORA", subtitle: "BIB Sundora Pvt Ltd", logo: "/images/sundora.png", scale: "scale-[1.3]" },
      { name: "United Group", logo: "/images/united.png" },
      { name: "Bashundhara Group", logo: "/images/BasundharaCity.png" },
      { name: "Lavender Garments", logo: "/images/Lavender.png" },
      { name: "Global Fit BD Ltd.", logo: "/images/Global.png" },
      { name: "Corporate Field Ltd.", logo: "/images/Corporate.png"},
      { name: "Assure Group", logo: "/images/assure.png" },
      { name: "BTi", subtitle: "Building Technology & Ideas Ltd.", logo: "/images/Bti.png" },
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

function WordReveal({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-wrap justify-center gap-x-[0.3em] gap-y-1"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                delay: i * 0.015,
                duration: 0.4,
                ease: "easeOut",
              },
            },
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

function CounterStat({ value, label, icon: Icon }: { value: string; label: string; icon: any }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, numericValue, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (val) => {
          setDisplayValue(Math.floor(val));
        },
      });
      return controls.stop;
    }
  }, [inView, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#38c5e0]/40 hover:bg-white/10 transition-all duration-500"
    >
      <div className="text-[#38c5e0] mb-2">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <span
        className="text-4xl md:text-5xl font-extrabold"
        style={{
          backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 40%, #38c5e0 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {displayValue}{suffix}
      </span>
      <span className="text-[#8ab8c8] text-sm font-medium tracking-wide uppercase">{label}</span>
    </motion.div>
  );
}

export default function CompanySnapshot() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  // Scroll animations for cinematic feel
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="relative pt-0 pb-0 overflow-hidden z-10">
      {/* Ambient glow blobs */}
      <motion.div style={{ y: yParallaxFast }} className="pointer-events-none absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-[#38c5e0]/5 blur-[120px]" />
      <motion.div style={{ y: yParallaxSlow }} className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#0ea5c9]/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section heading ── */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: -30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ y: yParallaxSlow }}
          className="text-center mb-20 max-w-4xl mx-auto backdrop-blur-md bg-[#052626]/40 rounded-3xl p-8 md:p-14 border border-white/5 shadow-2xl"
        >
          <p className="text-[9px] md:text-sm font-semibold tracking-[0.15em] md:tracking-[0.35em] uppercase text-[#78d4e8]/70 mb-4">
            Established 2009 · Dhaka, Bangladesh
          </p>
          <h2
            className="font-bold leading-tight mb-6 whitespace-nowrap"
            style={{
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            About Techmak Technology Ltd.
          </h2>
          <div className="text-[#8ab8c8] max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed">
            <WordReveal text="Techmak Technology Ltd. is a leading technology solutions provider in Bangladesh, specializing in industrial automation, intelligent security systems, and mission-critical technology solutions. Founded in 2009 as a power systems solutions provider, the company has evolved into a trusted industry leader in RFID technologies, AI-powered surveillance, access control, and intelligent automation. We deliver comprehensive end-to-end solutions, encompassing system design, engineering, integration, deployment, training, and lifecycle support. With a strong commitment to innovation, quality, and customer success, Techmak Technology serves government agencies, defense organizations, critical infrastructure operators, and private-sector enterprises, helping them enhance security, efficiency, and operational resilience through advanced technology solutions." />
          </div>
          <div
            className="mx-auto mt-8 rounded-full"
            style={{
              width: "100px",
              height: "3px",
              backgroundImage: "linear-gradient(90deg, #ffffff, #0ea5c9)",
            }}
          />
        </motion.div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((s) => (
            <CounterStat key={s.label} {...s} />
          ))}
        </div>

        {/* ── Core Services grid ── */}
        {false && (
          <div className="mb-24">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 max-w-xl mx-auto backdrop-blur-md bg-[#052626]/40 rounded-3xl md:rounded-full p-6 md:p-8 border border-white/5 shadow-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                What We Do
              </h3>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="group p-7 rounded-2xl bg-[#052626]/40 border border-white/5 backdrop-blur-md shadow-2xl
                             hover:border-[#38c5e0]/40 hover:bg-[#38c5e0]/[0.06] transition-all duration-500 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#38c5e0] mb-5 group-hover:bg-[#38c5e0]/10 group-hover:border-[#38c5e0]/30 transition-colors duration-500 shadow-inner overflow-hidden">
                    <service.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-white font-semibold text-base mb-2 group-hover:text-[#9ff6ff] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-[#8ab8c8]/80 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ── Notable Clients ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-[#052626]/40 border border-white/5 backdrop-blur-md shadow-2xl p-10"
        >
          <div className="text-center mb-10 max-w-2xl mx-auto backdrop-blur-md bg-[#052626]/40 rounded-3xl md:rounded-full p-6 md:p-8 border border-white/5 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-6"
              style={{
                backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              Organizations We Proudly Serve
            </h3>
            <div
              className="mx-auto rounded-full"
              style={{
                width: "120px",
                height: "3px",
                backgroundImage: "linear-gradient(90deg, #ffffff, #0ea5c9)",
              }}
            />
          </div>
          <div className="flex flex-col gap-12">
            {clientCategories.map((group, groupIndex) => (
              <div key={group.category}>
                <div className="mb-8 flex flex-col items-center">
                  <h4 className="text-xl font-bold tracking-widest uppercase mb-3"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                    {group.category.split(' / ')[0]}
                  </h4>
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#38c5e0] to-transparent rounded-full" />
                </div>
                <div className="relative overflow-hidden py-4 -mx-6 px-6 sm:-mx-10 sm:px-10">
                  {/* Smooth edge fade out */}
                  <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#071A1A] to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#071A1A] to-transparent z-10 pointer-events-none" />

                  <motion.div
                    className="flex gap-4 sm:gap-6 w-max"
                    animate={{
                      x: groupIndex === 0 ? ["-50%", "0%"] : ["0%", "-50%"]
                    }}
                    transition={{
                      duration: 40,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    {[...group.items, ...group.items, ...group.items].map((client, i) => (
                      <div
                        key={`${client.name}-${i}`}
                        className="group relative flex-shrink-0 w-[300px] sm:w-[360px] min-h-[280px] rounded-[2.5rem] bg-[#052626]/40 border border-white/5 backdrop-blur-xl p-6 sm:p-8 flex flex-col items-center justify-center gap-5 text-center overflow-hidden transition-all duration-500 hover:bg-[#052626]/80 hover:border-[#38c5e0]/30 hover:shadow-[0_8px_30px_rgba(56,197,224,0.15)] cursor-default"
                      >

                        {/* Cinematic Radial Hover Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#38c5e0]/0 group-hover:bg-[#38c5e0]/15 blur-[60px] rounded-full transition-all duration-700 pointer-events-none" />

                        {/* Floating Platform Logo */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-2xl bg-gradient-to-tr from-white/5 to-white/10 flex items-center justify-center p-2.5 shadow-2xl border border-white/5 group-hover:border-[#38c5e0]/40 transition-all duration-500 z-10 group-hover:scale-110 group-hover:-rotate-3">
                          <div className="absolute inset-0 bg-black/20 rounded-2xl" /> {/* Darken layer */}
                          <div className="relative w-full h-full bg-white rounded-xl flex items-center justify-center shadow-inner overflow-hidden">
                            {client.logo ? (
                              <Image 
                                src={client.logo} 
                                alt={client.name} 
                                fill 
                                sizes="100px" 
                                className={`object-contain drop-shadow-md transition-transform duration-300 ${(client as any).scale ? `${(client as any).scale} p-0` : 'scale-[1.05] p-1.5'}`} 
                              />
                            ) : (
                              <span className="text-[#38c5e0] font-black text-4xl tracking-tighter drop-shadow-md">{client.name.charAt(0)}</span>
                            )}
                          </div>
                        </div>

                        {/* Crisp Typography Section */}
                        <div className="z-10 flex flex-col items-center">
                          <h3 className="font-extrabold text-white/90 text-[17px] sm:text-[19px] leading-snug text-center group-hover:text-white transition-colors duration-300 drop-shadow-sm">
                            {client.name}
                          </h3>
                          {(client as any).subtitle && (
                            <p className="text-white/70 text-[11px] sm:text-xs mt-1.5 font-semibold text-center tracking-wide uppercase">
                              {(client as any).subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Many More ── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 mb-2 bg-[#38c5e0]/[0.06] border border-[#38c5e0]/20 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center backdrop-blur-sm"
          >
            <motion.p 
              className="drop-shadow-sm text-sm sm:text-lg font-extrabold tracking-[0.6em] uppercase mb-6"
              style={{
                backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Many More
            </motion.p>
            <div className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-10 gap-y-3 text-white/80 text-sm sm:text-base font-semibold tracking-wide">
              <span className="hover:text-white transition-colors cursor-default">Industries</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#38c5e0]/50"></span>
              <span className="hover:text-white transition-colors cursor-default">Corporate Offices</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#38c5e0]/50"></span>
              <span className="hover:text-white transition-colors cursor-default">Retail Chains</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
