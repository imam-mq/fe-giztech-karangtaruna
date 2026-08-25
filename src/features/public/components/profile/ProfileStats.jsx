const STATS = [
  { value: "6+", label: "Klien Aktif" },
  { value: "50+", label: "Proyek Selesai" },
  { value: "20+", label: "Ahli IT & Developer" },
  { value: "6+", label: "Tahun Pengalaman" },
];

export default function ProfileStats() {
  return (
    <section className="bg-inverse-surface py-16">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x md:divide-glass-border">
          {STATS.map(({ value, label }) => (
            <div key={label} className="px-4">
              <div className="font-headline-lg text-headline-lg text-white mb-2">
                {value}
              </div>
              <div className="font-label-md text-label-md text-secondary-fixed-dim uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}