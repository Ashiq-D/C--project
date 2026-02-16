import Container from "@/components/Container";
import Logo from "@/components/Logo"
import  HeaderMenu  from "@/components/HeaderMenu";
import { Search, User, Bell, ShoppingCart} from "lucide-react";

const Header = () => {
  return (  
    <header className="border-b bg-white">
      <Container className="flex items-center py-4">

        {/* Left - Logo */}
        <div className="flex-1">
          <Logo />
        </div>

        {/* Center - Menu */}
        <div className="flex-1 hidden xl:flex justify-center">
          <HeaderMenu />
        </div>

        {/* Right - Others */}
        <div className="flex-1 flex justify-end items-center gap-6">

          {/* Search */}
          <div className="p-2 rounded-full hover:bg-shop-light-blue/10 transition-all duration-300 cursor-pointer">
            <Search className="w-5 h-5 text-gray-600 hover:text-shop-light-blue transition-colors duration-300"/>
          </div>

          {/* Sign In */}
          <button className="group flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-shop-light-blue">
          <User className="w-5 h-5 transition-colors duration-300" />
          Sign in
          </button>

      

        </div>

      </Container>
    </header>
  );
};

export default Header;