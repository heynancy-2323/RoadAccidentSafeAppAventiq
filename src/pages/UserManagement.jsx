import React from 'react';

const UserManagement = () => {
  return (
    <div className="p-6 bg-gray-900 text-white h-screen">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-2">User Management</h1>
      <p className="text-gray-400 mb-6">Comprehensive user account management and role-based access control system</p>

      {/* Top Section: Account Registration, Role Management, Authentication, User Profiles */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white">+</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Account Registration</h2>
          </div>
          <p className="text-gray-400 text-sm mb-4">Streamlined user registration with approval workflow</p>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
            <li>Self-registration portal</li>
            <li>Document verification</li>
            <li>Admin approval process</li>
            <li>Role assignment</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white">✓</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Role Management</h2>
          </div>
          <p className="text-gray-400 text-sm mb-4">Comprehensive role-based access control system</p>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
            <li>Five distinct roles</li>
            <li>Permission matrices</li>
            <li>Role transitions</li>
            <li>Access auditing</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white">🔒</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Authentication</h2>
          </div>
          <p className="text-gray-400 text-sm mb-4">Secure login with multi-factor authentication</p>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
            <li>Two-factor authentication</li>
            <li>Password policies</li>
            <li>Session management</li>
            <li>Login monitoring</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white">👤</span>
            </div>
            <h2 className="text-xl font-semibold text-white">User Profiles</h2>
          </div>
          <p className="text-gray-400 text-sm mb-4">Comprehensive user profile management</p>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
            <li>Personal information</li>
            <li>Station assignment</li>
            <li>Contact details</li>
            <li>Activity history</li>
          </ul>
        </div>
      </div>

      {/* Middle Section: Bulk Operations */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white">⬆️</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Import Users</h2>
          </div>
          <p className="text-gray-400 text-sm mb-4">Bulk import users from CSV files</p>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Import CSV</button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white">⬇️</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Export Data</h2>
          </div>
          <p className="text-gray-400 text-sm mb-4">Export user data for reporting</p>
          <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Export CSV</button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white">✔️</span>
            </div>
            <h2 className="text-xl font-semibold text-white">Bulk Actions</h2>
          </div>
          <p className="text-gray-400 text-sm mb-4">Perform actions on multiple users</p>
          <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">Select Actions</button>
        </div>
      </div>

      {/* Bottom Section: User Accounts, User Statistics, Role Distribution, Recent Activity */}
      <div className="grid grid-cols-3 gap-4">
        {/* User Accounts */}
        <div className="col-span-2 bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-white mb-3">User Accounts</h2>
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search users..."
              className="w-1/3 p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-600"
            />
            <div className="flex space-x-2">
              <select className="p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none">
                <option>ALL ROLES</option>
              </select>
              <select className="p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none">
                <option>ALL STATUS</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Add New User</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="p-2">User</th>
                  <th className="p-2">Role</th>
                  <th className="p-2">Station</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-600">
                  <td className="p-2 flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white">AK</span>
                    </div>
                    <span>amit.kumar@faridabad.police.in</span>
                  </td>
                  <td className="p-2">Field Officer</td>
                  <td className="p-2">Sector 15</td>
                  <td className="p-2 text-green-500">Active</td>
                  <td className="p-2">
                    <button className="text-blue-500 hover:underline mr-2">Edit</button>
                    <button className="text-red-500 hover:underline">Deactivate</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="p-2 flex items-center">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white">PS</span>
                    </div>
                    <span>priya.sharma@faridabad.police.in</span>
                  </td>
                  <td className="p-2">Reviewer</td>
                  <td className="p-2">Old Faridabad</td>
                  <td className="p-2 text-green-500">Active</td>
                  <td className="p-2">
                    <button className="text-blue-500 hover:underline mr-2">Edit</button>
                    <button className="text-red-500 hover:underline">Deactivate</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="p-2 flex items-center">
                    <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white">RG</span>
                    </div>
                    <span>rajesh.gupta@faridabad.police.in</span>
                  </td>
                  <td className="p-2">Pending</td>
                  <td className="p-2">NIT Faridabad</td>
                  <td className="p-2 text-yellow-500">Pending</td>
                  <td className="p-2">
                    <button className="text-green-500 hover:underline mr-2">Approve</button>
                    <button className="text-red-500 hover:underline">Reject</button>
                  </td>
                </tr>
                <tr>
                  <td className="p-2 flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white">SK</span>
                    </div>
                    <span>suresh.kumar@faridabad.police.in</span>
                  </td>
                  <td className="p-2">Administrator</td>
                  <td className="p-2">Central Station</td>
                  <td className="p-2 text-green-500">Active</td>
                  <td className="p-2">
                    <button className="text-blue-500 hover:underline mr-2">Edit</button>
                    <button className="text-gray-500">Protected</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-400">Showing 1-4 of 24 users</p>
            <div className="flex space-x-2">
              <button className="bg-gray-700 text-white px-4 py-2 rounded-md">Previous</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">1</button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded-md">2</button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded-md">3</button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded-md">Next</button>
            </div>
          </div>
        </div>

        {/* User Statistics and Role Distribution */}
        <div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-semibold mb-3 text-white">User Statistics</h2>
            <ul className="text-gray-400">
              <li className="flex justify-between items-center py-1">
                <span>Total Users</span>
                <span className="text-white font-bold">24</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span>Active</span>
                <span className="text-green-500 font-bold">18</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span>Pending</span>
                <span className="text-yellow-500 font-bold">4</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span>Inactive</span>
                <span className="text-red-500 font-bold">2</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-white">Role Distribution</h2>
            <ul className="text-gray-400">
              <li className="flex justify-between items-center py-1">
                <span>Field Officers</span>
                <span className="text-white font-bold">12</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span>Reviewers</span>
                <span className="text-white font-bold">6</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span>Case Managers</span>
                <span className="text-white font-bold">4</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span>Administrators</span>
                <span className="text-white font-bold">1</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span>Auditors</span>
                <span className="text-white font-bold">1</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;