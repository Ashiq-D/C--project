"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerData } from "@/components/constants/data";

const HeaderMenu = () => {
    const pathname= usePathname();
    console.log(pathname);  
  return (
    <nav className="flex items-center gap-8">
  {headerData.map((item) => (
    <Link
      key={item.title}
      href={item.href}
      className="
        relative px-2 py-1 text-sm font-medium
        text-gray-800
        transition-colors duration-300
        hover:text-shop-light-blue
        before:absolute before:left-0 before:bottom-0.5
        before:h-0.5 before:w-0
        before:bg-blue-800
        before:transition-all before:duration-300
        hover:before:w-full
      "
    >
      {item.title}
    </Link>
  ))}
</nav>
  );
};

export default HeaderMenu;