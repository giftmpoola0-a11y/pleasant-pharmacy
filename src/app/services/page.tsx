"use client";

import Link from "next/link";
import Image from "next/image";

const WHATSAPP_LINK =
  "https://wa.me/265897533245?text=Hi%20Pleasant%20Pharmacy%2C%20I%20have%20a%20question%20about%20your%20services.";

type Service = {
  name: string;
  desc: string;
  img: { src: string; alt: string };
  secondary: { label: string; href: string };
};

const SERVICES: Service[] = [
  {
    name: "Dispensing Drugs",
    desc: "Get your prescriptions and over-the-counter medicines quickly and safely dispensed.",
    img: { src: "/images/dispensing.jpg", alt: "Pharmacist dispensing medicine" },
    secondary: { label: "Contact →", href: "/contact" },
  },
  {
    name: "Responding to Symptoms",
    desc: "Describe your symptoms and get reliable pharmacy advice and suggested remedies.",
    img: { src: "/images/symptoms.jpg", alt: "Pharmacy consultation" },
    secondary: { label: "Contact →", href: "/contact" },
  },
  {
    name: "Scheduled Prescription Refill",
    desc: "Never miss a dose—set up convenient, recurring medication refills.",
    img: { src: "/images/refill.jpg", alt: "Prescription refill" },
    secondary: { label: "Refill →", href: "/refill" },
  },
  {
    name: "BP & Weight Monitoring",
    desc: "Track your blood pressure and weight with our in-store health checks.",
    img: { src: "/images/bp.png", alt: "Blood pressure monitoring" },
    secondary: { label: "Visit Us →", href: "/contact" },
  },
  {
    name: "Malaria Rapid Test",
    desc: "Fast and reliable malaria testing for prompt diagnosis and reassurance.",
    img: { src: "/images/malaria-test.jfif", alt: "Malaria rapid test" },
    secondary: { label: "Visit Us →", href: "/contact" },
  },
  {
    name: "Virtual Consultation",
    desc: "Consult our pharmacists online for guidance and recommended next steps.",
    img: { src: "/images/virtual.jpg", alt: "Virtual consultation" },
    secondary: { label: "Contact →", href: "/contact" },
  },
];

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

      {/* Picture Cards */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc) => (
            <div
              key={svc.name}
              className="group overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur shadow-[0_10px_30px_rgba(2,6,23,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(2,6,23,0.12)]"
            >
              {/* Image */}
              <div className="relative h-44 w-full">
                <Image
                  src={svc.img.src}
                  alt={svc.img.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={false}
                />
                {/* Soft overlay for readability */}
                <div className="absolute inset-0 bg-linear-to-t from-white/75 via-white/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xl font-semibold tracking-tight">{svc.name}</div>

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
                    href={svc.secondary.href}
                    className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white hover:-translate-y-px"
                  >
                    {svc.secondary.label}
                  </Link>
                </div>
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