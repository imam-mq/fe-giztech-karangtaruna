import { Link } from "react-router-dom";
import { useReveal } from "../../../../../hooks/useReveal.js";

export default function UiuxPortfolio() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      className={`reveal ${isVisible ? "in" : ""} py-20 bg-white`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-headline-md text-2xl md:text-3xl font-bold text-on-surface">
            Contoh Hasil Kerja Kami
          </h2>
          <Link
            to="/portofolio"
            className="text-primary-container font-label-md text-sm hover:underline whitespace-nowrap ml-4"
          >
            Lihat Semua →
          </Link>
        </div>

        <div
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          <Link
            to="/portofolio"
            className="snap-start shrink-0 w-72 bg-surface-bright rounded-2xl border border-surface-variant overflow-hidden hover:border-primary-container transition-colors"
          >
            <div className="h-40 bg-gradient-to-br from-primary-container/10 to-amber-500/10 flex items-center justify-center text-on-surface-variant text-sm">
              Preview
            </div>
            <div className="p-5">
              <p className="font-label-md text-xs text-primary-container mb-1">
                Design UI/UX · 2022
              </p>
              <h3 className="font-headline-md text-base text-on-surface">
                Aplikasi Booking Klinik Gigi
              </h3>
            </div>
          </Link>

          <Link
            to="/portofolio"
            className="snap-start shrink-0 w-72 bg-surface-bright rounded-2xl border border-surface-variant overflow-hidden hover:border-primary-container transition-colors flex flex-col items-center justify-center text-center p-6"
          >
            <p className="font-headline-md text-lg font-semibold text-on-surface mb-2">
              Studi kasus lainnya ada di fitur portofolio
            </p>
            <p className="font-body-md text-sm text-on-surface-variant">
              Lihat portofolio lengkap kami →
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}