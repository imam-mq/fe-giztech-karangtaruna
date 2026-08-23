import { Link } from "react-router-dom";
import logoUtama from "../../../assets/logos/GIZ Tech logo-01.png";

const LEGAL_LINKS = [
  { label: "Kebijakan Privasi", to: "/kebijakan-privasi" },
  { label: "Syarat & Ketentuan", to: "/syarat-ketentuan" },
];

const SUPPORT_LINKS = [{ label: "Hubungi Kami", to: "/kontak" }];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2937] text-gray-300">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logoUtama} alt="GIZ Technology" className="h-8 w-auto" />
              <span className="text-xl font-bold text-white">GIZ Technology</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              <span className="text-[#F59E0B]">Partner Solusi Digital & IT Terpercaya</span>{" "}
              untuk transformasi bisnis masa depan.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wide mb-4">
              LEGAL
            </h4>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-[#F59E0B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-wide mb-4">
              SUPPORT
            </h4>
            <ul className="space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-[#F59E0B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-5">
          <p className="text-sm text-gray-400">
            Copyright &copy; {year} GIZ Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}