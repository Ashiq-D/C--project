import HomeClient from "@/components/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Techmak Technology",
  description:
    "Bangladesh's most trusted partner for intelligent security infrastructure. Advanced CCTV surveillance, access control, networking, and automation solutions — from design to deployment.",
  keywords: [
    "Techmak",
    "techmak",
    "Techmak Technology",
    "Techmak Technology Ltd",
    "Techmak BD",
    "Techmak Bangladesh",
    "techmakai",
    "techmakai.com",
    "CCTV Bangladesh",
    "surveillance solutions",
    "access control",
    "networking solutions",
    "security automation",
    "Bangladesh Navy",
    "Bangladesh Army",
    "enterprise security",
    "Techmak Dhaka",
    "security company Bangladesh",
  ],
  openGraph: {
    title: "Techmak Technology Ltd. — Securing What Matters",
    description:
      "Bangladesh's most trusted partner for intelligent security infrastructure. Advanced surveillance, access control, and automation solutions.",
    url: "https://techmakai.com",
    siteName: "Techmak Technology Ltd.",
    type: "website",
    locale: "en_BD",
    images: [
      {
        url: "https://techmakai.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Techmak Technology Ltd. — Intelligent Security & Automation Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techmak Technology Ltd. — Securing What Matters",
    description:
      "Bangladesh's most trusted partner for intelligent security infrastructure.",
    images: ["https://techmakai.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://techmakai.com",
  },
};

export default function Home() {
  return <HomeClient />;
}