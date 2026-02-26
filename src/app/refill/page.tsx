"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";

const PHARMACY_WA = "265897533245";
const PHARMACY_TEL = "+265897533245";

function buildWaMsg(name: string, phone: string, medications: string, notes: string) {
  return (
    `Hi Pleasant Pharmacy, I’d like a prescription refill.\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Medication(s): ${medications}\n` +
    `Notes: ${notes || "-"}`
  );
}

export default function PrescriptionRefill() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [medications, setMedications] = useState("");
  const [notes, setNotes] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const waQuickMsg = useMemo(
    () => "Hi Pleasant Pharmacy, I’d like help with a refill.",
    []
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    if (!name.trim() || !phone.trim() || !medications.trim()) {
      setErrorMsg("Please fill in your name, phone number, and medication(s).");
      return;
    }

    const msg = buildWaMsg(name, phone, medications, notes);
    const waUrl = `https://wa.me/${PHARMACY_WA}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");

    setName("");
    setPhone("");
    setMedications("");
    setNotes("");
    formRef.current?.reset();

    setSuccessMsg("Refill request sent! We’ll confirm shortly on WhatsApp or phone.");
  }

  return (
    <main className="min-h-screen text-slate-900">
      {/* Premium background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-linear-to-b from-emerald-50/70 via-white to-white" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 [background:radial-gradient(900px_500px_at_15%_15%,rgba(16,185,129,0.18),transparent),radial-gradient(900px_500px_at_85%_10%,rgba(59,130,246,0.12),transparent)]" />

      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
          {/* Left: intro / trust */}
          <div className="lg:pt-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Refill request • Pleasant Pharmacy
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Prescription Refill
            </h1>

            <p className="mt-4 max-w-xl text-lg text-slate-700 leading-relaxed">
              Submit your refill request in seconds. We’ll confirm shortly and guide you on the next steps.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur p-4 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
                <div className="text-sm font-semibold">Fast</div>
                <div className="text-xs text-slate-600 mt-1">Quick confirmation</div>
              </div>
              <div className="rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur p-4 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
                <div className="text-sm font-semibold">Private</div>
                <div className="text-xs text-slate-600 mt-1">Handled discreetly</div>
              </div>
              <div className="rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur p-4 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
                <div className="text-sm font-semibold">Easy</div>
                <div className="text-xs text-slate-600 mt-1">WhatsApp supported</div>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${PHARMACY_WA}?text=${encodeURIComponent(waQuickMsg)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto rounded-2xl bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:-translate-y-px"
              >
                Message on WhatsApp
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-2xl border border-slate-200/70 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white hover:-translate-y-px"
              >
                Location & Contact
              </Link>
            </div>
          </div>

          {/* Right: form card */}
          <div className="rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur p-6 md:p-7 shadow-[0_18px_60px_rgba(2,6,23,0.10)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  Refill details
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Required fields are marked with <span className="text-red-500">*</span>
                </p>
              </div>

              <div className="h-12 w-12 rounded-2xl border border-slate-200/70 bg-white/70 grid place-items-center shadow-sm">
                <span className="text-lg">🧾</span>
              </div>
            </div>

            <form
              ref={formRef}
              className="mt-6 space-y-5"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-4 focus:ring-emerald-200/40"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  autoComplete="tel"
                  placeholder="+265 ..."
                  className="w-full rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-4 focus:ring-emerald-200/40"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="medications" className="block text-sm font-semibold text-slate-900 mb-1">
                  Medication(s) <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="medications"
                  name="medications"
                  required
                  rows={3}
                  className="w-full resize-none rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-4 focus:ring-emerald-200/40"
                  value={medications}
                  onChange={(e) => setMedications(e.target.value)}
                  placeholder="E.g. Amoxicillin 500mg, Paracetamol 500mg..."
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-slate-900 mb-1">
                  Notes <span className="text-slate-400 text-xs">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={2}
                  className="w-full resize-none rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-4 focus:ring-emerald-200/40"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Allergies, preferred pickup time, instructions..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-900 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-slate-800 hover:-translate-y-px"
              >
                Send Refill Request
              </button>
            </form>

            {/* Messages */}
            {errorMsg && (
              <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 font-medium text-center">
                {errorMsg}
              </div>
            )}

            {successMsg && (
              <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 font-medium text-center">
                {successMsg}
              </div>
            )}

            {/* Footer actions */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${PHARMACY_TEL}`}
                className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-center font-semibold text-slate-900 shadow-sm transition hover:bg-white hover:-translate-y-px"
              >
                Call Pharmacy
              </a>

              <Link
                href="/"
                className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-center font-semibold text-slate-900 shadow-sm transition hover:bg-white hover:-translate-y-px"
              >
                Back to Home
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-500 text-center">
              If this is an emergency, please contact local emergency services.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}