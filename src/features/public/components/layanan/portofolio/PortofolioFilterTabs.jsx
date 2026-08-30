import { useEffect, useRef, useState } from "react";
import { CATEGORIES } from "./data/projects";

export default function PortofolioFilterTabs({ active, onChange }) {
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const index = CATEGORIES.indexOf(active);
    const btn = buttonRefs.current[index];
    const container = containerRef.current;
    if (!btn || !container) return;

    const btnRect = btn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setIndicator({
      left: btnRect.left - containerRect.left,
      width: btnRect.width,
    });
  }, [active]);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex flex-wrap gap-1 bg-surface-container-low rounded-full p-1.5 border border-surface-variant"
    >
      {/* indicator */}
      <div
        className="absolute top-1.5 bottom-1.5 bg-primary-container rounded-full transition-all duration-300 ease-out"
        style={{ left: indicator.left, width: indicator.width }}
      />

      {CATEGORIES.map((cat, i) => (
        <button
          key={cat}
          ref={(el) => (buttonRefs.current[i] = el)}
          onClick={() => onChange(cat)}
          className={`relative z-10 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
            active === cat
              ? "text-white"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}