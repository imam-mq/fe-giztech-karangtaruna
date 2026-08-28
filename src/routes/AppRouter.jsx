import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { ROLES } from "../constants/roles";

// Public
import PublicLayout from "../features/public/layouts/PublicLayout";
import BerandaPage from "../features/public/pages/BerandaPage";
import TentangKamiPage from "../features/public/pages/TentangKamiPage";
import TimPage from "../features/public/pages/TimPage";
import LayananPaketPage from "../features/public/pages/LayananPaketPage";
import WebAppsPage from "../features/public/pages/WebAppsPage";
import UiuxPage from "../features/public/pages/UiuxPage";
import LandingPage from "../features/public/pages/LandingPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* routes company web profile */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<BerandaPage />} />
          <Route path="/tentang" element={<TentangKamiPage />} />
          <Route path="/tentang/tim" element={<TimPage />} />
          <Route path="/layanan" element={<LayananPaketPage />} />
          <Route path="/layanan/web-apps" element={<WebAppsPage />} />
          <Route path="/layanan/ui-ux-design" element={<UiuxPage />} />
          <Route path="/layanan/landing-page" element={<LandingPage />} />
          {/* /layanan/landing-page dan /layanan/graphic-design menyusul */}
        </Route>

        {/* Protected routes - hanya butuh login */}
        <Route element={<ProtectedRoute />}>
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        </Route>

        {/* Protected routes - butuh role tertentu */}
        <Route
          element={<ProtectedRoute allowedRoles={[ROLES.ADMIN, ROLES.APPROVER]} />}
        >
          {/* <Route path="/approval" element={<ApprovalPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}