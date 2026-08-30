import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { getProjectBySlug } from "./data/projects";
import { useReveal } from "../../../../../hooks/useReveal";

const FEATURED_SLUG = "karang-taruna-national-system";

export default function PortofolioFeatured() {
  const { ref, isVisible } = useReveal();
  const project = getProjectBySlug(FEATURED_SLUG);

  if (!project) return null;

  const { slug, title, category, status, description, highlights } = project;

  return (
    <section
      ref={ref}
      className={`reveal ${isVisible ? "in" : ""} max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-12`}
    >
      <div className="bg-white rounded-3xl border border-surface-variant soft-shadow overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Preview */}
          <div className="h-56 lg:h-auto bg-gradient-to-br from-primary-container/10 to-amber-500/10 flex items-center justify-center text-on-surface-variant text-sm">
            Preview proyek menyusul
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-primary-container bg-primary-container/10 px-3 py-1.5 rounded-full">
                {category}
              </span>
              {status === "ongoing" && (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                  </span>
                  Sedang Berjalan
                </span>
              )}
            </div>

            <h2 className="font-headline-md text-2xl md:text-3xl font-bold text-on-surface mb-3">
              {title}
            </h2>
            <p className="font-body-md text-secondary mb-5">{description}</p>

            <ul className="flex flex-col gap-2 mb-6">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-body-md text-sm text-secondary"
                >
                  <CheckCircle2
                    size={18}
                    className="text-success-green shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              to={`/portofolio/${slug}`}
              className="inline-flex items-center gap-1 text-primary-container font-label-md text-sm font-semibold hover:underline w-max"
            >
              Lihat Detail Lengkap
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}