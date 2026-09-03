import { useState } from "react";
import { Plus, ChevronRight, Code2, PenTool, Rocket, Palette } from "lucide-react";
import LayananCard from "../components/layanan/LayananCard";
import LayananModal from "../components/layanan/LayananModal";
import ConfirmDeleteModal from "../../../components/ui/ConfirmDeleteModal";
import { PREDEFINED_SERVICES } from "../components/layanan/predefinedServices";

// Icon & warna aksen per slug - cuma dipakai visual admin, dipetakan manual
const ICON_MAP = {
  "web-apps": { icon: Code2, accent: "bg-orange-50 text-primary-container" },
  "ui-ux-design": { icon: PenTool, accent: "bg-blue-50 text-blue-600" },
  "landing-page": { icon: Rocket, accent: "bg-green-50 text-success-green" },
  "graphic-design": { icon: Palette, accent: "bg-purple-50 text-purple-600" },
};

// ⚠️ SEMENTARA - data awal sama dengan yang tampil di halaman publik /layanan.
// Begitu backend siap, ganti dengan fetch GET /api/layanan, dan
// handleSave/handleConfirmDelete manggil apiClient.post/put/delete.
const INITIAL_LAYANAN = [
  {
    id: 1,
    nama_layanan: "Web Apps Development",
    slug: "web-apps",
    deskripsi_singkat: "Aplikasi web skalabel, aman, dan berkinerja tinggi.",
    harga_mulai_dari: "Rp5.000.000",
  },
  {
    id: 2,
    nama_layanan: "UI/UX Design",
    slug: "ui-ux-design",
    deskripsi_singkat:
      "Riset, wireframe, hingga prototype siap developer handoff.",
    harga_mulai_dari: "Rp500.000",
  },
  {
    id: 3,
    nama_layanan: "Landing Page / Custom",
    slug: "landing-page",
    deskripsi_singkat:
      "Desain responsif, SEO-friendly, dioptimalkan untuk konversi.",
    harga_mulai_dari: "Rp2.000.000",
  },
  {
    id: 4,
    nama_layanan: "Graphic Design & Logo",
    slug: "graphic-design",
    deskripsi_singkat:
      "Identitas visual, logo, dan material branding yang memikat.",
    harga_mulai_dari: "Rp300.000",
  },
];

export default function LayananAdminPage() {
  const [layananList, setLayananList] = useState(INITIAL_LAYANAN);
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  // Layanan dari daftar tetap yang BELUM ada di layananList
  const availableServices = PREDEFINED_SERVICES.filter(
    (s) => !layananList.some((l) => l.slug === s.slug)
  );

  const openAddModal = () => {
    setEditing(null);
    setShowModal(true);
  };

  const openEditModal = (layanan) => {
    setEditing(layanan);
    setShowModal(true);
  };

  const handleSave = (form) => {
    if (editing) {
      setLayananList((prev) =>
        prev.map((l) => (l.id === editing.id ? { ...l, ...form } : l))
      );
    } else {
      setLayananList((prev) => [...prev, { ...form, id: Date.now() }]);
    }
    setShowModal(false);
    setEditing(null);
  };

  const handleConfirmDelete = () => {
    setLayananList((prev) => prev.filter((l) => l.id !== deleteTarget.id));
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
              Layanan & Paket
            </span>
          </nav>
          <h1 className="font-headline-md text-2xl text-on-surface">
            Kelola Layanan & Paket
          </h1>
          <p className="text-on-surface-variant text-sm mt-1">
            Kelola {layananList.length} layanan dan paket harga yang
            ditampilkan di halaman Layanan & Paket.
          </p>
        </div>

        <button
          onClick={openAddModal}
          disabled={availableServices.length === 0}
          className="bg-primary-container hover:bg-[#d46618] text-white px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary-container"
        >
          <Plus size={20} />
          Tambah Layanan
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {layananList.map((l, i) => (
          <LayananCard
            key={l.id}
            layanan={{ ...l, ...ICON_MAP[l.slug] }}
            index={i}
            onEdit={openEditModal}
            onDelete={setDeleteTarget}
          />
        ))}

        {availableServices.length > 0 && (
          <button
            onClick={openAddModal}
            className="bg-transparent rounded-2xl p-6 border-2 border-dashed border-outline hover:border-primary-container hover:bg-primary-container/5 transition-all duration-300 flex flex-col items-center justify-center min-h-[180px] group"
          >
            <div className="w-12 h-12 rounded-full bg-surface-container-high group-hover:bg-primary-container/10 flex items-center justify-center mb-3 transition-colors">
              <Plus size={22} className="text-on-surface-variant group-hover:text-primary-container" />
            </div>
            <span className="font-headline-md text-sm text-on-surface-variant group-hover:text-primary-container">
              Tambah Layanan
            </span>
            <span className="text-xs text-on-surface-variant mt-1 text-center max-w-[200px]">
              {availableServices.length} layanan tersedia untuk ditambahkan.
            </span>
          </button>
        )}
      </div>

      {showModal && (
        <LayananModal
          layanan={editing}
          availableServices={availableServices}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}

      {deleteTarget && (
        <ConfirmDeleteModal
          title="Hapus Layanan?"
          description={
            <>
              Layanan <strong>{deleteTarget.nama_layanan}</strong> beserta
              semua paket harganya akan dihapus secara permanen.
            </>
          }
          onClose={() => setDeleteTarget(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}