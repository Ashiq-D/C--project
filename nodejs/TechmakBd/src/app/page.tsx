import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import GroupCompanies from "@/components/GroupCompanies";
import Industries from "@/components/Industries";
import WhyChoose from "@/components/WhyChoose";
import Leadership from "@/components/Leadership";
import StatsProjects from "@/components/StatsProjects";
import GlobalPresence from "@/components/GlobalPresence";
import Sustainability from "@/components/Sustainability";
import NewsContact from "@/components/NewsContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-techmak-champagne/30 selection:text-white pb-12">
      <Navbar />
      <Hero />
      <GroupCompanies />
      <Industries />
      <WhyChoose />
      <GlobalPresence />
      <Sustainability />
      <Footer />
    </main>
  );
}
