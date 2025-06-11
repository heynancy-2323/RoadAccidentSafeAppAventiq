import React from 'react';

const Audit = () => {
  return (
    <div className="flex h-screen bg-[#F9FAFB] text-black">
      
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Audit Header */}
        <h1 className="text-2xl font-bold mb-2">Audit</h1>
        <p className="text-gray-500 mb-6">Comprehensive audit and compliance monitoring for system integrity and data accuracy</p>

        {/* Audit Process Workflow */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-6">
          <h2 className="text-xl font-semibold text-[#1E3A8A] mb-4 text-center">Audit Process Workflow</h2>
          <div className="flex justify-around items-center text-center text-black">
            <div className="flex-1">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2 text-yellow-700">1</div>
              <h3 className="font-semibold">Planning</h3>
              <p className="text-sm text-gray-500">Define audit scope and objectives</p>
            </div>
            <div className="text-gray-300">&gt;</div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2 text-green-700">2</div>
              <h3 className="font-semibold">Execution</h3>
              <p className="text-sm text-gray-500">Conduct audit procedures</p>
            </div>
            <div className="text-gray-300">&gt;</div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2 text-purple-700">3</div>
              <h3 className="font-semibold">Reporting</h3>
              <p className="text-sm text-gray-500">Document findings and recommendations</p>
            </div>
          </div>
          <div className="flex justify-around items-center text-center text-black mt-8">
            <div className="flex-1">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2 text-yellow-700">4</div>
              <h3 className="font-semibold">Follow-up</h3>
              <p className="text-sm text-gray-500">Monitor corrective actions</p>
            </div>
            <div className="text-gray-300"></div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2 text-red-700">5</div>
              <h3 className="font-semibold">Closure</h3>
              <p className="text-sm text-gray-500">Complete audit cycle</p>
            </div>
          </div>
        </div>

        {/* Audit Tasks and Audit Statistics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-black">Audit Tasks</h2>
              <div className="flex space-x-2">
                <select className="p-2 bg-gray-100 text-black rounded-md border border-gray-200 focus:outline-none">
                  <option>ALL TASKS</option>
                </select>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">New Audit</button>
              </div>
            </div>
            {/* Case Validation Audit */}
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-bold text-black mb-2">Case Validation Audit</h3>
              <p className="text-gray-500 mb-2">Review 10% of reviewer-closed cases</p>
              <div className="grid grid-cols-4 gap-2 text-sm text-gray-500 mb-2">
                <div>
                  <p>Cases:</p>
                  <p className="text-black">24/50</p>
                </div>
                <div>
                  <p>Progress:</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '48%' }}></div>
                  </div>
                  <p className="text-black">48%</p>
                </div>
                <div>
                  <p>Issues Found:</p>
                  <p className="text-black">3</p>
                </div>
                <div>
                  <p>Due Date:</p>
                  <p className="text-black">May 20, 2025</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">Assigned to: Auditor Singh</p>
              <div className="text-right mt-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Continue</button>
              </div>
            </div>
            {/* Log Pattern Analysis */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-bold text-black mb-2">Log Pattern Analysis</h3>
              <p className="text-gray-500 mb-2">Review system logs for anomalies</p>
              <div className="grid grid-cols-3 gap-2 text-sm text-gray-500 mb-2">
                <div>
                  <p>Logs:</p>
                  <p className="text-black">1,247</p>
                </div>
                <div>
                  <p>Anomalies:</p>
                  <p className="text-black">12</p>
                </div>
                <div>
                  <p>Severity:</p>
                  <p className="text-red-500">High</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 mb-2">
                <div>
                  <p>Status:</p>
                  <p className="text-yellow-500">Pending</p>
                </div>
                <div>
                  <p>Created:</p>
                  <p className="text-black">May 16, 2025</p>
                </div>
              </div>
              <div className="text-right mt-2">
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Start Audit</button>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-black mb-3">Audit Statistics</h2>
            <ul className="text-gray-500">
              <li className="flex justify-between items-center py-1">
                <span>Active Audits</span>
                <span className="text-black font-bold">8</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span>In Progress</span>
                <span className="text-yellow-500 font-bold">156</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span>Completed</span>
                <span className="text-green-500 font-bold">23</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span>Issues Found</span>
                <span className="text-red-500 font-bold">97.8%</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span>Compliance Rate</span>
                <span className="text-green-500 font-bold">97.8%</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Recent Audit Findings */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-black">Recent Audit Findings</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">View All Findings</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                <h3 className="text-lg font-semibold text-black">High Priority</h3>
              </div>
              <h4 className="text-md font-semibold text-black mb-1">Data Validation Gap</h4>
              <p className="text-gray-500 text-sm mb-2">Missing GPS coordinates in 12% of field reports</p>
              <p className="text-gray-500 text-sm">Found: May 15, 2025</p>
              <div className="text-right mt-2">
                <button className="bg-yellow-600 text-white px-4 py-1 rounded-md hover:bg-yellow-700">In Progress</button>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                <h3 className="text-lg font-semibold text-black">Medium Priority</h3>
              </div>
              <h4 className="text-md font-semibold text-black mb-1">Process Delay</h4>
              <p className="text-gray-500 text-sm mb-2">Average case processing time increased by 15%</p>
              <p className="text-gray-500 text-sm">Found: May 14, 2025</p>
              <div className="text-right mt-2">
                <button className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">Under Review</button>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="w-4 h-4 bg-green-600 rounded-full mr-2"></span>
                <h3 className="text-lg font-semibold text-black">Resolved</h3>
              </div>
              <h4 className="text-md font-semibold text-black mb-1">User Access Control</h4>
              <p className="text-gray-500 text-sm mb-2">Improved role-based permissions implementation</p>
              <p className="text-gray-500 text-sm">Resolved: May 13, 2025</p>
              <div className="text-right mt-2">
                <button className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700">Closed</button>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Report, Quick Actions, Compliance Alerts */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-black mb-3">Performance Report</h2>
            <p className="text-gray-500 mb-4">Generate monthly performance metrics</p>
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-500 mb-4">
              <div>
                <p>Period:</p>
                <p className="text-black">April 2025</p>
              </div>
              <div>
                <p>Error Rate:</p>
                <p className="text-black">2.1%</p>
              </div>
              <div>
                <p>Compliance Rate:</p>
                <p className="text-black">98.5%</p>
              </div>
            </div>
            <p className="text-gray-500 mb-4">Report generated successfully</p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
              <div>
                <p>Completed:</p>
                <p className="text-black">May 15, 2025</p>
              </div>
              <div className="text-right">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">View Report</button>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-black mb-3">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Generate Report</button>
              <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">Configure Alerts</button>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Export Logs</button>
            </div>
          </div>
        </div>

        {/* Compliance Alerts */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-black mb-3">Compliance Alerts</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="w-4 h-4 bg-red-600 rounded-full mr-2"></span>
                <h3 className="text-lg font-semibold text-black">Suspicious Activity</h3>
              </div>
              <p className="text-gray-500 text-sm">Multiple reports from same IP</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                <h3 className="text-lg font-semibold text-black">Data Inconsistency</h3>
              </div>
              <p className="text-gray-500 text-sm">Data mismatch</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="w-4 h-4 bg-orange-500 rounded-full mr-2"></span>
                <h3 className="text-lg font-semibold text-black">Delayed Processing</h3>
              </div>
              <p className="text-gray-500 text-sm">Cases pending &gt; 48 hours</p>
            </div>
          </div>
        </div>

        {/* Log Review, Case Validation, Performance Reports, Compliance Monitoring */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white">📜</span>
              </div>
              <h2 className="text-xl font-semibold text-black">Log Review</h2>
            </div>
            <p className="text-gray-500 text-sm mb-4">Comprehensive system log analysis and monitoring</p>
            <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
              <li>System activity logs</li>
              <li>User action tracking</li>
              <li>Error pattern detection</li>
              <li>Security monitoring</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white">✔️</span>
              </div>
              <h2 className="text-xl font-semibold text-black">Case Validation</h2>
            </div>
            <p className="text-gray-500 text-sm mb-4">Quality assurance for case processing and decisions</p>
            <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
              <li>Random case sampling</li>
              <li>Decision verification</li>
              <li>Process compliance</li>
              <li>Quality metrics</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white">📊</span>
              </div>
              <h2 className="text-xl font-semibold text-black">Performance Reports</h2>
            </div>
            <p className="text-gray-500 text-sm mb-4">Detailed performance metrics and analytics</p>
            <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
              <li>Error rate analysis</li>
              <li>Processing times</li>
              <li>User performance</li>
              <li>Trend analysis</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white">⚠️</span>
              </div>
              <h2 className="text-xl font-semibold text-black">Compliance Monitoring</h2>
            </div>
            <p className="text-gray-500 text-sm mb-4">Ensure adherence to legal and policy requirements</p>
            <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
              <li>Legal compliance</li>
              <li>Policy adherence</li>
              <li>Data protection</li>
              <li>Audit trails</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audit;