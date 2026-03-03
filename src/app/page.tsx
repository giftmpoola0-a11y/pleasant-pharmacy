"use client";

import Link from "next/link";
import Image from "next/image";

const WHATSAPP_LINK =
  "https://wa.me/265897533245?text=Hi%20Pleasant%20Pharmacy%2C%20I%20have%20a%20question.";

const CONTACTS = {
  pharmacy: { phoneTel: "+265897533245" },
  pharmacist: { phoneTel: "+265882035313" },
  manager: { phoneTel: "+265999925400" },
};

const WHATSAPP =
  "https://wa.me/265897533245?text=Hi%20Pleasant%20Pharmacy%2C%20I%20would%20like%20to%20inquire.";

const SERVICES = [
  "Dispensing drugs",
  "Responding to symptoms",
  "Scheduled prescription refill",
  "BP & Weight monitoring",
  "Malaria rapid test",
  "Virtual consultation",
];

function IconShield() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9 12l2 2 4-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 6v6l4 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen text-slate-900 pb-20">
      {/* Premium background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-linear-to-b from-emerald-50/70 via-white to-white" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 [background:radial-gradient(900px_500px_at_15%_15%,rgba(16,185,129,0.18),transparent),radial-gradient(900px_500px_at_85%_10%,rgba(59,130,246,0.12),transparent)]" />

      <section className="relative mx-auto max-w-6xl px-4 pt-14 pb-10">
        
        {/* HERO ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm">
              <span className="text-emerald-600">
                <IconShield />
              </span>
              <span className="text-sm font-medium">
                Licensed pharmacy • Blantyre, Malawi
              </span>
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight leading-[1.03]">
              Where wellness meets <span className="text-emerald-700">care</span>.
            </h1>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
              Modern pharmacy support in Blantyre — quick dispensing, symptom
              help, tests, and convenient refills.
            </p>

            {/* Main hero image */}
            <div className="mt-8 group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/60 shadow-[0_20px_65px_-20px_rgba(2,6,23,0.25)] transition-all duration-500 hover:shadow-[0_30px_85px_-25px_rgba(2,6,23,0.45)]">
              <div className="relative h-[280px] md:h-[360px] lg:h-[400px] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/hero.webp"
                  alt="Pleasant Pharmacy storefront"
                  fill
                  priority
                  className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:brightness-[1.06]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Stronger premium gradient */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-emerald-600/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Soft radial glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-70 transition duration-500 bg-[radial-gradient(600px_300px_at_30%_20%,rgba(16,185,129,0.25),transparent_60%)]" />

                <div className="absolute left-4 bottom-4 rounded-2xl border border-white/50 bg-white/70 px-4 py-2 backdrop-blur">
                  <div className="text-xs font-semibold text-slate-700">
                    Pleasant Pharmacy
                  </div>
                  <div className="text-[13px] text-slate-600">
                    Blantyre, Malawi
                  </div>
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                href="/refill"
                className="w-full sm:w-auto rounded-2xl bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:-translate-y-px"
              >
                Refill Prescription
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto rounded-2xl border border-slate-200/70 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white hover:-translate-y-px"
              >
                Explore Services
              </Link>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto rounded-2xl bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 hover:-translate-y-px"
              >
                WhatsApp Us
              </a>
            </div>

            {/* Mini stats */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur px-4 py-3 shadow-sm flex items-center gap-3 transition hover:-translate-y-[2px] hover:shadow-[0_14px_28px_-22px_rgba(2,6,23,0.45)]">
                <span className="text-cyan-600">
                  <IconSpark />
                </span>
                <div>
                  <div className="text-sm font-semibold">Fast service</div>
                  <div className="text-xs text-slate-600">Quick dispensing</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur px-4 py-3 shadow-sm flex items-center gap-3 transition hover:-translate-y-[2px] hover:shadow-[0_14px_28px_-22px_rgba(2,6,23,0.45)]">
                <span className="text-emerald-600">
                  <IconClock />
                </span>
                <div>
                  <div className="text-sm font-semibold">Easy refills</div>
                  <div className="text-xs text-slate-600">WhatsApp supported</div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur px-4 py-3 shadow-sm flex items-center gap-3 transition hover:-translate-y-[2px] hover:shadow-[0_14px_28px_-22px_rgba(2,6,23,0.45)]">
                <span className="text-slate-800">
                  <IconShield />
                </span>
                <div>
                  <div className="text-sm font-semibold">Trusted care</div>
                  <div className="text-xs text-slate-600">Patient-first</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            className={[
              "group relative overflow-hidden rounded-3xl border backdrop-blur",
              "bg-white/70 border-slate-200/60",
              "p-6 md:p-7",
              "shadow-[0_15px_45px_-25px_rgba(2,6,23,0.25)]",
              "transition-all duration-500",
              "hover:-translate-y-1 hover:shadow-[0_30px_85px_-30px_rgba(2,6,23,0.45)]",
              // ✅ whole-card green-ish feel
              "hover:bg-emerald-50/50 hover:border-emerald-200/70",
            ].join(" ")}
          >
            {/* ✅ whole-card glow overlays */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {/* soft emerald wash */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(14,165,233,0.08),transparent_60%)]" />
              {/* radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_15%,rgba(16,185,129,0.22),transparent_60%)]" />
            </div>

            {/* keep content above overlays */}
            <div className="relative">
              {/* Services header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm text-slate-500 font-medium">Services</div>
                  <div className="text-2xl font-bold mt-1">What we can help with</div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-3 py-1 text-xs text-slate-600 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Available today
                </div>
              </div>

              {/* Services list */}
              <div className="mt-6 grid grid-cols-1 gap-3">
                {SERVICES.map((s) => (
                  <div
                    key={s}
                    className={[
                      "group/item relative overflow-hidden rounded-2xl border border-slate-200/60",
                      "bg-white/70 backdrop-blur px-4 py-3 shadow-sm",
                      "flex items-center justify-between",
                      "transition-all duration-300 will-change-transform",
                      "hover:-translate-y-[2px] hover:shadow-[0_18px_40px_-22px_rgba(2,6,23,0.55)]",
                      // ✅ row green-ish feel
                      "hover:bg-emerald-50/70 hover:border-emerald-200/70",
                    ].join(" ")}
                  >
                    <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100 bg-[linear-gradient(135deg,rgba(16,185,129,0.14),rgba(14,165,233,0.08),transparent_55%)]" />

                    <div className="relative font-medium text-slate-900">{s}</div>
                    <div className="relative text-emerald-600 transition-transform duration-200 group-hover/item:translate-x-px">
                      ↗
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick actions */}
              <div className="mt-6 rounded-2xl border border-slate-200/60 bg-white/70 p-5 shadow-sm">
                <div className="text-sm font-semibold">Quick actions</div>

                <div className="mt-3 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/refill"
                    className="w-full rounded-2xl bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 hover:-translate-y-px"
                  >
                    Refill Request
                  </Link>

                  <Link
                    href="/contact"
                    className="w-full rounded-2xl border border-slate-200/70 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white hover:-translate-y-px"
                  >
                    Location & Contact
                  </Link>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block w-full rounded-2xl bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:-translate-y-px"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ VIDEO STRIP (between hero row and contacts) */}
        <div className="mt-10 rounded-3xl border border-slate-200/60 bg-white/60 shadow-[0_18px_55px_rgba(2,6,23,0.08)] overflow-hidden">
          <div className="relative h-[220px] md:h-[320px] lg:h-[360px]">
            <video
              className="absolute inset-0 h-full w-full object-cover object-center"
              autoPlay
              playsInline
              muted
              loop
              preload="metadata"
              poster="/video/inside-poster.jpg"
            >
              <source src="/images/pleasant.mp4" type="video/mp4" />
            </video>

            {/* overlays for text readability */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-slate-900/55 via-slate-900/20 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_25%_20%,rgba(16,185,129,0.22),transparent_60%)]" />

            {/* text + CTA overlay */}
            <div className="relative h-full p-6 md:p-10 flex items-end">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs text-white/90 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Inside Pleasant Pharmacy
                </div>

                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Right here in Blantyre.
                </h2>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/services"
                    className="w-full sm:w-auto rounded-2xl bg-white/90 px-6 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white hover:-translate-y-px"
                  >
                    Explore Services →
                  </Link>

                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact mini cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Pharmacy", number: CONTACTS.pharmacy.phoneTel },
            { label: "Pharmacist", number: CONTACTS.pharmacist.phoneTel },
            { label: "Manager", number: CONTACTS.manager.phoneTel },
          ].map((c) => (
            <a
              key={c.label}
              href={`tel:${c.number}`}
              className="rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur p-5 shadow-[0_10px_30px_rgba(2,6,23,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(2,6,23,0.12)]"
              style={{ textDecoration: "none" }}
            >
              <div className="text-sm text-slate-500">{c.label}</div>
              <div className="mt-1 text-lg font-bold text-slate-900">
                {c.number}
              </div>
              <div className="mt-2 text-sm text-slate-600">Tap to call</div>
            </a>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-500">
          For emergencies, please contact local emergency services.
        </p>
      </section>
    </main>
  );
}