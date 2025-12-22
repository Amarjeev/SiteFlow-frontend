import React from 'react'

function ResetPasswordForm() {
  return (
    <div>
        <div class="flex flex-1 flex-col  justify-center space-y-5 max-w-md mx-auto mt-24">
        <div class="flex flex-col space-y-2 text-center">
          <h2 class="text-3xl md:text-4xl font-bold">Reset Password</h2>
        </div>
        <div class="flex flex-col max-w-md space-y-5">
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
          <button class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordForm
