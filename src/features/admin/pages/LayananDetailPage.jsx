import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Plus, ChevronRight, ArrowLeft } from "lucide-react";
import PaketHargaCard from "../components/layanan/PaketHargaCard";
import PaketHargaModal from "../components/layanan/PaketHargaModal";
import ConfirmDeleteModal from "../../../components/ui/ConfirmDeleteModal";
import { INITIAL_PACKAGES } from "../components/layanan/initialPackages";
import { PREDEFINED_SERVICES } from "../components/layanan/predefinedServices";

export default function LayananDetailPage() {
  const { slug } = useParams();
  const [packages, setPackages] = useState(INITIAL_PACKAGES[slug] ?? []);
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const layananInfo = PREDEFINED_SERVICES.find((s) => s.slug === slug);
  const namaLayanan = layananInfo?.nama_layanan ?? slug;

  const openAddModal = () => {
    setEditing(null);
    setShowModal(true);
  };

  const openEditModal = (paket) => {
    setEditing(paket);
    setShowModal(true);
  };

  const handleSave = (form) => {
    if (editing) {
      setPackages((prev) =>
        prev.map((p) => (p.id === editing.id ? { ...p, ...form } : p))
      );
    } else {
      setPackages((prev) => [
        ...prev,
        { ...form, id: Date.now(), is_populer: false, fitur: [] },
      ]);
    }
    setShowModal(false);
    setEditing(null);
  };

  const handleConfirmDelete = () => {
    setPackages((prev) => prev.filter((p) => p.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  const handleTogglePopuler = (paketId) => {
    setPackages((prev) =>
      prev.map((p) => ({ ...p, is_populer: p.id === paketId ? !p.is_populer : false }))
    );
  };

  const handleAddFitur = (paketId, text) => {
    setPackages((prev) =>
      prev.map((p) =>
        p.id === paketId
          ? { ...p, fitur: [...p.fitur, { id: Date.now(), fitur_text: text }] }
          : p
      )
    );
  };

  const handleRemoveFitur = (paketId, fiturId) => {
    setPackages((prev) =>
      prev.map((p) =>
        p.id === paketId
          ? { ...p, fitur: p.fitur.filter((f) => f.id !== fiturId) }
          : p
      )
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <nav className="flex items-center gap-1 text-sm text-on-surface-variant mb-2 font-medium">
          <Link to="/admin/web-profile/layanan" className="hover:text-primary-container">
            Web Profile
          </Link>
          <ChevronRight size={14} />
          <Link to="/admin/web-profile/layanan" className="hover:text-primary-container">
            Layanan & Paket
          </Link>
          <ChevronRight size={14} />
          <span className="text-primary-container font-semibold">{namaLayanan}</span>
        </nav>

        <Link
          to="/admin/web-profile/layanan"
          className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-primary-container transition-colors mb-3"
        >
          <ArrowLeft size={14} />
          Kembali ke Layanan
        </Link>

        <div className="flex justify-between items-end flex-wrap gap-4">
          <h1 className="font-headline-md text-2xl text-on-surface">
            Paket Harga - {namaLayanan}
          </h1>
          {packages.length < 3 && (
            <button
              onClick={openAddModal}
              className="bg-primary-container hover:bg-[#d46618] text-white px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Plus size={20} />
              Tambah Paket
            </button>
          )}
        </div>
      </div>

      {/* Grid paket */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {packages.map((p) => (
          <PaketHargaCard
            key={p.id}
            paket={p}
            onEdit={openEditModal}
            onDelete={setDeleteTarget}
            onTogglePopuler={handleTogglePopuler}
            onAddFitur={handleAddFitur}
            onRemoveFitur={handleRemoveFitur}
          />
        ))}

        {packages.length < 3 && (
          <button
            onClick={openAddModal}
            className="bg-transparent rounded-2xl p-6 border-2 border-dashed border-outline hover:border-primary-container hover:bg-primary-container/5 transition-all duration-300 flex flex-col items-center justify-center min-h-[320px] group"
          >
            <div className="w-12 h-12 rounded-full bg-surface-container-high group-hover:bg-primary-container/10 flex items-center justify-center mb-3 transition-colors">
              <Plus size={22} className="text-on-surface-variant group-hover:text-primary-container" />
            </div>
            <span className="font-headline-md text-sm text-on-surface-variant group-hover:text-primary-container">
              Tambah Paket
            </span>
          </button>
        )}
      </div>

      {showModal && (
        <PaketHargaModal
          paket={editing}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}

      {deleteTarget && (
        <ConfirmDeleteModal
          title="Hapus Paket?"
          description={
            <>
              Paket <strong>{deleteTarget.nama_paket}</strong> beserta semua
              fiturnya akan dihapus secara permanen.
            </>
          }
          onClose={() => setDeleteTarget(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}