import { Eye, Flag } from "lucide-react";

export default function ProfileVisiMisi() {
  return (
    <section className="bg-surface-container-lowest py-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi */}
          <div className="bg-white rounded-3xl p-8 soft-shadow border border-surface-container-highest relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-primary-container transition-colors duration-300" />
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-fixed/20 text-primary-container">
              <Eye size={24} />
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Visi Kami
            </h2>
            <p className="font-body-md text-body-md text-secondary">
              "Menjadi katalisator utama digitalisasi bisnis di Indonesia
              melalui solusi teknologi yang inovatif dan andal."
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-3xl p-8 soft-shadow border border-surface-container-highest relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-primary-container transition-colors duration-300" />
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-fixed/20 text-primary-container">
              <Flag size={24} />
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
              Misi Kami
            </h2>
            <p className="font-body-md text-body-md text-secondary">
              "Menyediakan layanan pengembangan perangkat lunak berkualitas
              tinggi, konsultasi IT yang solutif, serta membangun kemitraan
              jangka panjang yang bernilai tambah bagi klien."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}