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
import TimAdminPage from "../features/admin/pages/TimAdminPage";

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

        {/* Admin  */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<div>Dashboard placeholder</div>} />
            <Route path="/admin/web-profile/tim" element={<TimAdminPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}