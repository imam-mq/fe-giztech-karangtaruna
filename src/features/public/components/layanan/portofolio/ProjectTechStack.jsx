const DOT_COLORS = [
  "bg-blue-500",
  "bg-green-500",
  "bg-amber-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-cyan-500",
];

export default function ProjectTechStack({ techStack }) {
  return (
    <div>
      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4">
        Tools & Teknologi yang Digunakan
      </p>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, i) => (
          <div
            key={tech}
            className="inline-flex items-center gap-2 bg-white border border-surface-variant rounded-full px-4 py-2 soft-shadow"
            style={{
              animation: "fadeInUp 0.4s ease-out both",
              animationDelay: `${i * 80}ms`,
            }}
          >
            <span
              className={`w-2 h-2 rounded-full ${DOT_COLORS[i % DOT_COLORS.length]}`}
            />
            <span className="text-sm font-semibold text-on-surface">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}