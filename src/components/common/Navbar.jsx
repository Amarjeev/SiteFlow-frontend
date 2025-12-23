import React, { useState } from "react";
import { useNavbar } from "../hooks/useNavbar";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { userRole, setUserRole } = useNavbar();

  return (
    <nav className="mx-2 px-4 sm:px-6 lg:px-8 sticky top-2 z-30 shadow backdrop-blur-2xl bg-white/80 rounded-lg sm:rounded-full">
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-red-600">Sit</span>
          <span className="text-gray-900">Flow</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">
          {userRole && (
            <span className="text-xs px-3 py-1 rounded-full bg-red-100 text-red-700 font-medium">
              Role: {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
            </span>
          )}

          <select
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            className="border rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-red-500"
          >
            <option value="" disabled>
              Select role
            </option>
            <option value="admin">Admin</option>
            <option value="supervisor">Supervisor</option>
            <option value="engineer">Engineer</option>
            <option value="labour">Labour</option>
          </select>

          <Link
            to={userRole ? "/login" : "#"}
            onClick={(e) => {
              if (!userRole) e.preventDefault();
            }}
            className={`px-4 py-1.5 text-sm rounded-lg border transition
    ${
      userRole
        ? "border-red-600 text-red-600 "
        : "border-gray-300 text-gray-400 cursor-not-allowed"
    }
  `}
          >
            Login
          </Link>

          <Link
            to={userRole ? "/signup" : "#"}
            onClick={(e) => {
              if (!userRole) e.preventDefault();
            }}
            className={`px-4 py-1.5 text-sm rounded-lg border transition
    ${
      userRole
        ? "border-red-600 text-red-600 "
        : "border-gray-300 text-gray-400 cursor-not-allowed"
    }
  `}
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg border"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 p-4 border rounded-lg bg-white">
          {userRole && (
            <span className="block text-xs px-3 py-1 rounded-full bg-red-100 text-red-700 font-medium w-fit">
              Role: {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
            </span>
          )}

          <select
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          >
            <option value="" disabled>
              Select role
            </option>
            <option value="admin">Admin</option>
            <option value="supervisor">Supervisor</option>
            <option value="engineer">Engineer</option>
            <option value="labour">Labour</option>
          </select>

          <button
            // onClick={handleLogin}
            disabled={!userRole}
            className={`w-full py-2 rounded-lg border text-sm
              ${
                userRole
                  ? "border-red-600 text-red-600"
                  : "border-gray-300 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            Login
          </button>

          <button
            // onClick={handleSignup}
            disabled={!userRole}
            className={`w-full py-2 rounded-lg text-sm
              ${
                userRole
                  ? "bg-red-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }
            `}
          >
            Signup
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
