import { Pencil, Trash2 } from "lucide-react";

export default function ProjectCard({ project, onEdit, onDelete, index }) {
  const { title, category, year, status, description, techStack = [] } = project;
  const visibleTech = techStack.slice(0, 3);
  const remainingCount = techStack.length - visibleTech.length;

  return (
    <div
      className="group relative bg-white rounded-2xl border border-surface-variant soft-shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      style={{ animation: "fadeInUp 0.4s ease-out both", animationDelay: `${index * 60}ms` }}
    >
      {/* Thumbnail placeholder */}
      <div className="relative h-36 bg-gradient-to-br from-primary-container/10 to-amber-500/10 flex items-center justify-center">
        <span className="absolute top-3 left-3 text-xs font-semibold text-primary-container bg-white/90 px-2.5 py-1 rounded-full">
          {category}
        </span>
        {status === "ongoing" ? (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-xs font-semibold text-amber-600 bg-white/90 px-2.5 py-1 rounded-full">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
            </span>
            Berjalan
          </span>
        ) : (
          <span className="absolute top-3 right-3 text-xs font-semibold text-success-green bg-white/90 px-2.5 py-1 rounded-full">
            Selesai
          </span>
        )}
        <span className="text-on-surface-variant text-xs">Preview</span>
      </div>

      {/* Edit/Delete - hover reveal */}
      <div className="absolute top-[9.5rem] right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onEdit(project)}
          className="p-1.5 bg-white shadow text-on-surface-variant hover:text-primary-container rounded-full transition-colors"
          aria-label={`Edit ${title}`}
        >
          <Pencil size={14} />
        </button>
        <button
          onClick={() => onDelete(project)}
          className="p-1.5 bg-white shadow text-on-surface-variant hover:text-error rounded-full transition-colors"
          aria-label={`Hapus ${title}`}
        >
          <Trash2 size={14} />
        </button>
      </div>

      <div className="p-5">
        <h3 className="font-headline-md text-base text-on-surface mb-0.5">{title}</h3>
        <p className="text-on-surface-variant text-xs mb-2">{year}</p>
        <p className="text-on-surface-variant text-sm line-clamp-2 mb-4">
          {description}
        </p>

        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {visibleTech.map((tech) => (
              <span
                key={tech}
                className="text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-full">
                +{remainingCount} lainnya
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}