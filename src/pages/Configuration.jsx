import React, { useState } from 'react';
import { FaDownload, FaUpload, FaUndo } from 'react-icons/fa';

const Configuration = () => {
  const [activeCategory, setActiveCategory] = useState('General Settings');

  const renderContent = () => {
    switch (activeCategory) {
      case 'General Settings':
        return (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#1E3A8A] mb-4">General Settings</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-6 transition">Save Changes</button>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">System Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">System Name</label>
                    <input type="text" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="RADMS" readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Version</label>
                    <input type="text" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="2.0" readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Department</label>
                    <input type="text" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="Faridabad Police Department" readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
                    <input type="text" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="Faridabad" readOnly />
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">Time Zone & Language</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Time Zone</label>
                    <select className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700">
                      <option>Asia/Kolkata (IST)</option>
                      <option>UTC</option>
                      <option>Asia/Dubai</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Default Language</label>
                    <select className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700">
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Punjabi</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">Data Retention</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Report Retention (months)</label>
                    <input type="number" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="36" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Log Retention (months)</label>
                    <input type="number" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="12" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Notifications':
        return (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#1E3A8A] mb-4">Notification Settings</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-6 transition">Save Changes</button>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">SMS Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="enableSms" className="h-4 w-4 text-blue-600 rounded border-gray-300" checked />
                    <label htmlFor="enableSms" className="text-gray-700 font-medium">Enable SMS Notifications</label>
                  </div>
                  <p className="text-gray-500 text-sm">Send SMS alerts for critical events</p>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">SMS Gateway</label>
                      <select className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700">
                        <option>Twilio</option>
                        <option>AWS SNS</option>
                        <option>Local Gateway</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Sender ID</label>
                      <input type="text" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="RADMS_ALERT" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">Email Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="enableEmail" className="h-4 w-4 text-blue-600 rounded border-gray-300" checked />
                    <label htmlFor="enableEmail" className="text-gray-700 font-medium">Enable Email Notifications</label>
                  </div>
                  <p className="text-gray-500 text-sm">Send email alerts and reports</p>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">SMTP Server</label>
                      <input type="text" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="smtp.radms.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Port</label>
                      <input type="number" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="587" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">Notification Rules</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700 font-medium">New public report submitted</label>
                    <div className="flex gap-2">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" checked />
                      <span className="text-gray-500 text-sm">SMS</span>
                      <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" checked />
                      <span className="text-gray-500 text-sm">Email</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700 font-medium">Case requires urgent attention</label>
                    <div className="flex gap-2">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" checked />
                      <span className="text-gray-500 text-sm">SMS</span>
                      <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" checked />
                      <span className="text-gray-500 text-sm">In-App</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700 font-medium">System maintenance scheduled</label>
                    <div className="flex gap-2">
                      <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" checked />
                      <span className="text-gray-500 text-sm">Email</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Case Rules':
        return (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#1E3A8A] mb-4">Case Classification Rules</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-6 transition">Save Changes</button>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">Automatic Classification</h3>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="enableAutoClass" className="h-4 w-4 text-blue-600 rounded border-gray-300" checked />
                  <label htmlFor="enableAutoClass" className="text-gray-700 font-medium">Enable Auto Classification</label>
                </div>
                <p className="text-gray-500 text-sm mt-1">Automatically classify cases based on criteria</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">Small Profile Case Criteria</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Max Vehicles</label>
                    <input type="number" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Max Fatalities</label>
                    <input type="number" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="0" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Max Injuries</label>
                    <input type="number" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="1" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Auto-close Time (hours)</label>
                    <input type="number" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="48" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-2">≤2 vehicles, no fatalities, minor to moderate damage</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">Complex Case Criteria</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="fatalities" className="h-4 w-4 text-blue-600 rounded border-gray-300" checked />
                    <label htmlFor="fatalities" className="text-gray-700 font-medium">Any fatalities involved</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="moreVehicles" className="h-4 w-4 text-blue-600 rounded border-gray-300" checked />
                    <label htmlFor="moreVehicles" className="text-gray-700 font-medium">More than 2 vehicles involved</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="commercialVehicle" className="h-4 w-4 text-blue-600 rounded border-gray-300" />
                    <label htmlFor="commercialVehicle" className="text-gray-700 font-medium">Commercial vehicle involved</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="infraDamage" className="h-4 w-4 text-blue-600 rounded border-gray-300" />
                    <label htmlFor="infraDamage" className="text-gray-700 font-medium">Infrastructure damage reported</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Security':
        return (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#1E3A8A] mb-4">Security Settings</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-6 transition">Save Changes</button>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">Authentication</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="require2FA" className="h-4 w-4 text-blue-600 rounded border-gray-300" checked />
                    <label htmlFor="require2FA" className="text-gray-700 font-medium">Require Two-Factor Authentication</label>
                  </div>
                  <p className="text-gray-500 text-sm">Mandatory 2FA for all users</p>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Session Timeout (minutes)</label>
                      <input type="number" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="30" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Max Login Attempts</label>
                      <input type="number" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">Password Policy</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Minimum Length</label>
                    <input type="number" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="8" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Password Expiry (days)</label>
                    <input type="number" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="90" />
                  </div>
                  <div className="flex items-center space-x-2 col-span-2">
                    <input type="checkbox" id="requireUppercase" className="h-4 w-4 text-blue-600 rounded border-gray-300" checked />
                    <label htmlFor="requireUppercase" className="text-gray-700 font-medium">Require uppercase letters</label>
                  </div>
                  <div className="flex items-center space-x-2 col-span-2">
                    <input type="checkbox" id="requireNumbers" className="h-4 w-4 text-blue-600 rounded border-gray-300" checked />
                    <label htmlFor="requireNumbers" className="text-gray-700 font-medium">Require numbers</label>
                  </div>
                  <div className="flex items-center space-x-2 col-span-2">
                    <input type="checkbox" id="requireSpecial" className="h-4 w-4 text-blue-600 rounded border-gray-300" checked />
                    <label htmlFor="requireSpecial" className="text-gray-700 font-medium">Require special characters</label>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">Data Encryption</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700 font-medium">Database encryption</label>
                    <span className="bg-green-600 text-white text-xs px-2.5 py-0.5 rounded">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700 font-medium">File encryption</label>
                    <span className="bg-green-600 text-white text-xs px-2.5 py-0.5 rounded">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700 font-medium">Communication encryption</label>
                    <span className="bg-green-600 text-white text-xs px-2.5 py-0.5 rounded">TLS 1.3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Integrations':
        return (
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#1E3A8A] mb-4">System Integrations</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-6 transition">Save Changes</button>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">External APIs</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700 font-medium">Google Maps API</label>
                    <div className="flex items-center gap-2">
                      <span className="bg-green-600 text-white text-xs px-2.5 py-0.5 rounded">Connected</span>
                      <button className="bg-gray-700 text-white px-2 py-1 rounded-md text-sm hover:bg-gray-800 transition">Configure</button>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">For location services and mapping</p>
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700 font-medium">Weather API</label>
                    <div className="flex items-center gap-2">
                      <span className="bg-yellow-600 text-white text-xs px-2.5 py-0.5 rounded">Pending</span>
                      <button className="bg-gray-700 text-white px-2 py-1 rounded-md text-sm hover:bg-gray-800 transition">Configure</button>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">For weather data correlation</p>
                  <div className="flex items-center justify-between">
                    <label className="text-gray-700 font-medium">Insurance Database</label>
                    <div className="flex items-center gap-2">
                      <span className="bg-red-600 text-white text-xs px-2.5 py-0.5 rounded">Disconnected</span>
                      <button className="bg-gray-700 text-white px-2 py-1 rounded-md text-sm hover:bg-gray-800 transition">Configure</button>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">For vehicle insurance verification</p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">Backup Configuration</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Backup Frequency</label>
                    <select className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700">
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Backup Time</label>
                    <input type="time" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="02:00" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Backup Location</label>
                    <select className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700">
                      <option>Local Storage</option>
                      <option>Cloud Storage</option>
                      <option>Both</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Retention Period (days)</label>
                    <input type="number" className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700" value="90" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-[#F9FAFB] text-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Configuration</h1>
      <p className="text-gray-500 mb-6">System configuration and settings management for administrators</p>

      <div className="flex gap-6">
        {/* Left Pane - Settings Categories */}
        <div className="w-1/4 bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-md p-4 border border-gray-100">
          <h2 className="text-xl font-semibold mb-3 text-[#1E3A8A]">Settings Categories</h2>
          <nav className="space-y-2 text-sm">
            <button
              className={`w-full text-left p-2 rounded-md font-medium transition ${activeCategory === 'General Settings' ? 'bg-blue-100 text-blue-700 shadow' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveCategory('General Settings')}
            >
              General Settings
            </button>
            <button
              className={`w-full text-left p-2 rounded-md font-medium transition ${activeCategory === 'Notifications' ? 'bg-blue-100 text-blue-700 shadow' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveCategory('Notifications')}
            >
              Notifications
            </button>
            <button
              className={`w-full text-left p-2 rounded-md font-medium transition ${activeCategory === 'Case Rules' ? 'bg-blue-100 text-blue-700 shadow' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveCategory('Case Rules')}
            >
              Case Rules
            </button>
            <button
              className={`w-full text-left p-2 rounded-md font-medium transition ${activeCategory === 'Security' ? 'bg-blue-100 text-blue-700 shadow' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveCategory('Security')}
            >
              Security
            </button>
            <button
              className={`w-full text-left p-2 rounded-md font-medium transition ${activeCategory === 'Integrations' ? 'bg-blue-100 text-blue-700 shadow' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveCategory('Integrations')}
            >
              Integrations
            </button>
          </nav>
        </div>

        {/* Right Pane - Settings Content */}
        <div className="flex-1 bg-white rounded-xl shadow-md p-8 border border-gray-100">
          {renderContent()}
        </div>
      </div>

      {/* Configuration Management Card - Now positioned outside and below the main content */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 shadow mt-6">
        <h2 className="text-xl font-bold text-[#1E3A8A] mb-2 text-center">Configuration Management</h2>
        <p className="text-gray-600 mb-4 text-center">Backup, restore, and manage system configurations</p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-semibold transition max-w-xs">
            <FaDownload /> Export Config
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 font-semibold transition max-w-xs">
            <FaUpload /> Import Config
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 font-semibold transition max-w-xs">
            <FaUndo /> Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default Configuration;