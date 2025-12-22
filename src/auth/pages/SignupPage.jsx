import React from "react";

function SignupPage() {
  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-xl rounded-xl border border-gray-200 mt-11">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Create an Account
      </h2>

      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm text-gray-600">Full Name</label>
          <input
            type="name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Full Name"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-gray-600">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm text-gray-600">
            Confirm Password
          </label>
          <input
            type="confirm_password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
      <p className="text-sm text-center text-gray-500 mt-6">
        Already have an account?{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Sign in
        </a>
      </p>
    </div>
  );
}

export default SignupPage;
