import { Routes, Route } from "react-router-dom";

import AdminSignupForm from "./auth/components/AdminSignupForm";
import LoginPage from "./auth/pages/LoginPage";
import LandingPage from "./components/common/LandingPage";
import AdminDashboard from "./features/admin/pages/AdminDashboard";
import ForgotPwdEmailForm from "./auth/components/ForgotPwdEmailForm.jsx";
import OtpForm from "./auth/components/ForgotPwdOtpForm.jsx";
import ResetPasswordForm from "./auth/components/ResetPasswordForm.jsx";
import { useAuthRedirect } from "./auth/hooks/useAuthRedirect.js";

function App() {
  useAuthRedirect();
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<AdminSignupForm />} />
      <Route path="/forgot-password" element={<ForgotPwdEmailForm />} />
      <Route path="/forgot-password/otp" element={<OtpForm />} />
      <Route path="/forgot-password/reset" element={<ResetPasswordForm />} />
      <Route path="/admin/home" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
