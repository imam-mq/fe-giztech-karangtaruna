import { Lightbulb, ShieldCheck, Users, Smile } from "lucide-react";

const VALUES = [
  { icon: Lightbulb, title: "Inovasi Berkelanjutan" },
  { icon: ShieldCheck, title: "Integritas & Transparansi" },
  { icon: Users, title: "Kolaborasi Tim" },
  { icon: Smile, title: "Kepuasan Klien" },
];

export default function ProfileValues() {
  return (
    <section className="py-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
          Nilai-Nilai Perusahaan
        </h2>
        <p className="font-body-lg text-body-lg text-secondary">
          Prinsip inti yang membimbing setiap langkah kami.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {VALUES.map(({ icon: Icon, title }) => (
          <div
            key={title}
            className="bg-white rounded-3xl p-8 soft-shadow border border-surface-container-highest text-center group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="mx-auto mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-fixed/20 text-primary-container">
              <Icon size={28} />
            </div>
            <h3 className="font-label-md text-label-md text-on-surface mb-2">
              {title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}