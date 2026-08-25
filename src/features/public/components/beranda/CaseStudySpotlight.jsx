import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "Alur Pengajuan, Verifikasi, hingga Approval Terdigitalisasi",
  "Multi-Role: Pusat, Team CSR, Admin & User Karang Taruna",
  "Dashboard Monitoring Real-time",
];

export default function CaseStudySpotlight() {
  return (
    <section className="py-24 bg-surface-bright w-full border-t border-surface-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white aspect-video flex items-center justify-center border border-surface-variant">
            <span className="font-body-md text-on-surface-variant text-sm">
              Preview sistem menyusul
            </span>
          </div>

          <div className="flex flex-col gap-6">
            <span className="inline-flex w-max items-center gap-2 bg-primary-container/10 text-primary-container font-label-md text-label-md uppercase tracking-wider px-4 py-2 rounded-full">
              Proyek Sedang Berjalan
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Karang Taruna National System
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Sistem manajemen aspirasi, usulan, dan pelaporan terpusat untuk
              Karang Taruna dari tingkat kampung hingga pusat — sedang
              dikembangkan oleh tim GIZ Technology untuk mendigitalisasi
              proses yang sebelumnya manual.
            </p>
            <ul className="flex flex-col gap-3 font-body-md text-on-surface-variant">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2
                    size={20}
                    className="text-success-green shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/portofolio"
              className="w-max bg-transparent text-primary-container font-label-md px-6 py-3 rounded-xl border border-primary-container hover:bg-primary-container hover:text-white transition-colors mt-2"
            >
              Lihat Portofolio Lainnya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}