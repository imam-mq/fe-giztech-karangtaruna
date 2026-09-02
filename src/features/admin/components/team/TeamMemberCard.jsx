import { User, Pencil, Trash2 } from "lucide-react";

export default function TeamMemberCard({ member, onEdit, onDelete, index }) {
  const { name, role, bio, photo_url: photo } = member;

  return (
    <div
      className="group relative bg-white rounded-3xl p-6 soft-shadow border border-transparent hover:border-primary-container/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
      style={{ animation: "fadeInUp 0.4s ease-out both", animationDelay: `${index * 60}ms` }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex justify-between items-start mb-4">
        <div className="w-20 h-20 rounded-full border-4 border-surface-container-low shadow-sm bg-surface-container-high flex items-center justify-center overflow-hidden shrink-0">
          {photo ? (
            <img src={photo} alt={name} className="w-full h-full object-cover" />
          ) : (
            <User size={32} className="text-on-surface-variant" />
          )}
        </div>

        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onEdit(member)}
            className="p-2 text-on-surface-variant hover:text-primary-container hover:bg-primary-container/10 rounded-full transition-colors"
            aria-label={`Edit ${name}`}
          >
            <Pencil size={18} />
          </button>
          <button
            onClick={() => onDelete(member)}
            className="p-2 text-on-surface-variant hover:text-error hover:bg-red-50 rounded-full transition-colors"
            aria-label={`Hapus ${name}`}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <h3 className="font-headline-md text-xl text-on-surface mb-1">{name}</h3>
      <p className="text-primary-container font-semibold text-sm mb-3">{role}</p>
      <p className="text-on-surface-variant text-sm line-clamp-3">{bio}</p>
    </div>
  );
}