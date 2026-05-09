import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Hero3D from "@/components/Hero3D";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techmak BD | Technology, Security & Power Solutions",
  description: "Techmak BD (Techmak Technology Ltd.) is a leading Bangladeshi conglomerate delivering future-ready solutions across technology, security, power infrastructure, and industrial fabrication.",
  keywords: [
    "TechmakBD", 
    "Techmak BD", 
    "Techmak Technology Ltd", 
    "Security Solutions Bangladesh", 
    "Power Infrastructure BD", 
    "Industrial Fabrication Dhaka",
    "IT Solutions Bangladesh"
  ],
  authors: [{ name: "Techmak BD" }],
  openGraph: {
    title: "Techmak BD | Advanced Solutions, Proven Performance",
    description: "Pioneering the future of technology with advanced solutions and an unwavering commitment to excellence in Bangladesh.",
    url: "https://techmakbd.com",
    siteName: "Techmak BD",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techmak BD | Technology & Security Solutions",
    description: "Delivering reliable, future-ready solutions across technology, security, power, and fabrication.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-[#0a0c1e] bg-fixed" style={{ backgroundImage: "linear-gradient(160deg, #0a0c1e 0%, #110f24 35%, #18142e 70%, #0f0d20 100%), radial-gradient(ellipse at 30% 70%, rgba(255,75,62,0.05) 0%, transparent 55%), radial-gradient(ellipse at 75% 25%, rgba(212,169,58,0.04) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(24,20,46,0.6) 0%, transparent 70%)", backgroundBlendMode: "normal, screen, screen, overlay" }}>
        {/* Global 3D Background */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-80">
          <Hero3D />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
