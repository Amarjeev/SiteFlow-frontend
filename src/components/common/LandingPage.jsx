import React, { useState } from "react";

function LandingPage() {
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (!role) {
      alert("Please select your role");
      return;
    }
    // later you can redirect based on role
    // navigate(`/login?role=${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-360px bg-white p-8 rounded-xl shadow-lg text-center space-y-6">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-tight">
          <span className="text-red-600">Sit</span>
          <span className="text-gray-900">Flow</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm">
          Please select your role and login
        </p>

        {/* Role Select */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="" disabled>
            Select role
          </option>
          <option value="admin">Admin</option>
          <option value="supervisor">Supervisor</option>
          <option value="engineer">Engineer</option>
          <option value="labour">Labour</option>
        </select>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default LandingPage;
