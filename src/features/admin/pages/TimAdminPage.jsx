import { useState } from "react";
import { Plus, ChevronRight } from "lucide-react";
import TeamMemberCard from "../components/team/TeamMemberCard";
import TeamMemberModal from "../components/team/TeamMemberModal";
import DeleteConfirmModal from "../components/team/DeleteConfirmModal";


const INITIAL_TEAM = [
  {
    id: 1,
    name: "Izzul Faturrizky",
    role: "Project Manager",
    bio: "Mengelola proyek dari perencanaan hingga rilis dengan pendekatan Agile.",
    linkedin: "",
    photo: null,
  },
  {
    id: 2,
    name: "Gilang Mukharom",
    role: "Web Developer",
    bio: "Membangun fondasi teknis website dan aplikasi web klien.",
    linkedin: "",
    photo: null,
  },
  {
    id: 3,
    name: "Naufal Hafizh",
    role: "Front End Developer",
    bio: "Menerjemahkan desain menjadi antarmuka yang responsif dan interaktif.",
    linkedin: "",
    photo: null,
  },
  {
    id: 4,
    name: "Asyrofudien",
    role: "Back End Developer",
    bio: "Merancang arsitektur sistem dan logika server yang andal dan aman.",
    linkedin: "",
    photo: null,
  },
  {
    id: 5,
    name: "Afnanda Saputra",
    role: "Graphic Designer",
    bio: "Menciptakan identitas visual dan material branding yang memikat.",
    linkedin: "",
    photo: null,
  },
  {
    id: 6,
    name: "Muh Fadil Nur",
    role: "Marketing Communication",
    bio: "Menjembatani komunikasi GIZ Technology dengan klien dan publik.",
    linkedin: "",
    photo: null,
  },
];

export default function TimAdminPage() {
  const [team, setTeam] = useState(INITIAL_TEAM);
  const [editingMember, setEditingMember] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const openAddModal = () => {
    setEditingMember(null);
    setShowModal(true);
  };

  const openEditModal = (member) => {
    setEditingMember(member);
    setShowModal(true);
  };

  const handleSave = (form) => {
    if (editingMember) {
      setTeam((prev) =>
        prev.map((m) => (m.id === editingMember.id ? { ...m, ...form } : m))
      );
    } else {
      setTeam((prev) => [...prev, { ...form, id: Date.now() }]);
    }
    setShowModal(false);
    setEditingMember(null);
  };

  const handleConfirmDelete = () => {
    setTeam((prev) => prev.filter((m) => m.id !== deleteTarget.id));
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