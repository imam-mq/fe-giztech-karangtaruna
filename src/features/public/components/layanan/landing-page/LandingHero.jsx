import { useState } from "react";
import { Rocket } from "lucide-react";

export default function LandingHero() {
  const [device, setDevice] = useState("desktop");

  return (
    <section className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 bg-primary-container/10 text-primary-container font-label-md text-label-md uppercase tracking-wider px-4 py-2 rounded-full">
            Landing Page / Custom
          </span>

          <h1 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
            Landing Page Cepat Online,{" "}
            <span className="text-primary-container">Siap Konversi</span>
          </h1>

          <p className="font-body-lg text-body-lg text-secondary max-w-lg">
            Desain responsif, SEO-friendly, dan dioptimalkan untuk mengubah
            pengunjung jadi pelanggan — online dalam hitungan hari, bukan
            bulan.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#kontak"
              className="bg-primary-container text-white font-label-md text-label-md px-8 py-4 rounded-xl hover:bg-[#d46618] transition-colors shadow-lg shadow-primary-container/30"
            >
              Mulai Proyek
            </a>
            <a
              href="#paket-harga"
              className="bg-transparent text-on-surface font-label-md text-label-md px-8 py-4 rounded-xl border-2 border-on-surface hover:bg-surface-variant transition-colors"
            >
              Lihat Paket Harga
            </a>
          </div>
        </div>

        {/* Device switcher mockup */}
        <div className="relative h-[420px] md:h-[460px] flex flex-col items-center justify-center gap-6">
          {/* Floating launch badge */}
          <div className="absolute -top-2 md:top-2 right-4 md:right-10 z-20 bg-white shadow-lg rounded-full pl-3 pr-4 py-2 border border-surface-variant flex items-center gap-2 animate-bounce">
            <Rocket size={16} className="text-primary-container" />
            <span className="text-xs font-semibold text-on-surface whitespace-nowrap">
              Siap Online dalam 7 Hari
            </span>
          </div>

          {/* Toggle tabs */}
          <div className="relative z-10 inline-flex bg-surface-container-low rounded-full p-1 border border-surface-variant">
            <button
              onClick={() => setDevice("desktop")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                device === "desktop"
                  ? "bg-primary-container text-white"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Desktop
            </button>
            <button
              onClick={() => setDevice("mobile")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                device === "mobile"
                  ? "bg-primary-container text-white"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Mobile
            </button>
          </div>

          {/* Mockup crossfade */}
          <div className="relative w-full flex-1 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent rounded-[2rem]" />

            {/* Desktop mockup */}
            <div
              className={`absolute transition-all duration-500 ease-out ${
                device === "desktop"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="w-72 md:w-80 bg-white rounded-xl border border-surface-variant shadow-xl overflow-hidden">
                <div className="flex gap-1.5 px-3 py-2 bg-surface-container-low border-b border-surface-variant">
                  <div className="w-2 h-2 rounded-full bg-red-300" />
                  <div className="w-2 h-2 rounded-full bg-amber-300" />
                  <div className="w-2 h-2 rounded-full bg-green-300" />
                </div>
                <div className="p-4 space-y-2">
                  <div className="h-3 w-1/2 bg-surface-container-low rounded" />
                  <div className="h-20 w-full bg-primary-container/10 rounded-lg" />
                  <div className="flex gap-2">
                    <div className="h-8 flex-1 bg-surface-bright border border-surface-container-low rounded" />
                    <div className="h-8 flex-1 bg-surface-bright border border-surface-container-low rounded" />
                    <div className="h-8 flex-1 bg-surface-bright border border-surface-container-low rounded" />
                  </div>
                  <div className="h-9 w-1/3 bg-primary-container rounded-lg" />
                </div>
              </div>
            </div>

            {/* Mobile mockup */}
            <div
              className={`absolute transition-all duration-500 ease-out ${
                device === "mobile"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="w-44 bg-white rounded-2xl border border-surface-variant shadow-xl overflow-hidden">
                <div className="flex justify-center py-2 bg-surface-container-low border-b border-surface-variant">
                  <div className="w-10 h-1.5 rounded-full bg-surface-variant" />
                </div>
                <div className="p-3 space-y-2">
                  <div className="h-2.5 w-1/2 bg-surface-container-low rounded" />
                  <div className="h-24 w-full bg-primary-container/10 rounded-lg" />
                  <div className="h-2.5 w-full bg-surface-container-low rounded" />
                  <div className="h-2.5 w-3/4 bg-surface-container-low rounded" />
                  <div className="h-8 w-full bg-primary-container rounded-lg mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}