import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { getProjectBySlug } from "../components/layanan/portofolio/data/projects";
import ProjectTechStack from "../components/layanan/portofolio/ProjectTechStack";
import PortofolioCTA from "../components/layanan/portofolio/PortofolioCTA";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/portofolio" replace />;
  }

  const { title, category, year, status, description, highlights, techStack } =
    project;

  return (
    <div>
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-16 md:pt-28">
        <Link
          to="/portofolio"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary-container transition-colors mb-8 text-sm font-medium"
          style={{ animation: "fadeInUp 0.4s ease-out both" }}
        >
          <ArrowLeft size={16} />
          Kembali ke Portofolio
        </Link>

        <div
          className="flex flex-wrap items-center gap-3 mb-5"
          style={{ animation: "fadeInUp 0.4s ease-out both", animationDelay: "80ms" }}
        >
          <span className="text-xs font-semibold text-primary-container bg-primary-container/10 px-3 py-1.5 rounded-full">
            {category}
          </span>
          {status === "ongoing" ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              Sedang Berjalan
            </span>
          ) : (
            <span className="text-xs font-semibold text-success-green bg-green-50 px-3 py-1.5 rounded-full">
              Selesai · {year}
            </span>
          )}
        </div>

        <h1
          className="font-headline-lg text-headline-lg text-on-surface mb-6 max-w-3xl"
          style={{ animation: "fadeInUp 0.5s ease-out both", animationDelay: "140ms" }}
        >
          {title}
        </h1>

        <div
          className="h-64 md:h-96 rounded-2xl bg-gradient-to-br from-primary-container/10 to-amber-500/10 border border-surface-variant flex items-center justify-center text-on-surface-variant"
          style={{ animation: "fadeInUp 0.5s ease-out both", animationDelay: "200ms" }}
        >
          Preview proyek menyusul
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-10">
            <div
              style={{ animation: "fadeInUp 0.5s ease-out both", animationDelay: "260ms" }}
            >
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4">
                Tentang Proyek
              </p>
              <p className="font-body-lg text-body-lg text-secondary">
                {description}
              </p>
            </div>

            <div
              style={{ animation: "fadeInUp 0.5s ease-out both", animationDelay: "320ms" }}
            >
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4">
                Fitur Utama
              </p>
              <ul className="flex flex-col gap-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-body-md text-secondary"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-success-green shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{ animation: "fadeInUp 0.5s ease-out both", animationDelay: "380ms" }}
          >
            <ProjectTechStack techStack={techStack} />
          </div>
        </div>
      </section>

      <PortofolioCTA />
    </div>
  );
}