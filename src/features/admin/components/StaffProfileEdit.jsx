import React, { useState } from "react";

function StaffProfileEdit() {
  const [staffId, setStaffId] = useState("");
  const [staff, setStaff] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // 🔹 Mock staff data (replace with API)
  const mockStaffDB = {
    "ENG-001": {
      name: "Amarjeev M S",
      userId: "ENG-001",
      mobile: "7034884827",
      role: "Engineer",
      assignedProjects: ["PROJ-001", "PROJ-002"],
    },
  };

  const handleSearch = () => {
    const data = mockStaffDB[staffId];
    setStaff(data || null);
    setIsEditing(false);
  };

  const handleRemoveProject = (projectId) => {
    setStaff((prev) => ({
      ...prev,
      assignedProjects: prev.assignedProjects.filter(
        (id) => id !== projectId
      ),
    }));
  };

  const handleDeleteProfile = () => {
    alert("Staff profile deleted (API call here)");
    setStaff(null);
    setStaffId("");
  };

  return (
    <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow border">
      <h2 className="mb-6 text-xl font-semibold text-gray-800">
        Staff Profile
      </h2>

      {/* Search */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={staffId}
          onChange={(e) => setStaffId(e.target.value)}
          placeholder="Enter Staff ID"
          className="w-full rounded-md border px-3 py-2 text-sm"
        />
        <button
          onClick={handleSearch}
          className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
        >
          Search
        </button>
      </div>

      {/* Profile Details */}
      {staff && (
        <div className="space-y-4">
          
          {/* Name */}
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              value={staff.name}
              readOnly={!isEditing}
              onChange={(e) =>
                setStaff({ ...staff, name: e.target.value })
              }
              className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${
                !isEditing && "bg-gray-100"
              }`}
            />
          </div>

          {/* User ID */}
          <div>
            <label className="text-sm font-medium">User ID</label>
            <input
              type="text"
              value={staff.userId}
              readOnly
              className="mt-1 w-full rounded-md border bg-gray-100 px-3 py-2 text-sm"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="text-sm font-medium">Mobile</label>
            <input
              type="text"
              value={staff.mobile}
              readOnly={!isEditing}
              onChange={(e) =>
                setStaff({ ...staff, mobile: e.target.value })
              }
              className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${
                !isEditing && "bg-gray-100"
              }`}
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-sm font-medium">Role</label>
            <input
              type="text"
              value={staff.role}
              readOnly
              className="mt-1 w-full rounded-md border bg-gray-100 px-3 py-2 text-sm"
            />
          </div>

          {/* Assigned Projects */}
          <div>
            <label className="text-sm font-medium">
              Assigned Projects
            </label>

            {staff.assignedProjects.length === 0 ? (
              <p className="mt-2 text-sm text-gray-500">
                No Projects Assigned
              </p>
            ) : (
              <ul className="mt-2 space-y-2">
                {staff.assignedProjects.map((projectId) => (
                  <li
                    key={projectId}
                    className="flex items-center justify-between rounded-md border px-3 py-2 text-sm"
                  >
                    {projectId}
                    <button
                      onClick={() => handleRemoveProject(projectId)}
                      className="text-red-600 hover:underline text-xs"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
              >
                Edit Profile
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsEditing(false);
                  alert("Profile updated (API call here)");
                }}
                className="rounded-md bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
              >
                Save Changes
              </button>
            )}

            <button
              onClick={handleDeleteProfile}
              className="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
            >
              Delete Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StaffProfileEdit;
