import React from 'react';

const CaseManagement = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-2">Case Management</h1>
        <p className="text-gray-400 mb-6">Comprehensive case tracking and management system for complex accident investigations</p>

        {/* Active Cases and Case Statistics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2">
            <h2 className="text-xl font-semibold mb-3">Active Cases</h2>
            {/* Case Card 1 */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-white">Case #FDB-2025-001</h3>
                <span className="bg-red-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded">High Priority</span>
              </div>
              <p className="text-gray-400">Multi-vehicle collision - NH-19</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 mt-2">
                <p>Status: <span className="text-white">In Progress</span></p>
                <p>Assigned: <span className="text-white">Inspector Kumar</span></p>
                <p>Vehicles: <span className="text-white">4</span></p>
                <p>Fatalities: <span className="text-white">2</span></p>
              </div>
              <p className="text-gray-500 text-xs mt-2">Created: May 15, 2025</p>
              <div className="text-right mt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">View Details</button>
              </div>
            </div>

            {/* Case Card 2 */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-white">Case #FDB-2025-002</h3>
                <span className="bg-yellow-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded">Medium Priority</span>
              </div>
              <p className="text-gray-400">Truck-pedestrian incident - Sector 15</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 mt-2">
                <p>Status: <span className="text-white">Pending Review</span></p>
                <p>Assigned: <span className="text-white">SI Sharma</span></p>
                <p>Vehicles: <span className="text-white">1</span></p>
                <p>Injuries: <span className="text-white">1</span></p>
              </div>
              <p className="text-gray-500 text-xs mt-2">Created: May 14, 2025</p>
              <div className="text-right mt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">View Details</button>
              </div>
            </div>

            {/* Case Card 3 */}
            <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-white">Case #FDB-2025-003</h3>
                <span className="bg-green-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded">Resolved</span>
              </div>
              <p className="text-gray-400">Bus accident - Old Faridabad</p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 mt-2">
                <p>Status: <span className="text-white">Closed</span></p>
                <p>Assigned: <span className="text-white">Inspector Gupta</span></p>
                <p>Vehicles: <span className="text-white">2</span></p>
                <p>FIR: <span className="text-white">Filed</span></p>
              </div>
              <p className="text-gray-500 text-xs mt-2">Closed: May 13, 2025</p>
              <div className="text-right mt-4">
                <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">View Report</button>
              </div>
            </div>
          </div>

          {/* Case Statistics and Quick Actions */}
          <div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
              <h2 className="text-xl font-semibold mb-3 text-white">Case Statistics</h2>
              <ul className="text-gray-400">
                <li className="flex justify-between items-center py-1">
                  <span>Total Active</span>
                  <span className="text-white font-bold">24</span>
                </li>
                <li className="flex justify-between items-center py-1">
                  <span>High Priority</span>
                  <span className="text-red-500 font-bold">8</span>
                </li>
                <li className="flex justify-between items-center py-1">
                  <span>Resolved Today</span>
                  <span className="text-green-500 font-bold">3</span>
                </li>
                <li className="flex justify-between items-center py-1">
                  <span>Pending Review</span>
                  <span className="text-yellow-500 font-bold">12</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-white">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Assign New Case</button>
                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Generate Report</button>
                <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">View Analytics</button>
              </div>
            </div>
          </div>
        </div>

        {/* Case Management Workflow */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-white mb-4 text-center">Case Management Workflow</h2>
          <div className="flex justify-around items-center text-center text-white">
            <div className="flex-1">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">1</div>
              <h3 className="font-semibold">Case Creation</h3>
              <p className="text-sm text-gray-400">Complex cases flagged by reviewers</p>
            </div>
            <div className="text-gray-500">></div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">2</div>
              <h3 className="font-semibold">Assignment</h3>
              <p className="text-sm text-gray-400">Cases assigned to investigators</p>
            </div>
            <div className="text-gray-500">></div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">3</div>
              <h3 className="font-semibold">Investigation</h3>
              <p className="text-sm text-gray-400">Evidence collection and analysis</p>
            </div>
          </div>
          <div className="flex justify-around items-center text-center text-white mt-8">
            <div className="flex-1">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">4</div>
              <h3 className="font-semibold">FIR Filing</h3>
              <p className="text-sm text-gray-400">Legal documentation and filing</p>
            </div>
            <div className="text-gray-500"></div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2">5</div>
              <h3 className="font-semibold">Case Closure</h3>
              <p className="text-sm text-gray-400">Resolution and audit review</p>
            </div>
          </div>
        </div>

        {/* Other Tools */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-3">Investigation Tools</h2>
            <p className="text-gray-400 text-sm mb-4">Advanced tools for case investigation and evidence management</p>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
              <li>Evidence tracking</li>
              <li>Witness management</li>
              <li>Timeline reconstruction</li>
              <li>Photo analysis</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-3">FIR Management</h2>
            <p className="text-gray-400 text-sm mb-4">Streamlined FIR filing and tracking system</p>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
              <li>Digital FIR filing</li>
              <li>Status tracking</li>
              <li>Document upload</li>
              <li>Legal compliance</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white mb-3">Case Assignment</h2>
            <p className="text-gray-400 text-sm mb-4">Intelligent case assignment and workload management</p>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
              <li>Auto-assignment rules</li>
              <li>Workload balancing</li>
              <li>Skill-based routing</li>
              <li>Priority handling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseManagement;