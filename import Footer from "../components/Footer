import Link from "next/link";
import { site } from "./site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-base font-bold text-slate-900">{site.name}</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              {site.description}
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-slate-900">Quick links</p>
            <div className="mt-3 grid gap-2 text-sm text-slate-700">
              <Link className="hover:text-slate-900" href="/programs">Programs</Link>
              <Link className="hover:text-slate-900" href="/impact">Impact</Link>
              <Link className="hover:text-slate-900" href="/donate">Donate</Link>
              <Link className="hover:text-slate-900" href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-slate-900">Contact</p>
            <p className="mt-3 text-sm text-slate-700">
              {site.location}
              <br />
              Email:{" "}
              <a className="font-semibold text-teal-700" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <br />
              Phone:{" "}
              <a className="font-semibold text-teal-700" href={`tel:${site.phone}`}>
                {site.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.shortName}. All rights reserved.</p>
          <p>
            Built for community impact. <span className="text-slate-400">|</span>{" "}
            <Link className="hover:text-slate-900" href="/privacy">Privacy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
