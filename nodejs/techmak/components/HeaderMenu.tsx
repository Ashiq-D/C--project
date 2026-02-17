"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerData } from "@/components/constants/data";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      {headerData.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.title}
            href={item.href}
            className={`
              relative px-2 py-1 text-sm font-medium
              transition-colors duration-300
              ${isActive ? "text-brand-hover" : "text-white"}
              hover:text-brand-hover
              before:absolute before:left-0 before:-bottom-1
              before:h-0.5 before:w-0
              before:bg-brand-hover
              before:transition-all before:duration-300
              hover:before:w-full
              ${isActive ? "before:w-full" : ""}
            `}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default HeaderMenu;