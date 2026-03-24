import AboutUs from "@/components/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Techmak Technology Ltd. — our story, milestones, and commitment to delivering trusted security and ICT solutions across Bangladesh.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#040a08] text-white overflow-x-hidden pt-20">
      <AboutUs />
    </main>
  );
}
