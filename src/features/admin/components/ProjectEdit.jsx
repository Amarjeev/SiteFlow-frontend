import React, { useState } from "react";

function ProjectEdit() {
  const [projectIdInput, setProjectIdInput] = useState("");
  const [project, setProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // 🔹 Mock project DB (replace with API)
  const mockProjectDB = {
    "PROJ-20251216-00005": {
      projectId: "PROJ-20251216-00005",
      projectName: "Government School Renovation",
      siteLocation: "Manjeri, Malappuram",
      workSummary:
        "Renovation of classrooms, roofing, electrical wiring, and sanitation facilities in a government school.",
      startDate: "2024-02-01",
      endDate: "2024-10-30",
      projectStatus: "completed",
      status: "active",
    },
  };

  const handleSearch = () => {
    const data = mockProjectDB[projectIdInput];
    setProject(data || null);
    setIsEditing(false);
  };

  const handleDeleteProject = () => {
    alert("Project deleted (API call here)");
    setProject(null);
    setProjectIdInput("");
  };

  return (
    <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow border">
      <h2 className="mb-6 text-xl font-semibold text-gray-800">
        Edit Project
      </h2>

      {/* Search */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={projectIdInput}
          onChange={(e) => setProjectIdInput(e.target.value)}
          placeholder="Enter Project ID"
          className="w-full rounded-md border px-3 py-2 text-sm"
        />
        <button
          onClick={handleSearch}
          className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
        >
          Search
        </button>
      </div>

      {/* Project Details */}
      {project && (
        <div className="space-y-4">

          {/* Project Name */}
          <div>
            <label className="text-sm font-medium">Project Name</label>
            <input
              type="text"
              value={project.projectName}
              readOnly={!isEditing}
              onChange={(e) =>
                setProject({ ...project, projectName: e.target.value })
              }
              className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${
                !isEditing && "bg-gray-100"
              }`}
            />
          </div>

          {/* Project ID */}
          <div>
            <label className="text-sm font-medium">Project ID</label>
            <input
              type="text"
              value={project.projectId}
              readOnly
              className="mt-1 w-full rounded-md border bg-gray-100 px-3 py-2 text-sm"
            />
          </div>

          {/* Location */}
          <div>
            <label className="text-sm font-medium">Site Location</label>
            <input
              type="text"
              value={project.siteLocation}
              readOnly={!isEditing}
              onChange={(e) =>
                setProject({ ...project, siteLocation: e.target.value })
              }
              className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${
                !isEditing && "bg-gray-100"
              }`}
            />
          </div>

          {/* Work Summary */}
          <div>
            <label className="text-sm font-medium">Work Summary</label>
            <textarea
              rows="3"
              value={project.workSummary}
              readOnly={!isEditing}
              onChange={(e) =>
                setProject({ ...project, workSummary: e.target.value })
              }
              className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${
                !isEditing && "bg-gray-100"
              }`}
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium">Start Date</label>
              <input
                type="date"
                value={project.startDate}
                readOnly={!isEditing}
                onChange={(e) =>
                  setProject({ ...project, startDate: e.target.value })
                }
                className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${
                  !isEditing && "bg-gray-100"
                }`}
              />
            </div>

            <div>
              <label className="text-sm font-medium">End Date</label>
              <input
                type="date"
                value={project.endDate}
                readOnly={!isEditing}
                onChange={(e) =>
                  setProject({ ...project, endDate: e.target.value })
                }
                className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${
                  !isEditing && "bg-gray-100"
                }`}
              />
            </div>
          </div>

          {/* Status */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium">Project Status</label>
              <select
                value={project.projectStatus}
                disabled={!isEditing}
                onChange={(e) =>
                  setProject({ ...project, projectStatus: e.target.value })
                }
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm bg-white"
              >
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">Record Status</label>
              <input
                type="text"
                value={project.status}
                readOnly
                className="mt-1 w-full rounded-md border bg-gray-100 px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
              >
                Edit Project
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsEditing(false);
                  alert("Project updated (API call here)");
                }}
                className="rounded-md bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
              >
                Save Changes
              </button>
            )}

            <button
              onClick={handleDeleteProject}
              className="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
            >
              Delete Project
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default ProjectEdit;
