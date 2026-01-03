import React, { useState } from "react";
import SupervisorNavbar from "../../../layouts/navbar/SupervisorNavbar";

function AssigneJobsToLabour() {
  const [projectId, setProjectId] = useState("");
  const [labourSearch, setLabourSearch] = useState("");
  const [project, setProject] = useState(null);
  const [labour, setLabour] = useState(null);
  const [error, setError] = useState("");

  /* ================= ASSIGN JOB STATES ================= */
  const [jobDescription, setJobDescription] = useState("");
  const [jobDate, setJobDate] = useState("");
  const [jobStartTime, setJobStartTime] = useState("");
  const [jobEndTime, setJobEndTime] = useState("");

  /* ================= COMMON INPUT CLASS ================= */
  const inputClass =
    "w-full bg-white text-black placeholder:text-gray-500 border border-neutral-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40";

  /* ================= MOCK CHECK HANDLER ================= */
  const handleCheck = () => {
    setError("");
    setProject(null);
    setLabour(null);

    if (!projectId.trim() || !labourSearch.trim()) {
      setError("Project ID and Labour ID or Mobile number are required");
      return;
    }

    setProject({
      projectId: "PROJ2025122700001",
      projectName: "Kozhikode Smart Drainage Upgrade",
      siteLocation: "Kozhikode, Kerala",
      projectStatus: "ongoing",
    });

    setLabour({
      labourId: "LAB2025001",
      name: "Ramesh Kumar",
      mobile: "7034884827",
      status: "disabled",
    });
  };

  /* ================= ASSIGN JOB HANDLER ================= */
  const handleAssignJob = () => {
    setError("");

    if (!jobDescription.trim()) {
      setError("Job description is required");
      return;
    }

    if (!jobDate || !jobStartTime || !jobEndTime) {
      setError("Job date and time are required");
      return;
    }

    if (jobEndTime <= jobStartTime) {
      setError("Job end time must be after start time");
      return;
    }

    const payload = {
      labourId: labour.labourId,
      projectId: project.projectId,
      jobDescription: jobDescription.trim(),
      jobDate: new Date(jobDate),
      jobStartTime,
      jobEndTime,
      assignedBy: "SUP1001",
    };

    console.log("Assign Job Payload:", payload);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SupervisorNavbar />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-xl md:text-2xl font-semibold mb-6">
          🛠 Assign Job to Labour
        </h1>

        {/* ================= SEARCH ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <input
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            placeholder="Enter Project ID"
            className={inputClass}
          />
          <input
            value={labourSearch}
            onChange={(e) => setLabourSearch(e.target.value)}
            placeholder="Enter Labour ID or Mobile"
            className={inputClass}
          />
          <button
            onClick={handleCheck}
            className="rounded-md bg-white text-black font-medium py-2 hover:bg-gray-200"
          >
            Check
          </button>
        </div>

        {/* ================= ERROR ================= */}
        {error && (
          <div className="mt-4 text-sm text-red-400 bg-red-950 border border-red-800 rounded-lg px-4 py-2">
            {error}
          </div>
        )}

        {/* ================= DETAILS ================= */}
        {(project || labour) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {project && (
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                <h2 className="text-lg font-semibold mb-4">
                  📋 Project Details
                </h2>
                <Detail label="Project ID" value={project.projectId} />
                <Detail label="Project Name" value={project.projectName} />
                <Detail label="Location" value={project.siteLocation} />
                <Detail label="Status" value={project.projectStatus} badge />
              </div>
            )}

            {labour && (
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                <h2 className="text-lg font-semibold mb-4">
                  👷 Labour Profile
                </h2>
                <Detail label="Labour ID" value={labour.labourId} />
                <Detail label="Name" value={labour.name} />
                <Detail label="Mobile" value={labour.mobile} />
                <Detail label="Status" value={labour.status} badge />
              </div>
            )}
          </div>
        )}

        {/* ================= ASSIGN JOB (NEW THEME) ================= */}
        {project && labour && (
          <div className="mt-6 bg-gradient from-slate-900 via-blue-950 to-slate-900 border border-blue-800/40 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4 text-blue-200">
              📝 Assign Job
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm text-blue-300">
                  Job Date
                </label>
                <input
                  type="date"
                  value={jobDate}
                  onChange={(e) => setJobDate(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-blue-300">
                  Start Time
                </label>
                <input
                  type="time"
                  value={jobStartTime}
                  onChange={(e) => setJobStartTime(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-blue-300">
                  End Time
                </label>
                <input
                  type="time"
                  value={jobEndTime}
                  onChange={(e) => setJobEndTime(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1 text-sm text-blue-300">
                  Job Description
                </label>
                <textarea
                  rows={3}
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Describe the job to be assigned"
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <button
              onClick={handleAssignJob}
              disabled={labour.status === "disabled"}
              className={`mt-4 px-6 py-2 rounded-md font-medium
                ${
                  labour.status === "disabled"
                    ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-500"
                }`}
            >
              Assign Job
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= DETAIL COMPONENT ================= */
const Detail = ({ label, value, badge }) => (
  <div className="flex justify-between items-center text-sm mb-3">
    <span className="text-gray-400">{label}</span>
    {badge ? (
      <span className="px-3 py-1 rounded-full text-xs bg-neutral-800 border border-neutral-700">
        {value}
      </span>
    ) : (
      <span className="font-medium">{value}</span>
    )}
  </div>
);

export default AssigneJobsToLabour;
