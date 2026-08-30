import { Columns, Star } from "lucide-react";
import { WALL_COLUMNS } from "./data/testimonials";

function TestimoniCard({ quote, name, role }) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-surface-variant soft-shadow shrink-0">
            <div className="flex text-[#F59E0B] gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
            </div>

            <p className="font-body-md text-sm text-secondary mb-5">
                "{quote}"
            </p>
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-surface-dim shrink-0" />
                <div>
                    <h4 className="font-headline-md text-sm text-on-surface">
                        {name}
                    </h4>
                    <p className="font-body-md text-xs text-on-surface-variant">
                        {role}
                    </p>
                </div>
            </div>
        </div>
    );
}

const COLUMN_CONFIG = [
  { direction: "normal", duration: "26s", visibleOnMobile: true },
  { direction: "reverse", duration: "30s", visibleOnMobile: false },
  { direction: "normal", duration: "24s", visibleOnMobile: false },
];

export default function TestimoniWall() {
    return (
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-20">
            <div className="relative h-[520px] md:h-[640px] overflow-hidden">
                {/* gradient atas-bawah */}
                <div className="pointer-events-none absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-background to-transparent z-10" />
                <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent z-10" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 h-full">
                    {WALL_COLUMNS.map((column, colIndex) => {
                        const {  direction, duration, visibleOnMobile } = 
                        COLUMN_CONFIG[colIndex];
                        const track = [...column, ...column];

                        return (
                            <div className={`group relative overflow-hidden ${visibleOnMobile ? "block" : "hidden md:block"}`}>
                                <div className="flex flex-col gap-5 animate-[scrollY_var(--dur)_linear_infinite] group-hover:[animation-play-state:paused]" style={{
                                    "--dur": duration,
                                    animationDirection: direction,
                                }}>

                                    {track.map((item, i) => (
                                        <TestimoniCard key={`${item.id}-${i}`} {...item} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}