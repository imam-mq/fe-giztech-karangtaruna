import { Link } from "react-router-dom";
import { Pencil, Trash2, ArrowRight } from "lucide-react";
import { formatCurrency } from "../../../../utils/formatCurrency";

export default function LayananCard({ layanan, onEdit, onDelete, index }) {
  const { nama_layanan, slug, deskripsi_singkat, harga_mulai_dari, icon: Icon, accent } =
    layanan;

  return (
    <Link
      to={`/admin/web-profile/layanan/${slug}`}
      className="group relative block bg-white rounded-2xl p-6 border border-surface-variant soft-shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      style={{ animation: "fadeInUp 0.4s ease-out both", animationDelay: `${index * 60}ms` }}
    >
      {/* Edit/Delete - hover reveal, jangan trigger navigasi kartu */}
      <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={(e) => {
            e.preventDefault();
            onEdit(layanan);
          }}
          className="p-2 text-on-surface-variant hover:text-primary-container hover:bg-primary-container/10 rounded-full transition-colors"
          aria-label={`Edit ${nama_layanan}`}
        >
          <Pencil size={16} />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            onDelete(layanan);
          }}
          className="p-2 text-on-surface-variant hover:text-error hover:bg-red-50 rounded-full transition-colors"
          aria-label={`Hapus ${nama_layanan}`}
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${accent}`}>
        <Icon size={20} />
      </div>

      <h3 className="font-headline-md text-base text-on-surface mb-0.5">
        {nama_layanan}
      </h3>
      <p className="text-on-surface-variant text-xs font-mono mb-3">{slug}</p>
      <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">
        {deskripsi_singkat}
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-surface-variant">
        <p className="text-primary-container font-bold text-sm">
          Mulai Dari {formatCurrency(harga_mulai_dari)}
        </p>
        <span className="inline-flex items-center gap-1 text-on-surface-variant text-xs font-semibold group-hover:text-primary-container transition-colors">
          Kelola Paket Harga
          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}