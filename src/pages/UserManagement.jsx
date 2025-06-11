import React from 'react';

const UserManagement = () => {
  return (
    <div className="p-6 bg-[#F9FAFB] text-black min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-2 pl-1">User Management</h1>
      <p className="text-gray-500 mb-8 pl-1">Comprehensive user account management and role-based access control system</p>

      {/* Top Section: Account Registration, Role Management, Authentication, User Profiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white">+</span>
            </div>
            <h2 className="text-xl font-semibold text-[#1E3A8A] pl-1">Account Registration</h2>
          </div>
          <p className="text-gray-700 text-sm mb-4">Streamlined user registration with approval workflow</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
            <li>Self-registration portal</li>
            <li>Document verification</li>
            <li>Admin approval process</li>
            <li>Role assignment</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white">✓</span>
            </div>
            <h2 className="text-xl font-semibold text-[#1E3A8A] pl-1">Role Management</h2>
          </div>
          <p className="text-gray-700 text-sm mb-4">Comprehensive role-based access control system</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
            <li>Five distinct roles</li>
            <li>Permission matrices</li>
            <li>Role transitions</li>
            <li>Access auditing</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white">🔒</span>
            </div>
            <h2 className="text-xl font-semibold text-[#1E3A8A] pl-1">Authentication</h2>
          </div>
          <p className="text-gray-700 text-sm mb-4">Secure login with multi-factor authentication</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
            <li>Two-factor authentication</li>
            <li>Password policies</li>
            <li>Session management</li>
            <li>Login monitoring</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white">👤</span>
            </div>
            <h2 className="text-xl font-semibold text-[#1E3A8A] pl-1">User Profiles</h2>
          </div>
          <p className="text-gray-700 text-sm mb-4">Comprehensive user profile management</p>
          <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
            <li>Personal information</li>
            <li>Station assignment</li>
            <li>Contact details</li>
            <li>Activity history</li>
          </ul>
        </div>
      </div>

      {/* Middle Section: Bulk Operations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white">⬆️</span>
            </div>
            <h2 className="text-xl font-semibold text-[#1E3A8A] pl-1">Import Users</h2>
          </div>
          <p className="text-gray-700 text-sm mb-4">Bulk import users from CSV files</p>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md h-10 hover:bg-blue-700">Import CSV</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white">⬇️</span>
            </div>
            <h2 className="text-xl font-semibold text-[#1E3A8A] pl-1">Export Data</h2>
          </div>
          <p className="text-gray-700 text-sm mb-4">Export user data for reporting</p>
          <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md h-10 hover:bg-green-700">Export CSV</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white">✔️</span>
            </div>
            <h2 className="text-xl font-semibold text-[#1E3A8A] pl-1">Bulk Actions</h2>
          </div>
          <p className="text-gray-700 text-sm mb-4">Perform actions on multiple users</p>
          <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md h-10 hover:bg-purple-700">Select Actions</button>
        </div>
      </div>

      {/* Bottom Section: User Accounts, User Statistics, Role Distribution, Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Accounts */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
          <h2 className="text-xl font-semibold text-[#1E3A8A] mb-4 pl-1">User Accounts</h2>
          <div className="flex justify-between items-center mb-6">
            <input
              type="text"
              placeholder="Search users..."
              className="w-1/3 p-2 bg-gray-100 text-[#1E3A8A] rounded-md border border-gray-200 focus:outline-none focus:border-blue-600"
            />
            <div className="flex space-x-2">
              <select className="p-2 bg-gray-100 text-[#1E3A8A] rounded-md border border-gray-200 focus:outline-none">
                <option>ALL ROLES</option>
              </select>
              <select className="p-2 bg-gray-100 text-[#1E3A8A] rounded-md border border-gray-200 focus:outline-none">
                <option>ALL STATUS</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md h-10 hover:bg-blue-700">Add New User</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm text-gray-700">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-2">User</th>
                  <th className="py-3 px-2">Role</th>
                  <th className="py-3 px-2">Station</th>
                  <th className="py-3 px-2">Status</th>
                  <th className="py-3 px-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-2 flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white">AK</span>
                    </div>
                    <span>amit.kumar@faridabad.police.in</span>
                  </td>
                  <td className="py-3 px-2">Field Officer</td>
                  <td className="py-3 px-2">Sector 15</td>
                  <td className="py-3 px-2 text-green-500">Active</td>
                  <td className="py-3 px-2">
                    <button className="text-blue-500 hover:underline mr-2 h-8 px-2 rounded">Edit</button>
                    <button className="text-red-500 hover:underline h-8 px-2 rounded">Deactivate</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-2 flex items-center">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white">PS</span>
                    </div>
                    <span>priya.sharma@faridabad.police.in</span>
                  </td>
                  <td className="py-3 px-2">Reviewer</td>
                  <td className="py-3 px-2">Old Faridabad</td>
                  <td className="py-3 px-2 text-green-500">Active</td>
                  <td className="py-3 px-2">
                    <button className="text-blue-500 hover:underline mr-2 h-8 px-2 rounded">Edit</button>
                    <button className="text-red-500 hover:underline h-8 px-2 rounded">Deactivate</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-2 flex items-center">
                    <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white">RG</span>
                    </div>
                    <span>rajesh.gupta@faridabad.police.in</span>
                  </td>
                  <td className="py-3 px-2">Pending</td>
                  <td className="py-3 px-2">NIT Faridabad</td>
                  <td className="py-3 px-2 text-yellow-500">Pending</td>
                  <td className="py-3 px-2">
                    <button className="text-green-500 hover:underline mr-2 h-8 px-2 rounded">Approve</button>
                    <button className="text-red-500 hover:underline h-8 px-2 rounded">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-2 flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white">SK</span>
                    </div>
                    <span>suresh.kumar@faridabad.police.in</span>
                  </td>
                  <td className="py-3 px-2">Administrator</td>
                  <td className="py-3 px-2">Central Station</td>
                  <td className="py-3 px-2 text-green-500">Active</td>
                  <td className="py-3 px-2">
                    <button className="text-blue-500 hover:underline mr-2 h-8 px-2 rounded">Edit</button>
                    <button className="text-gray-500 h-8 px-2 rounded">Protected</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-6 gap-2">
            <p className="text-gray-700">Showing 1-4 of 24 users</p>
            <div className="flex flex-wrap gap-2 justify-end">
              <button className="bg-gray-100 text-[#1E3A8A] px-4 py-2 rounded-md h-10">Previous</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md h-10">1</button>
              <button className="bg-gray-100 text-[#1E3A8A] px-4 py-2 rounded-md h-10">2</button>
              <button className="bg-gray-100 text-[#1E3A8A] px-4 py-2 rounded-md h-10">3</button>
              <button className="bg-gray-100 text-[#1E3A8A] px-4 py-2 rounded-md h-10">Next</button>
            </div>
          </div>
        </div>

        {/* User Statistics and Role Distribution */}
        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-[#1E3A8A] pl-1">User Statistics</h2>
            <ul className="text-gray-700">
              <li className="flex justify-between items-center py-2">
                <span>Total Users</span>
                <span className="text-gray-900 font-bold">24</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span>Active</span>
                <span className="text-green-500 font-bold">18</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span>Pending</span>
                <span className="text-yellow-500 font-bold">4</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span>Inactive</span>
                <span className="text-red-500 font-bold">2</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-[#1E3A8A] pl-1">Role Distribution</h2>
            <ul className="text-gray-700">
              <li className="flex justify-between items-center py-2">
                <span>Field Officers</span>
                <span className="text-gray-900 font-bold">12</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span>Reviewers</span>
                <span className="text-gray-900 font-bold">6</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span>Case Managers</span>
                <span className="text-gray-900 font-bold">4</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span>Administrators</span>
                <span className="text-gray-900 font-bold">1</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span>Auditors</span>
                <span className="text-gray-900 font-bold">1</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;