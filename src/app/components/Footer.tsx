import Link from "next/link";

const SOCIALS = {
  instagram: "https://www.instagram.com/pleasant_pharmacy_bt/",
  facebook: "https://facebook.com/",
  whatsapp: "https://wa.me/265999925400",
};

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Pleasant Pharmacy
          </h3>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Trusted retail pharmacy in Blantyre, Malawi providing prescription
            dispensing, malaria testing, blood pressure monitoring and
            professional pharmacist consultation.
          </p>

          <p className="mt-3 text-sm text-slate-500">
            Blantyre, Malawi
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold text-slate-900">
            Quick Links
          </h4>

          <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/refill">Prescription Refill</Link>
          </div>
        </div>

        {/* Social + Contact */}
        <div>
          <h4 className="text-sm font-semibold text-slate-900">
            Connect
          </h4>

          <div className="mt-4 flex gap-4">

            <a
              href={SOCIALS.instagram}
              target="_blank"
              className="text-slate-600 hover:text-emerald-600 transition"
            >
              Instagram
            </a>

            <a
              href={SOCIALS.facebook}
              target="_blank"
              className="text-slate-600 hover:text-emerald-600 transition"
            >
              Facebook
            </a>

            <a
              href={SOCIALS.whatsapp}
              target="_blank"
              className="text-slate-600 hover:text-emerald-600 transition"
            >
              WhatsApp
            </a>

          </div>

          <p className="mt-4 text-sm text-slate-500">
            Phone: +265 999 925 400
          </p>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-slate-200/60">
        <div className="mx-auto max-w-6xl px-4 py-4 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <span>
            © {new Date().getFullYear()} Pleasant Pharmacy
          </span>

          <span>
            
          </span>
        </div>
      </div>
    </footer>
  );
}