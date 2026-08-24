import { useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiSpring,
  SiLaravel,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

const CHIPS = [
  { label: "React", bg: "#0b1120", iconColor: "#61DAFB", Icon: SiReact },
  { label: "Next.js", bg: "#000000", iconColor: "#000000", Icon: SiNextdotjs },
  { label: "Vue", bg: "#0b1120", iconColor: "#42B883", Icon: SiVuedotjs },
  { label: "Node.js", bg: "#0b1120", iconColor: "#68A063", Icon: SiNodedotjs },
  { label: "Spring Boot", bg: "#0b1120", iconColor: "#6DB33F", Icon: SiSpring },
  { label: "Laravel", bg: "#FF2D20", iconColor: "#FF2D20", Icon: SiLaravel },
  { label: "PostgreSQL", bg: "#0b1120", iconColor: "#4169E1", Icon: SiPostgresql },
  { label: "Docker", bg: "#0db7ed", iconColor: "#0db7ed", Icon: SiDocker },
];

const CHIP_RADIUS = 14;
const ICON_RADIUS = 10;
const WALL_PAD = 16;

export default function TechStackShowcase() {
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const chipRefs = useRef([]);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    let cancelled = false;
    let cleanup;

    (async () => {
      const Matter = await import("matter-js");
      if (cancelled) return;

      const {
        Engine,
        Runner,
        World,
        Bodies,
        Body,
        Mouse,
        MouseConstraint,
        Events,
      } = Matter;

      const measureChildren = Array.from(measure.children);
      const dims = measureChildren.map((el) => {
        const r = el.getBoundingClientRect();
        return { w: Math.max(80, r.width), h: Math.max(28, r.height) };
      });

      let width = container.clientWidth;
      let height = container.clientHeight;

      const engine = Engine.create();
      engine.gravity.y = 1;
      const world = engine.world;

      const wallThickness = 400;
      const floor = Bodies.rectangle(
        width / 2,
        height - WALL_PAD + wallThickness / 2,
        width * 3,
        wallThickness,
        { isStatic: true }
      );
      const leftWall = Bodies.rectangle(
        WALL_PAD - wallThickness / 2,
        height / 2,
        wallThickness,
        height * 4,
        { isStatic: true }
      );
      const rightWall = Bodies.rectangle(
        width - WALL_PAD + wallThickness / 2,
        height / 2,
        wallThickness,
        height * 4,
        { isStatic: true }
      );
      World.add(world, [floor, leftWall, rightWall]);

      const states = CHIPS.map((chip, i) => {
        const dim = dims[i] ?? { w: 120, h: 36 };
        const { w, h } = dim;
        const halfW = w / 2;
        const minX = WALL_PAD + halfW + 4;
        const maxX = width - WALL_PAD - halfW - 4;
        const x = minX + Math.random() * Math.max(1, maxX - minX);
        const y = -80 - i * 60 - Math.random() * 120;
        const body = Bodies.rectangle(x, y, w, h, {
          chamfer: { radius: CHIP_RADIUS },
          restitution: 0.35,
          friction: 0.5,
          frictionAir: 0.025,
          density: 0.0018,
          angle: (Math.random() - 0.5) * 0.4,
        });
        World.add(world, body);
        return { chip, body, width: w, height: h };
      });

      const mouse = Mouse.create(container);

      const wheelTarget = mouse.element;
      if (wheelTarget.mousewheel) {
        wheelTarget.removeEventListener("wheel", wheelTarget.mousewheel);
        wheelTarget.removeEventListener(
          "DOMMouseScroll",
          wheelTarget.mousewheel
        );
      }

      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.2,
          damping: 0.2,
          render: { visible: false },
        },
      });
      World.add(world, mouseConstraint);

      Events.on(mouseConstraint, "startdrag", () => {
        container.style.cursor = "grabbing";
      });
      Events.on(mouseConstraint, "enddrag", () => {
        container.style.cursor = "grab";
      });

      const runner = Runner.create();
      Runner.run(runner, engine);

      let raf = 0;
      const tick = () => {
        for (let i = 0; i < states.length; i++) {
          const s = states[i];
          const el = chipRefs.current[i];
          if (!s || !el) continue;
          const { x, y } = s.body.position;
          el.style.transform = `translate3d(${x - s.width / 2}px, ${
            y - s.height / 2
          }px, 0) rotate(${s.body.angle}rad)`;
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      const onResize = () => {
        const newW = container.clientWidth;
        const newH = container.clientHeight;
        if (newW === width && newH === height) return;
        Body.setPosition(floor, {
          x: newW / 2,
          y: newH - WALL_PAD + wallThickness / 2,
        });
        Body.setPosition(leftWall, {
          x: WALL_PAD - wallThickness / 2,
          y: newH / 2,
        });
        Body.setPosition(rightWall, {
          x: newW - WALL_PAD + wallThickness / 2,
          y: newH / 2,
        });
        width = newW;
        height = newH;
      };
      const ro = new ResizeObserver(onResize);
      ro.observe(container);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        Runner.stop(runner);
        World.clear(world, false);
        Engine.clear(engine);
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [resetKey]);

  return (
    <section className="py-24 bg-white w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-10">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Teknologi yang{" "}
            <span className="text-primary-container">Kami Gunakan</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Geser badge di bawah ini untuk mengeksplorasi tumpukan teknologi
            yang kami andalkan.
          </p>
        </div>

        <div className="relative h-80 sm:h-96 overflow-hidden rounded-3xl border border-surface-variant bg-surface-bright">
          <button
            type="button"
            onClick={() => setResetKey((k) => k + 1)}
            aria-label="Reset posisi badge"
            className="absolute top-4 right-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-surface-variant bg-white text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
          >
            <RotateCcw className="h-4 w-4" strokeWidth={2.25} aria-hidden="true" />
          </button>

          {/* Elemen tak terlihat, cuma untuk mengukur ukuran asli tiap chip */}
          <div
            ref={measureRef}
            aria-hidden="true"
            className="pointer-events-none invisible absolute top-0 left-0 flex flex-wrap gap-2"
          >
            {CHIPS.map((chip) => (
              <ChipPill key={`m-${chip.label}`} chip={chip} />
            ))}
          </div>

          <div
            ref={containerRef}
            className="absolute inset-0 cursor-grab select-none"
            style={{ touchAction: "none" }}
          >
            {CHIPS.map((chip, i) => (
              <div
                key={`${resetKey}-${chip.label}`}
                ref={(el) => {
                  chipRefs.current[i] = el;
                }}
                className="pointer-events-none absolute top-0 left-0 will-change-transform"
                style={{ transform: "translate3d(-9999px, -9999px, 0)" }}
              >
                <ChipPill chip={chip} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChipPill({ chip }) {
  const { label, bg, iconColor, Icon } = chip;
  return (
    <div
      className="inline-flex items-center gap-2 p-1 pr-3 text-sm font-semibold tracking-tight shadow-md"
      style={{ backgroundColor: bg, color: "#ffffff", borderRadius: `${CHIP_RADIUS}px` }}
    >
      <span
        className="inline-flex h-8 w-8 items-center justify-center bg-white/95"
        style={{ borderRadius: `${ICON_RADIUS}px` }}
      >
        <Icon className="h-5 w-5" style={{ color: iconColor }} />
      </span>
      <span>{label}</span>
    </div>
  );
}