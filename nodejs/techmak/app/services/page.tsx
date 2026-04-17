import ServicesClient from "@/components/ServicesClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Techmak's comprehensive security and technology services — CCTV surveillance, access control, networking, power solutions, traffic management, and intelligent automation.",
  openGraph: {
    title: "Services - Techmak Technology Ltd.",
    description:
      "Advanced surveillance, access control, networking, and automation services tailored for government and enterprise clients in Bangladesh.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Techmak Technology Ltd.",
    description:
      "Advanced surveillance, access control, networking, and automation services.",
  },
  alternates: {
    canonical: "https://techmakai.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}