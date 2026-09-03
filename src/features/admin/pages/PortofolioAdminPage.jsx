import { useState } from "react";
import { Plus, ChevronRight } from "lucide-react";
import ProjectCard from "../components/portofolio/ProjectCard";
import ProjectModal from "../components/portofolio/ProjectModal";
import ConfirmDeleteModal from "../../../components/ui/ConfirmDeleteModal";
import { PROJECTS } from "../../public/components/layanan/portofolio/data/projects";

const INITIAL_PROJECTS = PROJECTS.map((p, i) => ({ ...p, id: i + 1 }));

export default function PortofolioAdminPage() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const openAddModal = () => {
    setEditing(null);
    setShowModal(true);
  };

  const openEditModal = (project) => {
    setEditing(project);
    setShowModal(true);
  };

  const handleSave = (form) => {
    if (editing) {
      setProjects((prev) =>
        prev.map((p) => (p.id === editing.id ? { ...p, ...form } : p))
      );
    } else {
      setProjects((prev) => [...prev, { ...form, id: Date.now() }]);
    }
    setShowModal(false);
    setEditing(null);
  };

  const handleConfirmDelete = () => {
    setProjects((prev) => prev.filter((p) => p.id !== deleteTarget.id));
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
            <span className="text-primary-container font-semibold">Portofolio</span>
          </nav>
          <h1 className="font-headline-md text-2xl text-on-surface">Kelola Portofolio</h1>
          <p className="text-on-surface-variant text-sm mt-1">
            Kelola proyek yang ditampilkan di halaman Portofolio.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="bg-primary-container hover:bg-[#d46618] text-white px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Plus size={20} />
          Tambah Proyek
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.id}
            project={p}
            index={i}
            onEdit={openEditModal}
            onDelete={setDeleteTarget}
          />
        ))}

        <button
          onClick={openAddModal}
          className="bg-transparent rounded-2xl p-6 border-2 border-dashed border-outline hover:border-primary-container hover:bg-primary-container/5 transition-all duration-300 flex flex-col items-center justify-center min-h-[240px] group"
        >
          <div className="w-14 h-14 rounded-full bg-surface-container-high group-hover:bg-primary-container/10 flex items-center justify-center mb-3 transition-colors">
            <Plus size={24} className="text-on-surface-variant group-hover:text-primary-container" />
          </div>
          <span className="font-headline-md text-sm text-on-surface-variant group-hover:text-primary-container">
            Tambah Proyek
          </span>
        </button>
      </div>

      {showModal && (
        <ProjectModal
          project={editing}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}

      {deleteTarget && (
        <ConfirmDeleteModal
          title="Hapus Proyek?"
          description={
            <>
              Proyek <strong>{deleteTarget.title}</strong> akan dihapus secara
              permanen.
            </>
          }
          onClose={() => setDeleteTarget(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}