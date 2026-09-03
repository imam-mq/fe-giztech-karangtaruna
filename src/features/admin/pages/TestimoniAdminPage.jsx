import { useState, useEffect } from "react";
import { Plus, ChevronRight } from "lucide-react";
import TestimonialCard from "../components/testimoni/TestimonialCard";
import TestimonialModal from "../components/testimoni/TestimonialModal";
import ConfirmDeleteModal from "../../../components/ui/ConfirmDeleteModal";
import {
  getAllTestimoni,
  createTestimoni,
  updateTestimoni,
  deleteTestimoni,
} from "../services/testimoniService";

export default function TestimoniAdminPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllTestimoni();
        setTestimonials(data);
      } catch (error) {
        console.error("Gagal memuat data testimoni:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const openAddModal = () => {
    setEditing(null);
    setShowModal(true);
  };

  const openEditModal = (testimonial) => {
    setEditing({
      id: testimonial.id,
      name: testimonial.name,
      perusahaan: testimonial.perusahaan,
      deskripsi: testimonial.deskripsi,
      avatar: testimonial.avatar_url,
      avatarFile: null,
    });
    setShowModal(true);
  };

  const handleSave = async (form) => {
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("perusahaan", form.perusahaan);
      formData.append("deskripsi", form.deskripsi);
      if (form.avatarFile) formData.append("avatar", form.avatarFile);

      if (editing) {
        const updated = await updateTestimoni(editing.id, formData);
        setTestimonials((prev) => prev.map((t) => (t.id === editing.id ? updated : t)));
      } else {
        const created = await createTestimoni(formData);
        setTestimonials((prev) => [...prev, created]);
      }

      setShowModal(false);
      setEditing(null);
    } catch (error) {
      console.error("Gagal menyimpan testimoni:", error);
      alert("Gagal menyimpan testimoni. Silakan coba lagi.");
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteTestimoni(deleteTarget.id);
      setTestimonials((prev) => prev.filter((t) => t.id !== deleteTarget.id));
    } catch (error) {
      console.error("Gagal menghapus testimoni:", error);
      alert("Gagal menghapus testimoni.");
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