import Container from "@/components/Container";
import Logo from "@/components/Logo";
import HeaderMenu from "@/components/HeaderMenu";
import MobileMenu from "@/components/MobileMenu";
import Link from "next/link";
import { Facebook, Linkedin, Youtube, Instagram, ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/[0.06]"
      style={{
        background: "rgba(7, 26, 26, 0.92)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
      }}
    >
      <Container className="flex items-center justify-between py-2">

        {/* Left - Logo */}
        <Logo />

        {/* Center - Desktop Menu */}
        <div className="hidden xl:flex">
          <HeaderMenu />
        </div>

        {/* Right - CTA (desktop) + Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-4 mr-2">
            <Link href="https://www.facebook.com/share/1JN7pB5bYm/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2 border border-[#38c5e0] rounded-full text-[#38c5e0] hover:text-white hover:bg-[#38c5e0] transition-all duration-300">
              <Facebook size={24} strokeWidth={2} />
            </Link>
            {/*
            <Link href="https://linkedin.com" target="_blank" className="text-[#38c5e0] hover:text-white transition-colors">
              <Linkedin size={18} strokeWidth={2} />
            </Link>
            <Link href="https://youtube.com" target="_blank" className="text-[#38c5e0] hover:text-white transition-colors">
              <Youtube size={18} strokeWidth={2} />
            </Link> 
            <Link href="https://instagram.com" target="_blank" className="text-[#38c5e0] hover:text-white transition-colors">
              <Instagram size={18} strokeWidth={2} />
            </Link>
            */}
          </div>

          {/* Mobile Hamburger Menu */}
          <MobileMenu />
        </div>

      </Container>
    </header>
  );
};

export default Header;