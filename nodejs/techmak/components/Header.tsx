import Container from "@/components/Container";
import Logo from "@/components/Logo";
import HeaderMenu from "@/components/HeaderMenu";
import Link from "next/link";

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
      <Container className="flex items-center justify-between py-4">

        {/* Left - Logo */}
        <Logo />

        {/* Center - Menu */}
        <div className="hidden xl:flex">
          <HeaderMenu />
        </div>

        {/* Right - CTA */}
        <Link
          href="/connect"
          className="
            px-7 py-2.5 rounded-full text-sm
            bg-gradient-to-r from-brand-accent to-emerald-400
            hover:from-emerald-400 hover:to-brand-accent
            font-semibold
            border border-[rgba(31,168,154,0.4)]
            backdrop-blur-md
            shadow-[0_0_20px_rgba(31,168,154,0.3)]
            hover:shadow-[0_0_35px_rgba(31,168,154,0.5)]
            transition-all duration-500
            hover:-translate-y-0.5
          "
          style={{ color: "#050B0B" }}
        >
          Let's Connect
        </Link>

      </Container>
    </header>
  );
};

export default Header;