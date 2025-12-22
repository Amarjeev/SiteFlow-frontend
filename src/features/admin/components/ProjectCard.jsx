import React from "react";

function ProjectCard() {
  const projects = [
    {
      projectId: "PROJ-20251216-00004",
      projectName: "IT Park Development Phase 2",
      siteLocation: "Technopark, Trivandrum",
      workSummary:
        "Development of phase 2 IT park including office blocks, power backup, network cabling, and landscaping.",
      startDate: "2025-03-15T00:00:00.000Z",
      endDate: "2026-02-28T00:00:00.000Z",
      projectStatus: "ongoing",
      status: "active",
    },
    {
      projectId: "PROJ-20251216-00005",
      projectName: "Residential Tower Construction",
      siteLocation: "Kakkanad, Kochi",
      workSummary:
        "High-rise residential tower including parking, lifts, fire safety, and amenities.",
      startDate: "2025-01-10T00:00:00.000Z",
      endDate: "2025-12-30T00:00:00.000Z",
      projectStatus: "completed",
      status: "active",
    },
    {
      projectId: "PROJ-20251216-00006",
      projectName: "Highway Expansion Project",
      siteLocation: "NH-66, Kerala",
      workSummary:
        "Expansion of national highway including bridges, drainage, and road safety works.",
      startDate: "2024-06-01T00:00:00.000Z",
      endDate: "2026-06-30T00:00:00.000Z",
      projectStatus: "ongoing",
      status: "active",
    },
  ];

  return (
    <section className="mx-auto max-w-[1440px] pt-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.projectId}
            className="rounded-[28px] bg-[#f3f3f3] p-6 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-1 outline-offset-[-1px] outline-[#191a23]"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-black">
                  {project.projectName}
                </h2>
                <p className="text-xs text-gray-600">
                  {project.projectId}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  project.projectStatus === "completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {project.projectStatus}
              </span>
            </div>

            {/* Location */}
            <p className="mt-3 text-sm text-gray-700">
              📍 {project.siteLocation}
            </p>

            {/* Summary */}
            <p className="mt-2 text-sm text-gray-800 line-clamp-3">
              {project.workSummary}
            </p>

            {/* Dates */}
            <div className="mt-4 flex justify-between text-xs text-gray-600">
              <span>
                Start: {new Date(project.startDate).toLocaleDateString()}
              </span>
              <span>
                End: {new Date(project.endDate).toLocaleDateString()}
              </span>
            </div>

            {/* Active Status */}
            <div className="mt-4">
              <span className="rounded-md bg-blue-100 px-2 py-1 text-xs text-blue-700">
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectCard;
