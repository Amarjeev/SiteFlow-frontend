// import LoginPage from "./auth/pages/LoginPage";
// import LandingPage from "./components/LandingPage";
import AdminSignupForm from "./auth/components/AdminSignupForm";
import LoginPage from "./auth/pages/LoginPage";
// import SignupPage from "./auth/pages/SignupPage";
import LandingPage from "./components/common/LandingPage";
import AdminDashboard from "./features/admin/pages/AdminDashboard";
// import ForgotPassword from "./components/ForgotPassword";
// import SignupForm from "./components/SignupForm";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
 <Router>
  <Routes>
    <Route path="/" element={<LandingPage />} />
     <Route path="/login" element={<LoginPage />} />
     <Route path="/signup" element={<AdminSignupForm/>} />
  </Routes>
 </Router>
  );
}

export default App;
