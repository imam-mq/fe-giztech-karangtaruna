export default function PortofolioHero() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-12 md:pt-28 md:pb-16 text-center">
      <h1 className="font-headline-lg text-headline-lg text-on-surface mb-4">
        Karya yang Berbicara{" "}
        <span className="text-primary-container">Lebih dari Kata-kata</span>
      </h1>
      <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-6">
        Kumpulan proyek yang telah kami kerjakan — dari sistem enterprise
        hingga landing page yang mengonversi.
      </p>
      <div className="flex items-center justify-center gap-3 font-label-md text-sm text-on-surface-variant">
        <span>50+ Proyek</span>
        <span className="w-1 h-1 rounded-full bg-on-surface-variant" />
        <span>6 Tahun</span>
        <span className="w-1 h-1 rounded-full bg-on-surface-variant" />
        <span>20+ Klien</span>
      </div>
    </section>
  );
}