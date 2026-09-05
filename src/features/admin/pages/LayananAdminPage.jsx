import { useState, useEffect } from "react";
import { Plus, ChevronRight, Code2, PenTool, Rocket, Palette } from "lucide-react";
import LayananCard from "../components/layanan/LayananCard";
import LayananModal from "../components/layanan/LayananModal";
import ConfirmDeleteModal from "../../../components/ui/ConfirmDeleteModal";
import { PREDEFINED_SERVICES } from "../components/layanan/predefinedServices";
import {
  getAllLayanan,
  createLayanan,
  updateLayanan,
  deleteLayanan,
} from "../services/layananService";

const ICON_MAP = {
  "web-apps": { icon: Code2, accent: "bg-orange-50 text-primary-container" },
  "ui-ux-design": { icon: PenTool, accent: "bg-blue-50 text-blue-600" },
  "landing-page": { icon: Rocket, accent: "bg-green-50 text-success-green" },
  "graphic-design": { icon: Palette, accent: "bg-purple-50 text-purple-600" },
};

export default function LayananAdminPage() {
  const [layananList, setLayananList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllLayanan();
        setLayananList(data);
      } catch (error) {
        console.error("Gagal memuat data layanan:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

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

  const handleSave = async (form) => {
    try {
      if (editing) {
        const updated = await updateLayanan(editing.slug, form);
        setLayananList((prev) => prev.map((l) => (l.id === editing.id ? updated : l)));
      } else {
        const created = await createLayanan(form);
        setLayananList((prev) => [...prev, created]);
      }
      setShowModal(false);
      setEditing(null);
    } catch (error) {
      console.error("Gagal menyimpan layanan:", error);
      alert("Gagal menyimpan layanan. Silakan coba lagi.");
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteLayanan(deleteTarget.slug);
      setLayananList((prev) => prev.filter((l) => l.id !== deleteTarget.id));
    } catch (error) {
      console.error("Gagal menghapus layanan:", error);
      alert("Gagal menghapus layanan.");
    } finally {
      setDeleteTarget(null);
    }
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