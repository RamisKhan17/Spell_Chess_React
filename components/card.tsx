import React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export default function Card({ className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col items-center w-fit h-fit p-6 bg-neutral-900 border border-neutral-800 text-neutral-50 font-sans tracking-tight rounded-2xl shadow-lg hover:border-neutral-600 hover:shadow-2xl hover:scale-105 transition-all duration-300",
        className,
      )}
    />
  );
}
