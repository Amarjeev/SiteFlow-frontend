import React, { useState } from "react";

function LaboursProfile() {
  const [labourIdInput, setLabourIdInput] = useState("");
  const [labour, setLabour] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // 🔹 Mock labour DB (replace with API)
  const mockLabourDB = {
    "LAB-20251217-00001": {
      labourId: "LAB-20251217-00001",
      name: "Ramesh Kumar",
      mobile: "7034884827",
      supervisorId: "SUP-20251216201259741",
      status: "active",
    },
  };

  const handleSearch = () => {
    const data = mockLabourDB[labourIdInput];
    setLabour(data || null);
    setIsEditing(false);
  };

  const handleDeleteLabour = () => {
    alert("Labour profile deleted (API call here)");
    setLabour(null);
    setLabourIdInput("");
  };

  return (
    <div className="mx-auto max-w-xl rounded-lg bg-white p-6 shadow border">
      <h2 className="mb-6 text-xl font-semibold text-gray-800">
        Labour Profile
      </h2>

      {/* Search */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={labourIdInput}
          onChange={(e) => setLabourIdInput(e.target.value)}
          placeholder="Enter Labour ID"
          className="w-full rounded-md border px-3 py-2 text-sm"
        />
        <button
          onClick={handleSearch}
          className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
        >
          Search
        </button>
      </div>

      {/* Labour Details */}
      {labour && (
        <div className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              value={labour.name}
              readOnly={!isEditing}
              onChange={(e) =>
                setLabour({ ...labour, name: e.target.value })
              }
              className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${
                !isEditing && "bg-gray-100"
              }`}
            />
          </div>

          {/* Labour ID */}
          <div>
            <label className="text-sm font-medium">Labour ID</label>
            <input
              type="text"
              value={labour.labourId}
              readOnly
              className="mt-1 w-full rounded-md border bg-gray-100 px-3 py-2 text-sm"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="text-sm font-medium">Mobile</label>
            <input
              type="text"
              value={labour.mobile}
              readOnly={!isEditing}
              onChange={(e) =>
                setLabour({ ...labour, mobile: e.target.value })
              }
              className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${
                !isEditing && "bg-gray-100"
              }`}
            />
          </div>

          {/* Supervisor ID */}
          <div>
            <label className="text-sm font-medium">Supervisor ID</label>
            <input
              type="text"
              value={labour.supervisorId}
              readOnly={!isEditing}
              onChange={(e) =>
                setLabour({ ...labour, supervisorId: e.target.value })
              }
              className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${
                !isEditing && "bg-gray-100"
              }`}
            />
          </div>

          {/* Status */}
          <div>
            <label className="text-sm font-medium">Status</label>
            <select
              value={labour.status}
              disabled={!isEditing}
              onChange={(e) =>
                setLabour({ ...labour, status: e.target.value })
              }
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm bg-white"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
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
                  alert("Labour profile updated (API call here)");
                }}
                className="rounded-md bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
              >
                Save Changes
              </button>
            )}

            <button
              onClick={handleDeleteLabour}
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

export default LaboursProfile;
