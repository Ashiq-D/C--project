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
      <div className="relative w-[150px] h-[65px] md:w-[180px] md:h-[78px] transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(56,197,224,0.8)]">
        <Image
          src="/images/techmak-logo-vertical.png"
          alt="Techmak Technology Logo"
          fill
          priority
          sizes="(max-width: 768px) 150px, 180px"
          className="object-contain"
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
