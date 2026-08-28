import { Link } from "react-router-dom";
import { useReveal } from "../../../../../hooks/useReveal";

const PROJECTS = [
  { title: "Yayasan Nursyifa", year: "2022" },
  { title: "Panti Pelayanan Sosial Lansia Potroyudan", year: "2024" },
];

export default function LandingPortfolio() {
  const { ref, isVisible } = useReveal();
  const track = [...PROJECTS, ...PROJECTS];

  return (
    <section
      ref={ref}
      className={`reveal ${isVisible ? "in" : ""} py-20 bg-surface-bright`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Hasil Kerja <span className="text-primary-container">Kami</span>
          </h2>
          <Link
            to="/portofolio"
            className="text-primary-container font-label-md text-sm hover:underline whitespace-nowrap ml-4"
          >
            Lihat Semua →
          </Link>
        </div>

        <div className="group relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-surface-bright to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-surface-bright to-transparent z-10" />

          <div className="flex items-stretch gap-6 w-max animate-[marquee_22s_linear_infinite] group-hover:[animation-play-state:paused]">
            {track.map(({ title, year }, i) => (
              <Link
                key={`${title}-${i}`}
                to="/portofolio"
                className="shrink-0 w-72 bg-white rounded-2xl border border-surface-variant overflow-hidden hover:border-primary-container transition-colors soft-shadow"
              >
                <div className="h-40 bg-gradient-to-br from-primary-container/10 to-amber-500/10 flex items-center justify-center text-on-surface-variant text-sm">
                  Preview
                </div>
                <div className="p-5">
                  <p className="font-label-md text-xs text-primary-container mb-1">
                    Landing Page · {year}
                  </p>
                  <h3 className="font-headline-md text-base text-on-surface">
                    {title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}