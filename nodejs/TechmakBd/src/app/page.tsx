import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandsAccordion from "@/components/BrandsAccordion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-techmak-cyan/30 selection:text-white">
      <Navbar />
      <Hero />
      <BrandsAccordion />
      <Footer />
    </main>
  );
}
