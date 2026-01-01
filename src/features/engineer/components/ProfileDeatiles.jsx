import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StaffNavbar from "../../../layouts/navbar/EngineerNavbar";

function ProfileDetails() {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [profile, setProfile] = useState({
    name: "Akhil Kumar",
    role: "Engineer",
    email: "akhil.engineer@sitflow.com",
    mobile: "9876543210",
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  /* ================= HANDLERS ================= */

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.clear();

    // Redirect to login
    navigate("/login", { replace: true });
  };

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = () => {
    console.log("Updated profile:", profile);
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Password updated");

    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <>
    <StaffNavbar/>
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* ================= PROFILE HEADER ================= */}
      <div className="rounded-2xl bg-white border shadow p-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            👷 Engineer Profile
          </h2>
          <p className="text-sm text-gray-500">
            Manage your personal information
          </p>
        </div>

        <div className="flex gap-2">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              ✏️ Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={handleSaveProfile}
                className="rounded-xl bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700"
              >
                💾 Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50"
              >
                Cancel
              </button>
            </>
          )}

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="rounded-xl bg-gray-900 px-4 py-2 text-sm text-white hover:bg-black"
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* ================= PROFILE DETAILS ================= */}
      <div className="rounded-2xl bg-white border shadow p-6">
        <h3 className="text-lg font-semibold mb-4">📄 Profile Information</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <Input
            label="Full Name"
            name="name"
            value={profile.name}
            onChange={handleProfileChange}
            disabled={!isEditing}
          />
          <Input label="Role" value={profile.role} disabled />
          <Input
            label="Email Address"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
            disabled={!isEditing}
          />
          <Input
            label="Mobile Number"
            name="mobile"
            value={profile.mobile}
            onChange={handleProfileChange}
            disabled={!isEditing}
          />
        </div>
      </div>

      {/* ================= CHANGE PASSWORD ================= */}
      <div className="rounded-2xl bg-white border shadow p-6">
        <h3 className="text-lg font-semibold mb-4">🔐 Change Password</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <PasswordInput
            name="currentPassword"
            placeholder="Current Password"
            value={passwords.currentPassword}
            onChange={handlePasswordChange}
            show={showPassword}
          />
          <PasswordInput
            name="newPassword"
            placeholder="New Password"
            value={passwords.newPassword}
            onChange={handlePasswordChange}
            show={showPassword}
          />
          <PasswordInput
            name="confirmPassword"
            placeholder="Confirm Password"
            value={passwords.confirmPassword}
            onChange={handlePasswordChange}
            show={showPassword}
          />
        </div>

        <div className="mt-3 flex items-center justify-between">
          <label className="text-sm text-gray-600 flex items-center gap-2">
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />
            Show password
          </label>

          <button
            onClick={handleChangePassword}
            className="rounded-xl bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

/* ================= SMALL COMPONENTS ================= */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-gray-600">{label}</label>
      <input
        {...props}
        className={`mt-1 w-full rounded-xl border px-4 py-2 ${
          props.disabled ? "bg-gray-100" : ""
        }`}
      />
    </div>
  );
}

function PasswordInput({ show, ...props }) {
  return (
    <input
      {...props}
      type={show ? "text" : "password"}
      className="rounded-xl border px-4 py-2"
    />
  );
}

export default ProfileDetails;
