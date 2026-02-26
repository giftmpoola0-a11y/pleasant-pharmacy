import Link from "next/link";

const WHATSAPP_LINK =
  "https://wa.me/265897533245?text=Hi%20Pleasant%20Pharmacy%2C%20I%20have%20a%20question.";

const LEADERSHIP = [
  
  {
    role: "Manager",
    name: "Mrs. A Chiwalo",
    desc: "Operations, service coordination, and making sure every visit is smooth and professional.",
    img: "/team/manager.jpg",
  },
  {
    role: "Pharmacist",
    name: "Mr. Michael Phiri",
    desc: "Prescription review, medication counselling, side-effect guidance, and safe dispensing.",
    img: "/team/pharmacist.jpg",
  },
  {
    role: "Pharmacy Assistant",
    name: "Pharmacy Assistant",
    desc: "Front-desk support, customer care, stock support, and helping you find the right over-the-counter products.",
    img: "/team/pharmacy-assistant.jpg",
  },
  
];

const VALUES = [
  {
    title: "Patient-first care",
    desc: "We listen first, then guide you with clear, safe recommendations.",
    icon: "🤍",
  },
  {
    title: "Fast & reliable service",
    desc: "Quick dispensing, refills, and support—without cutting corners.",
    icon: "⚡",
  },
  {
    title: "Professional & confidential",
    desc: "Respect, privacy, and trusted counselling every time.",
    icon: "🛡️",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen text-slate-900 pb-14">
      {/* Premium background like Home/Contact/Services */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-linear-to-b from-emerald-50/70 via-white to-white" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 [background:radial-gradient(900px_500px_at_15%_15%,rgba(16,185,129,0.18),transparent),radial-gradient(900px_500px_at_85%_10%,rgba(59,130,246,0.12),transparent)]" />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-10">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-3 py-1 text-sm text-slate-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          About • Pleasant Pharmacy
        </div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Where wellness meets care.
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-700 leading-relaxed">
          Pleasant Pharmacy is dedicated to providing modern, patient-centered
          pharmacy care in Blantyre, Malawi — quick dispensing, guidance you can
          trust, and convenient refills.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/refill"
            className="w-full sm:w-auto rounded-2xl bg-slate-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 hover:-translate-y-px"
          >
            Refill Prescription
          </Link>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-2xl bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:-translate-y-px"
          >
            WhatsApp Us
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto rounded-2xl border border-slate-200/70 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white hover:-translate-y-px"
          >
            Location & Contact
          </Link>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur p-7 shadow-[0_10px_30px_rgba(2,6,23,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_55px_rgba(2,6,23,0.10)]">
            <h2 className="text-xl font-bold tracking-tight">Our Mission</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              To provide safe, professional, and friendly pharmacy services that
              help our community stay healthy — through accurate dispensing,
              helpful counselling, and convenient support.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur p-7 shadow-[0_10px_30px_rgba(2,6,23,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_55px_rgba(2,6,23,0.10)]">
            <h2 className="text-xl font-bold tracking-tight">Our Vision</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              To be the most trusted community pharmacy in Blantyre — known for
              reliability, speed, and care that treats every patient like family.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-bold tracking-tight">
          What we stand for
        </h2>
        <p className="mt-2 text-slate-600 max-w-3xl">
          We focus on quality, trust, and consistent service — so you feel
          confident every time you visit.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="group rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur p-7 shadow-[0_10px_30px_rgba(2,6,23,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(2,6,23,0.12)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-lg font-semibold">{v.title}</div>
                <div className="h-11 w-11 rounded-2xl border border-slate-200/70 bg-white/70 grid place-items-center shadow-sm transition group-hover:scale-[1.03]">
                  <span className="text-lg">{v.icon}</span>
                </div>
              </div>
              <p className="mt-3 text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Leadership & Staff
          </h2>
          <p className="text-slate-600 max-w-3xl">
            Meet the people behind Pleasant Pharmacy. Our team is here to help you
            with prescriptions, guidance, refills, and health support.
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
          {LEADERSHIP.map((p) => (
            <div
              key={p.role}
              className="group rounded-3xl border border-slate-200/60 bg-white/70 backdrop-blur p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(2,6,23,0.12)]"
            >
              {/* Portrait frame (like your reference) */}
              <div className="mx-auto w-44 h-60 overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/70 shadow-sm">
                <img
                  src={p.img}
                  alt={`${p.role} photo`}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="mt-5 text-center">
                <div className="text-xs font-semibold text-slate-500">
                  {p.role}
                </div>
                <div className="mt-1 text-lg font-bold tracking-tight">
                  {p.name}
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:-translate-y-px"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200/70 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white hover:-translate-y-px"
          >
            Explore Services →
          </Link>
        </div>
      </section>

      {/* Footer note */}
      <section className="border-t border-slate-200/70">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Pleasant Pharmacy · Blantyre, Malawi
        </div>
      </section>
    </main>
  );
}