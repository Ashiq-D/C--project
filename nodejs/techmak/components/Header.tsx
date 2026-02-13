import Container from "@/components/Container";
import Logo from "@/components/Logo"
import  HeaderMenu  from "@/components/HeaderMenu";
import { Search } from "lucide-react";

const Header = () => {
  return (
<header className="border-b bg-white">
  <Container className="flex items-center py-4">

    {/* Left - Logo */}
    <div className="flex-1">
      <Logo />
    </div>

    {/* Center - Menu */}
    <div className="flex-1 flex justify-center">
      <HeaderMenu />
    </div>

    {/* Right - Others */}
    <div className="flex-1 flex justify-end">
  <div className="p-2 rounded-full hover:bg-shop-light-blue/10 transition-all duration-300 cursor-pointer">
    <Search
      className="
        w-5 h-5
        text-gray-600
        hover:text-shop-light-blue
        transition-colors duration-300
      "
    />
  </div>
</div>

  </Container>
</header>
  );
};

export default Header;