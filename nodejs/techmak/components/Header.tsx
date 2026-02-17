import Container from "@/components/Container";
import Logo from "@/components/Logo";
import HeaderMenu from "@/components/HeaderMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-brand-primary text-white border-b border-white/10">
      <Container className="flex items-center py-5">

        {/* Left - Logo */}
        <div className="flex-1">
          <Logo />
        </div>

        {/* Center - Menu */}
        <div className="flex-1 hidden xl:flex justify-center">
          <HeaderMenu />
        </div>

        {/* Right - CTA */}
        <div className="flex-1 flex justify-end items-center gap-6">

          <Link
            href="/connect"
            className="
              px-6 py-2 rounded-full 
              bg-brand-accent 
              hover:bg-brand-hover 
              transition duration-300 
              font-semibold
              shadow-lg 
              hover:shadow-brand-hover/40
            "
          >
            Let’s Connect
          </Link>

        </div>

      </Container>
    </header>
  );
};

export default Header;