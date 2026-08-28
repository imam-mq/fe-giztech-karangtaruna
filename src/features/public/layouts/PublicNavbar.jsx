import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logoUtama from "../../../assets/logos/GIZ Tech logo-01.png";

const NAV_LINKS = [
  { label: "Beranda", to: "/" },
  {
    label: "Tentang Kami",
    to: "/tentang",
    children: [
      { label: "Profil Perusahaan", to: "/tentang" },
      { label: "Tim Kami", to: "/tentang/tim" },
    ],
  },
  {
    label: "Layanan & Paket",
    to: "/layanan",
    children: [
      { label: "Web Apps Development", to: "/layanan#web-apps" },
      { label: "UI/UX Design", to: "/layanan/ui-ux-design" },
      { label: "Landing Page / Custom", to: "/layanan/landing-page" },
    ],
  },
  { label: "Portofolio", to: "/portofolio" },
  { label: "Testimoni", to: "/testimoni" },
];

export default function PublicNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const [desktopOpen, setDesktopOpen] = useState(null);
  const closeTimer = useRef(null);

  const handleEnter = (label) => {
    clearTimeout(closeTimer.current);
    setDesktopOpen(label);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setDesktopOpen(null), 150);
  };

  return (
    <header className="bg-white fixed top-0 w-full z-50 shadow-sm border-b border-gray-100">
      <div className="flex justify-between items-center px-6 md:px-12 h-20 w-full max-w-[1280px] mx-auto">
        {/* Logo */}
        <Link className="flex items-center gap-3" to="/">
          <img src={logoUtama} alt="GIZ Technology" className="h-14 w-auto" />
          <span className="text-2xl font-bold text-[#F59E0B] tracking-tight hidden sm:block">
            GIZ Techno
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => handleEnter(link.label)}
                onMouseLeave={handleLeave}
              >
                <button
                  className={`flex items-center gap-1 transition-colors ${
                    desktopOpen === link.label
                      ? "text-[#F59E0B] font-bold"
                      : "hover:text-[#F59E0B]"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      desktopOpen === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {desktopOpen === link.label && (
                  <div className="absolute top-full left-0 pt-3">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          className={({ isActive }) =>
                            `block px-4 py-2.5 text-sm transition-colors ${
                              isActive
                                ? "text-[#F59E0B] font-semibold bg-orange-50"
                                : "text-gray-700 hover:bg-orange-50 hover:text-[#F59E0B]"
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F59E0B] font-bold border-b-2 border-[#F59E0B] pb-1"
                    : "hover:text-[#F59E0B] transition-colors"
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/kontak"
            className="bg-[#E67E22] text-white font-medium px-6 py-3 rounded-xl hover:bg-[#d46618] transition-colors shadow-md hidden sm:inline-block"
          >
            Konsultasi Gratis
          </Link>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  className="w-full flex items-center justify-between py-2 text-gray-700 font-medium"
                  onClick={() =>
                    setMobileSubOpen(
                      mobileSubOpen === link.label ? null : link.label
                    )
                  }
                >
                  {link.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      mobileSubOpen === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileSubOpen === link.label && (
                  <div className="pl-4 space-y-1 pb-2">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block py-2 text-sm ${
                            isActive
                              ? "text-[#F59E0B] font-semibold"
                              : "text-gray-600"
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block py-2 ${
                    isActive ? "text-[#F59E0B] font-bold" : "text-gray-700"
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}

          {/* Button Konsultasi Gratis Mobile */}
          <div className="text-center mt-3">
            <Link
              to="/kontak"
              onClick={() => setMobileOpen(false)}
              className="inline-block bg-[#E67E22] text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md hover:bg-[#d46618] transition-colors"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}