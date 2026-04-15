"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { services } from "@/lib/servicesData";
import TiltCard from "@/components/TiltCard";
import Hero3D from "@/components/Hero3D";
import AnimatedParticles from "@/components/AnimatedParticles";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#071A1A] via-[#0A2E2E] to-[#052626] text-white pt-32 pb-24 overflow-hidden">
      
      {/* 3D Arc Particle Background & Aesthetic Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#1FA89A]/10 blur-[150px] rounded-full mix-blend-screen opacity-50 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#0ea5c9]/10 blur-[130px] rounded-full mix-blend-screen opacity-50" />
        <div className="opacity-[0.25]">
          <Hero3D />
        </div>
        <AnimatedParticles />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20 relative z-20">
          <p className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-[#78d4e8]/70 mb-4">
            Our Expertise
          </p>
          <h1 
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Engineering the Future
          </h1>
          <p className="text-[#8ab8c8]/80 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            Delivering advanced, intelligent solutions tailored for robust security, automation, and enterprise infrastructure.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 relative z-20"
          style={{ perspective: 1200 }}
        >
          {services.map((service, index) => (
            <motion.div key={service.slug} variants={cardVariant} className="h-full">
              <Link href={`/services/${service.slug}`} className="block h-full group">
                <TiltCard className="h-full rounded-2xl overflow-hidden bg-[#0A2E2E] border border-[#1FA89A]/15 group-hover:border-[#1FA89A]/50 transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(31,168,154,0.25)] group-hover:-translate-y-1 relative">
                  
                  {/* Background Image layer */}
                  {service.image && (
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-1000 ease-out opacity-40 group-hover:opacity-60"
                      style={{ backgroundImage: `url(${service.image})` }} 
                    />
                  )}
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040A08] via-[#071A1A]/80 to-transparent pointer-events-none" />

                  <div className="p-8 h-full flex flex-col justify-between relative z-10" style={{ transform: "translateZ(30px)" }}>
                    <div>
                      {/* Subdued number indicating sequence */}
                      <div className="text-[3.5rem] leading-none font-black text-white/10 mb-6 font-poppins selection:bg-transparent">
                        0{index + 1}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white group-hover:text-[#9ff6ff] transition-colors duration-300 drop-shadow-lg">
                        {service.title}
                      </h2>
                      <p className="text-[#e0ede8]/80 font-light leading-relaxed mb-8 drop-shadow-md">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[#78d4e8]">
                      <span className="text-sm font-semibold tracking-wider uppercase">Explore</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-2 transition-transform duration-300"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </main>
  );
}