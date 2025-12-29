import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../../config/api.config";

export const useAuthRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const publicPaths = ["/login", "/signup", "/forgot-password"];

    if (!publicPaths.includes(location.pathname)) return;

    // Prevent repeated calls
    const alreadyChecked = sessionStorage.getItem("authChecked");
    if (alreadyChecked) return;

    const checkAuth = async () => {
      try {
        sessionStorage.setItem("authChecked", "true");

        const res = await api.get("/auth/me");
        const { role, userId, name } = res.data.user;

        sessionStorage.setItem("userEmail", userId);
        sessionStorage.setItem("userName", name);
        sessionStorage.setItem("userRole", role);

        if (role === "admin") {
          navigate("/admin/projects", { replace: true });
        } else if (role === "supervisor") {
          navigate("/supervisor/home", { replace: true });
        } else if (role === "engineer") {
          navigate("/engineer/home", { replace: true });
        }
      } catch {
        sessionStorage.removeItem("authChecked");
        // Not logged in  stay on public page
      }
    };

    checkAuth();
  }, [location.pathname, navigate]);
};
