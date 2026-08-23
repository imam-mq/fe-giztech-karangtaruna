import LogoMarquee from "../../../components/ui/LogoMarquee";
const CLIENTS = [
  { name: "Company A" },
  { name: "Brand B" },
  { name: "Startup C" },
  { name: "Enterprise D" },
];

export default function TrustedBy() {
  return (
    <section className="py-20 bg-white w-full border-y border-surface-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <p className="font-label-md font-bold text-base text-on-surface-variant mb-10 uppercase tracking-widest text-center text-primary-container">
            Dipercaya Oleh
        </p>
        <LogoMarquee items={CLIENTS} speed={28} />
      </div>
    </section>
  );
}