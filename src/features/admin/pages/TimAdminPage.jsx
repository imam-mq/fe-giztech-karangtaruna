import { useState, useEffect } from "react";
import { Plus, ChevronRight } from "lucide-react";
import TeamMemberCard from "../components/team/TeamMemberCard";
import TeamMemberModal from "../components/team/TeamMemberModal";
import DeleteConfirmModal from "../components/team/DeleteConfirmModal";
import { getAllTim, createTim, updateTim, deleteTim } from "../services/timService";

export default function TimAdminPage() {
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingMember, setEditingMember] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    const fetchTim = async () => {
      try {
        const data = await getAllTim();
        setTeam(data);
      } catch (error) {
        console.error("Gagal memuat data tim:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTim();
  }, []);

  const openAddModal = () => {
    setEditingMember(null);
    setShowModal(true);
  };

  const openEditModal = (member) => {
    setEditingMember({
      id: member.id,
      name: member.name,
      role: member.role,
      bio: member.bio || "",
      linkedin: member.linked || "",
      photo: member.photo_url,
      photoFile: null,
    });
    setShowModal(true);
  };

  const handleSave = async (form) => {
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("role", form.role);
      formData.append("bio", form.bio || "");
      if (form.linkedin) formData.append("linked", form.linkedin);
      if (form.photoFile) formData.append("photo", form.photoFile);

      if (editingMember) {
        const updated = await updateTim(editingMember.id, formData);
        setTeam((prev) => prev.map((m) => (m.id === editingMember.id ? updated : m)));
      } else {
        const created = await createTim(formData);
        setTeam((prev) => [...prev, created]);
      }

      setShowModal(false);
      setEditingMember(null);
    } catch (error) {
      console.error("Gagal menyimpan data tim:", error);
      alert("Gagal menyimpan data tim. Silakan coba lagi.");
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteTim(deleteTarget.id);
      setTeam((prev) => prev.filter((m) => m.id !== deleteTarget.id));
    } catch (error) {
      console.error("Gagal menghapus data tim:", error);
      alert("Gagal menghapus data tim.");
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
            <span className="text-primary-container font-semibold">Tim</span>
          </nav>
          <h1 className="font-headline-md text-2xl text-on-surface">Kelola Tim</h1>
          <p className="text-on-surface-variant text-sm mt-1">
            Kelola anggota tim yang ditampilkan di halaman Tim Kami.
          </p>
        </div>

        <button
          onClick={openAddModal}
          className="bg-primary-container hover:bg-[#d46618] text-white px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Plus size={20} />
          Tambah Anggota
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
        {team.map((member, i) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            index={i}
            onEdit={openEditModal}
            onDelete={setDeleteTarget}
          />
        ))}

        <button
          onClick={openAddModal}
          className="bg-transparent rounded-3xl p-6 border-2 border-dashed border-outline hover:border-primary-container hover:bg-primary-container/5 transition-all duration-300 flex flex-col items-center justify-center min-h-[240px] group"
        >
          <div className="w-16 h-16 rounded-full bg-surface-container-high group-hover:bg-primary-container/10 flex items-center justify-center mb-4 transition-colors">
            <Plus size={28} className="text-on-surface-variant group-hover:text-primary-container" />
          </div>
          <span className="font-headline-md text-base text-on-surface-variant group-hover:text-primary-container">
            Tambah Anggota Baru
          </span>
        </button>
      </div>

      {showModal && (
        <TeamMemberModal
          member={editingMember}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}

      {deleteTarget && (
        <DeleteConfirmModal
          member={deleteTarget}
          onClose={() => setDeleteTarget(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}