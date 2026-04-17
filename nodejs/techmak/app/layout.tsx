import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CursorWrapper from "@/components/CursorWrapper";

import Hero3D from "@/components/Hero3D";

export const metadata: Metadata = {
  title: {
    template: "%s - Techmak Technology Ltd.",
    default: "Techmak Technology Ltd.",
  },
  description: "Techmak Technology Ltd. — A leading provider of surveillance, security, automation, and networking solutions.",
  metadataBase: new URL("https://techmakbd.com"),
  openGraph: {
    siteName: "Techmak Technology Ltd.",
    locale: "en_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// JSON-LD Organization Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Techmak Technology Ltd.",
  url: "https://techmakbd.com",
  logo: "https://techmakbd.com/logo.png",
  description:
    "Bangladesh's most trusted partner for intelligent security infrastructure — CCTV surveillance, access control, networking, and automation solutions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4th floor, 36/E, Road-2, Block-D, Bashundhara R/A",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+880-1611-224433",
    email: "info@techmakai.com",
    contactType: "customer service",
    availableLanguage: ["English", "Bengali"],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen font-poppins antialiased bg-gradient-to-br from-[#071A1A] via-[#0A2E2E] to-[#052626] text-white" suppressHydrationWarning>
        {/* Global 3D Background */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-80">
          <Hero3D />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <CursorWrapper />
        <SmoothScroll>
          <Header />

          <main className="flex-1 flex flex-col">
            {children}
          </main>

          <Footer />
        </SmoothScroll>
        </div>
      </body>
    </html>
  );
}