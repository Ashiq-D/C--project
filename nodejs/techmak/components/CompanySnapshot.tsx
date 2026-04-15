"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

/* ── Data from Techmak Technology LTD profile ── */
const stats = [
  { value: "2009", label: "Founded", icon: "🏛️" },
  { value: "15+", label: "Years Experience", icon: "⏱️" },
  { value: "500+", label: "Projects Delivered", icon: "📦" },
  { value: "2400", label: "Sq.ft. HQ", icon: "🏢" },
];

const coreServices = [
  {
    icon: "📷",
    title: "Industrial Security & Surveillance",
    desc: "Advanced CCTV, IP cameras, perimeter detection and authorized Sensormatic surveillance systems tailored for enterprise and government environments.",
  },
  {
    icon: "⚙️",
    title: "Automation Systems",
    desc: "PLC, HMI, Motor & Servo Drives expertise for precision industrial process automation in manufacturing, utilities and smart buildings.",
  },
  {
    icon: "🏷️",
    title: "RFID & EAS Solutions",
    desc: "Electronic Article Surveillance (EAS) and RFID-based asset tracking that dramatically reduces retail shrinkage and improves inventory accuracy.",
  },
  {
    icon: "🚦",
    title: "Advanced Traffic Solutions",
    desc: "Smart traffic management and transportation intelligence systems engineered for Bangladesh's growing urban infrastructure.",
  },
  {
    icon: "🌐",
    title: "Networking & Communication",
    desc: "Structured cabling, corporate and industrial networking infrastructure designed for reliability, scalability and high throughput.",
  },
  {
    icon: "🔥",
    title: "Safety & Fire Detection",
    desc: "Comprehensive industrial safety systems, fire detection and suppression solutions compliant with international standards.",
  },
];

const clients = [
  "Bangladesh Army",
  "Bangladesh Police",
  "BPDB",
  "Border Guard Bangladesh",
  "Bashundhara City",
  "Boishakhi TV",
  "Artisti",
  "Cooper's Bakery",
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

function CounterStat({ value, label, icon }: { value: string; label: string; icon: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#38c5e0]/40 hover:bg-white/10 transition-all duration-500"
    >
      <span className="text-3xl">{icon}</span>
      <span
        className="text-4xl md:text-5xl font-extrabold"
        style={{
          backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 40%, #38c5e0 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {value}
      </span>
      <span className="text-[#8ab8c8] text-sm font-medium tracking-wide uppercase">{label}</span>
    </motion.div>
  );
}

export default function CompanySnapshot() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section className="relative py-32 overflow-hidden z-10">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-[#38c5e0]/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#0ea5c9]/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section heading ── */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: -30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-4xl mx-auto backdrop-blur-md bg-[#052626]/40 rounded-3xl p-8 border border-white/5 shadow-2xl"
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-[#78d4e8]/70 mb-4">
            Established 2009 · Dhaka, Bangladesh
          </p>
          <h2
            className="font-bold leading-tight mb-6"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              backgroundImage: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            About Techmak Technology Ltd.
          </h2>
          <p className="text-[#8ab8c8] max-w-3xl mx-auto text-base md:text-lg font-light leading-relaxed">
            A premier technology company in Bangladesh specializing in industrial security systems,
            automation, and high-tech safety solutions. From a power system manufacturer in 2009,
            we evolved into the nation's trusted leader in RFID, AI surveillance, and intelligent automation —
            delivering end-to-end design, deployment, and lifetime support.
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

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((s) => (
            <CounterStat key={s.label} {...s} />
          ))}
        </div>

        {/* ── Core Services grid ── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 max-w-xl mx-auto backdrop-blur-md bg-[#052626]/40 rounded-3xl md:rounded-full p-6 border border-white/5 shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white/90">
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
                className="group p-7 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm
                           hover:border-[#38c5e0]/40 hover:bg-[#38c5e0]/[0.06] transition-all duration-500 cursor-default"
              >
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h4 className="text-white font-semibold text-base mb-2 group-hover:text-[#9ff6ff] transition-colors">
                  {service.title}
                </h4>
                <p className="text-[#8ab8c8]/80 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Notable Clients ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-sm p-10"
        >
          <div className="text-center mb-10 max-w-2xl mx-auto backdrop-blur-md bg-[#052626]/40 rounded-3xl md:rounded-full p-6 border border-white/5 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-white/90">
              Trusted by Bangladesh's Top Institutions
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client, i) => (
              <motion.span
                key={client}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="px-5 py-2.5 rounded-full text-sm font-medium text-[#9ff6ff]
                           bg-[#38c5e0]/10 border border-[#38c5e0]/25
                           hover:bg-[#38c5e0]/20 hover:border-[#38c5e0]/50
                           transition-all duration-300 cursor-default"
              >
                {client}
              </motion.span>
            ))}
          </div>

          {/* Mission + Vision */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#38c5e0]/[0.06] border border-[#38c5e0]/20">
              <p className="text-[#78d4e8] text-xs font-semibold uppercase tracking-widest mb-2">Our Mission</p>
              <p className="text-white/80 text-sm leading-relaxed">
                To provide industry-leading design, technology, and customer support for long-term, reliable
                perimeter detection and industrial safety solutions across Bangladesh.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0ea5c9]/[0.06] border border-[#0ea5c9]/20">
              <p className="text-[#78d4e8] text-xs font-semibold uppercase tracking-widest mb-2">Our Vision</p>
              <p className="text-white/80 text-sm leading-relaxed">
                To be the leading Industrial Security and Automation Solution Company in Bangladesh,
                driven by quality, innovation, and unmatched service excellence.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
