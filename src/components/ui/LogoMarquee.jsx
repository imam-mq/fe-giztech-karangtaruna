export default function LogoMarquee({ items = [], speed = 30 }) {
  
  const track = [...items, ...items];

  return (
    <div className="group relative w-full overflow-hidden">
      
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <div
        className="flex items-center gap-20 w-max animate-[marquee_var(--marquee-speed)_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{ "--marquee-speed": `${speed}s` }}
      >
        {track.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex items-center gap-4 shrink-0 opacity-70 hover:opacity-100 transition-opacity"
          >
            {item.logo ? (
              <img
                src={item.logo}
                alt={item.name}
                className="h-14 w-auto object-contain grayscale"
              />
            ) : (
              <div className="h-14 w-14 rounded-xl bg-surface-variant" />
            )}
            <span className="font-headline-md text-3xl font-bold text-on-surface whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}