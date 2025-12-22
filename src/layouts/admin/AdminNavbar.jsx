import React from "react";

function AdminNavbar() {
  return (
    <nav className="mx-2 px-4 sm:px-6 lg:px-8 sticky top-2 z-30 shadow backdrop-blur-2xl backdrop-saturate-200 bg-white/80 m-2 rounded-lg sm:rounded-full">
      <div className="flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/admin" className="text-2xl font-extrabold tracking-tight">
            <span className="text-red-600">Sit</span>
            <span className="text-gray-900">Flow</span>
          </a>
        </div>

        {/* Center Navigation */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <a
            href="/admin/projects"
            className="text-gray-800 hover:text-red-600 transition"
          >
            Projects
          </a>

          <a
            href="/admin/projects/create"
            className="text-gray-800 hover:text-red-600 transition"
          >
            Create Project
          </a>
          <a
            href="/admin/projects/create"
            className="text-gray-800 hover:text-red-600 transition"
          >
            Add Staff Profile
          </a>
          <a
            href="/admin/projects/create"
            className="text-gray-800 hover:text-red-600 transition"
          >
            Project Assignemt
          </a>
           <a
            href="/admin/projects/create"
            className="text-gray-800 hover:text-red-600 transition"
          >
            Staff Profile
          </a>

           <a
            href="/admin/projects/create"
            className="text-gray-800 hover:text-red-600 transition"
          >
            Labours Profile
          </a>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3">
          {/* Round Avatar */}
          <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-semibold">
            A
          </div>

          {/* Name */}
          <span className="text-sm font-medium text-gray-700">Admin</span>

          {/* Logout */}
          <button className="text-sm px-3 py-1.5 rounded-lg border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
