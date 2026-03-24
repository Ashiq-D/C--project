"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

/* ─── CONFIG ─── */
const DOT_SIZE = 6;
const RING_SIZE = 36;
const RING_HOVER_SCALE = 2;
const MAGNETIC_PULL = 0.3;

const INTERACTIVE = "a,button,[role='button'],input,textarea,select,label,[data-cursor-magnetic]";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const trailPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);
  const hoveredRef = useRef<Element | null>(null);

  const loop = useCallback(() => {
    const ring = ringRef.current;
    const trail = trailRef.current;

    if (ring) {
      const dx = posRef.current.x - ringPosRef.current.x;
      const dy = posRef.current.y - ringPosRef.current.y;
      ringPosRef.current.x += dx * 0.18;
      ringPosRef.current.y += dy * 0.18;
      ring.style.left = `${ringPosRef.current.x}px`;
      ring.style.top = `${ringPosRef.current.y}px`;
    }

    if (trail) {
      const dx = posRef.current.x - trailPosRef.current.x;
      const dy = posRef.current.y - trailPosRef.current.y;
      trailPosRef.current.x += dx * 0.08;
      trailPosRef.current.y += dy * 0.08;
      trail.style.left = `${trailPosRef.current.x}px`;
      trail.style.top = `${trailPosRef.current.y}px`;
    }

    rafRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const trail = trailRef.current;
    if (!dot || !ring || !trail) return;

    dot.style.opacity = "1";
    ring.style.opacity = "1";
    trail.style.opacity = "1";
    document.documentElement.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      if (hoveredRef.current) {
        const rect = hoveredRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const mx = e.clientX + (cx - e.clientX) * MAGNETIC_PULL;
        const my = e.clientY + (cy - e.clientY) * MAGNETIC_PULL;
        ringPosRef.current.x = mx;
        ringPosRef.current.y = my;
        ring.style.left = `${mx}px`;
        ring.style.top = `${my}px`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as Element)?.closest?.(INTERACTIVE);
      if (target && target !== hoveredRef.current) {
        hoveredRef.current = target;
        gsap.to(ring, {
          scale: RING_HOVER_SCALE,
          duration: 0.4,
          ease: "power3.out",
        });
        gsap.to(dot, {
          scale: 0,
          duration: 0.25,
          ease: "power3.out",
        });
        ring.classList.add("cc-hover");
      }
    };

    const onOut = (e: MouseEvent) => {
      const related = (e.relatedTarget as Element)?.closest?.(INTERACTIVE);
      if (!related) {
        hoveredRef.current = null;
        gsap.to(ring, {
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        });
        gsap.to(dot, {
          scale: 1,
          opacity: 1,
          duration: 0.25,
          ease: "power3.out",
        });
        ring.classList.remove("cc-hover");
      }
    };

    const onClick = () => {
      gsap.fromTo(
        ring,
        { scale: hoveredRef.current ? RING_HOVER_SCALE * 0.8 : 0.7 },
        {
          scale: hoveredRef.current ? RING_HOVER_SCALE : 1,
          duration: 0.5,
          ease: "elastic.out(1,0.35)",
        }
      );
    };

    const onLeave = () => {
      gsap.to([dot, ring, trail], { opacity: 0, duration: 0.2 });
    };
    const onEnter = () => {
      gsap.to([dot, ring, trail], { opacity: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);
    window.addEventListener("click", onClick);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      window.removeEventListener("click", onClick);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafRef.current);
      document.documentElement.style.cursor = "";
    };
  }, [loop]);

  return (
    <>
      {/* inner dot */}
      <div
        ref={dotRef}
        className="cc-dot"
        style={{
          position: "fixed",
          top: -100,
          left: -100,
          width: DOT_SIZE,
          height: DOT_SIZE,
          borderRadius: "50%",
          background: "#fff",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-50%,-50%)",
          opacity: 0,
          mixBlendMode: "difference",
        }}
      />
      {/* outer ring */}
      <div
        ref={ringRef}
        className="cc-ring"
        style={{
          position: "fixed",
          top: -100,
          left: -100,
          width: RING_SIZE,
          height: RING_SIZE,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          transform: "translate(-50%,-50%)",
          opacity: 0,
        }}
      />
      {/* soft trailing glow */}
      <div
        ref={trailRef}
        className="cc-trail"
        style={{
          position: "fixed",
          top: -100,
          left: -100,
          width: 60,
          height: 60,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99997,
          transform: "translate(-50%,-50%)",
          opacity: 0,
        }}
      />

      <style jsx global>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }

        .cc-ring {
          border: 1.5px solid rgba(255,255,255,0.25);
          backdrop-filter: blur(1px);
          transition: border-color 0.4s ease, background 0.4s ease;
        }

        .cc-ring.cc-hover {
          border-color: rgba(14,165,201,0.6);
          background: rgba(14,165,201,0.06);
          box-shadow: 0 0 20px rgba(14,165,201,0.15);
        }

        .cc-trail {
          background: radial-gradient(circle, rgba(14,165,201,0.08) 0%, transparent 70%);
          filter: blur(8px);
        }
      `}</style>
    </>
  );
}
