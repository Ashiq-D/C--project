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
      <span className="uppercase text-blue-800 transition-colors duration-300 group-hover:text-blue-400">
        Techmak
      </span>
      <span className="lowercase text-blue-400 transition-colors duration-300 group-hover:text-blue-700">
        ai
      </span>
    </Link>
  );
};

export default Logo;