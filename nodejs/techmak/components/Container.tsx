import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-8xl mx-auto px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;