"use client";

import Link from "next/link";
import { useMemo } from "react";

// CONTACTS data
const CONTACTS = [
  {
    title: "Pharmacy",
    phoneDisplay: "+265 897 53 32 45",
    phoneTel: "+265897533245",
    phoneWa: "265897533245",
  },
  {
    title: "Pharmacist",
    phoneDisplay: "+265 882 03 53 13",
    phoneTel: "+265882035313",
    phoneWa: "265882035313",
  },
  {
    title: "Manager",
    phoneDisplay: "+265 999 92 54 00",
    phoneTel: "+265999925400",
    phoneWa: "265999925400",
  },
];

// Helper for WhatsApp link/message
function waLink(phoneWa: string, text: string) {
  return `https://wa.me/${phoneWa}?text=${encodeURIComponent(text)}`;
}

// Contact Card
function ContactCard({
  title,
  phoneDisplay,
  phoneTel,
  phoneWa,
}: {
  title: string;
  phoneDisplay: string;
  phoneTel: string;
  phoneWa: string;
}) {
  return (
    <div className="group rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur p-5 shadow-[0_10px_30px_rgba(2,6,23,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(2,6,23,0.10)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-medium text-slate-500">{title}</div>
          <div className="mt-1 text-lg font-semibold tracking-tight text-slate-900">
            {phoneDisplay}
          </div>
        </div>

        <div className="h-10 w-10 rounded-2xl border border-slate-200/60 bg-white/70 grid place-items-center shadow-sm transition group-hover:scale-[1.02]">
          <span className="text-sm">📞</span>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <a
          href={`tel:${phoneTel}`}
          className="flex-1 rounded-2xl bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 hover:-translate-y-px"
        >
          Call
        </a>

        <a
          href={waLink(phoneWa, `Hi Pleasant Pharmacy, I have a query.`)}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-2.5 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white hover:-translate-y-px"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const waMsg = useMemo(
    () => "Hi Pleasant Pharmacy, I have a question about your services.",
    []
  );

  const waRef = waLink(CONTACTS[0].phoneWa, waMsg);

  return (
    <main className="min-h-screen text-slate-900">
      {/* Soft background like the new Home */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-linear-to-b from-emerald-50/70 via-white to-white" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 [background:radial-gradient(900px_500px_at_15%_15%,rgba(16,185,129,0.18),transparent),radial-gradient(900px_500px_at_85%_10%,rgba(59,130,246,0.12),transparent)]" />

      {/* Content Container */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* Page Title */}
        <div className="mb-10 flex flex-col gap-3">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Location • Blantyre, Malawi
          </div>

          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Location & Contact
          </h1>

          <p className="max-w-2xl text-base text-slate-700">
            Get in touch, visit us, or find us on the map below.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={waRef}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto rounded-2xl bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:-translate-y-px"
            >
              Message on WhatsApp
            </a>
            <Link
              href="/"
              className="w-full sm:w-auto rounded-2xl border border-slate-200/70 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white hover:-translate-y-px"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-start">
          {/* Left */}
          <div className="space-y-7">
            <div className="rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
              <h2 className="text-lg font-semibold">Address</h2>
              <p className="mt-3 text-slate-800 text-base leading-relaxed">
                Pleasant Pharmacy
                <br />
                <span className="text-slate-600">
                Mount Pleasant along Mahatma Gandhi Road at Rosewood Mall
                </span>
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
              <h2 className="text-lg font-semibold">Opening Hours</h2>
              <ul className="mt-3 space-y-2 text-slate-800 text-base">
                <li className="flex items-center justify-between gap-3">
                  <span className="text-slate-600">Mon–Fri</span>
                  <span className="font-medium">8:00am – 7:00pm</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="text-slate-600">Sat</span>
                  <span className="font-medium">8:00am – 5:00pm</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="text-slate-600">Sun</span>
                  <span className="font-medium">1:00pm – 5:00pm</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span className="text-slate-600">Holidays</span>
                  <span className="font-medium">8:00am – 12:00pm</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">Contact Numbers</h2>
              <div className="flex flex-col gap-4">
                {CONTACTS.map((c) => (
                  <ContactCard
                    key={c.title}
                    title={c.title}
                    phoneDisplay={c.phoneDisplay}
                    phoneTel={c.phoneTel}
                    phoneWa={c.phoneWa}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur p-4 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
            <div className="flex items-center justify-between px-2 pb-3">
              <h2 className="text-lg font-semibold">Find Us</h2>
              <div className="text-xs text-slate-500">Google Maps</div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-gray-50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d289.92250476912693!2d35.01039078665938!3d-15.80533248612132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d845e3946b49cf%3A0x23d45c8f888878b9!2sPleasant%20Pharmacy!5e1!3m2!1sen!2sus!4v1771634994237!5m2!1sen!2sus"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pleasant Pharmacy Location"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}