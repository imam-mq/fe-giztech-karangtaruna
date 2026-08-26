import { SiReact, SiNodedotjs, SiLaravel, SiPostgresql } from "react-icons/si";

const STACK = [
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Laravel", Icon: SiLaravel },
  { name: "PostgreSQL", Icon: SiPostgresql },
];

export default function WebAppsTechStack() {
  return (
    <section className="py-16 bg-white border-y border-surface-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <p className="font-label-md text-label-md text-on-surface-variant mb-8 uppercase tracking-widest">
          Didukung oleh Teknologi Modern
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {STACK.map(({ name, Icon }) => (
            <div
              key={name}
              className="flex items-center gap-2 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
            >
              <Icon size={28} />
              <span className="font-headline-md text-lg font-bold text-on-surface">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}