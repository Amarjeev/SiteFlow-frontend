import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function AdminNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    ["Projects", "/admin/projects", "📁"],
    ["Create Project", "/admin/create-project","➕"],
    ["Add Staff", "/admin/staff/create", "👤"],
    ["Project Assignment", "/admin/assign", "🧩"],
    ["Staff Profiles", "/admin/staff", "🗂️"],
    ["Labour Profiles", "/admin/labours", "🧑‍🔧"],
  ];

  const linkStyle = (isActive) =>
    `
      relative flex items-center gap-2 px-3 py-1.5 rounded-full text-sm
      transition-all duration-200
      ${
        isActive
          ? "text-red-600 bg-red-50"
          : "text-gray-700 hover:text-red-600 hover:bg-red-50"
      }
      hover:scale-[1.05]
      after:absolute after:left-3 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-red-600
      after:transition-all after:duration-300
      hover:after:w-[70%]
    `;

  return (
    <nav className="mx-2 my-2 px-4 sm:px-6 lg:px-8 sticky top-2 z-30 rounded-xl sm:rounded-full bg-white/80 backdrop-blur-xl shadow">
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/admin" className="text-2xl font-extrabold tracking-tight">
          <span className="text-red-600">Sit</span>
          <span className="text-gray-900">Flow</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map(([label, link, icon]) => (
            <Link
              key={label}
              to={link}
              className={linkStyle(pathname === link)}
            >
              <span>{icon}</span>
              {label}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-semibold">
            A
          </div>

          <span className="hidden sm:block text-sm font-medium text-gray-700">
            Admin
          </span>

          <button className="hidden sm:inline-flex text-sm px-3 py-1.5 rounded-lg border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
            Logout
          </button>

          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-1 rounded-xl bg-white shadow p-4">
          {navLinks.map(([label, link, icon]) => (
            <Link
              key={label}
              to={link}
              onClick={() => setMenuOpen(false)}
              className={linkStyle(pathname === link)}
            >
              <span>{icon}</span>
              {label}
            </Link>
          ))}

          <button className="mt-3 w-full text-sm px-3 py-2 rounded-lg border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default AdminNavbar;
