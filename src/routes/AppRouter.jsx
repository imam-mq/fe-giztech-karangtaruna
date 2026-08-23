import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { ROLES } from "../constants/roles";

// Contoh import halaman (sesuaikan dengan file yang kamu buat di features/*)
// import LoginPage from "../features/auth/pages/LoginPage";
// import DashboardPage from "../features/dashboard/pages/DashboardPage";
// import AspirasiListPage from "../features/aspirasi/pages/AspirasiListPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
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
