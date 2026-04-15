import Brands from "@/components/Brands";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Brands & Subsidiaries",
  description:
    "Explore Techmak Group's subsidiaries including Techmak Technology, Power & Energy, SSTAF, MSN Consortium, Cindora Motion, and TrimEdge Sourcing.",
};

export default function BrandsPage() {
  return (
    <main className="bg-gradient-to-br from-[#071A1A] via-[#0A2E2E] to-[#052626] text-white overflow-x-hidden pt-20">
      <Brands />
    </main>
  );
}
