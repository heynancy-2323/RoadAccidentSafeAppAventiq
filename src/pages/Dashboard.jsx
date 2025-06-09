import React from 'react';
import { FaHome, FaCheck, FaUserShield, FaClock } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex-1 p-6 bg-[#F9FAFB] min-h-screen overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-[#111827]">Administrator Dashboard</h1>
          <p className="text-sm text-[#6B7280]">
            Monitor accident reports, cases, and system analytics
          </p>
        </div>
        <div className="text-sm text-gray-500 flex items-center gap-4">
          <span>Last updated: 2 minutes ago</span>
          <button className="bg-[#1E3A8A] hover:bg-indigo-700 text-white px-4 py-1.5 rounded-md text-sm">
            Refresh Data
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4 flex items-center gap-4">
          <FaHome className="text-2xl text-[#B91C1C]" />
          <div>
            <h2 className="text-sm text-gray-500">Total Reports</h2>
            <p className="text-xl font-semibold text-[#111827]">1,247</p>
            <p className="text-xs text-green-600">+12% from last month</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 flex items-center gap-4">
          <FaClock className="text-2xl text-yellow-500" />
          <div>
            <h2 className="text-sm text-gray-500">Pending Cases</h2>
            <p className="text-xl font-semibold text-[#111827]">89</p>
            <p className="text-xs text-red-600">+5 since yesterday</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 flex items-center gap-4">
          <FaCheck className="text-2xl text-green-500" />
          <div>
            <h2 className="text-sm text-gray-500">Resolved Cases</h2>
            <p className="text-xl font-semibold text-[#111827]">1,158</p>
            <p className="text-xs text-green-600">92.8% resolution rate</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4 flex items-center gap-4">
          <FaUserShield className="text-2xl text-indigo-500" />
          <div>
            <h2 className="text-sm text-gray-500">Active Officers</h2>
            <p className="text-xl font-semibold text-[#111827]">45</p>
            <p className="text-xs text-green-600">Online now</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-[#111827]">Accident Frequency</h3>
            <select className="text-sm border rounded px-2 py-1 text-gray-600">
              <option>Last 7 days</option>
            </select>
          </div>
          {/* Chart Placeholder */}
          <div className="h-48 bg-blue-100 rounded-md flex items-center justify-center text-sm text-blue-500">
            📈 Line Chart Placeholder
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-[#111827]">Case Status Distribution</h3>
            <a href="#" className="text-sm text-blue-600 hover:underline">View Details</a>
          </div>
          <div className="h-48 bg-green-50 rounded-md flex items-center justify-center text-sm text-green-600">
            🥧 Pie Chart Placeholder
          </div>
        </div>
      </div>

      {/* Reports and Hotspots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-[#111827]">Recent Reports</h3>
            <a href="#" className="text-sm text-blue-600 hover:underline">View All</a>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between items-center">
              <span>RPT20250516001 - Sector 15, Main Road</span>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-xs">Pending</span>
            </li>
            <li className="flex justify-between items-center">
              <span>RPT20250516002 - NH-19, Minor collision</span>
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">Assigned</span>
            </li>
            <li className="flex justify-between items-center">
              <span>RPT20250516003 - Sector 21, Property damage</span>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">Resolved</span>
            </li>
            <li className="flex justify-between items-center">
              <span>RPT20250516004 - Ring Road, Multi-vehicle</span>
              <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs">Complex</span>
            </li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-[#111827]">Accident Hotspots</h3>
            <a href="#" className="text-sm text-blue-600 hover:underline">View Map</a>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between"><span>NH-19 Junction</span> <span className="text-red-600">23</span></li>
            <li className="flex justify-between"><span>Sector 15 Metro</span> <span className="text-orange-600">18</span></li>
            <li className="flex justify-between"><span>City Mall Area</span> <span className="text-yellow-600">15</span></li>
            <li className="flex justify-between"><span>Ring Road</span> <span className="text-green-600">12</span></li>
            <li className="flex justify-between"><span>Sector 21</span> <span className="text-blue-600">9</span></li>
          </ul>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {[
          { label: 'Assign Report', icon: '+' },
          { label: 'Create Case', icon: '📄' },
          { label: 'Manage Users', icon: '👥' },
          { label: 'View Reports', icon: '📊' },
          { label: 'Settings', icon: '⚙️' },
          { label: 'Messages', icon: '💬' },
        ].map((action, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-md p-4 text-center hover:bg-gray-50"
          >
            <div className="text-2xl mb-1">{action.icon}</div>
            <div className="text-sm text-gray-700">{action.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
