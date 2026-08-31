import { useState, useRef, useEffect } from "react";
import { Bell, ChevronDown, User, LogOut } from "lucide-react";
import { useAuthStore } from "../../../store/authStore";
import { useUiStore } from "../../../store/uiStore";

export default function Topbar({ title = "Dashboard" }) {
  const { sidebarOpen } = useUiStore();
  const { user, logout } = useAuthStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 h-20 bg-white border-b border-surface-variant flex items-center justify-between px-6 z-30 transition-all duration-250 ease-in-out ${
        sidebarOpen ? "left-64" : "left-20"
      }`}
    >
      <h1 className="font-headline-md text-lg font-semibold text-on-surface">
        {title}
      </h1>

      <div className="flex items-center gap-5">
        <button
          className="relative text-on-surface-variant hover:text-on-surface transition-colors"
          aria-label="Notifikasi"
        >
          <Bell size={22} />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-error rounded-full border-2 border-white" />
        </button>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((o) => !o)}
            className="flex items-center gap-2.5 hover:bg-surface-container-low rounded-lg px-2 py-1.5 transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-primary-container/10 flex items-center justify-center">
              <User size={18} className="text-primary-container" />
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-semibold text-on-surface leading-tight">
                {user?.name ?? "Admin"}
              </p>
              <p className="text-xs text-on-surface-variant leading-tight">
                {user?.role ?? "Administrator"}
              </p>
            </div>
            <ChevronDown
              size={16}
              className={`text-on-surface-variant transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {dropdownOpen && (
            <div
              className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-surface-variant py-2"
              style={{ animation: "toastSlideIn 0.15s ease-out both" }}
            >
              <button className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-on-surface hover:bg-surface-container-low transition-colors text-left">
                <User size={16} />
                Profil Saya
              </button>
              <button
                onClick={logout}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-error hover:bg-red-50 transition-colors text-left"
              >
                <LogOut size={16} />
                Keluar
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}