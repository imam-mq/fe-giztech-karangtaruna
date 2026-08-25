const STEPS = [
  {
    number: 1,
    title: "Discovery",
    description: "Analisis kebutuhan & perancangan solusi",
  },
  {
    number: 2,
    title: "Design",
    description: "Wireframing & UI/UX Prototyping",
  },
  {
    number: 3,
    title: "Development",
    description: "Coding, testing, & integrasi",
  },
  {
    number: 4,
    title: "Deployment",
    description: "Peluncuran & maintenance",
    active: true,
  },
];

export default function ProfileWorkflow() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Proses Kerja{" "}
            <span className="text-primary-container">Terstruktur</span>
          </h2>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
            Kami mengadopsi Software Development Life Cycle (SDLC) yang agile
            untuk hasil maksimal di setiap proyek.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-surface-variant -z-10" />

          {STEPS.map(({ number, title, description, active }) => (
            <div
              key={number}
              className="flex flex-col items-center bg-white p-4 text-center z-10 w-full md:w-1/4"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center font-headline-md text-2xl mb-4 shadow-md border-2 ${
                  active
                    ? "bg-primary-container border-primary-container text-white"
                    : "bg-white border-primary-container text-primary-container"
                }`}
              >
                {number}
              </div>
              <h4 className="font-headline-md text-lg text-on-surface">
                {title}
              </h4>
              <p className="font-body-md text-sm text-secondary mt-2">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}