import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { ROLES } from "../constants/roles";

// Public
import PublicLayout from "../features/public/layouts/PublicLayout";
import BerandaPage from "../features/public/pages/BerandaPage";

// Contoh import halaman lain (sesuaikan dengan file yang kamu buat di features/*)
// import LoginPage from "../features/auth/pages/LoginPage";
// import DashboardPage from "../features/dashboard/pages/DashboardPage";
// import AspirasiListPage from "../features/aspirasi/pages/AspirasiListPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes - website company profile GIZ Technology */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<BerandaPage />} />
          {/* Route publik lain (Tentang Kami, Layanan, dst) menyusul di sini */}
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