import { Zap, ShieldCheck, Smartphone } from "lucide-react";

const VALUES = [
  {
    icon: Zap,
    title: "Kinerja Maksimal",
    description: "Optimasi kecepatan dan load time untuk kenyamanan pengguna.",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan Terjamin",
    description:
      "Perlindungan data enkripsi tinggi untuk keamanan bisnis Anda.",
  },
  {
    icon: Smartphone,
    title: "Desain Responsif",
    description:
      "Tampilan sempurna di berbagai perangkat, dari desktop hingga mobile.",
  },
];

export default function WebAppsValueProps() {
  return (
    <section className="py-20 bg-surface-bright">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-14">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Keunggulan{" "}
            <span className="text-primary-container">Layanan Kami</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-2xl soft-shadow border border-surface-variant"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center mb-5">
                <Icon size={24} className="text-primary-container" />
              </div>
              <h3 className="font-headline-md text-xl text-on-surface mb-2">
                {title}
              </h3>
              <p className="font-body-md text-secondary">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}