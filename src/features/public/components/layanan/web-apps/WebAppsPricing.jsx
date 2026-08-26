import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const PLANS = [
  {
    name: "Basic",
    price: "Rp5 - 8 Juta",
    tagline: "Company Profile / Mini Store",
    features: [
      "Custom Design",
      "Infrastruktur & Hosting",
      "Standard Contact & Socials",
      "Keamanan & SSL",
      "Maintenance 1 Bulan",
    ],
    popular: false,
  },
  {
    name: "Profesional",
    price: "Rp10 - 15 Juta",
    tagline: "E-Commerce / Custom Portal",
    features: [
      "Semua fitur paket Basic",
      "Payment Gateway / Shipping Integration",
      "Copywriting Optimized",
      "API Integration",
      "Maintenance 3 Bulan",
      "Dedicated Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Rp21 Juta+",
    tagline: "Web Application / SaaS / ERP / Custom System",
    features: [
      "Semua fitur paket Profesional",
      "Custom API & Multi-role User Access",
      "AI Analytics Dashboard",
      "Maintenance 6 Bulan",
      "Dedicated Support Prioritas",
    ],
    popular: false,
  },
];

export default function WebAppsPricing() {
  return (
    <section id="paket-harga" className="py-24 bg-surface-bright">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">
            Paket <span className="text-primary-container">Layanan</span>
          </h2>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan skala kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map(({ name, price, tagline, features, popular }) => (
            <div
              key={name}
              className={`relative bg-white rounded-2xl p-8 flex flex-col ${
                popular
                  ? "border-2 border-primary-container shadow-xl md:scale-105"
                  : "border border-surface-variant soft-shadow"
              }`}
            >
              {popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-white text-xs font-label-md font-bold px-4 py-1.5 rounded-full shadow-md">
                  Paling Populer
                </span>
              )}

              <h3 className="font-headline-md text-xl text-on-surface mb-1">
                {name}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-4">
                {tagline}
              </p>
              <p className="font-headline-lg text-3xl font-bold text-primary mb-6">
                {price}
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 font-body-md text-sm text-secondary"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-success-green shrink-0 mt-0.5"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/kontak"
                className={`text-center font-label-md text-label-md px-6 py-3 rounded-xl transition-colors ${
                  popular
                    ? "bg-primary-container text-white hover:bg-[#d46618]"
                    : "bg-transparent text-on-surface border-2 border-on-surface hover:bg-surface-variant"
                }`}
              >
                Pilih Paket
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}