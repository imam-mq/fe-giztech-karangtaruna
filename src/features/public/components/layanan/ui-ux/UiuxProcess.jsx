import { useReveal } from "../../../../../hooks/useReveal.js";

const STEPS = [
  { number: 1, label: "Discover" },
  { number: 2, label: "Wireframe" },
  { number: 3, label: "Prototype" },
  { number: 4, label: "Test & Iterate", active: true },
];

export default function UiuxProcess() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      ref={ref}
      className={`reveal ${isVisible ? "in" : ""} py-16 bg-[#1E293B]`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <p className="text-center font-label-md text-label-md text-gray-400 uppercase tracking-widest mb-10">
          Proses Desain Kami
        </p>
        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
          {STEPS.map(({ number, label, active }, i) => (
            <div key={number} className="flex items-center md:contents">
              <div className="flex-1 flex items-center gap-4 md:flex-col md:text-center px-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                    active
                      ? "bg-primary-container text-white"
                      : "bg-primary-container/20 border border-primary-container/40 text-primary-container"
                  }`}
                >
                  {number}
                </div>
                <p className="text-white font-semibold text-sm">{label}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden md:flex items-center text-gray-600 px-2">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}