import React, { useState } from "react";

function ProjectNotification() {
  const [isOpen, setIsOpen] = useState(true);

  const project = {
    projectId: "PROJ-20251216-00004",
    projectName: "IT Park Development Phase 2",
    siteLocation: "Technopark, Trivandrum",
    workSummary:
      "Development of phase 2 IT park including office blocks, power backup, network cabling, and landscaping.",
    startDate: "2025-03-15T00:00:00.000Z",
    endDate: "2026-02-28T00:00:00.000Z",
    projectStatus: "ongoing",
  };

  if (!isOpen) return null;

  return (
    <div className="relative w-full bg-white border border-gray-200 rounded-lg shadow-sm p-4 sm:p-5">
      
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-900"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mt-3">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            {project.projectName}
          </h3>
          <p className="text-xs text-gray-500">{project.projectId}</p>
        </div>

        <span className="w-fit text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-medium">
          Ongoing
        </span>
      </div>

      {/* Location */}
      <p className="text-sm text-gray-600 mt-3">
        📍 {project.siteLocation}
      </p>

      {/* Summary */}
      <p className="text-sm text-gray-700 mt-2 line-clamp-3">
        {project.workSummary}
      </p>

      {/* Dates */}
      <div className="flex flex-col sm:flex-row sm:justify-between gap-1 text-xs text-gray-500 mt-4">
        <span>
          Start: {new Date(project.startDate).toLocaleDateString()}
        </span>
        <span>
          End: {new Date(project.endDate).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}

export default ProjectNotification;
