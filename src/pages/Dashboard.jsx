import React, { useState } from 'react';
import { FaHome, FaCheck, FaUserShield, FaClock } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import AssignReport from '../components/AssignReport';
import CreateCase from '../components/CreateCase';
import ManageUsers from '../components/ManageUsers';
import { useNavigate } from 'react-router-dom';

const lineData = [
  { name: 'Mon', reports: 12 },
  { name: 'Tue', reports: 18 },
  { name: 'Wed', reports: 10 },
  { name: 'Thu', reports: 22 },
  { name: 'Fri', reports: 15 },
  { name: 'Sat', reports: 20 },
  { name: 'Sun', reports: 14 },
];

const pieData = [
  { name: 'Resolved', value: 78 },
  { name: 'Pending', value: 22 },
];
const COLORS = ['#22c55e', '#facc15'];

const recentReports = [
  { id: 'RPT20250516001', location: 'Sector 15, Main Road', status: 'Pending', color: 'bg-yellow-100 text-yellow-700' },
  { id: 'RPT20250516002', location: 'NH-19, Minor collision', status: 'Assigned', color: 'bg-blue-100 text-blue-700' },
  { id: 'RPT20250516003', location: 'Sector 21, Property damage', status: 'Resolved', color: 'bg-green-100 text-green-700' },
  { id: 'RPT20250516004', location: 'Ring Road, Multi-vehicle', status: 'Complex', color: 'bg-purple-100 text-purple-700' },
];

const Dashboard = () => {
  const [showAssign, setShowAssign] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const navigate = useNavigate();

  const quickActions = [
    { label: 'Assign Report', icon: '+', onClick: () => setShowAssign(true) },
    { label: 'Create Case', icon: '📄', onClick: () => setShowCreate(true) },
    { label: 'Manage Users', icon: '👥', onClick: () => setShowUsers(true) },
    { label: 'View Reports', icon: '📊', onClick: () => navigate('/analytics') },
    { label: 'Settings', icon: '⚙️', onClick: () => navigate('/config') },
    { label: 'Messages', icon: '💬', onClick: () => navigate('/messages') },
  ];

  return (
    <div className="flex-1 p-6 bg-[#F9FAFB] h-screen flex flex-col">
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

      <div className="flex-1 overflow-y-auto">
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
          <div className="bg-white shadow rounded-lg p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-[#111827]">Accident Frequency</h3>
              <select className="text-sm border rounded px-2 py-1 text-gray-600">
                <option>Last 7 days</option>
              </select>
            </div>
            <div className="flex-1 min-h-[300px]">
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={lineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="reports" stroke="#1E3A8A" strokeWidth={3} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-[#111827]">Case Status Distribution</h3>
              <a href="#" className="text-sm text-blue-600 hover:underline">View Details</a>
            </div>
            <div className="flex-1 min-h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Reports and Hotspots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-[#111827]">Recent Reports</h3>
              <a href="#" className="text-sm text-blue-600 hover:underline">View All</a>
            </div>
            <ul className="space-y-4">
              {recentReports.map((report) => (
                <li key={report.id} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3 shadow-sm hover:shadow transition border border-gray-100">
                  <div>
                    <span className="block font-semibold text-[#1E3A8A]">{report.id}</span>
                    <span className="block text-gray-600 text-sm">{report.location}</span>
                  </div>
                  <span className={`ml-4 px-3 py-1 rounded-full text-xs font-semibold ${report.color}`}>{report.status}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-[#111827]">Accident Hotspots</h3>
              <a href="#" className="text-sm text-blue-600 hover:underline">View Map</a>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center bg-red-50 hover:bg-red-100 transition rounded-lg px-4 py-2 border border-red-100">
                <span className="font-medium text-[#B91C1C]">NH-19 Junction</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">23</span>
              </li>
              <li className="flex justify-between items-center bg-orange-50 hover:bg-orange-100 transition rounded-lg px-4 py-2 border border-orange-100">
                <span className="font-medium text-[#EA580C]">Sector 15 Metro</span>
                <span className="bg-orange-400 text-white px-3 py-1 rounded-full text-xs font-semibold">18</span>
              </li>
              <li className="flex justify-between items-center bg-yellow-50 hover:bg-yellow-100 transition rounded-lg px-4 py-2 border border-yellow-100">
                <span className="font-medium text-[#CA8A04]">City Mall Area</span>
                <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-semibold">15</span>
              </li>
              <li className="flex justify-between items-center bg-green-50 hover:bg-green-100 transition rounded-lg px-4 py-2 border border-green-100">
                <span className="font-medium text-[#16A34A]">Ring Road</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">12</span>
              </li>
              <li className="flex justify-between items-center bg-blue-50 hover:bg-blue-100 transition rounded-lg px-4 py-2 border border-blue-100">
                <span className="font-medium text-[#2563EB]">Sector 21</span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">9</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md p-4 text-center hover:bg-gray-50 cursor-pointer"
              onClick={action.onClick}
            >
              <div className="text-2xl mb-1">{action.icon}</div>
              <div className="text-sm text-gray-700">{action.label}</div>
            </div>
          ))}
        </div>
      </div>
      {showAssign && <AssignReport onClose={() => setShowAssign(false)} />}
      {showCreate && <CreateCase onClose={() => setShowCreate(false)} />}
      {showUsers && <ManageUsers onClose={() => setShowUsers(false)} />}
    </div>
  );
};

export default Dashboard;
