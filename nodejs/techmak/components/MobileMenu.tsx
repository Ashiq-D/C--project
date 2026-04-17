"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerData } from "@/components/constants/data";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Ensure portal mounting
  useEffect(() => {
    setMounted(true);
  }, []);

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

  const menuOverlay = isOpen ? (
    <div
      id="mobile-menu-portal"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
      }}
    >
      {/* Dark backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      />

      {/* Slide-in Panel */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "80%",
          maxWidth: "380px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#052626",
          borderLeft: "1px solid rgba(56, 197, 224, 0.15)",
          boxShadow: "-10px 0 40px rgba(0, 0, 0, 0.5)",
          animation: "mobileMenuSlideIn 0.3s ease-out forwards",
        }}
      >
        {/* Close button area */}
        <div
          style={{
            flexShrink: 0,
            padding: "20px 24px 16px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(56, 197, 224, 0.5)",
              margin: 0,
            }}
          >
            Navigation
          </p>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "#9ff6ff",
              fontSize: "18px",
            }}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Nav Links */}
        <div
          style={{
            flex: 1,
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            overflowY: "auto",
          }}
        >
          {headerData.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 20px",
                  borderRadius: "16px",
                  textDecoration: "none",
                  transition: "all 0.3s",
                  backgroundColor: isActive
                    ? "rgba(56, 197, 224, 0.1)"
                    : "transparent",
                  border: isActive
                    ? "1px solid rgba(56, 197, 224, 0.2)"
                    : "1px solid transparent",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: isActive
                      ? "#9ff6ff"
                      : "rgba(255, 255, 255, 0.85)",
                    opacity: 1,
                  }}
                >
                  {item.title}
                </span>
                {isActive && (
                  <div
                    style={{
                      marginLeft: "auto",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#38c5e0",
                      boxShadow: "0 0 8px rgba(56, 197, 224, 0.6)",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            flexShrink: 0,
            padding: "24px",
            paddingBottom: "40px",
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <Link
            href="/connect"
            onClick={() => setIsOpen(false)}
            style={{
              display: "block",
              textAlign: "center",
              padding: "14px 28px",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#050B0B",
              backgroundImage:
                "linear-gradient(to right, #1FA89A, #34d399)",
              border: "1px solid rgba(31, 168, 154, 0.4)",
              boxShadow: "0 0 20px rgba(31, 168, 154, 0.3)",
              textDecoration: "none",
            }}
          >
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="xl:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[60] flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-[#38c5e0]/40"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span
          className="block w-5 h-[2px] bg-[#9ff6ff] rounded-full origin-center transition-all duration-300"
          style={
            isOpen
              ? {
                  transform:
                    "rotate(45deg) translateY(4px) translateX(4px)",
                }
              : {}
          }
        />
        <span
          className="block w-5 h-[2px] bg-[#9ff6ff] rounded-full transition-all duration-300"
          style={isOpen ? { opacity: 0, transform: "scaleX(0)" } : {}}
        />
        <span
          className="block w-5 h-[2px] bg-[#9ff6ff] rounded-full origin-center transition-all duration-300"
          style={
            isOpen
              ? {
                  transform:
                    "rotate(-45deg) translateY(-4px) translateX(4px)",
                }
              : {}
          }
        />
      </button>

      {/* Portal: renders OUTSIDE the Header/SmoothScroll stacking context */}
      {mounted && createPortal(menuOverlay, document.body)}

      {/* Slide-in animation */}
      <style jsx global>{`
        @keyframes mobileMenuSlideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MobileMenu;
