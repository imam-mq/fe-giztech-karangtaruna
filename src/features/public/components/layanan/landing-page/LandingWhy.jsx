import { Rocket, Search, Target } from "lucide-react";
import { useReveal } from "../../../../../hooks/useReveal";

const REASONS = [
  {
    icon: Rocket,
    title: "Online Lebih Cepat",
    description: "Proses desain hingga rilis dalam 1-2 minggu.",
  },
  {
    icon: Search,
    title: "SEO Friendly",
    description: "Terindeks mesin pencari sejak hari pertama.",
  },
  {
    icon: Target,
    title: "Fokus Konversi",
    description:
      "Setiap elemen dirancang untuk mengarahkan pengunjung mengambil aksi.",
  },
];

export default function LandingWhy() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      className={`reveal ${isVisible ? "in" : ""} py-20 bg-surface-bright`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-14">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Kenapa <span className="text-primary-container">Landing Page?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REASONS.map(({ icon: Icon, title, description }) => (
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