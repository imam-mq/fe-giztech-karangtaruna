import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useUiStore } from "../../../store/uiStore";

export default function AdminLayout() {
  const { sidebarOpen } = useUiStore();

  return (
    <div className="min-h-screen bg-surface-bright">
      <Sidebar />
      <Topbar />

      <main
        className={`pt-20 transition-all duration-250 ease-in-out ${
          sidebarOpen ? "pl-64" : "pl-20"
        }`}
      >
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}