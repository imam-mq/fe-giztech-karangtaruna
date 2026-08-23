import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

/**
 * allowedRoles: array role yang boleh akses, kosongkan jika hanya butuh login
 */
export default function ProtectedRoute({ allowedRoles = [] }) {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}
