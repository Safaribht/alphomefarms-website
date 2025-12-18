"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";
import { site } from "./site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/media", label: "Media" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" }
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const current = useMemo(() => pathname || "/", [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-soft">
            A
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold text-slate-900">{site.shortName}</p>
            <p className="text-xs text-slate-600">Community Farms</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => {
            const active = current === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "text-sm font-semibold transition " +
                  (active
                    ? "text-teal-700"
                    : "text-slate-700 hover:text-slate-900")
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="md:hidden rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-slate-200 md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            <div className="grid gap-2">
              {links.map((l) => {
                const active = current === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={
                      "rounded-xl px-3 py-2 text-sm font-semibold " +
                      (active
                        ? "bg-teal-50 text-teal-800"
                        : "text-slate-800 hover:bg-slate-50")
                    }
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
