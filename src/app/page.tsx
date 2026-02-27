"use client";

import Link from "next/link";

const CONTACTS = {
  pharmacy: { phoneTel: "+265897533245" },
  pharmacist: { phoneTel: "+265882035313" },
  manager: { phoneTel: "+265999925400" },
};

const WHATSAPP = "https://wa.me/265897533245?text=Hi%20Pleasant%20Pharmacy%2C%20I%20would%20like%20to%20inquire.";

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
      <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 12l2 2 4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconSpark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="pp-page min-h-screen text-slate-900">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 pp-pill text-slate-700">
              <span className="text-emerald-600"><IconShield /></span>
              <span className="text-sm font-medium">Licensed pharmacy • Blantyre, Malawi</span>
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight leading-[1.03]">
              Where wellness meets <span className="text-emerald-700">care</span>.
            </h1>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
              Modern pharmacy support in Blantyre — quick dispensing, symptom help, tests, and convenient refills.
            </p>
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/60 shadow-[0_18px_55px_rgba(2,6,23,0.10)]">
              <div className="relative">
                {/* Image */}
                <img
                  src="/images/hero.jpg"
                  alt="Pleasant Pharmacy"
                  className="h-[260px] w-full object-cover"
                />

                {/* Soft overlay tint */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-emerald-600/10 via-transparent to-sky-500/10" />

                {/* Glass label */}
                <div className="absolute left-4 bottom-4 rounded-2xl border border-white/50 bg-white/70 px-4 py-2 backdrop-blur">
                  <div className="text-xs font-semibold text-slate-700">Pleasant Pharmacy</div>
                  <div className="text-[13px] text-slate-600">Blantyre, Malawi</div>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href="/refill" className="pp-btn-primary text-center">
                Refill Prescription
              </Link>

              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="pp-btn-ghost text-center">
                WhatsApp Us
              </a>

              <Link href="/contact" className="pp-btn-ghost text-center">
                Virtual Consultation
              </Link>
            </div>

            {/* Mini stats */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="pp-glass pp-noise rounded-2xl px-4 py-3 flex items-center gap-3">
                <span className="text-cyan-600"><IconSpark /></span>
                <div>
                  <div className="text-sm font-semibold">Fast service</div>
                  <div className="text-xs text-slate-600">Quick dispensing</div>
                </div>
              </div>
              <div className="pp-glass pp-noise rounded-2xl px-4 py-3 flex items-center gap-3">
                <span className="text-emerald-600"><IconClock /></span>
                <div>
                  <div className="text-sm font-semibold">Easy refills</div>
                  <div className="text-xs text-slate-600">WhatsApp supported</div>
                </div>
              </div>
              <div className="pp-glass pp-noise rounded-2xl px-4 py-3 flex items-center gap-3">
                <span className="text-slate-800"><IconShield /></span>
                <div>
                  <div className="text-sm font-semibold">Trusted care</div>
                  <div className="text-xs text-slate-600">Patient-first</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="pp-card pp-glow p-6 md:p-7">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-500 font-medium">Services</div>
                <div className="text-2xl font-bold mt-1">What we can help with</div>
              </div>
              <div className="pp-pill text-xs text-slate-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Available today
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              {SERVICES.map((s) => (
                <div key={s} className="pp-glass pp-noise rounded-2xl px-4 py-3 flex items-center justify-between">
                  <div className="font-medium">{s}</div>
                  <div className="text-emerald-600">↗</div>
                </div>
              ))}
            </div>

            <div className="mt-6 pp-glass pp-noise rounded-2xl p-5">
              <div className="text-sm font-semibold">Quick actions</div>
              <div className="mt-3 flex flex-col sm:flex-row gap-3">
                <Link href="/refill" className="pp-btn-primary text-center w-full">
                  Refill Request
                </Link>
                <Link href="/contact" className="pp-btn-ghost text-center w-full">
                  Location & Contact
                </Link>
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
              className="pp-card pp-glow p-5"
              style={{ textDecoration: "none" }}
            >
              <div className="text-sm text-slate-500">{c.label}</div>
              <div className="mt-1 text-lg font-bold">{c.number}</div>
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

