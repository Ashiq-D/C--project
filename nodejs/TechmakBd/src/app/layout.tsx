import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Hero3D from "@/components/Hero3D";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techmak Alliance | Technology, Innovation & Industrial Excellence",
  description: "A diversified Bangladeshi business alliance delivering integrated solutions across technology, security, power & energy, engineering, fabrication, defense supply, media, and global sourcing.",
  keywords: [
    "Techmak Alliance",
    "Techmak BD", 
    "Techmak Technology Ltd", 
    "Security Solutions Bangladesh", 
    "Power Infrastructure BD", 
    "Industrial Fabrication Dhaka",
    "IT Solutions Bangladesh"
  ],
  authors: [{ name: "Techmak Alliance" }],
  openGraph: {
    title: "Techmak Alliance | Building Tomorrow Through Excellence",
    description: "A diversified Bangladeshi business alliance delivering integrated solutions across technology, security, power & energy, and global sourcing.",
    url: "https://techmakbd.com",
    siteName: "Techmak Alliance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techmak Alliance | Technology & Industrial Excellence",
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
      <body 
        suppressHydrationWarning 
        className="min-h-screen flex flex-col text-white" 
        style={{ 
          backgroundColor: "#1a0f14",
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 20% 10%, rgba(168,50,72,0.15) 0%, transparent 50%),
            radial-gradient(ellipse 70% 50% at 80% 80%, rgba(196,112,90,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 50% 50%, rgba(139,32,53,0.08) 0%, transparent 60%),
            linear-gradient(175deg, #1a0f14 0%, #1e1218 25%, #221519 50%, #1a0f14 100%)
          `,
          backgroundAttachment: "fixed"
        }}
      >
        {/* Custom Animated Cursor */}
        <CustomCursor />

        {/* Global 3D Plexus Background */}
        <div className="fixed inset-0 z-0 opacity-40 sm:opacity-50 md:opacity-60">
          <Hero3D />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
