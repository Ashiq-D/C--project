import Link from "next/link";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "inline-block text-2xl font-black tracking-wider font-sans group",
        className
      )}
    >
      <span className="uppercase text-white transition-colors duration-300 group-hover:text-brand-hover">
        Techmak
      </span>
      <span className="lowercase text-brand-accent transition-colors duration-300 group-hover:text-brand-hover">
        ai
      </span>
    </Link>
  );
};

export default Logo;