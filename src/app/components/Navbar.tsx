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

const WHATSAPP =
  "https://wa.me/265999925400?text=Hi%20Pleasant%20Pharmacy%2C%20I%20have%20a%20question.";

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

  // lock body scroll when mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
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
              // lighter blur on mobile, heavier on desktop
              "backdrop-blur md:backdrop-blur-xl",
              scrolled
                ? "bg-white/85 shadow-[0_10px_30px_-18px_rgba(2,6,23,0.35)] border-slate-200"
                : "bg-white/55 border-white/60",
            ].join(" ")}
          >
            {/* subtle gradient inside */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(135deg,rgba(16,185,129,0.10),rgba(14,165,233,0.06),transparent_60%)]" />

            <div
              className={[
                "relative flex w-full items-center justify-between",
                scrolled ? "py-2" : "py-3",
              ].join(" ")}
            >
              {/* Brand */}
              <Link href="/" className="group flex items-center gap-3 pl-4">
                <div className="relative grid place-items-center">
                  <div className="absolute -inset-2 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_65%)] opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="h-10 w-10 rounded-2xl border border-white/70 bg-white/70 p-1 shadow-sm">
                    <img
                      src="/logo.svg"
                      alt="Pleasant Pharmacy"
                      className="h-full w-full object-contain"
                    />
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
                          <span className="relative">{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Desktop CTA */}
                <a
                  href={WHATSAPP}
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
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-2xl border bg-white/70 px-3 text-sm font-semibold text-slate-900 shadow-sm"
                >
                  <span className="sm:hidden">WA</span>
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>

                <button
                  onClick={() => setOpen(true)}
                  className="grid h-10 w-10 place-items-center rounded-2xl border bg-white/70 shadow-sm"
                  aria-label="Open menu"
                >
                  <div className="relative h-4 w-5">
                    <span className="absolute left-0 top-0 h-[2px] w-5 rounded-full bg-slate-900" />
                    <span className="absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-slate-900" />
                    <span className="absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-slate-900" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay sheet */}
      {open && (
        <div
          className="fixed inset-0 z-60 md:hidden"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          {/* Dim */}
          <div className="absolute inset-0 bg-slate-900/35" />

          {/* Sheet */}
          <div className="absolute left-0 right-0 top-0 mx-auto max-w-7xl px-4 pt-3">
            <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_20px_70px_rgba(2,6,23,0.25)]">
              <div className="flex items-center justify-between p-4">
                <div className="text-sm font-semibold text-slate-900">Menu</div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 active:scale-[0.98]"
                >
                  ✕
                </button>
              </div>

              <div className="px-4 pb-4">
                <nav className="grid gap-2">
                  {NAV.map((item) => {
                    const active = item.href === activeHref;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="relative flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                      >
                        <span>{item.label}</span>
                        <span className="text-slate-400">→</span>

                        {active && (
                          <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-emerald-500" />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <a
                    href="tel:+265897533245"
                    className="rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 active:scale-[0.98]"
                  >
                    Call
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:scale-[0.98]"
                  >
                    WhatsApp
                  </a>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                >
                  Location & Hours
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}