import React, { useState } from "react";
import StaffNavbar from "../../../layouts/navbar/EngineerNavbar";

function ProjectReports() {
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterDate, setFilterDate] = useState("");

  /* ================= DUMMY DATA ================= */

  const projects = [
    {
      projectId: "PROJ2025122700001",
      projectName: "Kozhikode Smart Drainage Upgrade",
      siteLocation: "Kozhikode, Kerala",
      startDate: "2025-12-27",
      endDate: "2026-01-10",
      status: "ongoing",
      workSummary:
        "Upgrade and rehabilitation of the existing stormwater drainage system including excavation, concrete lining, and road restoration.",
    },
  ];

  const projectUpdates = [
    {
      id: 1,
      projectId: "PROJ2025122700001",
      date: "2025-12-28",
      status: "ongoing",
      text: "Drainage excavation completed for zone A.",
    },
    {
      id: 2,
      projectId: "PROJ2025122700001",
      date: "2025-12-29",
      status: "ongoing",
      text: "Concrete lining started, 40% progress achieved.",
    },
    {
      id: 3,
      projectId: "PROJ2025122700001",
      date: "2025-12-30",
      status: "completed",
      text: "Phase 1 completed successfully.",
    },
  ];

  /* ================= HANDLERS ================= */

  const handleSearch = () => {
    const project = projects.find(
      (p) =>
        p.projectId.toLowerCase() === search.toLowerCase() ||
        p.projectName.toLowerCase().includes(search.toLowerCase())
    );

    setSelectedProject(project || null);
    setFilterDate("");
  };

  const filteredUpdates =
    selectedProject &&
    projectUpdates.filter((u) => {
      const matchProject = u.projectId === selectedProject.projectId;
      const matchDate = !filterDate || u.date === filterDate;
      return matchProject && matchDate;
    });

  return (
    <>
      <StaffNavbar />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
        {/* ================= LEFT SIDE ================= */}
        <aside className="lg:col-span-1 space-y-6">
          {/* SEARCH */}
          <div className="rounded-2xl bg-white border shadow-lg p-5">
            <h2 className="text-lg font-semibold mb-4">🔍 Search Project</h2>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter project ID or name..."
              className="mb-3 w-full rounded-xl border px-4 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              onClick={handleSearch}
              className="w-full rounded-xl bg-red-600 py-2 text-sm font-medium text-white
                hover:bg-red-700 transition"
            >
              Search
            </button>
          </div>

          {/* FULL PROJECT DETAILS */}
          {selectedProject && (
            <div className="rounded-2xl bg-white border shadow-lg p-5">
              <h3 className="text-lg font-semibold mb-4">
                📁 Full Project Details
              </h3>

              <div className="space-y-3 text-sm">
                <Detail label="Project ID" value={selectedProject.projectId} />
                <Detail label="Project Name" value={selectedProject.projectName} />
                <Detail label="Location" value={selectedProject.siteLocation} />
                <Detail label="Start Date" value={selectedProject.startDate} />
                <Detail label="End Date" value={selectedProject.endDate} />
                <Detail
                  label="Status"
                  value={
                    <span className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-medium text-blue-700 capitalize">
                      {selectedProject.status}
                    </span>
                  }
                />
              </div>

              {/* Summary */}
              <div className="mt-4 rounded-xl bg-gray-50 p-4 border">
                <p className="text-sm font-medium mb-1">📝 Work Summary</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {selectedProject.workSummary}
                </p>
              </div>
            </div>
          )}
        </aside>

        {/* ================= RIGHT SIDE ================= */}
        <section className="lg:col-span-2">
          {!selectedProject ? (
            <div className="rounded-2xl border border-dashed bg-gray-50 p-10 text-center text-gray-500">
              👈 Search a project to view updates
            </div>
          ) : (
            <div className="rounded-2xl bg-white border shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">🧾 Project Updates</h3>

                <input
                  type="date"
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                  className="rounded-xl border px-3 py-1.5 text-sm
                    focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {filteredUpdates?.length > 0 ? (
                <div className="space-y-4">
                  {filteredUpdates.map((update) => (
                    <div key={update.id} className="rounded-xl border p-4">
                      <div className="flex justify-between mb-1">
                        <p className="text-sm font-medium">
                          📅 {update.date}
                        </p>
                        <span className="rounded-full bg-gray-100 px-3 py-0.5 text-xs capitalize">
                          {update.status}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600">
                        {update.text}
                      </p>

                      <div className="mt-3 flex justify-end gap-2">
                        <button className="text-xs px-3 py-1.5 border rounded-lg hover:bg-gray-50">
                          ✏️ Edit
                        </button>
                        <button className="text-xs px-3 py-1.5 rounded-lg bg-red-100 text-red-700 hover:bg-red-200">
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400 text-center py-6">
                  No updates found for selected date
                </p>
              )}
            </div>
          )}
        </section>
      </div>
    </>
  );
}

/* ================= HELPER ================= */
function Detail({ label, value }) {
  return (
    <div className="flex justify-between gap-4 border-b border-dashed pb-1">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-800">{value}</span>
    </div>
  );
}

export default ProjectReports;
