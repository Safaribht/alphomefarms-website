import React from "react";

export function Card({
  title,
  eyebrow,
  children
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-slate-700">{children}</div>
    </div>
  );
}
