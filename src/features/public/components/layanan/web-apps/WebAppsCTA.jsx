import { Link } from "react-router-dom";

export default function WebAppsCTA() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="bg-[#1E293B] rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary-container rounded-full opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary-container rounded-full opacity-10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-white mb-6">
            Punya Kebutuhan Sistem yang Spesifik?
          </h2>
          <p className="font-body-lg text-body-lg text-gray-300 mb-10">
            Tim ahli kami siap merancang solusi custom yang sesuai dengan
            alur kerja perusahaan Anda.
          </p>
          <Link
            to="/kontak"
            className="inline-block bg-primary-container text-white font-label-md text-label-md px-10 py-4 rounded-xl hover:bg-[#d46618] transition-colors shadow-lg"
          >
            Hubungi Tim Kami
          </Link>
        </div>
      </div>
    </section>
  );
}