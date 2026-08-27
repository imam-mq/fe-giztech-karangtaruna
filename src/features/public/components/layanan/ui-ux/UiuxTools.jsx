import { useReveal } from "../../../../../hooks/useReveal";

const TOOLS = [
  { name: "Figma", emoji: "🎨" },
  { name: "Adobe XD", emoji: "◆" },
  { name: "Sketch", emoji: "◇" },
  { name: "Miro", emoji: "🔷" },
];

export default function UiuxTools() {
  const { ref, isVisible } = useReveal();
  const track = [...TOOLS, ...TOOLS];

  return (
    <section
      ref={ref}
      className={`reveal ${isVisible ? "in" : ""} py-16 bg-surface-bright border-y border-surface-variant`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <p className="text-center font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-8">
          Didukung oleh Tools Desain Profesional
        </p>

        <div className="group relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-surface-bright to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-surface-bright to-transparent z-10" />

          <div className="flex items-center gap-16 w-max animate-[marquee_18s_linear_infinite] group-hover:[animation-play-state:paused]">
            {track.map(({ name, emoji }, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-2 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all shrink-0"
              >
                <span className="text-lg">{emoji}</span>
                <span className="font-headline-md text-lg font-bold text-on-surface">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}