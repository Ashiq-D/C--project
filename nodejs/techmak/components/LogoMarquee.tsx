"use client";

const LogoMarquee = () => {
  const logos = [
    "/logos/logo-1.webp",
    "/logos/logo-2.webp",
    "/logos/logo-3.webp",
    "/logos/logo-4.webp",
    "/logos/logo-5.webp",
    "/logos/logo-6.webp",
    "/logos/logo-7.webp",
    "/logos/logo-8.webp",
    "/logos/logo-10.webp",
    "/logos/logo-11.webp",
    "/logos/logo-12.webp",
    "/logos/logo-13.webp",
    "/logos/logo-14.webp",
    "/logos/logo-15.webp",
    "/logos/logo-16.webp",
    "/logos/logo-17.webp",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0f172a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-7">

        <div className="relative rounded-[50px] bg-white/5 backdrop-blur-xl border border-white/10 py-14 px-20 shadow-xl overflow-hidden">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white">
            Our Valuable Clients Include
          </h2>

          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#111827] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#111827] to-transparent z-10" />

          {/* Marquee */}
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-16 animate-marquee w-max">

              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-20 w-46 bg-white/10 rounded-xl border border-white/10 transition-all duration-500 hover:bg-white/20 hover:scale-105"
                >
                  <img
                    src={logo}
                    alt="client logo"
                    className="h-12 object-contain"
                  />
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LogoMarquee;