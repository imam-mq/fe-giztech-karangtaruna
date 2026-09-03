import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Public
import PublicLayout from "../features/public/layouts/PublicLayout";
import BerandaPage from "../features/public/pages/BerandaPage";
import TentangKamiPage from "../features/public/pages/TentangKamiPage";
import TimPage from "../features/public/pages/TimPage";
import LayananPaketPage from "../features/public/pages/LayananPaketPage";
import WebAppsPage from "../features/public/pages/WebAppsPage";
import UiuxPage from "../features/public/pages/UiuxPage";
import LandingPage from "../features/public/pages/LandingPage";
import PortofolioPage from "../features/public/pages/PortofolioPage";
import ProjectDetailPage from "../features/public/pages/ProjectDetailPage";
import TestimoniPage from "../features/public/pages/TestimoniPage";

// auth
import LoginPage from "../features/auth/pages/LoginPage";

// admin
import AdminLayout from "../features/admin/layouts/AdminLayout";
import DashboardPage from "../features/admin/pages/DashboardPage";
import TimAdminPage from "../features/admin/pages/TimAdminPage";
import MilestonesAdminPage from "../features/admin/pages/MilestonesAdminPage";
import TestimoniAdminPage from "../features/admin/pages/TestimoniAdminPage";
import LayananAdminPage from "../features/admin/pages/LayananAdminPage";
import LayananDetailPage from "../features/admin/pages/LayananDetailPage";
import PortofolioAdminPage from "../features/admin/pages/PortofolioAdminPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<BerandaPage />} />
          <Route path="/tentang" element={<TentangKamiPage />} />
          <Route path="/tentang/tim" element={<TimPage />} />
          <Route path="/layanan" element={<LayananPaketPage />} />
          <Route path="/layanan/web-apps" element={<WebAppsPage />} />
          <Route path="/layanan/ui-ux-design" element={<UiuxPage />} />
          <Route path="/layanan/landing-page" element={<LandingPage />} />
          <Route path="/portofolio" element={<PortofolioPage />} />
          <Route path="/portofolio/:slug" element={<ProjectDetailPage />} />
          <Route path="/testimoni" element={<TestimoniPage />} />
        </Route>

        {/* login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Admin - cukup butuh login (sistem cuma punya 1 role admin, no role gate) */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<DashboardPage />} />
            <Route path="/admin/web-profile/tim" element={<TimAdminPage />} />
            <Route path="/admin/web-profile/milestones" element={<MilestonesAdminPage />} />
            <Route path="/admin/web-profile/testimoni" element={<TestimoniAdminPage />} />
            <Route path="/admin/web-profile/layanan" element={<LayananAdminPage />} />
            <Route path="/admin/web-profile/layanan/:slug" element={<LayananDetailPage />} />
            <Route path="/admin/web-profile/portofolio" element={<PortofolioAdminPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}