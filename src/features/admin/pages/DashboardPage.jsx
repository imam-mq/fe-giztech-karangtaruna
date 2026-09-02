import { Link } from "react-router-dom";
import { Users, Layers, FolderOpen, MessageSquareQuote, ArrowRight } from "lucide-react";
import OverviewCard from "../components/dashboard/OverviewCard";

// get api
const OVERVIEW_CARDS = [
  {
    label: "Anggota Tim",
    count: 6,
    icon: Users,
    to: "/admin/web-profile/tim",
    accent: "bg-orange-50 text-primary-container",
  },
  {
    label: "Layanan Aktif",
    count: 4,
    icon: Layers,
    to: "/admin/web-profile/layanan",
    accent: "bg-amber-50 text-amber-600",
  },
  {
    label: "Proyek Portofolio",
    count: 5,
    icon: FolderOpen,
    to: "/admin/web-profile/portofolio",
    accent: "bg-blue-50 text-blue-600",
  },
  {
    label: "Testimoni Klien",
    count: 3,
    icon: MessageSquareQuote,
    to: "/admin/web-profile/testimoni",
    accent: "bg-green-50 text-success-green",
  },
];

const CONTENT_SUMMARY = [
  { section: "Tim", count: 6, to: "/admin/web-profile/tim", updatedAt: "2 hari lalu" },
  { section: "Layanan & Paket", count: 4, to: "/admin/web-profile/layanan", updatedAt: "5 hari lalu" },
  { section: "Portofolio", count: 5, to: "/admin/web-profile/portofolio", updatedAt: "1 minggu lalu" },
  { section: "Testimoni", count: 3, to: "/admin/web-profile/testimoni", updatedAt: "3 hari lalu" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Welcome header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-headline-md text-2xl text-on-surface mb-1">
            Halo, Admin GIZ 👋
          </h1>
          <p className="text-on-surface-variant text-sm">
            Kelola konten website GIZ Technology dari sini.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 bg-white border border-surface-variant rounded-full px-4 py-2 soft-shadow">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success-green" />
          </span>
          <span className="text-sm font-medium text-on-surface">Sistem Terhubung</span>
        </div>
      </div>

      {/* Overview cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {OVERVIEW_CARDS.map((card, i) => (
          <OverviewCard key={card.label} {...card} index={i} />
        ))}
      </div>

      {/* Content summary (tetap inline, cuma dipakai 1x & masih simpel) */}
      <div
        className="bg-white rounded-2xl border border-surface-variant soft-shadow overflow-hidden"
        style={{ animation: "fadeInUp 0.4s ease-out both", animationDelay: "320ms" }}
      >
        <div className="px-6 py-5 border-b border-surface-variant">
          <h2 className="font-headline-md text-lg text-on-surface">Ringkasan Konten</h2>
        </div>

        <div className="divide-y divide-surface-variant">
          {CONTENT_SUMMARY.map(({ section, count, to, updatedAt }) => (
            <Link
              key={section}
              to={to}
              className="flex items-center justify-between px-6 py-4 hover:bg-surface-container-low transition-colors"
            >
              <div>
                <p className="font-medium text-on-surface text-sm">{section}</p>
                <p className="text-on-surface-variant text-xs mt-0.5">
                  {count} item · Terakhir diubah {updatedAt}
                </p>
              </div>
              <ArrowRight size={16} className="text-on-surface-variant shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}