import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">

      <main className="flex-1 flex justify-center items-center">
        <div className="max-w-md w-full bg-white shadow rounded-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#111827]">
              Road Accident Data Management System
            </h2>
            <p className="text-sm text-[#6B7280]">Faridabad Police Department</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-sm"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-sm"
                placeholder="Enter password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-sm"
              >
                <option value="">Select your role</option>
                <option value="field-officer">Field Officer</option>
                <option value="reviewer">Reviewer</option>
                <option value="admin">Administrator</option>
                <option value="case-manager">Case Manager</option>
                <option value="auditor">Auditor</option>
              </select>
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="rounded border-gray-300"
                />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1E3A8A] text-white py-2 rounded-md hover:bg-indigo-700 text-sm"
            >
              Sign in
            </button>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <hr className="w-full border-gray-300" />
              OR
              <hr className="w-full border-gray-300" />
            </div>

            <button
              type="button"
              className="w-full border border-gray-300 py-2 rounded-md text-sm hover:bg-gray-100"
            >
              + Submit Public Accident Report
            </button>
          </form>

          <p className="text-xs text-center mt-4 text-gray-500">
            Secure login with 2FA • Digital Personal Data Protection Act, 2023 compliant
          </p>
          <p className="text-[10px] text-center mt-1 text-gray-400">
            Version 2.0 • Faridabad Police Department
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
