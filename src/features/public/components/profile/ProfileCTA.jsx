import { Link } from "react-router-dom";

export default function ProfileCTA() {
  return (
    <section className="py-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="bg-primary-container rounded-3xl p-12 text-center text-white soft-shadow relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="font-headline-lg text-headline-lg mb-6">
            Siap Berkolaborasi Menuju Era Digital?
          </h2>
          <Link
            to="/kontak"
            className="inline-block bg-white text-primary-container font-label-md text-label-md px-8 py-4 rounded font-bold hover:bg-surface-container-lowest transition-colors shadow-lg active:scale-95"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}