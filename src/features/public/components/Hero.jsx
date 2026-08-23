import { Link } from "react-router-dom";
import heroImage from "../../../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div className="flex flex-col items-start gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-surface-variant shadow-sm">
            <span className="text-primary-container">⚡</span>
            <span className="font-label-md text-label-md text-on-surface">
              Partner Solusi Digital &amp; IT Terpercaya
            </span>
          </div>

          <h1 className="font-display text-display text-on-surface leading-tight">
            Crafting Digital <br />
            <span className="text-primary-container">Experiences</span> That
            Inspire
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            GIZ Technology menghadirkan solusi teknologi mutakhir untuk
            mendorong transformasi digital bisnis Anda. Inovatif,
            profesional, dan berorientasi pada hasil.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              to="/layanan"
              className="bg-primary-container text-white font-label-md text-label-md px-8 py-4 rounded-xl hover:bg-[#d46618] transition-colors shadow-lg shadow-primary-container/30"
            >
              Lihat Paket Layanan
            </Link>
            <Link
              to="/kontak"
              className="bg-transparent text-on-surface font-label-md text-label-md px-8 py-4 rounded-xl border-2 border-on-surface hover:bg-surface-variant transition-colors"
            >
              Tanya Live Chat
            </Link>
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-surface-variant w-full">
            <div>
              <p className="font-headline-md text-headline-md text-primary-container">
                50+
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Client Partner
              </p>
            </div>
            <div>
              <p className="font-headline-md text-headline-md text-primary-container">
                99%
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Client Satisfaction
              </p>
            </div>
            <div>
              <p className="font-headline-md text-headline-md text-primary-container">
                24/7
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Live Chat
              </p>
            </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative w-full h-[500px] flex justify-center items-center">
          <div className="absolute inset-0 bg-primary-container/5 rounded-full blur-3xl" />
          <img
            src={heroImage}
            alt="GIZ Technology - Ilustrasi solusi digital"
            className="w-full h-full object-contain relative z-10"
          />

          {/* Floating Badge */}
          <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white/20 z-20 flex items-center gap-3 transform rotate-3">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-green opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-success-green" />
            </span>
            <span className="font-label-md text-label-md text-on-surface">
              Live Chat Active via Pusher
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}