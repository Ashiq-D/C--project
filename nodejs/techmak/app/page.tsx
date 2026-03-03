"use client";

import CinematicScroll from "@/components/CinematicScroll";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-28 h-28 border border-white/30 rounded-full flex items-center justify-center mx-auto mb-6">
            TM
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            Elevate Your{" "}
            <span className="text-teal-400">Digital Future</span>
          </h1>

          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Smart automation. AI intelligence. Industrial innovation.
          </p>
        </div>
      </section>

      {/* CINEMATIC SERVICES */}
      <CinematicScroll />

      {/* Extra space below */}
      <div className="h-screen bg-black" />

    </main>
  );
}