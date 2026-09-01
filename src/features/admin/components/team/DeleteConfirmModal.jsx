import { AlertTriangle } from "lucide-react";

export default function DeleteConfirmModal({ member, onClose, onConfirm }) {
  if (!member) return null;

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
        <h3 className="font-headline-md text-xl text-on-surface mb-2">
          Hapus Anggota Tim?
        </h3>
        <p className="text-on-surface-variant mb-8">
          Tindakan ini tidak dapat dibatalkan. Data profil{" "}
          <strong>{member.name}</strong> akan dihapus secara permanen dari
          sistem.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={onConfirm}
            className="w-full bg-error hover:bg-[#93000a] text-white py-3 rounded-lg font-bold shadow-md transition-all"
          >
            Ya, Hapus
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