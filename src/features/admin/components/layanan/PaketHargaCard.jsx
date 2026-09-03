import { useState } from "react";
import { Pencil, Trash2, CheckCircle2, X, Plus } from "lucide-react";

export default function PaketHargaCard({
  paket,
  onEdit,
  onDelete,
  onTogglePopuler,
  onAddFitur,
  onRemoveFitur,
}) {
  const { nama_paket, harga, tagline, is_populer, fitur } = paket;
  const [newFitur, setNewFitur] = useState("");

  const handleAddFitur = (e) => {
    e.preventDefault();
    if (!newFitur.trim()) return;
    onAddFitur(paket.id, newFitur.trim());
    setNewFitur("");
  };

  return (
    <div
      className={`group relative bg-white rounded-2xl p-6 flex flex-col ${
        is_populer
          ? "border-2 border-primary-container shadow-xl"
          : "border border-surface-variant soft-shadow"
      }`}
    >
      {is_populer && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-container text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
          Paling Populer
        </span>
      )}

      {/* Edit/Delete paket - hover reveal */}
      <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onEdit(paket)}
          className="p-1.5 text-on-surface-variant hover:text-primary-container hover:bg-primary-container/10 rounded-full transition-colors"
          aria-label={`Edit paket ${nama_paket}`}
        >
          <Pencil size={14} />
        </button>
      </div>

      <div className="flex items-center justify-between mb-1 pr-8">
        <h3 className="font-headline-md text-lg text-on-surface">{nama_paket}</h3>
      </div>
      <p className="text-on-surface-variant text-xs mb-3">{tagline}</p>
      <p className="font-headline-md text-2xl font-bold text-primary mb-4">{harga}</p>

      {/* Toggle Paling Populer - hover reveal */}
      <button
        onClick={() => onTogglePopuler(paket.id)}
        className="flex items-center gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-on-surface-variant"
      >
        <span
          className={`relative w-8 h-4.5 rounded-full transition-colors ${
            is_populer ? "bg-primary-container" : "bg-surface-variant"
          }`}
        >
          <span
            className={`absolute top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow transition-transform ${
              is_populer ? "translate-x-4" : "translate-x-0.5"
            }`}
          />
        </span>
        Tandai Paling Populer
      </button>

      {/* Feature list */}
      <ul className="flex flex-col gap-2 mb-4 flex-1">
        {fitur.map((f) => (
          <li
            key={f.id}
            className="group/fitur flex items-start justify-between gap-2 text-sm text-on-surface-variant"
          >
            <span className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-success-green shrink-0 mt-0.5" />
              {f.fitur_text}
            </span>
            <button
              onClick={() => onRemoveFitur(paket.id, f.id)}
              className="opacity-0 group-hover/fitur:opacity-100 text-on-surface-variant hover:text-error transition-all shrink-0"
              aria-label={`Hapus fitur ${f.fitur_text}`}
            >
              <X size={14} />
            </button>
          </li>
        ))}
      </ul>

      {/* Inline add feature */}
      <form onSubmit={handleAddFitur} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newFitur}
          onChange={(e) => setNewFitur(e.target.value)}
          placeholder="Tambah fitur..."
          className="flex-1 min-w-0 bg-surface-bright border border-surface-variant rounded-lg px-3 py-1.5 text-xs text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors"
        />
        <button
          type="submit"
          className="shrink-0 p-1.5 bg-primary-container/10 text-primary-container rounded-lg hover:bg-primary-container/20 transition-colors"
          aria-label="Tambah fitur"
        >
          <Plus size={16} />
        </button>
      </form>

      <button
        onClick={() => onDelete(paket)}
        className="text-error text-xs font-medium hover:underline self-end mt-auto"
      >
        Hapus Paket
      </button>
    </div>
  );
}