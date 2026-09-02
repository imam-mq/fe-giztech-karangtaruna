import { useState } from "react";
import { Plus, ChevronRight, Pencil, Trash2 } from "lucide-react";
import MilestoneModal from "../components/profile/MilestoneModal";
import ConfirmDeleteModal from "../../../components/ui/ConfirmDeleteModal";

// ⚠️ SEMENTARA - data awal sama dengan yang tampil di halaman publik /tentang.
// Begitu backend siap, ganti dengan fetch GET /api/milestones, dan
// handleSave/handleConfirmDelete diganti manggil apiClient.post/put/delete.
const INITIAL_MILESTONES = [
  { id: 1, tahun: "2019", label: "Pendirian GIZ Technology" },
  { id: 2, tahun: "2021", label: "Ekspansi Layanan & Tim" },
  { id: 3, tahun: "2023", label: "Mencapai 50+ Proyek Selesai" },
  { id: 4, tahun: "Sekarang", label: "Partner Utama Transformasi Digital" },
];

export default function MilestonesAdminPage() {
  const [milestones, setMilestones] = useState(INITIAL_MILESTONES);
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const openAddModal = () => {
    setEditing(null);
    setShowModal(true);
  };

  const openEditModal = (milestone) => {
    setEditing(milestone);
    setShowModal(true);
  };

  const handleSave = (form) => {
    if (editing) {
      setMilestones((prev) =>
        prev.map((m) => (m.id === editing.id ? { ...m, ...form } : m))
      );
    } else {
      setMilestones((prev) => [...prev, { ...form, id: Date.now() }]);
    }
    setShowModal(false);
    setEditing(null);
  };

  const handleConfirmDelete = () => {
    setMilestones((prev) => prev.filter((m) => m.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
        <div>
          <nav className="flex items-center gap-1 text-sm text-on-surface-variant mb-2 font-medium">
            <span>Web Profile</span>
            <ChevronRight size={14} />
            <span className="text-primary-container font-semibold">
              Perjalanan Kami
            </span>
          </nav>
          <h1 className="font-headline-md text-2xl text-on-surface">
            Kelola Perjalanan Kami
          </h1>
          <p className="text-on-surface-variant text-sm mt-1">
            Kelola timeline perjalanan perusahaan yang ditampilkan di halaman
            Tentang Kami.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="bg-primary-container hover:bg-[#d46618] text-white px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Plus size={20} />
          Tambah Milestone
        </button>
      </div>

      {/* Timeline - model kartu berbingkai */}
      <div className="bg-white rounded-2xl border border-surface-variant soft-shadow p-8">
        <div className="flex flex-col">
          {milestones.map((m, i) => (
            <div
              key={m.id}
              className="relative flex gap-4"
              style={{
                animation: "fadeInUp 0.4s ease-out both",
                animationDelay: `${i * 60}ms`,
              }}
            >
              {/* Dot + connecting line */}
              <div className="flex flex-col items-center shrink-0">
                <span className="w-3.5 h-3.5 rounded-full bg-primary-container ring-4 ring-primary-container/10 mt-5" />
                <div className="w-0.5 flex-1 bg-surface-variant" />
              </div>

              {/* Card */}
              <div className="group relative flex-1 border border-surface-variant rounded-xl p-4 mb-4 hover:border-primary-container/40 transition-colors">
                <span className="inline-block bg-amber-50 text-amber-600 font-bold text-xs px-3 py-1 rounded-full mb-2">
                  {m.tahun}
                </span>
                <p className="font-semibold text-on-surface">{m.label}</p>

                <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => openEditModal(m)}
                    className="p-2 text-on-surface-variant hover:text-primary-container hover:bg-primary-container/10 rounded-full transition-colors"
                    aria-label={`Edit ${m.tahun}`}
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => setDeleteTarget(m)}
                    className="p-2 text-on-surface-variant hover:text-error hover:bg-red-50 rounded-full transition-colors"
                    aria-label={`Hapus ${m.tahun}`}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Quick-add row */}
          <div className="relative flex gap-4">
            <div className="flex flex-col items-center shrink-0">
              <span className="w-3.5 h-3.5 rounded-full border-2 border-dashed border-outline mt-5 flex items-center justify-center">
                <Plus size={8} className="text-on-surface-variant" />
              </span>
            </div>

            <button
              onClick={openAddModal}
              className="flex-1 border-2 border-dashed border-outline rounded-xl p-4 hover:border-primary-container hover:bg-primary-container/5 transition-colors flex items-center justify-center"
            >
              <span className="text-on-surface-variant text-sm font-medium">
                Klik untuk tambah milestone baru
              </span>
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <MilestoneModal
          milestone={editing}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}

      {deleteTarget && (
        <ConfirmDeleteModal
          title="Hapus Milestone?"
          description={
            <>
              Data <strong>{deleteTarget.tahun} - {deleteTarget.label}</strong>{" "}
              akan dihapus secara permanen.
            </>
          }
          onClose={() => setDeleteTarget(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}