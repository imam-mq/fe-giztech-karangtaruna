export default function UiuxHero() {
  return (
    <section className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col items-start gap-6 relative z-10">
          <span className="inline-flex items-center gap-2 bg-primary-container/10 text-primary-container font-label-md text-label-md uppercase tracking-wider px-4 py-2 rounded-full">
            UI/UX Design
          </span>

          <h1 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
            Desain yang <span className="gradient-text">Bicara</span>,
            <br />
            Pengalaman yang Membekas
          </h1>

          <p className="font-body-lg text-body-lg text-secondary max-w-lg">
            Kami merancang antarmuka yang intuitif dan pengalaman pengguna
            yang bermakna — dari riset, wireframe, hingga prototype siap
            serah ke developer.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#kontak"
              className="bg-primary-container text-white font-label-md text-label-md px-8 py-4 rounded-xl hover:bg-[#d46618] transition-colors shadow-lg shadow-primary-container/30"
            >
              Konsultasi Desain
            </a>
            <a
              href="#paket-harga"
              className="bg-transparent text-on-surface font-label-md text-label-md px-8 py-4 rounded-xl border-2 border-on-surface hover:bg-surface-variant transition-colors"
            >
              Lihat Paket Harga
            </a>
          </div>
        </div>

        {/* desain mockup */}
        <div className="relative h-[380px] md:h-[440px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-amber-500/5 rounded-[2.5rem]" />

          <div className="relative w-64 h-80 bg-white rounded-2xl border border-surface-variant shadow-xl p-4 -rotate-2">
            <div className="flex gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-2/3 bg-surface-container-low rounded" />
              <div className="h-16 w-full bg-primary-container/10 rounded-lg" />
              <div className="h-3 w-full bg-surface-container-low rounded" />
              <div className="h-3 w-4/5 bg-surface-container-low rounded" />
              <div className="h-10 w-full bg-surface-bright border border-surface-container-low rounded-lg mt-3" />
              <div className="h-10 w-full bg-surface-bright border border-surface-container-low rounded-lg" />
            </div>
          </div>

          <div
            className="absolute top-6 left-0 md:left-4 bg-white shadow-lg rounded-xl px-4 py-2.5 border border-surface-container-low flex items-center gap-2 animate-[float_5s_ease-in-out_infinite]"
            style={{ "--r": "-6deg" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm font-semibold text-on-surface">
              Wireframe
            </span>
          </div>
          <div
            className="absolute bottom-16 right-0 md:right-2 bg-white shadow-lg rounded-xl px-4 py-2.5 border border-surface-container-low flex items-center gap-2 animate-[float_6s_ease-in-out_infinite_0.5s]"
            style={{ "--r": "4deg" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary-container" />
            <span className="text-sm font-semibold text-on-surface">
              Prototype
            </span>
          </div>
          <div
            className="absolute bottom-0 left-4 md:left-10 bg-white shadow-lg rounded-xl px-4 py-2.5 border border-surface-container-low flex items-center gap-2 animate-[float_4.5s_ease-in-out_infinite_1s]"
            style={{ "--r": "-3deg" }}
          >
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-sm font-semibold text-on-surface">
              User Testing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}