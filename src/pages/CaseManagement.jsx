import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const CaseManagement = () => {
  return (
    <div className="flex h-screen bg-[#F9FAFB] text-black">
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-2">Case Management</h1>
        <p className="text-gray-500 mb-6">Comprehensive case tracking and management system for complex accident investigations</p>

        {/* Active Cases and Case Statistics */}
        <div className="grid grid-cols-3 gap-4 mb-6 items-start">
          <div className="col-span-2">
            {/* Active Cases Container */}
            <div className="bg-white p-4 rounded-lg shadow-md border-2 border-gray-300">
              <h2 className="text-xl font-semibold mb-4 text-[#1E3A8A]">Active Cases</h2>
              {/* Case Card 1 */}
              <div className="bg-white p-5 rounded-lg shadow-sm mb-4 border border-gray-300">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold text-[#1E3A8A]">Case #FDB-2025-001</h3>
                  <span className="bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">High Priority</span>
                </div>
                <p className="text-gray-700 mb-3">Multi-vehicle collision - NH-19</p>
                <div className="grid grid-cols-4 gap-4 text-sm mb-3">
                  <div>
                    <span className="text-gray-500">Status:</span>
                    <div className="text-black font-medium">In Progress</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Assigned:</span>
                    <div className="text-black font-medium">Inspector Kumar</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Vehicles:</span>
                    <div className="text-black font-medium">4</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Fatalities:</span>
                    <div className="text-black font-medium">2</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400 text-sm">Created: May 15, 2025</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">View Details</button>
                </div>
              </div>

              {/* Case Card 2 */}
              <div className="bg-white p-5 rounded-lg shadow-sm mb-4 border border-gray-300">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold text-[#1E3A8A]">Case #FDB-2025-002</h3>
                  <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">Medium Priority</span>
                </div>
                <p className="text-gray-700 mb-3">Truck-pedestrian incident - Sector 15</p>
                <div className="grid grid-cols-4 gap-4 text-sm mb-3">
                  <div>
                    <span className="text-gray-500">Status:</span>
                    <div className="text-black font-medium">Pending Review</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Assigned:</span>
                    <div className="text-black font-medium">SI Sharma</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Vehicles:</span>
                    <div className="text-black font-medium">1</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Injuries:</span>
                    <div className="text-black font-medium">1</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400 text-sm">Created: May 14, 2025</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">View Details</button>
                </div>
              </div>

              {/* Case Card 3 */}
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-300">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold text-[#1E3A8A]">Case #FDB-2025-003</h3>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">Resolved</span>
                </div>
                <p className="text-gray-700 mb-3">Bus accident - Old Faridabad</p>
                <div className="grid grid-cols-4 gap-4 text-sm mb-3">
                  <div>
                    <span className="text-gray-500">Status:</span>
                    <div className="text-black font-medium">Closed</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Assigned:</span>
                    <div className="text-black font-medium">Inspector Gupta</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Vehicles:</span>
                    <div className="text-black font-medium">2</div>
                  </div>
                  <div>
                    <span className="text-gray-500">FIR:</span>
                    <div className="text-black font-medium">Filed</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400 text-sm">Closed: May 13, 2025</p>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">View Report</button>
                </div>
              </div>
            </div>
          </div>

          {/* Case Statistics and Quick Actions */}
          <div className="bg-white p-0 rounded-lg shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-lg transition min-h-[420px] mt-0">
            <div className="flex items-center gap-2 px-4 pt-3 pb-3 rounded-t-lg bg-indigo-50 border-l-4 border-indigo-400">
              <span className="text-2xl text-indigo-600">📊</span>
              <h2 className="text-lg font-semibold text-[#1E3A8A]">Case Analytics</h2>
            </div>
            <div className="border-b border-gray-100"></div>
            <div className="flex-1 flex flex-col justify-center px-6 pb-6 pt-2">
              <div className="grid grid-cols-3 gap-4 mb-2">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-500">Total Cases</span>
                  <span className="text-2xl font-bold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">120</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-500">Open</span>
                  <span className="text-2xl font-bold text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full">18</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-500">Closed</span>
                  <span className="text-2xl font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">102</span>
                </div>
              </div>
              {/* Mini Bar Chart */}
              <div className="flex items-end gap-2 h-12 mb-2">
                <div className="flex flex-col items-center w-1/3">
                  <div className="w-6 h-8 bg-indigo-400 rounded-t"></div>
                  <span className="text-xs text-gray-500 mt-1">Total</span>
                </div>
                <div className="flex flex-col items-center w-1/3">
                  <div className="w-6 h-4 bg-yellow-400 rounded-t"></div>
                  <span className="text-xs text-gray-500 mt-1">Open</span>
                </div>
                <div className="flex flex-col items-center w-1/3">
                  <div className="w-6 h-7 bg-green-400 rounded-t"></div>
                  <span className="text-xs text-gray-500 mt-1">Closed</span>
                </div>
              </div>
              {/* Pie Chart Visualization */}
              <div className="w-full h-36 mb-2 flex items-center justify-center">
                <ResponsiveContainer width="80%" height="100%">
                  <PieChart>
                    <Pie
                      data={[{ name: 'Open', value: 18 }, { name: 'Closed', value: 102 }]}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={48}
                      label
                    >
                      <Cell key="open" fill="#facc15" />
                      <Cell key="closed" fill="#22c55e" />
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <button className="w-full bg-indigo-50 text-indigo-700 font-semibold py-2 rounded-md hover:bg-indigo-100 transition mt-2">Download Report</button>
            </div>
          </div>
        </div>
     
        {/* Other Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-0 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition group">
            <div className="flex items-center gap-2 px-6 py-4 rounded-t-lg bg-blue-50 border-l-4 border-blue-400">
              <span className="text-2xl text-blue-600">🔍</span>
              <h2 className="text-lg font-semibold text-[#1E3A8A]">Investigation Tools</h2>
            </div>
            <div className="px-6 pb-6 pt-2">
              <p className="text-gray-700 text-sm mb-4">Advanced tools for case investigation and evidence management</p>
              <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
                <li>Evidence tracking</li>
                <li>Witness management</li>
                <li>Timeline reconstruction</li>
                <li>Photo analysis</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-0 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition group">
            <div className="flex items-center gap-2 px-6 py-4 rounded-t-lg bg-green-50 border-l-4 border-green-400">
              <span className="text-2xl text-green-600">📄</span>
              <h2 className="text-lg font-semibold text-[#1E3A8A]">FIR Management</h2>
            </div>
            <div className="px-6 pb-6 pt-2">
              <p className="text-gray-700 text-sm mb-4">Streamlined FIR filing and tracking system</p>
              <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
                <li>Digital FIR filing</li>
                <li>Status tracking</li>
                <li>Document upload</li>
                <li>Legal compliance</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-0 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition group">
            <div className="flex items-center gap-2 px-6 py-4 rounded-t-lg bg-purple-50 border-l-4 border-purple-400">
              <span className="text-2xl text-purple-600">🗂️</span>
              <h2 className="text-lg font-semibold text-[#1E3A8A]">Case Assignment</h2>
            </div>
            <div className="px-6 pb-6 pt-2">
              <p className="text-gray-700 text-sm mb-4">Intelligent case assignment and workload management</p>
              <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
                <li>Auto-assignment rules</li>
                <li>Workload balancing</li>
                <li>Skill-based routing</li>
                <li>Priority handling</li>
              </ul>
            </div>
          </div>
        </div>

           {/* Case Management Workflow */}
           <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-6 mt-7">
          <h2 className="text-xl font-semibold text-[#1E3A8A] mb-4 text-center">Case Management Workflow</h2>
          <div className="flex justify-around items-center text-center text-black">
            <div className="flex-1">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2 text-blue-700 border-2 border-blue-200">1</div>
              <h3 className="font-semibold">Case Creation</h3>
              <p className="text-sm text-gray-500">Complex cases flagged by reviewers</p>
            </div>
            <div className="mx-2 px-2 py-1 rounded bg-gray-100 border border-gray-200 text-gray-400 font-bold">&gt;</div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2 text-green-700 border-2 border-green-200">2</div>
              <h3 className="font-semibold">Assignment</h3>
              <p className="text-sm text-gray-500">Cases assigned to investigators</p>
            </div>
            <div className="mx-2 px-2 py-1 rounded bg-gray-100 border border-gray-200 text-gray-400 font-bold">&gt;</div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2 text-purple-700 border-2 border-purple-200">3</div>
              <h3 className="font-semibold">Investigation</h3>
              <p className="text-sm text-gray-500">Evidence collection and analysis</p>
            </div>
          </div>
          <div className="flex justify-around items-center text-center text-black mt-8">
            <div className="flex-1">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2 text-yellow-700 border-2 border-yellow-200">4</div>
              <h3 className="font-semibold">FIR Filing</h3>
              <p className="text-sm text-gray-500">Legal documentation and filing</p>
            </div>
            <div className="mx-2 px-2 py-1 rounded bg-gray-100 border border-gray-200 text-gray-400 font-bold"></div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2 text-red-700 border-2 border-red-200">5</div>
              <h3 className="font-semibold">Case Closure</h3>
              <p className="text-sm text-gray-500">Resolution and audit review</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseManagement;