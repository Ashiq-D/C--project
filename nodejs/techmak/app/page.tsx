import HomeClient from "@/components/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Techmak Technology Ltd. — Intelligent Security & Automation Solutions",
  description:
    "Bangladesh's most trusted partner for intelligent security infrastructure. Advanced CCTV surveillance, access control, networking, and automation solutions — from design to deployment.",
  keywords: [
    "Techmak Technology",
    "CCTV Bangladesh",
    "surveillance solutions",
    "access control",
    "networking solutions",
    "security automation",
    "Bangladesh Navy",
    "Bangladesh Army",
    "enterprise security",
  ],
  openGraph: {
    title: "Techmak Technology Ltd. — Securing What Matters",
    description:
      "Bangladesh's most trusted partner for intelligent security infrastructure. Advanced surveillance, access control, and automation solutions.",
    url: "https://techmakai.com",
    siteName: "Techmak Technology Ltd.",
    type: "website",
    locale: "en_BD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techmak Technology Ltd. — Securing What Matters",
    description:
      "Bangladesh's most trusted partner for intelligent security infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://techmakai.com",
  },
};

export default function Home() {
  return <HomeClient />;
}