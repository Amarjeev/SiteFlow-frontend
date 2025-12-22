import React, { useState } from "react";

function AssignProjects() {
  const [staffId, setStaffId] = useState("");
  const [staffRole, setStaffRole] = useState("");
  const [projectId, setProjectId] = useState("");
  const [projectDetails, setProjectDetails] = useState(null);

  // 🔹 Mock data (later replace with API)
  const staffMap = {
    "ENG-001": "Engineer",
    "SUP-001": "Supervisor",
  };

  const projects = [
    {
      projectId: "PROJ-001",
      projectName: "IT Park Phase 2",
      siteLocation: "Technopark, Trivandrum",
      status: "Ongoing",
    },
    {
      projectId: "PROJ-002",
      projectName: "Residential Tower",
      siteLocation: "Kakkanad, Kochi",
      status: "Completed",
    },
  ];

  const handleStaffBlur = () => {
    setStaffRole(staffMap[staffId] || "Unknown");
  };

  const handleProjectChange = (e) => {
    const selectedId = e.target.value;
    setProjectId(selectedId);

    const project = projects.find((p) => p.projectId === selectedId);
    setProjectDetails(project || null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      staffId,
      role: staffRole,
      projectId,
    };

    console.log("Assign Project Payload:", payload);
    // API call here
  };

  return (
    <div className="mx-auto max-w-xl rounded-lg bg-white p-6 shadow border">
      <h2 className="mb-6 text-xl font-semibold text-gray-800">
        Assign Project
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Staff ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Staff ID
          </label>
          <input
            type="text"
            value={staffId}
            onChange={(e) => setStaffId(e.target.value)}
            onBlur={handleStaffBlur}
            required
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            placeholder="ENG-001 / SUP-001"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <input
            type="text"
            value={staffRole}
            readOnly
            className="mt-1 w-full rounded-md border bg-gray-100 px-3 py-2 text-sm"
            placeholder="Role will appear automatically"
          />
        </div>

        {/* Project Select */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Select Project
          </label>
          <select
            value={projectId}
            onChange={handleProjectChange}
            required
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm bg-white"
          >
            <option value="">Select Project</option>
            {projects.map((project) => (
              <option key={project.projectId} value={project.projectId}>
                {project.projectName}
              </option>
            ))}
          </select>
        </div>

        {/* Project Details */}
        {projectDetails && (
          <div className="rounded-md border bg-gray-50 p-4 text-sm space-y-1">
            <p>
              <span className="font-medium">Project Name:</span>{" "}
              {projectDetails.projectName}
            </p>
            <p>
              <span className="font-medium">Location:</span>{" "}
              {projectDetails.siteLocation}
            </p>
            <p>
              <span className="font-medium">Status:</span>{" "}
              {projectDetails.status}
            </p>
          </div>
        )}

        {/* Save Button */}
        <button
          type="submit"
          className="w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
        >
          Save Assignment
        </button>
      </form>
    </div>
  );
}

export default AssignProjects;
