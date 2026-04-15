import AboutHero from "@/components/AboutHero";
import AboutSections from "@/components/AboutSections";
import CompanyStats from "@/components/CompanyStats";

export default function AboutPage() {
  return (
    <main className="bg-[#07071A] text-white">
      <AboutHero />
      <AboutSections />
      <CompanyStats />
    </main>
  );
}