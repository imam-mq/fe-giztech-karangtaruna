import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { ROLES } from "../constants/roles";

// Public
import PublicLayout from "../features/public/layouts/PublicLayout";
import BerandaPage from "../features/public/pages/BerandaPage";
import TentangKamiPage from "../features/public/pages/TentangKamiPage";
import TimPage from "../features/public/pages/TimPage";
import LayananPaketPage from "../features/public/pages/LayananPaketPage";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes - website company profile GIZ Technology */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<BerandaPage />} />
          <Route path="/tentang" element={<TentangKamiPage />} />
          <Route path="/tentang/tim" element={<TimPage />} />
          <Route path="/layanan" element={<LayananPaketPage />} />
          {/* Route publik lain (Portofolio, Testimoni, Kontak) menyusul di sini */}
        </Route>

        {/* Public routes - auth */}
        {/* <Route path="/login" element={<LoginPage />} /> */}

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