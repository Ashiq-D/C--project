import { Button } from "@/components/ui/button";
import LogoMarquee from "@/components/LogoMarquee";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-light-bg flex items-center justify-center min-h-[80vh]">
        <div className="text-center px-6">

          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark-text">
            Welcome to <span className="text-brand-accent">Techmakai</span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Discover innovative tech solutions designed to elevate your digital
            experience and empower your business.
          </p>

          <div className="mt-8">
            <Button className="bg-brand-primary hover:bg-brand-hover text-white px-6 py-3 text-sm rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
              Explore Now
            </Button>
          </div>

        </div>
      </section>

      {/* Logo Marquee Section */}
      <LogoMarquee />
    </>
  );
}