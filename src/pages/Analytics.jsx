import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, BarChart, Bar, AreaChart, Area } from 'recharts';

const Analytics = () => {
  return (
    <div className="flex h-screen bg-[#F9FAFB] text-black">
    
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Analytics Overview */}
        <h1 className="text-2xl font-bold mb-2">Analytics</h1>
        <p className="text-gray-500 mb-6">Comprehensive data insights and visual analytics for accident trends and patterns</p>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-xl font-semibold text-[#1E3A8A] mb-2">Total Reports</h2>
            <p className="text-3xl font-bold text-black">1,247</p>
            <p className="text-green-500 text-sm">+12% this month</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white">⏳</span>
              </div>
              <h2 className="text-xl font-semibold text-[#1E3A8A]">Active Cases</h2>
            </div>
            <p className="text-3xl font-bold text-black">89</p>
            <p className="text-red-500 text-sm">+5% this week</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white">✓</span>
              </div>
              <h2 className="text-xl font-semibold text-[#1E3A8A]">Resolved Cases</h2>
            </div>
            <p className="text-3xl font-bold text-black">1,158</p>
            <p className="text-green-500 text-sm">+8% this month</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white">📊</span>
              </div>
              <h2 className="text-xl font-semibold text-[#1E3A8A]">Analytics</h2>
            </div>
            <p className="text-3xl font-bold text-black">View</p>
            <p className="text-blue-500 text-sm">Updated</p>
          </div>
        </div>

        {/* Accident Hotspots, High Risk Locations, Peak Hours */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#1E3A8A]">Accident Hotspots</h2>
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Heatmap</button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">Markers</button>
              </div>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center overflow-hidden mb-2">
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Faridabad_map.png/600px-Faridabad_map.png' alt='Faridabad Accident Hotspots Map' className='w-full h-full object-cover rounded-lg' style={{objectFit:'cover'}} />
            </div>
            <p className="text-gray-500 text-sm mt-4 text-center">Faridabad Accident Hotspots</p>
            <ul className="text-gray-500 text-sm mt-2">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span> High Risk: NH-19 Junction
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-orange-500 rounded-full mr-2"></span> Medium Risk: Sector 15 Main Road
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span> Low Risk: NIT Faridabad Area
              </li>
            </ul>
          </div>
          <div className="flex flex-col h-full">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 flex-1 mb-4 flex flex-col">
              <h2 className="text-xl font-semibold text-[#1E3A8A] mb-3">High Risk Locations</h2>
              <ul className="text-gray-500 flex-1 flex flex-col justify-center">
                <li className="flex justify-between items-center py-2">
                  <span>NH-19 Junction</span>
                  <span className="text-black font-bold">47 accidents</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span>Sector 15 Circle</span>
                  <span className="text-black font-bold">32 accidents</span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span>Old Faridabad</span>
                  <span className="text-black font-bold">28 accidents</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 flex-1 flex flex-col">
              <h2 className="text-xl font-semibold text-[#1E3A8A] mb-3">Peak Hours</h2>
              <ul className="text-gray-500 flex-1 flex flex-col justify-center">
                <li className="flex justify-between items-center py-2">
                  <span>8:00 - 10:00 AM</span>
                  <span className="flex items-center">
                    <div className="w-24 h-2 bg-red-600 rounded mr-2"></div>
                    <span className="text-black font-bold">75%</span>
                  </span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span>6:00 - 8:00 PM</span>
                  <span className="flex items-center">
                    <div className="w-20 h-2 bg-orange-500 rounded mr-2"></div>
                    <span className="text-black font-bold">62%</span>
                  </span>
                </li>
                <li className="flex justify-between items-center py-2">
                  <span>12:00 - 2:00 PM</span>
                  <span className="flex items-center">
                    <div className="w-16 h-2 bg-yellow-500 rounded mr-2"></div>
                    <span className="text-black font-bold">38%</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accident Frequency and Case Status Distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#1E3A8A]">Accident Frequency</h2>
              <select className="p-2 bg-gray-100 text-black rounded-md border border-gray-200 focus:outline-none">
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <ResponsiveContainer width="100%" height="90%">
                <LineChart data={[
                  { day: 'Mon', reports: 12 },
                  { day: 'Tue', reports: 18 },
                  { day: 'Wed', reports: 10 },
                  { day: 'Thu', reports: 22 },
                  { day: 'Fri', reports: 15 },
                  { day: 'Sat', reports: 20 },
                  { day: 'Sun', reports: 14 },
                ]} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="reports" stroke="#1E3A8A" strokeWidth={3} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-gray-500 text-sm mt-4">Peak Hours: 8-10 AM, 6-8 PM</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#1E3A8A]">Case Status Distribution</h2>
              <a href="#" className="text-blue-600 hover:underline">View Details</a>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <ResponsiveContainer width="100%" height="90%">
                <PieChart>
                  <Pie data={[
                    { name: 'Resolved', value: 78 },
                    { name: 'Pending', value: 22 },
                  ]} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
                    <Cell key="resolved" fill="#22c55e" />
                    <Cell key="pending" fill="#facc15" />
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="text-gray-500 text-sm mt-4">
              <li className="flex items-center">
                <span className="w-4 h-4 bg-green-600 rounded-full mr-2"></span> Resolved (78%)
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span> Pending (22%)
              </li>
            </ul>
          </div>
        </div>

        {/* Severity Trends and Weather Impact Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-xl font-semibold text-[#1E3A8A] mb-3">Severity Trends</h2>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={[
                { type: 'Fatal', value: 23 },
                { type: 'Serious', value: 156 },
                { type: 'Minor', value: 342 },
                { type: 'Property', value: 726 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#6366f1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-xl font-semibold text-[#1E3A8A] mb-3">Weather Impact Analysis</h2>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={[
                { weather: 'Rainy', accidents: 45 },
                { weather: 'Foggy', accidents: 67 },
                { weather: 'Clear', accidents: 20 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="weather" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="accidents" stroke="#06b6d4" fill="#bae6fd" />
              </AreaChart>
            </ResponsiveContainer>
            <ul className="text-gray-500 text-sm mt-4">
              <li className="flex items-center">
                <span className="mr-2">Rainy Days:</span>
                <span className="text-blue-500">+45% accidents</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">Foggy Conditions:</span>
                <span className="text-red-500">+67% accidents</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">Clear Weather:</span>
                <span className="text-green-500">Baseline</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Export Analytics */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-[#1E3A8A] mb-3">Export Analytics</h2>
          <p className="text-gray-500 mb-4">Generate comprehensive reports for stakeholders</p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Export PDF</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Export CSV</button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">Share Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;