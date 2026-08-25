import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function TimCTA() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-24">
      <div className="bg-primary-container rounded-[2rem] p-12 md:p-16 text-center soft-shadow relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <MessageCircle size={40} className="text-white mb-6" fill="currentColor" />
          <h2 className="font-headline-lg text-headline-lg text-white mb-4">
            Tertarik Bekerja Sama dengan Kami?
          </h2>
          <p className="font-body-lg text-body-lg text-white/90 mb-8">
            Diskusikan kebutuhan proyek digital Anda bersama tim profesional
            kami.
          </p>
          <Link
            to="/kontak"
            className="bg-white text-primary-container px-8 py-4 rounded-xl font-label-md hover:bg-surface-container-lowest transition-colors active:scale-95 shadow-lg inline-flex items-center gap-2"
          >
            Hubungi Kami
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}