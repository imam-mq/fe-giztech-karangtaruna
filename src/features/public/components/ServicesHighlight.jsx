import { Link } from "react-router-dom";
import { Globe, LayoutGrid, PenTool, Paintbrush } from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    title: "Landing Page Custom",
    description:
      "Desain responsif, SEO-friendly, dan dioptimalkan untuk konversi tinggi.",
    priceFrom: "Rp2 - 5 Juta",
    to: "/layanan#landing-page",
  },
  {
    icon: LayoutGrid,
    title: "Web Apps & Custom System",
    description:
      "Sistem internal, ERP, CRM yang dirancang khusus untuk efisiensi bisnis Anda.",
    priceFrom: "Rp5 - 8 Juta",
    to: "/layanan#web-apps",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Riset pengguna, wireframing, dan desain antarmuka interaktif yang memukau.",
    priceFrom: "Rp500rb - 1,5 Juta",
    to: "/layanan#ui-ux-design",
  },
  {
    icon: Paintbrush,
    title: "Graphic Design & Branding",
    description:
      "Identitas visual, logo, dan material promosi yang memperkuat brand image.",
    priceFrom: "Rp300rb - 700rb",
    to: "/layanan#graphic-design",
  },
];

export default function ServicesHighlight() {
    return (
        <section className="py-24 bg-white w-full">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                <div className="text-center mb-16">
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
                        Layanan Unggulan{" "}
                        <span className="text-primary-container">Kami</span>
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                        Solusi digital komprehensif yang dirancang khusus untuk memenuhi
                        kebutuhan unik bisnis Anda.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SERVICES.map(
                        ({ icon: Icon, title, description, priceFrom, to }) => (
                        <Link
                            key={title}
                            to={to}
                            className="bg-surface-bright rounded-2xl p-6 border border-surface-variant flex flex-col hover:border-primary-container transition-colors"
                        >
                            <div className="bg-primary-container/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                            <Icon size={22} className="text-primary-container" />
                            </div>
                            <h3 className="font-headline-md text-xl text-on-surface mb-2">
                            {title}
                            </h3>
                            <p className="font-body-md text-sm text-on-surface-variant mb-6 flex-1">
                            {description}
                            </p>
                            <div className="mt-auto">
                            <p className="font-label-md text-label-md text-on-surface-variant mb-1">
                                Mulai Dari
                            </p>
                            <p className="font-headline-md text-lg text-primary">
                                {priceFrom}
                            </p>
                            </div>
                        </Link>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}