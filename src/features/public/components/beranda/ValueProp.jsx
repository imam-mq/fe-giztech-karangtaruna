import { Gauge, BadgeCheck, Headset } from "lucide-react";

const VALUES = [
  {
    icon: Gauge,
    title: "Cepat & Tanggap",
    description:
      "Tim kami siap merespons kebutuhan Anda dengan cepat tanpa mengorbankan kualitas akhir produk.",
  },
  {
    icon: BadgeCheck,
    title: "Kualitas Terjamin",
    description:
      "Setiap baris kode dan desain melewati proses quality assurance ketat standar industri.",
  },
  {
    icon: Headset,
    title: "Dukungan Penuh",
    description:
      "Kami memberikan garansi dan layanan pemeliharaan berkesinambungan pasca peluncuran.",
  },
];

export default function ValueProp() {
  return (
    <section className="py-24 bg-surface-bright w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Mengapa Memilih{" "}
            <span className="text-primary-container">GIZ Technology?</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Pendekatan kami menggabungkan kreativitas, keahlian teknis, dan
            strategi bisnis untuk memberikan solusi yang tepat sasaran.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon size={36} className="text-primary-container mb-4" />
              <h3 className="font-headline-md text-2xl mb-2 text-on-surface">
                {title}
              </h3>
              <p className="text-on-surface-variant font-body-md">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}