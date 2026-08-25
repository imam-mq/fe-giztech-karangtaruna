import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop w-full">
      <div className="max-w-container-max mx-auto bg-primary-container rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        <h2 className="font-headline-lg text-headline-lg text-white mb-6 relative z-10">
          Siap Transformasi Bisnis Anda?
        </h2>
        <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-2xl mx-auto relative z-10">
          Jadwalkan konsultasi gratis hari ini dan diskusikan ide inovatif
          Anda bersama tim ahli kami.
        </p>
        <Link
          to="/kontak"
          className="inline-block bg-white text-primary-container font-label-md text-label-md px-10 py-4 rounded-xl hover:bg-surface-bright transition-colors shadow-lg relative z-10"
        >
          Hubungi Kami Sekarang
        </Link>
      </div>
    </section>
  );
}