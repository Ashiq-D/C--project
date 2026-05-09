import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center py-1 group",
        className
      )}
    >
      {/* Logo — mix-blend-mode: screen strips the white background on dark surfaces */}
      <div className="relative w-[160px] h-[45px] md:w-[200px] md:h-[55px] transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(56,197,224,0.8)]">
        <Image
          src="/images/techmak.png"
          alt="Techmak Technology Logo"
          fill
          priority
          sizes="(max-width: 768px) 260px, 330px"
          className="object-contain object-left"
          style={{
            filter: "invert(1) hue-rotate(180deg) brightness(1.2)",
            mixBlendMode: "screen",
          }}
        />
      </div>
    </Link>
  );
};

export default Logo;
