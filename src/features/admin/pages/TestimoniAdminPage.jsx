import { useState } from "react";
import { Plus, ChevronRight } from "lucide-react";
import TestimonialCard from "../components/testimoni/TestimonialCard";
import TestimonialModal from "../components/testimoni/TestimonialModal";
import ConfirmDeleteModal from "../../../components/ui/ConfirmDeleteModal";

// ⚠️ SEMENTARA - data awal sama dengan yang tampil di halaman publik Testimoni & Beranda.
// Field "perusahaan" untuk Rina & Ahmad masih KOSONG (data lama cuma ada jabatan,
// bukan nama perusahaan) - perlu diisi manual dulu. Begitu backend siap, ganti
// dengan fetch GET /api/testimonials, dan handleSave/handleConfirmDelete
// diganti manggil apiClient.post/put/delete.
const INITIAL_TESTIMONIALS = [
  {
    id: 1,
    name: "Budi Santoso",
    perusahaan: "PT Sejahtera Abadi",
    deskripsi:
      "GIZ Technology sangat responsif dan membantu merealisasikan sistem ERP kami sesuai jadwal. Timnya sangat profesional.",
    avatar: null,
  },
  {
    id: 2,
    name: "Rina Melati",
    perusahaan: "",
    deskripsi:
      "Desain UI/UX yang diberikan sangat modern dan user-friendly. Sangat puas dengan layanan dari tim kreatifnya.",
    avatar: null,
  },
  {
    id: 3,
    name: "Ahmad Wijaya",
    perusahaan: "",
    deskripsi:
      "Support purna jualnya luar biasa. Aplikasi berjalan lancar dan bug langsung ditangani dengan cepat.",
    avatar: null,
  },
];

export default function TestimoniAdminPage() {
  const [testimonials, setTestimonials] = useState(INITIAL_TESTIMONIALS);
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const openAddModal = () => {
    setEditing(null);
    setShowModal(true);
  };

  const openEditModal = (testimonial) => {
    setEditing(testimonial);
    setShowModal(true);
  };

  const handleSave = (form) => {
    if (editing) {
      setTestimonials((prev) =>
        prev.map((t) => (t.id === editing.id ? { ...t, ...form } : t))
      );
    } else {
      setTestimonials((prev) => [...prev, { ...form, id: Date.now() }]);
    }
    setShowModal(false);
    setEditing(null);
  };

  const handleConfirmDelete = () => {
    setTestimonials((prev) => prev.filter((t) => t.id !== deleteTarget.id));
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
            <span className="text-primary-container font-semibold">Testimoni</span>
          </nav>
          <h1 className="font-headline-md text-2xl text-on-surface">Kelola Testimoni</h1>
          <p className="text-on-surface-variant text-sm mt-1">
            Kelola testimoni klien yang ditampilkan di halaman Testimoni dan
            Beranda.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="bg-primary-container hover:bg-[#d46618] text-white px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Plus size={20} />
          Tambah Testimoni
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={t.id}
            testimonial={t}
            index={i}
            onEdit={openEditModal}
            onDelete={setDeleteTarget}
          />
        ))}

        <button
          onClick={openAddModal}
          className="bg-transparent rounded-2xl p-6 border-2 border-dashed border-outline hover:border-primary-container hover:bg-primary-container/5 transition-all duration-300 flex flex-col items-center justify-center min-h-[200px] group"
        >
          <div className="w-14 h-14 rounded-full bg-surface-container-high group-hover:bg-primary-container/10 flex items-center justify-center mb-3 transition-colors">
            <Plus size={24} className="text-on-surface-variant group-hover:text-primary-container" />
          </div>
          <span className="font-headline-md text-sm text-on-surface-variant group-hover:text-primary-container">
            Tambah Testimoni
          </span>
        </button>
      </div>

      {showModal && (
        <TestimonialModal
          testimonial={editing}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}

      {deleteTarget && (
        <ConfirmDeleteModal
          title="Hapus Testimoni?"
          description={
            <>
              Testimoni dari <strong>{deleteTarget.name}</strong> akan dihapus
              secara permanen.
            </>
          }
          onClose={() => setDeleteTarget(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}