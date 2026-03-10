import Link from "next/link";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-3 group",
        className
      )}
    >
      {/* Icon Mark */}
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-accent to-emerald-400 flex items-center justify-center border border-[rgba(31,168,154,0.4)] backdrop-blur-md shadow-[0_0_15px_rgba(31,168,154,0.3)] group-hover:shadow-[0_0_30px_rgba(31,168,154,0.6)] group-hover:scale-110 transition-all duration-500 animate-glow">
        <span className="text-sm font-black tracking-wider" style={{ color: "#050B0B" }}>TM</span>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-[0.15em] uppercase" style={{ color: "#ffffff" }}>
          TECHMAK
        </span>
        <span className="text-[0.55rem] font-normal tracking-[0.25em] uppercase mt-[2px]" style={{ color: "#1FA89A" }}>
          Technology Ltd.
        </span>
      </div>
    </Link>
  );
};

export default Logo;
