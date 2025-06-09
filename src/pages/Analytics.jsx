import React from 'react';

const Analytics = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
    
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Analytics Overview */}
        <h1 className="text-2xl font-bold mb-2">Analytics</h1>
        <p className="text-gray-400 mb-6">Comprehensive data insights and visual analytics for accident trends and patterns</p>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-2">Total Reports</h2>
            <p className="text-3xl font-bold text-white">1,247</p>
            <p className="text-green-500 text-sm">+12% this month</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white">⏳</span>
              </div>
              <h2 className="text-xl font-semibold text-white">Active Cases</h2>
            </div>
            <p className="text-3xl font-bold text-white">89</p>
            <p className="text-red-500 text-sm">+5% this week</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white">✓</span>
              </div>
              <h2 className="text-xl font-semibold text-white">Resolved Cases</h2>
            </div>
            <p className="text-3xl font-bold text-white">1,158</p>
            <p className="text-green-500 text-sm">+8% this month</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white">⚡</span>
              </div>
              <h2 className="text-xl font-semibold text-white">Avg Response</h2>
            </div>
            <p className="text-3xl font-bold text-white">24m</p>
            <p className="text-green-500 text-sm">-15% faster</p>
          </div>
        </div>

        {/* Accident Hotspots, High Risk Locations, Peak Hours */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2 bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Accident Hotspots</h2>
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Heatmap</button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">Markers</button>
              </div>
            </div>
            <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Interactive Heatmap</p>
            </div>
            <p className="text-gray-400 text-sm mt-4 text-center">Faridabad Accident Hotspots</p>
            <ul className="text-gray-400 text-sm mt-2">
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
          <div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
              <h2 className="text-xl font-semibold text-white mb-3">High Risk Locations</h2>
              <ul className="text-gray-400">
                <li className="flex justify-between items-center py-1">
                  <span>NH-19 Junction</span>
                  <span className="text-white font-bold">47 accidents</span>
                </li>
                <li className="flex justify-between items-center py-1">
                  <span>Sector 15 Circle</span>
                  <span className="text-white font-bold">32 accidents</span>
                </li>
                <li className="flex justify-between items-center py-1">
                  <span>Old Faridabad</span>
                  <span className="text-white font-bold">28 accidents</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-white mb-3">Peak Hours</h2>
              <ul className="text-gray-400">
                <li className="flex justify-between items-center py-1">
                  <span>8:00 - 10:00 AM</span>
                  <span className="flex items-center">
                    <div className="w-24 h-2 bg-red-600 rounded mr-2"></div>
                    <span className="text-white font-bold">75%</span>
                  </span>
                </li>
                <li className="flex justify-between items-center py-1">
                  <span>6:00 - 8:00 PM</span>
                  <span className="flex items-center">
                    <div className="w-20 h-2 bg-orange-500 rounded mr-2"></div>
                    <span className="text-white font-bold">62%</span>
                  </span>
                </li>
                <li className="flex justify-between items-center py-1">
                  <span>12:00 - 2:00 PM</span>
                  <span className="flex items-center">
                    <div className="w-16 h-2 bg-yellow-500 rounded mr-2"></div>
                    <span className="text-white font-bold">38%</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accident Frequency and Case Status Distribution */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Accident Frequency</h2>
              <select className="p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none">
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Line Chart: Daily Accident Reports</p>
            </div>
            <p className="text-gray-400 text-sm mt-4">Peak Hours: 8-10 AM, 6-8 PM</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Case Status Distribution</h2>
              <a href="#" className="text-blue-500 hover:underline">View Details</a>
            </div>
            <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Pie Chart: Case Status</p>
            </div>
            <ul className="text-gray-400 text-sm mt-4">
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
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-3">Severity Trends</h2>
            <ul className="text-gray-400">
              <li className="flex justify-between items-center py-2">
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span> Fatal Accidents
                </div>
                <div className="text-right">
                  <span className="text-white font-bold">23</span>
                  <p className="text-red-500 text-sm">-12% vs last month</p>
                </div>
              </li>
              <li className="flex justify-between items-center py-2">
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-orange-500 rounded-full mr-2"></span> Serious Injuries
                </div>
                <div className="text-right">
                  <span className="text-white font-bold">156</span>
                  <p className="text-green-500 text-sm">+8% vs last month</p>
                </div>
              </li>
              <li className="flex justify-between items-center py-2">
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span> Minor Injuries
                </div>
                <div className="text-right">
                  <span className="text-white font-bold">342</span>
                  <p className="text-green-500 text-sm">+3% vs last month</p>
                </div>
              </li>
              <li className="flex justify-between items-center py-2">
                <div className="flex items-center">
                  <span className="w-4 h-4 bg-green-600 rounded-full mr-2"></span> Property Damage Only
                </div>
                <div className="text-right">
                  <span className="text-white font-bold">726</span>
                  <p className="text-green-500 text-sm">+15% vs last month</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-3">Weather Impact Analysis</h2>
            <div className="bg-gray-700 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">☁️ Weather Correlation Chart</span>
            </div>
            <ul className="text-gray-400 text-sm mt-4">
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
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-white mb-3">Export Analytics</h2>
          <p className="text-gray-400 mb-4">Generate comprehensive reports for stakeholders</p>
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