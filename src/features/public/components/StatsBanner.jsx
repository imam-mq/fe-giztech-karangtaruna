const STATS = [
  { value: "6+", label: "Tahun Pengalaman" },
  { value: "50+", label: "Proyek Selesai" },
  { value: "20+", label: "Klien Aktif" },
  { value: "6", label: "Praktisi Ahli" },
];

export default function StatsBanner() {
  return (
    <section className="bg-[#1E293B] py-16 w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-display text-primary-container">
                {value}
              </p>
              <p className="font-label-md text-label-md text-white mt-2 uppercase tracking-wider">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}