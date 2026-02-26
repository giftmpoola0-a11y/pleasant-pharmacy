"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const activeHref = useMemo(() => {
    const hit = NAV.find((n) => isActive(pathname, n.href));
    return hit?.href ?? "/";
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top glow strip */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 opacity-70">
        <div className="mx-auto h-full max-w-7xl px-4">
          <div className="h-full rounded-b-3xl bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_60%)]" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-3">
        <div
          className={[
            "relative flex items-center justify-between rounded-3xl border transition-all duration-300",
            "backdrop-blur-xl",
            scrolled
              ? "bg-white/85 shadow-[0_10px_30px_-18px_rgba(2,6,23,0.35)] border-slate-200"
              : "bg-white/55 border-white/60",
          ].join(" ")}
        >
          {/* subtle gradient inside */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(135deg,rgba(16,185,129,0.10),rgba(14,165,233,0.06),transparent_60%)]" />

          <div className={["relative flex w-full items-center justify-between", scrolled ? "py-2" : "py-3"].join(" ")}>
            {/* Brand */}
            <Link href="/" className="group flex items-center gap-3 pl-4">
              <div className="relative grid place-items-center">
                <div className="absolute -inset-2 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_65%)] opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
                <div className="h-10 w-10 rounded-2xl border border-white/70 bg-white/70 p-1 shadow-sm">
                  <img src="/logo.svg" alt="Pleasant Pharmacy" className="h-full w-full object-contain" />
                </div>
              </div>

              <div className="leading-tight">
                <div className="text-sm font-semibold text-slate-900">
                  Pleasant Pharmacy
                </div>
                <div className="text-xs text-slate-600">Blantyre, Malawi</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-2 pr-2 md:flex">
              <div className="rounded-2xl border border-white/60 bg-white/40 p-1 shadow-sm backdrop-blur">
                <div className="flex items-center gap-1">
                  {NAV.map((item) => {
                    const active = item.href === activeHref;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={[
                          "relative rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60",
                          active
                            ? "bg-slate-900 text-white shadow-[0_10px_25px_-18px_rgba(2,6,23,0.7)]"
                            : "text-slate-700 hover:bg-white/70 hover:text-slate-900",
                        ].join(" ")}
                      >
                        <span className="relative">
                          {item.label}
                          {/* animated underline for hover/active */}
                          <span
                            className={[
                              "absolute -bottom-1 left-0 h-[2px] w-full rounded-full transition-all duration-300",
                              active
                                ? "bg-emerald-400 opacity-90"
                                : "bg-emerald-400 opacity-0 group-hover:opacity-80",
                            ].join(" ")}
                          />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/265897533245?text=Hi%20Pleasant%20Pharmacy%2C%20I%20have%20a%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-md"
              >
                <span className="h-2 w-2 rounded-full bg-white/90" />
                WhatsApp
              </a>
            </nav>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 pr-3 md:hidden">
              <a
                href="https://wa.me/265897533245?text=Hi%20Pleasant%20Pharmacy%2C%20I%20have%20a%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border bg-white/70 px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm"
              >
                WhatsApp
              </a>

              <button
                onClick={() => setOpen((v) => !v)}
                className="grid h-10 w-10 place-items-center rounded-2xl border bg-white/70 shadow-sm"
                aria-label="Toggle menu"
              >
                <div className="relative h-4 w-5">
                  <span
                    className={[
                      "absolute left-0 top-0 h-[2px] w-5 rounded-full bg-slate-900 transition-all duration-300",
                      open ? "translate-y-[7px] rotate-45" : "",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-slate-900 transition-all duration-300",
                      open ? "opacity-0" : "opacity-100",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-slate-900 transition-all duration-300",
                      open ? "-translate-y-[7px] -rotate-45" : "",
                    ].join(" ")}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          <div
            className={[
              "md:hidden overflow-hidden transition-all duration-300",
              open ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <div className="relative border-t border-slate-200/70 px-4 pb-4 pt-3">
              <div className="grid gap-2">
              {NAV.map((item) => {
                    const active = item.href === activeHref;

                    return (
                        <Link
                        key={item.href}
                        href={item.href}
                        className={[
                            "group relative rounded-xl px-4 py-2 text-sm font-semibold",
                            "transition-all duration-200 will-change-transform",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60",

                            // hover float
                            "hover:-translate-y-[2px] hover:shadow-[0_14px_28px_-20px_rgba(2,6,23,0.65)]",

                            // base colors (tech pharmacy)
                            active
                            ? "bg-slate-900 text-white"
                            : "text-slate-700 hover:bg-white/75 hover:text-slate-900",
                        ].join(" ")}
                        >
                        {/* glow behind on hover */}
                        <span
                            className={[
                            "pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-md transition-opacity duration-200",
                            "bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.35),rgba(16,185,129,0.20),transparent_65%)]",
                            "group-hover:opacity-100",
                            active ? "opacity-60" : "",
                            ].join(" ")}
                        />

                        <span className="relative inline-flex items-center gap-2">
                            {item.label}

                            {/* underline slide */}
                            <span
                            className={[
                                "absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-300",
                                "bg-linear-to-r from-sky-400 via-emerald-400 to-sky-400",
                                active ? "w-full" : "group-hover:w-full",
                            ].join(" ")}
                            />
                        </span>
                        </Link>
                    );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}