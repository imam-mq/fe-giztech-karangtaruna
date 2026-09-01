import { NavLink, useLocation } from "react-router-dom";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { NAV_ITEMS } from "./adminNavItems";
import { useUiStore } from "../../../store/uiStore";
import logoUtama from "../../../assets/logos/GIZ Tech logo-01.png";

export default function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useUiStore();
  const location = useLocation();

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white border-r border-surface-variant flex flex-col z-40 transition-all duration-250 ease-in-out ${
        sidebarOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Logo + collapse toggle */}
      <div className="h-20 flex items-center justify-between px-4 border-b border-surface-variant shrink-0">
        <div className="flex items-center gap-2 overflow-hidden">
          <img src={logoUtama} alt="GIZ Technology" className="h-9 w-auto shrink-0" />
          {sidebarOpen && (
            <span className="font-headline-md text-sm font-bold text-on-surface whitespace-nowrap">
              GIZ Technology
            </span>
          )}
        </div>
        <button
          onClick={toggleSidebar}
          className="text-on-surface-variant hover:text-primary-container transition-colors shrink-0"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <ChevronsLeft size={20} /> : <ChevronsRight size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {NAV_ITEMS.map((section) => (
          <div key={section.section} className="mb-6">
            {sidebarOpen && (
              <p className="px-3 mb-2 font-label-md text-xs text-on-surface-variant uppercase tracking-wider">
                {section.section}
              </p>
            )}

            <div className="flex flex-col gap-1">
              {section.items.map((item) => {
                // Grup dengan children: label statis (nggak bisa diklik/toggle),
                // submenu langsung tampil terus di bawahnya.
                if (item.children) {
                  return (
                    <div key={item.label}>
                      <div className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-on-surface">
                        <item.icon size={20} className="shrink-0 text-on-surface-variant" />
                        {sidebarOpen && <span>{item.label}</span>}
                      </div>

                      {sidebarOpen && (
                        <div className="pl-11 pr-3 flex flex-col gap-0.5">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.to}
                              to={child.to}
                              className={({ isActive }) =>
                                `flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                                  isActive
                                    ? "text-primary-container font-semibold bg-primary-container/10"
                                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                                }`
                              }
                            >
                              <span>{child.label}</span>
                              {typeof child.count === "number" && (
                                <span className="bg-surface-container-low text-on-surface-variant text-xs font-semibold rounded-full h-5 min-w-5 px-1.5 flex items-center justify-center">
                                  {child.count}
                                </span>
                              )}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary-container/10 text-primary-container"
                          : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-primary-container rounded-r-full" />
                        )}
                        <item.icon size={20} className="shrink-0" />
                        {sidebarOpen && (
                          <span className="flex-1 whitespace-nowrap">{item.label}</span>
                        )}
                        {sidebarOpen && item.badge && (
                          <span className="bg-primary-container text-white text-xs font-bold rounded-full h-5 min-w-5 px-1.5 flex items-center justify-center shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}