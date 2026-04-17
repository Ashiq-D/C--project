import ConnectClient from "@/components/ConnectClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect With Us",
  description:
    "Get in touch with Techmak Technology Ltd. for security, surveillance, and automation solutions. Submit your inquiry and our team will connect you with the right solution.",
  openGraph: {
    title: "Connect With Us - Techmak Technology Ltd.",
    description:
      "Reach out to Techmak Technology for enterprise security, surveillance, and automation solutions in Bangladesh.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect With Us - Techmak Technology Ltd.",
    description:
      "Reach out to Techmak Technology for enterprise security and automation solutions.",
  },
  alternates: {
    canonical: "https://techmakai.com/connect",
  },
};

export default function ConnectPage() {
  return <ConnectClient />;
}