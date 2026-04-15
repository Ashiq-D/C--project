import Brands from "@/components/Brands";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Brands & Subsidiaries",
  description:
    "Explore Techmak Group's subsidiaries including Techmak Technology, Power & Energy, SSTAF, MSN Consortium, Cindora Motion, and TrimEdge Sourcing.",
};

export default function BrandsPage() {
  return (
    <main className="text-white overflow-x-hidden pt-20">
      <Brands />
    </main>
  );
}
