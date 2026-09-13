import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg" | "xl";
};

const sizeClasses = {
  sm: "px-3 h-8 text-sm rounded-md",
  md: "px-4 h-10 text-base rounded-lg",
  lg: "px-5 h-12 text-xl rounded-xl",
  xl: "px-6 h-14 text-2xl rounded-2xl",
};

export default function Button({
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        `flex items-center justify-center bg-rose-700 hover:bg-rose-900 text-white font-sans transition-colors shadow-none active:scale-[0.98] ${sizeClasses[size]} ${className}`,
      )}
    >
      {children}
    </button>
  );
}
