"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerData } from "@/components/constants/data";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[60] flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-[#38c5e0]/40"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="block w-5 h-[2px] bg-[#9ff6ff] rounded-full origin-center"
        />
        <motion.span
          animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.2 }}
          className="block w-5 h-[2px] bg-[#9ff6ff] rounded-full"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="block w-5 h-[2px] bg-[#9ff6ff] rounded-full origin-center"
        />
      </button>

      {/* Full-screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"
            />

            {/* Slide-in Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[56] w-[80%] max-w-sm flex flex-col"
              style={{
                background: "rgba(5, 38, 38, 0.95)",
                backdropFilter: "blur(30px) saturate(180%)",
                WebkitBackdropFilter: "blur(30px) saturate(180%)",
                borderLeft: "1px solid rgba(56, 197, 224, 0.1)",
              }}
            >
              {/* Top section with close hint */}
              <div className="shrink-0 px-8 pt-16 md:pt-24 pb-6 border-b border-white/5">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#38c5e0]/50">
                  Navigation
                </p>
              </div>

              {/* Nav Links */}
              <div className="flex-1 px-6 py-6 pb-4 flex flex-col gap-3 overflow-y-auto w-full">
                {headerData.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <div key={item.title} className="w-full shrink-0">
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`
                          group flex items-center gap-4 px-5 py-[14px] rounded-2xl transition-all duration-300 w-full
                          ${isActive
                            ? "bg-[#38c5e0]/10 border border-[#38c5e0]/20"
                            : "border border-transparent hover:bg-white/[0.03] hover:border-white/5"
                          }
                        `}
                      >
                        <span
                          className={`
                            text-lg font-semibold transition-colors duration-300 py-1
                            ${isActive ? "text-[#9ff6ff]" : "text-white/80 group-hover:text-white"}
                          `}
                        >
                          {item.title}
                        </span>

                        {isActive && (
                          <div className="ml-auto w-2 h-2 rounded-full bg-[#38c5e0] shadow-[0_0_8px_rgba(56,197,224,0.6)]" />
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="shrink-0 px-8 py-8 border-t border-white/5 pb-12">
                <Link
                  href="/connect"
                  onClick={() => setIsOpen(false)}
                  className="
                    block text-center px-7 py-3.5 rounded-full text-sm font-semibold
                    bg-gradient-to-r from-brand-accent to-emerald-400
                    hover:from-emerald-400 hover:to-brand-accent
                    border border-[rgba(31,168,154,0.4)]
                    shadow-[0_0_20px_rgba(31,168,154,0.3)]
                    hover:shadow-[0_0_35px_rgba(31,168,154,0.5)]
                    transition-all duration-500
                  "
                  style={{ color: "#050B0B" }}
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
