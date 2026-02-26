"use client";

import Link from "next/link";

const SERVICES = [
  {
    name: "Dispensing Drugs",
    desc: "Get your prescriptions and over-the-counter medicines quickly and safely dispensed.",
    icon: "💊",
  },
  {
    name: "Responding to Symptoms",
    desc: "Describe your symptoms and get reliable pharmacy advice and suggested remedies.",
    icon: "🩺",
  },
  {
    name: "Scheduled Prescription Refill",
    desc: "Never miss a dose—set up convenient, recurring medication refills.",
    icon: "🗓️",
  },
  {
    name: "BP & Weight Monitoring",
    desc: "Track your blood pressure and weight with our in-store health checks.",
    icon: "📈",
  },
  {
    name: "Malaria Rapid Test",
    desc: "Fast and reliable malaria testing for prompt diagnosis and reassurance.",
    icon: "🧪",
  },
  {
    name: "Virtual Consultation",
    desc: "Consult our pharmacists online for guidance and recommended next steps.",
    icon: "💬",
  },
];

const WHATSAPP_LINK =
  "https://wa.me/265897533245?text=Hi%20Pleasant%20Pharmacy%2C%20I%20have%20a%20question%20about%20your%20services.";

export default function ServicesPage() {
  return (
    <main className="min-h-screen text-slate-900 pb-20">
      {/* Premium background like Home/Contact */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-linear-to-b from-emerald-50/70 via-white to-white" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 [background:radial-gradient(900px_500px_at_15%_15%,rgba(16,185,129,0.18),transparent),radial-gradient(900px_500px_at_85%_10%,rgba(59,130,246,0.12),transparent)]" />

      {/* Header */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Pharmacy services • Blantyre
        </div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Our Services
        </h1>

        <p className="mt-3 max-w-2xl text-slate-700 text-lg">
          Modern pharmacy care — quick dispensing, guidance, tests, and convenient refills.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-2xl bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:-translate-y-px"
          >
            Ask on WhatsApp
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto rounded-2xl border border-slate-200/70 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white hover:-translate-y-px"
          >
            Location & Contact
          </Link>
        </div>
      </section>

      {/* Services Cards */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc) => (
            <div
              key={svc.name}
              className="group rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(2,6,23,0.12)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-xl font-semibold tracking-tight">
                  {svc.name}
                </div>

                <div className="h-11 w-11 rounded-2xl border border-slate-200/70 bg-white/70 grid place-items-center shadow-sm transition group-hover:scale-[1.03]">
                  <span className="text-lg">{svc.icon}</span>
                </div>
              </div>

              <p className="mt-3 text-slate-600 text-base leading-relaxed">
                {svc.desc}
              </p>

              <div className="mt-5 flex items-center justify-between gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-2xl bg-slate-900 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 hover:-translate-y-px"
                >
                  Ask on WhatsApp
                </a>

                <Link
                  href="/refill"
                  className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white hover:-translate-y-px"
                >
                  Refill →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold tracking-tight">Quick Actions</h2>
            <p className="text-slate-600">
              Need help now? Pick an action and we’ll get you sorted.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/refill"
              className="flex-1 rounded-2xl bg-slate-900 px-6 py-3 text-base font-semibold text-white text-center shadow-sm transition hover:bg-slate-800 hover:-translate-y-px"
            >
              Refill Prescription
            </Link>

            <Link
              href="/contact"
              className="flex-1 rounded-2xl border border-slate-200/70 bg-white/70 px-6 py-3 text-base font-semibold text-slate-900 text-center shadow-sm transition hover:bg-white hover:-translate-y-px"
            >
              Contact Us
            </Link>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-2xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white text-center shadow-sm transition hover:bg-emerald-700 hover:-translate-y-px"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white hover:-translate-y-px"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}