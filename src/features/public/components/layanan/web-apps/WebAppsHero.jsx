import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const PORTFOLIO_PREVIEW = [
  {
    title: "Dashboard Analytics - ASII",
    category: "Website Apps",
    year: "2025",
  },
  {
    title: "Karang Taruna National System",
    category: "Web Application",
    year: "Sedang Berjalan",
  },
];

function PortfolioCard({ title, category, year }) {
  return (
    <Link
      to="/portofolio"
      className="group bg-white border border-surface-variant rounded-2xl p-5 flex items-center gap-4 soft-shadow hover:border-primary-container transition-colors shrink-0"
    >
      <div className="w-20 h-20 shrink-0 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant text-xs text-center px-2">
        Preview
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-label-md text-label-md text-primary-container mb-1">
          {category} · {year}
        </p>
        <h3 className="font-headline-md text-base text-on-surface truncate">
          {title}
        </h3>
      </div>
      <ArrowUpRight
        size={20}
        className="text-on-surface-variant shrink-0 group-hover:text-primary-container transition-colors"
      />
    </Link>
  );
}

export default function WebAppsHero() {
  
  const track = [...PORTFOLIO_PREVIEW, ...PORTFOLIO_PREVIEW];

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 bg-primary-container/10 text-primary-container font-label-md text-label-md uppercase tracking-wider px-4 py-2 rounded-full">
            Web App Development
          </span>

          <h1 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
            Wujudkan Ide Bisnis Anda dengan{" "}
            <span className="text-primary-container">Web App Skalabel</span>
          </h1>

          <p className="font-body-lg text-body-lg text-secondary max-w-lg">
            Kami membangun aplikasi web berkinerja tinggi, aman, dan
            dirancang khusus dengan UX terbaik untuk mempercepat pertumbuhan
            bisnis Anda.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              to="/kontak"
              className="bg-primary-container text-white font-label-md text-label-md px-8 py-4 rounded-xl hover:bg-[#d46618] transition-colors shadow-lg shadow-primary-container/30"
            >
              Konsultasi Proyek
            </Link>
            <a
              href="#paket-harga"
              className="bg-transparent text-on-surface font-label-md text-label-md px-8 py-4 rounded-xl border-2 border-on-surface hover:bg-surface-variant transition-colors"
            >
              Lihat Pilihan Paket
            </a>
          </div>
        </div>

        {/* kanan porto */}
        <div className="flex flex-col gap-4">
          <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
            Contoh Hasil Kerja Kami
          </p>

          <div className="group relative h-[280px] overflow-hidden rounded-2xl">
            {/* Fade gradient atas-bawah */}
            <div className="pointer-events-none absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent z-10" />

            <div className="flex flex-col gap-4 animate-[scrollY_14s_linear_infinite] group-hover:[animation-play-state:paused]">
              {track.map((item, i) => (
                <PortfolioCard key={`${item.title}-${i}`} {...item} />
              ))}
            </div>
          </div>

          <Link
            to="/portofolio"
            className="text-primary-container font-label-md text-sm text-center hover:underline mt-1"
          >
            Lihat Semua Portofolio →
          </Link>
        </div>
      </div>
    </section>
  );
}