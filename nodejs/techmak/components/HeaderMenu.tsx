"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerData } from "@/components/constants/data";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      {headerData.map((item) => {
        // Handle Next.js trailingSlash routing matches
        const isActive = pathname === item.href || pathname === `${item.href}/`;

        return (
          <Link
            key={item.title}
            href={item.href}
            className={`
              relative px-2 py-1 text-sm font-bold whitespace-nowrap
              transition-all duration-300 transform hover:-translate-y-0.5
              before:absolute before:left-0 before:-bottom-1.5
              before:h-[2px] before:w-0 before:rounded-full
              before:bg-gradient-to-r before:from-[#9ff6ff] before:to-[#0ea5c9]
              before:transition-all before:duration-300
              hover:before:w-full hover:drop-shadow-[0_0_10px_rgba(56,197,224,0.5)]
              ${isActive ? "before:w-full drop-shadow-[0_0_8px_rgba(56,197,224,0.4)]" : "opacity-80 hover:opacity-100"}
            `}
          >
            <span style={{
              backgroundImage: isActive 
                ? "linear-gradient(135deg, #ffffff 0%, #9ff6ff 35%, #38c5e0 65%, #0ea5c9 100%)" 
                : "linear-gradient(135deg, #ffffff 0%, #e0faff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block"
            }}>
              {item.title}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default HeaderMenu;