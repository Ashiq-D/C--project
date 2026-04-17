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
      {/* Render the provided vertical logo. Using advanced CSS mix-blend physics to strip the white background on the fly! */}
      <div className="relative w-[130px] h-[55px] md:w-[150px] md:h-[65px] transition-transform duration-500 group-hover:scale-[1.03]">
        <Image
          src="/images/techmak-logo-vertical.png"
          alt="Techmak Technology Logo"
          fill
          priority
          sizes="(max-width: 768px) 130px, 150px"
          className="object-contain"
          style={{
            // CSS Magic: Invert white to black (transparent in screen mode). Invert blue to yellow, then hue-shift yellow to cyberpunk cyan.
            filter: "invert(1) hue-rotate(180deg) brightness(1.5)",
            mixBlendMode: "screen",
          }}
        />
      </div>
    </Link>
  );
};

export default Logo;
