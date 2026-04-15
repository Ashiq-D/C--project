import { notFound } from "next/navigation";
import { services } from "@/lib/servicesData";
import Link from "next/link";
import AnimatedParticles from "@/components/AnimatedParticles";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // @ts-ignore Let TypeScript infer or we ignore the type since we just updated it dynamically
  const service = services.find((s) => s.slug === slug) as any;

  if (!service) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#071A1A] via-[#0A2E2E] to-[#052626] text-white pt-32 pb-24 overflow-hidden">
      
      {/* 3D Arc Particle Background & Aesthetic Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#1FA89A]/10 blur-[150px] rounded-full mix-blend-screen opacity-50 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#0ea5c9]/10 blur-[130px] rounded-full mix-blend-screen opacity-50" />
        <AnimatedParticles />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        


        {/* Cinematic Header Image */}
        <div className="relative w-full h-[50vh] md:h-[70vh] rounded-[2rem] overflow-hidden mb-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#1FA89A]/20 group">
          {service.image && (
            <div 
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-80"
              style={{ backgroundImage: `url(${service.image})` }} 
            />
          )}
          
          {/* Deep immersive gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A1A] via-[#0A2E2E]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A1A]/90 via-transparent to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 md:w-[85%]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1FA89A]/30 bg-[#1FA89A]/10 text-[#78d4e8] text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#78d4e8] animate-pulse" />
              Advanced Architecture
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-2xl selection:bg-cyan-500/30 mb-4"
              style={{
                textShadow: "0 10px 40px rgba(0,0,0,0.8)",
              }}
            >
              {service.title}
            </h1>
            <p className="text-[#e0ede8] text-lg md:text-xl font-light tracking-wide drop-shadow-md border-l-2 border-[#1FA89A] pl-4">
              {service.description}
            </p>
          </div>
        </div>

        {/* Extended Content Section */}
        <div className="grid lg:grid-cols-12 gap-16 relative z-20">
          
          <div className="lg:col-span-8 space-y-16">
            
            {/* Overview */}
            <section>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-[#78d4e8] mb-6">Strategic Overview</h3>
              <p className="text-[#e0ede8]/90 text-lg leading-relaxed font-light mb-6">
                {service.content}
              </p>
              <p className="text-[#e0ede8]/70 text-lg leading-relaxed font-light">
                {service.longContent}
              </p>
            </section>
            
            {/* Key Features Grid */}
            <section>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-[#78d4e8] mb-8">Technical Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {service.keyFeatures?.map((feature: any, i: number) => (
                  <div key={i} className="p-6 rounded-2xl bg-[#0F3D3E]/20 border border-[#1FA89A]/10 hover:border-[#1FA89A]/40 transition-colors duration-300">
                    <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38c5e0]" />
                      {feature.title}
                    </h4>
                    <p className="text-[#8ab8c8] text-sm leading-relaxed font-light">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Benefits List */}
            <section className="bg-gradient-to-br from-[#145959]/20 to-transparent p-8 rounded-3xl border border-[#1FA89A]/15">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-[#78d4e8] mb-8">Enterprise Benefits</h3>
              <ul className="space-y-4">
                {service.benefits?.map((benefit: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-[#e0ede8]/90 font-light">
                    <svg className="w-6 h-6 text-[#1FA89A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>
            
          </div>
          
          {/* Side Panel (CTA) */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 p-8 rounded-3xl bg-[#0F3D3E]/30 border border-[#1FA89A]/15 backdrop-blur-xl shadow-2xl hover:border-[#1FA89A]/40 transition-colors duration-500">
              <div className="w-12 h-12 rounded-full bg-[#1FA89A]/20 flex items-center justify-center mb-6 border border-[#1FA89A]/30">
                <svg className="w-5 h-5 text-[#9ff6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Begin Your Deployment</h3>
              <p className="text-[#8ab8c8] text-sm font-light mb-8 leading-relaxed">
                Connect with our senior engineering team to map out optimal blueprints and strategic requirements for your organization.
              </p>
              
              <Link href="/connect" className="w-full py-4 rounded-full bg-gradient-to-r from-[#1FA89A]/20 to-[#0ea5c9]/20 border border-[#1FA89A]/40 text-white text-sm font-semibold flex items-center justify-center gap-2 backdrop-blur-md shadow-[0_0_20px_rgba(31,168,154,0.15)] hover:border-[#1FA89A]/80 hover:shadow-[0_0_35px_rgba(31,168,154,0.4)] transition-all duration-300 hover:-translate-y-1">
                Consult an Expert
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"><path d="m5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}