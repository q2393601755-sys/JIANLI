import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  variant?: "default" | "glow" | "dim";
}

export default function Tag({ children, variant = "default" }: TagProps) {
  const variantClass =
    variant === "glow"
      ? "text-glow border-glow/30"
      : variant === "dim"
        ? "text-silver-dark border-white/5"
        : "text-silver";

  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs tracking-wider border border-white/10 rounded-sm ${variantClass}`}
    >
      {children}
    </span>
  );
}
