import { useState, useMemo } from "react";
import PortofolioHero from "../components/layanan/portofolio/PortofolioHero";
import PortofolioFilterTabs from "../components/layanan/portofolio/PortofolioFilterTabs";
import PortofolioFeatured from "../components/layanan/portofolio/PortofolioFeatured";
import PortofolioGrid from "../components/layanan/portofolio/PortofolioGrid";
import PortofolioCTA from "../components/layanan/portofolio/PortofolioCTA";
import { PROJECTS } from "../components/layanan/portofolio/data/projects";

const FEATURED_SLUG = "karang-taruna-national-system";

export default function PortofolioPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects = useMemo(() => {
    const base =
      activeCategory === "Semua"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeCategory);

        return base.filter((p) => p.slug !== FEATURED_SLUG);
    }, [activeCategory]);

  return (
    <div>
      <PortofolioHero />

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-8 flex justify-center">
        <PortofolioFilterTabs
          active={activeCategory}
          onChange={setActiveCategory}
        />
      </section>

      <PortofolioFeatured />

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-20">
        <PortofolioGrid
          projects={filteredProjects}
          activeCategory={activeCategory}
        />
      </section>

      <PortofolioCTA />
    </div>
  );
}