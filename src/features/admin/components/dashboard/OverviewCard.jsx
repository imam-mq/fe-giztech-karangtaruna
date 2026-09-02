import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function OverviewCard({ label, count, icon: Icon, to, accent, index = 0 }) {
  return (
    <Link
      to={to}
      className="group bg-white rounded-2xl p-6 border border-surface-variant soft-shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      style={{ animation: "fadeInUp 0.4s ease-out both", animationDelay: `${index * 80}ms` }}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${accent}`}>
        <Icon size={24} />
      </div>
      <p className="font-headline-md text-3xl font-bold text-on-surface mb-1">
        {count}
      </p>
      <p className="text-on-surface-variant text-sm mb-4">{label}</p>
      <span className="inline-flex items-center gap-1 text-primary-container text-sm font-semibold">
        Kelola
        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
      </span>
    </Link>
  );
}