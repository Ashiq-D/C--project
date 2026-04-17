import AboutUs from "@/components/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Techmak Technology Ltd. — our story, milestones, and commitment to delivering trusted security and ICT solutions across Bangladesh.",
  openGraph: {
    title: "About Us - Techmak Technology Ltd.",
    description:
      "Discover the story, milestones, and mission behind Techmak Technology — Bangladesh's trusted security and ICT solutions partner.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Techmak Technology Ltd.",
    description:
      "Discover the story and mission behind Techmak Technology.",
  },
  alternates: {
    canonical: "https://techmakai.com/about-us",
  },
};

export default function AboutPage() {
  return (
    <main className="text-white overflow-x-hidden pt-20">
      <AboutUs />
    </main>
  );
}
