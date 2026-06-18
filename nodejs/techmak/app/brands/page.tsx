import Brands from "@/components/Brands";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Brands & Subsidiaries",
  description:
    "Explore Techmak Group's subsidiaries including Techmak Technology, Power & Energy, SSTAF, MSN Consortium, Cindora Motion, and TrimEdge Sourcing.",
  openGraph: {
    title: "Our Brands & Subsidiaries - Techmak Technology Ltd.",
    description:
      "Explore the Techmak Group ecosystem — Technology, Power & Energy, SSTAF, MSN Consortium, Cindora Motion, and TrimEdge Sourcing.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Brands & Subsidiaries - Techmak Technology Ltd.",
    description:
      "Explore the Techmak Group of companies and subsidiaries.",
  },
  alternates: {
    canonical: "https://techmakai.com/brands",
  },
};

export default function BrandsPage() {
  return (
    <div className="overflow-x-hidden">
      <Brands />
    </div>
  );
}
