import Link from "next/link";
import React from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-teal-700 text-white hover:bg-teal-800 focus-visible:outline-teal-700",
  secondary:
    "bg-slate-900 text-white hover:bg-slate-800 focus-visible:outline-slate-900",
  ghost:
    "bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:outline-slate-300"
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  target
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  target?: "_blank" | "_self";
}) {
  const cls =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-soft transition " +
    variants[variant] +
    " " +
    className;

  const rel = target === "_blank" ? "noreferrer" : undefined;

  return (
    <Link href={href} className={cls} target={target} rel={rel}>
      {children}
    </Link>
  );
}
