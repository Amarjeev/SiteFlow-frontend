import React, { useState } from "react";

function AddStaffProfile() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    role: "engineer",
    assignedProjects: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Generate Project ID
  const generateProjectId = () => {
    const date = new Date();
    const id = `PROJ-${date.getFullYear()}${String(
      date.getMonth() + 1
    ).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}-${Math.floor(
      100000 + Math.random() * 900000
    )}`;

    setFormData((prev) => ({
      ...prev,
      assignedProjects: prev.assignedProjects
        ? `${prev.assignedProjects}, ${id}`
        : id,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      mobile: formData.mobile,
      role: formData.role,
      assignedProjects: formData.assignedProjects
        .split(",")
        .map((id) => id.trim()),
    };

    console.log("Submit Payload:", payload);
    // API call here
  };

  return (
    <div className="mx-auto max-w-xl rounded-lg bg-white p-6 shadow border">
      <h2 className="mb-6 text-xl font-semibold text-gray-800">
        Add Staff Profile
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm bg-white"
          >
            <option value="engineer">Engineer</option>
            <option value="supervisor">Supervisor</option>
          </select>
        </div>
jobassignments
        {/* Assigned Projects */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Staff ID
          </label>

          <div className="relative">
            <input
              readOnly
              className="w-full rounded-md border bg-gray-100 px-3 py-2 pr-10 text-sm"
              value={formData.assignedProjects}
            />
            <span className="absolute right-3 top-2.5 text-gray-400">🔒</span>
          </div>

          <button
            type="button"
            onClick={generateProjectId}
            className="mt-2 rounded-md bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 hover:bg-blue-200"
          >
            + Generate Staff ID
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Create Staff Profile
        </button>
      </form>
    </div>
  );
}

export default AddStaffProfile;
