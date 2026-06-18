"use client";

import React, { useEffect, useState } from "react";
import "./bubbles.css";

export default function Hero3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Render 30 organic 3D glass bubbles
  const bubbles = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="bubbles-container w-full h-full relative opacity-90">
        {bubbles.map((num) => (
          <div key={num} className={`bubble bubble-${num}`} />
        ))}
      </div>
      
      {/* Mesh gradient overlay to match the reference site vibe */}
      <div 
        className="absolute inset-0 opacity-50 mix-blend-screen pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(205, 127, 50, 0.15) 0%, transparent 60%)"
        }}
      />
    </div>
  );
}
