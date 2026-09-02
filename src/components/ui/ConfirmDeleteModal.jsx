import { AlertTriangle } from "lucide-react";

/**
 * Modal konfirmasi hapus generik. Reusable untuk semua fitur CMS
 * (Milestone, Testimoni, Portofolio, Layanan, dst).
 *
 * Pemakaian:
 *   <ConfirmDeleteModal
 *     title="Hapus Milestone?"
 *     description={<>Data <strong>2023 - Mencapai 50+ Proyek Selesai</strong> akan dihapus permanen.</>}
 *     onClose={...}
 *     onConfirm={...}
 *   />
 */
export default function ConfirmDeleteModal({
  title = "Hapus Data Ini?",
  description = "Tindakan ini tidak dapat dibatalkan.",
  confirmLabel = "Ya, Hapus",
  onClose,
  onConfirm,
}) {
  return (
    <div
      className="fixed inset-0 bg-[#1E293B]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-md soft-shadow overflow-hidden text-center p-8"
        style={{ animation: "modalScaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) both" }}
      >
        <div className="w-16 h-16 bg-red-50 text-error rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={32} />
        </div>
        <h3 className="font-headline-md text-xl text-on-surface mb-2">{title}</h3>
        <p className="text-on-surface-variant mb-8">{description}</p>
        <div className="flex flex-col gap-3">
          <button
            onClick={onConfirm}
            className="w-full bg-error hover:bg-[#93000a] text-white py-3 rounded-lg font-bold shadow-md transition-all"
          >
            {confirmLabel}
          </button>
          <button
            onClick={onClose}
            className="w-full bg-transparent border-2 border-surface-variant text-on-surface-variant hover:bg-surface-container py-3 rounded-lg font-bold transition-colors"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}