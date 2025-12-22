import React, { useState } from "react";

function Navbar() {
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (!role) {
      alert("Please select a role first");
      return;
    }
  };

  const handleSignup = () => {
    if (!role) {
      alert("Please select a role first");
      return;
    }
  };

  return (
    <nav className="mx-2 px-2 sm:px-6 lg:px-8 sticky top-2 z-30 shadow backdrop-blur-2xl backdrop-saturate-200 bg-opacity-80 m-2 rounded-lg sm:rounded-full">
      <div className="relative flex h-16 items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-extrabold tracking-tight">
            <span className="text-red-600">Sit</span>
            <span className="text-gray-900">Flow</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Selected Role Badge */}
          {role && (
            <span className="text-xs px-3 py-1 rounded-full bg-red-100 text-red-700 font-medium">
              Role: {role.charAt(0).toUpperCase() + role.slice(1)}
            </span>
          )}

          {/* Role Select */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="" disabled>
              Select role
            </option>
            <option value="admin">Admin</option>
            <option value="supervisor">Supervisor</option>
            <option value="engineer">Engineer</option>
            <option value="labour">Labour</option>
          </select>

          {/* Login */}
          <button
            onClick={handleLogin}
            disabled={!role}
            className={`text-sm px-4 py-1.5 rounded-lg border transition
              ${role
                ? "border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                : "border-gray-300 text-gray-400 cursor-not-allowed"}
            `}
          >
            Login
          </button>

          {/* Signup */}
          <button
            onClick={handleSignup}
            disabled={!role}
            className={`text-sm px-4 py-1.5 rounded-lg transition
              ${role
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"}
            `}
          >
            Signup
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
