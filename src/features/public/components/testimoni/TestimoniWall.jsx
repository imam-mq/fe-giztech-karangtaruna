import { useState, useEffect } from "react";
import { Star, User } from "lucide-react";
import { getAllTestimoni } from "../../services/testimoniService";

function TestimoniCard({ deskripsi, name, perusahaan, avatar_url, index = 0 }) {
  return (
    <div
      className="mb-5 break-inside-avoid bg-white rounded-2xl p-6 border border-surface-variant soft-shadow"
      style={{ animation: "fadeInUp 0.4s ease-out both", animationDelay: `${index * 60}ms` }}
    >
      <div className="flex text-[#F59E0B] gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </div>

      <p className="font-body-md text-sm text-secondary mb-5">"{deskripsi}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-surface-dim shrink-0 overflow-hidden flex items-center justify-center">
          {avatar_url ? (
            <img src={avatar_url} alt={name} className="w-full h-full object-cover" />
          ) : (
            <User size={16} className="text-on-surface-variant" />
          )}
        </div>
        <div>
          <h4 className="font-headline-md text-sm text-on-surface">{name}</h4>
          <p className="font-body-md text-xs text-on-surface-variant">{perusahaan}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimoniWall() {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllTestimoni();
        setTestimonials(data);
      } catch (error) {
        console.error("Gagal memuat testimoni:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-20 text-center text-secondary">
        Memuat testimoni...
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10">
        {/* Kiri: intro rail (gabungan Hero + label), sticky pas discroll */}
        <div className="md:sticky md:top-28 md:self-start">
          <p className="font-label-md text-label-md text-primary-container uppercase tracking-wider mb-3">
            Testimoni
          </p>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Apa Kata <span className="text-primary-container">Klien</span>{" "}
            Tentang Kami
          </h1>
          <p className="font-body-md text-secondary mb-6">
            Kepuasan klien kami adalah prioritas utama — ini kata mereka.
          </p>

          <div className="flex items-center gap-3 font-label-md text-sm text-on-surface-variant">
            <span className="flex items-center gap-1.5">
              <span className="font-headline-md text-2xl font-bold text-on-surface">
                5.0
              </span>
              <span className="flex text-[#F59E0B] gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
            </span>
            <span className="w-1 h-1 rounded-full bg-on-surface-variant" />
            <span>{testimonials.length}+ Klien Puas</span>
          </div>
        </div>

        {/* Kanan: masonry columns - tinggi kartu ngikutin panjang teks */}
        <div className="columns-1 sm:columns-2 xl:columns-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimoniCard key={t.id} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}