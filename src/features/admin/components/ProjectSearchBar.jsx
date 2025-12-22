import React, { useState } from "react";

function ProjectSearchBar() {
  const [projectId, setProjectId] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleClear = () => {
    setProjectId("");
    setStatus("");
    setStartDate("");
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

        <input
          type="text"
          placeholder="Search Project ID"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">All Status</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />

        <button
          onClick={handleClear}
          className="w-full bg-gray-100 text-gray-700 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default ProjectSearchBar;
