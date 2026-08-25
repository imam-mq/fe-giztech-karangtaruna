const MILESTONES = [
  { year: "2019", label: "Pendirian GIZ Technology" },
  { year: "2021", label: "Ekspansi Layanan & Tim" },
  { year: "2023", label: "Mencapai 50+ Proyek Selesai" },
  { year: "Sekarang", label: "Partner Utama Transformasi Digital" },
];

export default function ProfileTimeline() {
  return (
    <section className="bg-surface-container-lowest py-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Perjalanan Kami
          </h2>
        </div>

        <div className="relative overflow-hidden p-4 md:p-10">
          {/* Garis tengah - cuma tampil di desktop */}
          <div
            className="hidden md:block absolute border border-secondary/20 h-full"
            style={{ left: "50%" }}
          />

          {MILESTONES.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={item.year}
                className={`mb-8 flex items-center w-full ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                <div
                  className={`order-1 w-1/2 md:w-5/12 ${
                    isEven ? "text-right md:text-right" : "text-right md:text-left"
                  }`}
                >
                  <h4 className="font-label-md text-label-md text-primary-container">
                    {item.year}
                  </h4>
                  <p className="font-body-md text-body-md text-secondary">
                    {item.label}
                  </p>
                </div>
                <div className="z-20 hidden md:flex items-center order-1 bg-primary-container shadow-xl w-4 h-4 rounded-full mx-4 shrink-0" />
                <div className="hidden md:block order-1 w-5/12 px-6 py-4" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}