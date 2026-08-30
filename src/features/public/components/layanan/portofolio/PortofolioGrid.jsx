import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function PortofolioGrid({ projects, activeCategory }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="font-body-md text-on-surface-variant">
          Belum ada proyek di kategori ini.
        </p>
      </div>
    );
  }

  return (
    <div
      key={activeCategory}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project, i) => (
        <Link
          key={project.slug}
          to={`/portofolio/${project.slug}`}
          className="group relative bg-white rounded-2xl border border-surface-variant overflow-hidden soft-shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          style={{
            animation: "fadeInUp 0.5s ease-out both",
            animationDelay: `${i * 80}ms`,
          }}
        >
          <div className="h-48 bg-gradient-to-br from-primary-container/10 to-amber-500/10 flex items-center justify-center text-on-surface-variant text-sm overflow-hidden">
            <span className="transition-transform duration-500 group-hover:scale-110">
              Preview
            </span>
          </div>

          {/* Overlay hover */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#1E293B]/95 via-[#1E293B]/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-end p-5">
            <p className="text-white text-sm mb-2 line-clamp-2">
              {project.description}
            </p>
            <span className="inline-flex items-center gap-1 text-amber-400 text-sm font-semibold">
              Lihat Detail
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </span>
          </div>

          <div className="p-5 group-hover:opacity-0 transition-opacity duration-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-primary-container bg-primary-container/10 px-2.5 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-xs text-on-surface-variant">
                {project.year}
              </span>
            </div>
            <h3 className="font-headline-md text-base text-on-surface">
              {project.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}