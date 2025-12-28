import { Routes, Route } from "react-router-dom";

import AdminSignupForm from "./auth/components/AdminSignupForm";
import LoginPage from "./auth/pages/LoginPage";
import LandingPage from "./components/common/LandingPage";
import AdminDashboard from "./features/admin/pages/AdminDashboard";
import ForgotPwdEmailForm from "./auth/components/ForgotPwdEmailForm.jsx";
import OtpForm from "./auth/components/ForgotPwdOtpForm.jsx";
import ResetPasswordForm from "./auth/components/ResetPasswordForm.jsx";
import { useAuthRedirect } from "./auth/hooks/useAuthRedirect.js";
import CreateProjectPage from "./features/admin/pages/CreateProjectPage.jsx";
import ProjectsPage from "./features/admin/pages/ProjectsPage.jsx";
import CreateStaffProfile from "./features/admin/components/CreateStaffProfile.jsx";
import AssignProjects from "./features/admin/components/AssigneProjects.jsx";
import ProjectEdit from "./features/admin/components/ProjectEdit.jsx";
import StaffProfileEdit from "./features/admin/components/StaffProfileEdit.jsx";
import LaboursProfile from "./features/admin/components/LaboursProfile.jsx";

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
      <Route path="/admin/create-project" element={<CreateProjectPage />} />
      <Route path="/admin/projects" element={<ProjectsPage />} />
      <Route path="/admin/projects/:projectId/edit" element={<ProjectEdit />} />
      <Route
        path="/admin/create/staff-profile"
        element={<CreateStaffProfile />}
      />
      <Route path="/admin/projects/assign" element={<AssignProjects />} />
      <Route path="/admin/staff/profile/edit" element={<StaffProfileEdit />} />
      <Route path="/admin/labour/profile" element={<LaboursProfile />} />
    </Routes>
  );
}

export default App;
