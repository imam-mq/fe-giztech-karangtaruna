import { User, Pencil, Trash2, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial, onEdit, onDelete, index }) {
  const { name, perusahaan, deskripsi, avatar_url: avatar } = testimonial;

  return (
    <div
      className="group relative bg-white rounded-2xl p-6 border border-surface-variant soft-shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      style={{ animation: "fadeInUp 0.4s ease-out both", animationDelay: `${index * 60}ms` }}
    >
      <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onEdit(testimonial)}
          className="p-2 text-on-surface-variant hover:text-primary-container hover:bg-primary-container/10 rounded-full transition-colors"
          aria-label={`Edit testimoni ${name}`}
        >
          <Pencil size={16} />
        </button>
        <button
          onClick={() => onDelete(testimonial)}
          className="p-2 text-on-surface-variant hover:text-error hover:bg-red-50 rounded-full transition-colors"
          aria-label={`Hapus testimoni ${name}`}
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full border-2 border-surface-container-low bg-surface-container-high flex items-center justify-center overflow-hidden shrink-0">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <User size={20} className="text-on-surface-variant" />
          )}
        </div>
        <div className="min-w-0">
          <h3 className="font-headline-md text-base text-on-surface truncate">{name}</h3>
          <p className="text-primary-container text-xs font-semibold truncate">
            {perusahaan || (
              <span className="text-error italic">Perusahaan belum diisi</span>
            )}
          </p>
        </div>
      </div>

      <div className="relative pl-1">
        <Quote size={22} className="text-primary-container/15 absolute -top-1 -left-1" />
        <p className="text-on-surface-variant text-sm leading-relaxed relative z-10 pl-4">
          "{deskripsi}"
        </p>
      </div>
    </div>
  );
}