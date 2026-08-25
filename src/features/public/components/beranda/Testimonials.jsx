import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "GIZ Technology sangat responsif dan membantu merealisasikan sistem ERP kami sesuai jadwal. Timnya sangat profesional.",
    name: "Budi Santoso",
    role: "CEO, PT Sejahtera Abadi",
  },
  {
    quote:
      "Desain UI/UX yang diberikan sangat modern dan user-friendly. Sangat puas dengan layanan dari tim kreatifnya.",
    name: "Rina Melati",
    role: "Marketing Director",
  },
  {
    quote:
      "Support purna jualnya luar biasa. Aplikasi berjalan lancar dan bug langsung ditangani dengan cepat.",
    name: "Ahmad Wijaya",
    role: "IT Manager",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-bright w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Apa Kata{" "}
            <span className="text-primary-container">Klien Kami</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ quote, name, role }) => (
            <div
              key={name}
              className="bg-white p-6 rounded-2xl shadow-sm border border-surface-variant"
            >
              <div className="flex text-[#F59E0B] mb-4 gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="font-body-md text-on-surface-variant mb-6">
                "{quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-surface-dim rounded-full" />
                <div>
                  <h4 className="font-headline-md text-sm text-on-surface">
                    {name}
                  </h4>
                  <p className="font-body-md text-xs text-on-surface-variant">
                    {role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}