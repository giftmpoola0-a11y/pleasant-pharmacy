"use client";

import Image from "next/image";

type Props = {
  src?: string;
  poster?: string;
  headline: React.ReactNode;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  whatsappHref?: string;
};

export default function HeroVideo({
  src = "/images/pleasant.mp4",
  poster = "/images/pleasant-poster.png",
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  whatsappHref,
}: Props) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-10 pb-10">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 shadow-[0_18px_55px_rgba(2,6,23,0.12)]">
        {/* Video layer */}
        <div className="relative h-[440px] w-full sm:h-[520px]">
          {/* Poster fallback */}
          <Image
            src={poster}
            alt="Pleasant Pharmacy"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1024px"
          />

          {/* Autoplay video */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            playsInline
            muted
            loop
            preload="metadata"
            poster={poster}
          >
            <source src={src} type="video/mp4" />
          </video>

          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-linear-to-b from-slate-900/55 via-slate-900/25 to-white/10" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_20%,rgba(16,185,129,0.25),transparent_60%)]" />
        </div>

        {/* Content layer */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-6 sm:p-10">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Blantyre, Malawi • Retail Pharmacy
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {headline}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {subheadline}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={primaryCta.href}
                className="w-full sm:w-auto rounded-2xl bg-emerald-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:-translate-y-px"
              >
                {primaryCta.label}
              </a>

              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="w-full sm:w-auto rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 hover:-translate-y-px"
                >
                  {secondaryCta.label}
                </a>
              )}

              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto rounded-2xl bg-slate-900/70 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur transition hover:bg-slate-900/85 hover:-translate-y-px"
                >
                  WhatsApp Us
                </a>
              )}
            </div>

            <p className="mt-4 text-xs text-white/70">
              Tip: Video is muted to save data and keep browsing smooth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}