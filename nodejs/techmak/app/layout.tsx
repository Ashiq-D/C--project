import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CursorWrapper from "@/components/CursorWrapper";

import Hero3D from "@/components/Hero3D";
import AnimatedParticles from "@/components/AnimatedParticles";

export const metadata: Metadata = {
  title: {
    template: "%s - Techmak Technology Ltd.",
    default: "Techmak Technology Ltd.",
  },
  description: "Techmak Technology Ltd. — A leading provider of surveillance, security, automation, and networking solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-poppins antialiased bg-[#052626] text-white">
        
        {/* Global 3D & Particle Background */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-br from-[#071A1A] via-[#0A2E2E] to-[#052626]">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#1FA89A]/10 blur-[150px] rounded-full mix-blend-screen opacity-50 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#0ea5c9]/10 blur-[130px] rounded-full mix-blend-screen opacity-50" />
          <div className="absolute inset-0">
            <Hero3D />
          </div>
          <AnimatedParticles />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <CursorWrapper />
          <SmoothScroll>
            <Header />

            <main className="flex-1 flex flex-col">
              {children}
            </main>

            <Footer />
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}