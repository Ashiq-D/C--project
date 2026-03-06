import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: {
    template: "%s - Techmak Technology Ltd.",
    default: "Techmak Technology Ltd.",
  },
  description: "Techmak Technology Ltd. — A leading provider of surveillance, security, automation, and networking solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen font-poppins antialiased">
        <SmoothScroll>
          <Header />

          <main className="flex-1 flex flex-col">
            {children}
          </main>

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}